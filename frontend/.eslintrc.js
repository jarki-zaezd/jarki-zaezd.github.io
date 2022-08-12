module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  settings: { 'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } } },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    curly: ['error', 'all'],
    'consistent-return': 'off',
    'max-len': ['error', { code: 120 }],
    indent: ['error', 2, { ignoredNodes: ['JSXAttribute'], SwitchCase: 1 }],
    'func-names': ['error', 'never'],

    'function-paren-newline': 'error',
    'linebreak-style': ['error', 'unix'],
    'new-cap': 'off',
    'no-shadow': 'off',
    'no-class-assign': 'error',
    'no-bitwise': 'error',
    'no-use-before-define': ['error', { functions: false }],
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    'operator-linebreak': ['error', 'after'],
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
      },
    ],

    'import/prefer-default-export': 'off',

    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-props-no-spreading': 'off',
  },
};
