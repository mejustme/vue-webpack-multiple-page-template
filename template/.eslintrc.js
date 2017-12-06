// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  globals: {
    Vue: false,
    $: false,
    StarUI: false
  },
  {{#if_eq lintConfig "standard"}}
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  {{/if_eq}}
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    {{#if_eq lintConfig "standard"}}
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // off
    'one-var': 0
  }
}
