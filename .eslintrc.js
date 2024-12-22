export default {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'expo', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react-compiler', 'eslint-plugin-react-compiler', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    'react-native/no-inline-styles': 1,
    '@typescript-eslint/no-explicit-any': 2,
    'react-hooks/exhaustive-deps': 0,
    'react-compiler/react-compiler': 'error',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-equals-spacing': [2, 'always'],
    'react/jsx-newline': [2, { prevent: true, allowMultilines: false }],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
  },
};
