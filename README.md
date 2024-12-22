# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Preparation

   - node: v22.12.0

2. Install dependencies

   ```bash
   yarn install
   ```

3. Start the app

   ```bash
    yarn start
   ```

4. Naming convention

   - Folder Naming: kebab-case
   - Component Naming: PascalCase
   - Component File Naming: PascalCase
   - Javascript/Tpyescript File Naming: camelCase
   - Variables Naming: camelCase
   - Constant Naming: UPPERCASE
   - Props and State Naming: camelCase
   - Function Naming: camelCase (prefix: handle or on)
   - Hook Naming: camelCase (prefix: use)
   - HOC Naming: camelCase (prefix: with)

5. Notes:

   - Root file: /src/app/\_layout.tsx
   - Router-path (Router and Navigation purpose): /src/app/

6. Commit rules:

   - Commit mesage format: "commit_type: commit_message"
   - Commit types:
     - feat: A new feature added to the project.
     - fix: A bug fix.
     - docs: Documentation updates (e.g., README, comments, etc.).
     - style: Changes that do not affect code behavior (e.g., formatting, whitespace, semicolons).
     - refactor: Code changes that neither fix a bug nor add a feature (e.g., improving structure or readability).
     - test: Adding or modifying tests
     - chore: Maintenance tasks (e.g., dependency updates, build process changes)
     - perf: Code changes that improve performance
     - ci: Continuous integration-related changes.
     - build: Changes that affect the build system or external dependencies
     - revert: Reverting a previous commit.
     - merge: Merge commits.
