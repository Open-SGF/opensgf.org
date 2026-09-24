import { fixupConfigRules } from '@eslint/compat';
import eslint from '@eslint/js';
import nextConfig from 'eslint-config-next';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import { parser as tsParser, plugin as tsPlugin } from 'typescript-eslint';

const config = [
    eslint.configs.recommended,
    ...nextConfig,
    {
        // Next.js's bundled Babel parser lacks ESLint 10's scope-manager API.
        files: ['**/*.{js,jsx,mjs,cjs}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
    },
    prettierPlugin,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            globals: {
                React: 'readonly',
                JSX: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/consistent-type-imports': 'error',
            'import/no-anonymous-default-export': [
                'error',
                {
                    allowArray: false,
                    allowArrowFunction: false,
                    allowAnonymousClass: false,
                    allowAnonymousFunction: false,
                    allowCallExpression: true,
                    allowLiteral: false,
                    allowObject: false,
                },
            ],
            'import/no-named-as-default': 'off',
            'import/no-default-export': 'off',
            'import/prefer-default-export': 'off',
            'react/hook-use-state': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'sort-imports': ['error', { ignoreCase: true }],
        },
    },
    {
        ignores: ['node_modules/', '.next/', 'dist/', 'build/'],
    },
];

// Next.js still bundles React, import, and accessibility plugins that use pre-ESLint 10 APIs.
// The version-scoped peer overrides in package.json accompany this compatibility wrapper.
export default fixupConfigRules(config);
