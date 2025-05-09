import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintPluginUnicorn.configs.recommended,
  {
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true, // camelCase
            pascalCase: true, // PascalCase
            kebabCase: true, // kebab-case
            snakeCase: false, // snake_case
          },
        },
      ],
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  eslintPluginPrettierRecommended,
];

export default eslintConfig;
