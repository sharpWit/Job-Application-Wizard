/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,jsx,ts,tsx}': ['pnpm exec eslint --cache --fix', 'pnpm exec prettier --write'],
  '*.{css,scss}': ['stylelint --fix', 'pnpm exec prettier --write'],
  '*.{json,md,html,yml,yaml}': 'pnpm exec prettier --write',
}
