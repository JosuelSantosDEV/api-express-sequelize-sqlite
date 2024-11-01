
module.exports = [
    {
        ignores: ["node_modules/**"],
    },
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                node: true,
            },
        },
        rules: {
            semi: ["error", "always"],
            quotes: ["error", "double"],
            indent: ["error", 4],
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
];
