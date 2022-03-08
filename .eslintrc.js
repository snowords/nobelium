module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'next', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-key': 'off',
    '@next/next/no-document-import-in-page': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'no-unused-vars': 'off'
  },
  globals: {
    React: true
  }
}
