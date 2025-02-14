/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['eslint-config-prettier', 'plugin:deprecation/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    //eslint common rules
    curly: 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'no-console': 'error',
    'no-nested-ternary': 'error',
    'no-debugger': 'error',
    'max-len': ['error', { code: 180 }],
    'prefer-template': 'error',
    'no-new-wrappers': 'error',
    'object-shorthand': 'error',
    'no-return-await': 'error',
    'consistent-return': 'error',
    'no-unused-vars': 'off',
    'no-unneeded-ternary': 'error',
    'no-implicit-coercion': 'error',
    'lines-between-class-members': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'case' },
      { blankLine: 'always', prev: '*', next: 'default' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: '*', next: 'function' },
    ],
    //prettier rules
    'prettier/prettier': 'error',
    //sonarjs rules
    'sonarjs/cognitive-complexity': 'error',
    'sonarjs/no-identical-functions': 'error',
    'sonarjs/no-duplicate-string': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    //typescript-eslint rules
    // '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    //etc rules
    'etc/no-commented-out-code': 'error',
    'etc/no-assign-mutated-array': 'error',
    //filename rules
    'filename-rules/not-match': [2, { pattern: /[A-Z]/ }],
  },
  plugins: [
    'eslint-plugin-prettier',
    'sonarjs',
    '@typescript-eslint',
    'etc',
    'filename-rules',
    'deprecation',
  ],
};
