module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
  },
  extends: [
    "plugin:vue/essential",
    "standard"
  ],
  // required to lint *.vue files
  plugins: [
    "vue"
  ],
  // add your custom rules here
  rules: {
    "indent": ["off", 2],
    "space-before-function-paren": "off",
    "no-new": "off",
    "space-before-blocks": "off",
    "keyword-spacing": "off",
    "generator-star-spacing": "off",
    "eol-last": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
}
