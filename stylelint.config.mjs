/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    'selector-id-pattern': null,
    'scss/dollar-variable-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
    'scss/percent-placeholder-pattern': '^[a-z][a-z0-9]*(-[a-z0-9]+)*$',
  },
}
