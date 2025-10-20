module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'chore',
        'style',
        'docs',
        'test',
        'perf',
        'revert',
        'assets',
        'ci',
      ],
    ],
    'subject-case': [0], // Disable case checking for subject
  },
}
