import { siteConfig } from "@/data/site";
import { NextResponse } from "next/server";

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;
  const n = typeof name === "string" ? name.trim() : "";
  const e = typeof email === "string" ? email.trim() : "";
  const m = typeof message === "string" ? message.trim() : "";

  if (!n || !e || !m) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!emailRe.test(e)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }
  if (m.length > 8000) {
    return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;

  if (key && from && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: [e],
        subject: `Portfolio inquiry from ${n}`,
        html: `<p><strong>${escapeHtml(n)}</strong> &lt;${escapeHtml(e)}&gt;</p><p>${escapeHtml(m).replaceAll("\n", "<br/>")}</p>`,
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", res.status, errText);
      return NextResponse.json(
        { ok: false, error: "Email service unavailable. Try again later." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  }

  const subject = encodeURIComponent(`Portfolio: ${n}`);
  const mailBody = encodeURIComponent(
    `From: ${n} <${e}>\n\n${m}\n\n— Sent via portfolio contact form`,
  );
  const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${mailBody}`;

  return NextResponse.json({ ok: true, mailtoUrl });
}
