module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['prettier', 'jest', '@typescript-eslint'],
  extends: [
    '@vue/typescript'
  ],
  // Add your custom rules here
  rules: {
    'generator-star-spacing': 'off', // allow async-await
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': 'off',
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 'off',
    semi: [2, 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'ignore'
      }
    ],
    'padded-blocks': 'off',
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'vue/component-name-in-template-casing': 'off',
    'vue/html-indent': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-bind-style': 'off',
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: ['nuxt', 'nuxt-link']
      }
    ],
    'no-undef': 0,
    'no-unused-vars': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  }
};
