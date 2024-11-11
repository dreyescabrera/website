import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginAstro from "eslint-plugin-astro";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx,astro}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: pluginReact.configs.flat.recommended.plugins,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
  },
];
