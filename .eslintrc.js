/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  root: true,
};
