import { FlatCompat } from "@eslint/eslintrc"
import pluginJs from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import reactPlugin from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import tailwindcssPlugin from "eslint-plugin-tailwindcss"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
    { files: ["**/*.{js,mjs,ts,tsx}"] },
    {
        ignores: [
            "eslint.config.mjs",
            "postcss.config.mjs",
            ".wrangler/**/*",
            ".next/**/*",
            ".vercel/**",
        ],
    },
    {
        settings: { react: { version: "detect" } },
        languageOptions: {
            ...reactPlugin.configs.flat.recommended.languageOptions,
            globals: { ...globals.serviceworker, ...globals.browser },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: { jsx: true },
            },
        },
    },
    pluginJs.configs.recommended,
    tseslint.configs.strictTypeChecked,
    {
        rules: {
            "@typescript-eslint/switch-exhaustiveness-check": [
                "error",
                { considerDefaultExhaustiveForUnions: true },
            ],
            "@typescript-eslint/consistent-indexed-object-style": ["error"],
            "no-nested-ternary": ["error"],
            "no-unneeded-ternary": ["error"],
            "@typescript-eslint/restrict-template-expressions": [
                "error",
                {
                    allowNumber: true,
                    allowBoolean: true,
                    allowAny: false,
                    allowNullish: false,
                    allowRegExp: true,
                    allowNever: false,
                    allowArray: false,
                },
            ],
            "no-console": ["error", { allow: ["warn", "error"] }],
        },
    },
    ...new FlatCompat({ baseDirectory: import.meta.dirname }).extends("next/core-web-vitals"),
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    {
        plugins: { "react-hooks": pluginReactHooks },
        rules: { ...pluginReactHooks.configs.recommended.rules },
    },
    ...tailwindcssPlugin.configs["flat/recommended"],
    {
        plugins: { tailwindcss: tailwindcssPlugin },
        rules: { "tailwindcss/classnames-order": ["off"] },
    },
    eslintConfigPrettier,
)
