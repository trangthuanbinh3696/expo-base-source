module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // A new feature added to the project.
        'fix', // A bug fix.
        'docs', // Documentation updates (e.g., README, comments, etc.).
        'style', // Changes that do not affect code behavior (e.g., formatting, whitespace, semicolons).
        'refactor', // Code changes that neither fix a bug nor add a feature (e.g., improving structure or readability).
        'test', // Adding or modifying tests
        'chore', // Maintenance tasks (e.g., dependency updates, build process changes)
        'perf', // Code changes that improve performance
        'ci', // Continuous integration-related changes.
        'build', // Changes that affect the build system or external dependencies
        'revert', // Reverting a previous commit.
        'merge', // Merge commit
      ], // Allowed types
    ],
    // Scope rules (optional)
    'type-case': [2, 'always', 'lower-case'], // Scopes should be lowercase if used
    'subject-min-length': [2, 'always', 10], // Subject must be at least 10 characters long
    'subject-case': [0], // Disable subject case checking
  },
  ignores: [
    // Allow specific patterns for pull/merge request commits
    commit =>
      commit.startsWith('Merge pull request') ||
      commit.startsWith('Merged branch'),
  ],
};
