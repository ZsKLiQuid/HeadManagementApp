module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    'react-native/react-native': true,
  },
  ignorePatterns: ['.next', 'dist', 'storybook-static', 'node_modules'],
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:import/typescript', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'simple-import-sort',
    'import',
    '@typescript-eslint',
    'jest',
    'prettier',
    'react-native',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'simple-import-sort/sort': 'warn',
    'sort-imports': 'off',
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'anchor-is-valid': 'off',
    'operator-linebreak': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': ['error', { props: false }],
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    radix: 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/destructuring-assignment': ['off'],
    'no-restricted-syntax': ['off'],
    curly: ['error', 'all'],
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
  },
};
