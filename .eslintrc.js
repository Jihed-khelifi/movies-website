module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        '@vue/eslint-config-typescript',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    rules: {
        // Possible Errors
        'import/order': 'off',
        'implicit-arrow-linebreak': 'off',
        'func-call-spacing': 'off',
        'no-spaced-func': 'off',
        'function-paren-newline': 'off',
        'import/prefer-default-export': 'off',
        'dot-notation': 'off',
        'no-shadow': 'off',
        'object-curly-newline': 'off',
        'max-len': ['error', { code: 200 }],
        indent: ['error', 4],
        'no-param-reassign': 'off',
        'import/no-unresolved': [
            'error',
            {
                ignore: ['@common/.+', '@intranet', '@extranet', '@auth'],
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-underscore-dangle': ['error', { allow: ['__typename'] }],

        // @typescript
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',

        // Vue
        'vue/max-attributes-per-line': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-indent': ['error', 4],
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/first-attribute-linebreak': ['error', {
            singleline: 'beside',
            multiline: 'beside',
        }],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.spec.ts',
                    '**/*.spec.tsx',
                ],
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
