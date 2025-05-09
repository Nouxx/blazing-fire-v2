import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
// import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  eslintPluginUnicorn.configs.recommended, // loads unicorn preset
  {
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true, // camelCase
            pascalCase: false, // PascalCase
            kebabCase: false, // kebab-case
            snakeCase: false, // snake_case
          },
        },
      ],
    },
  },
];

export default eslintConfig;
