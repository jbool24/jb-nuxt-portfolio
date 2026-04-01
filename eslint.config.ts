import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  // Your entire custom config array goes here
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
      },
      parser: require.resolve('@babel/eslint-parser'),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env'],
        },
      },
    },
    plugins: {
      prettier: await import('eslint-plugin-prettier'),
      nuxt: await import('eslint-plugin-nuxt'),
    },
    rules: {
      'nuxt/no-cjs-in-config': 'off',
      'prettier/prettier': 'error',
    },
  },
])   