import eslint from '@eslint/js';
import nextConfig from 'eslint-config-next';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const config = [
    eslint.configs.recommended,
    ...nextConfig,
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
            'sort-imports': 'error',
        },
    },
    {
        ignores: ['node_modules/', '.next/', 'dist/', 'build/'],
    },
];

export default config;
