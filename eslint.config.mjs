import next from "eslint-config-next";

/** Native flat config from `eslint-config-next` v16 (no FlatCompat). */
const nextFlat = Array.isArray(next) ? next : next.default;
const eslintConfig = [...nextFlat];
export default eslintConfig;
