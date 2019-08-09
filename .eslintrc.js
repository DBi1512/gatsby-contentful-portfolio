module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["airbnb"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        quotes: [2, "double"],
        "linebreak-style": 0,
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/jsx-indent": ["error", 4],
        "react/no-unescaped-entities": [0],
    },
};
