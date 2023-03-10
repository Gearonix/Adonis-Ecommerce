module.exports = {
  env: {
    es6: true,
  },
  ignorePatterns: ["**/dist/**", "**/node_modules/**", "./tsconfig.json"],
  extends: ["plugin:@darraghor/nestjs-typed/recommended", "google",
    "plugin:@darraghor/nestjs-typed/no-swagger", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
    ecmaVersion: "es2019",
  },
  rules: {
    "new-cap": "off",
    "require-jsdoc": "off",
    "max-len": "off",
    "@darraghor/nestjs-typed/all-properties-have-explicit-defined": "off",
    "@darraghor/nestjs-typed/all-properties-are-whitelisted": "off",
    "@darraghor/nestjs-typed/validated-non-primitive-property-needs-type-decorator": "off",
    "semi": [
      "warn",
      "never"
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-empty-function": "off",
    "no-return-await": "error",
    "no-trailing-spaces": "off",
    "padded-blocks": "warn",
    "object-curly-spacing": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "@darraghor/nestjs-typed/injectable-should-be-provided": "warn"
  },
  plugins: ["@darraghor/nestjs-typed","@typescript-eslint"],

};
