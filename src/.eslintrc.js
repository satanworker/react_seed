module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  ecmaFeatures: {
    jsx: true,
    classes: true
  },
  extends: [
    "react-app"
  ],
  plugins: [
    'react',
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // optional yield in sagas
    'require-yield': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    "object-curly-spacing": ['error', 'always'],
    "indent": ["error", 2],
    "import/prefer-default-export": 0,
    "import/no-namespace": 0,
    "no-duplicate-imports": 0,
    "import/no-duplicates": 0,
    "semi": ["error", "never"],
    "class-methods-use-this": 0,
    "react/prefer-stateless-function": 0,
    "react/display-name": 0,
    "react/prop-types": 2
  }
}