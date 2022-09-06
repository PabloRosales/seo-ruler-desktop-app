module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended"
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    "rules": {
        'prettier/prettier': 'error',
        "react/react-in-jsx-scope": "off",
    },
    root: true,
};
