module.exports = {
  extends: ["airbnb"],
  plugins: ["prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": [0]
  },
  parser: "babel-eslint"
};
