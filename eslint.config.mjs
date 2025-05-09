import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    // disable sorting rules that conflict with simple-import-sort
    // https://github.com/lydell/eslint-plugin-simple-import-sort?tab=readme-ov-file#usage
    rules: {
      "sort-imports": "off",
      "import/order": "off",
    },
  },
];

export default eslintConfig;
