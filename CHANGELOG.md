# Changelog

All notable changes to Node.js Starter will be documented in this file.

The format is based on [Keep a Changelog][Keep a Changelog url], and this project adheres to [Semantic Versioning][Semantic Versioning url].

## [2.0.0] (15 October 2025)

### Added

1. Bug report GitHub issue template.
1. Feature request GitHub issue template.
1. Support for `tsx` as a dependency and runtime for the setup script.

### Changed

1. Modified setup script to read current values as defaults to enable reusability.
1. Changed setup script execution from `ts-node` to `tsx`.
1. Excluded setup script from TypeScript compilation.
1. Minor text updates: renamed "the Node.js project Starter template" to "Node.js Starter" in changelog; updated console messages in setup script to "Project setup".

### Removed

1. `ts-node` devDependency (replaced by `tsx`).

### Breaking Changes

1. The `npm run setup` command now requires `tsx` instead of `ts-node`. Update your dependencies via `npm install` after pulling changes.

## [1.0.1] (11 October 2025)

### Changed

1. Simplify start script env ref.

## [1.0.0] (19 May 2025)

### Added

1. .env file to store environment variables.
1. .gitignore file to ignore files and directories that Git should not track
1. .nvmrc file to specify the Node.js version to use.
1. app.ts file to define the application logic.
1. index.ts file to define the entry point of the application.
1. setup.ts file for project setup.
1. CHANGELOG.md file to track changes to the project.
1. jest.config.ts file to configure Jest.
1. jest.setup.ts file to configure Jest setup.
1. LICENSE file to define the project license.
1. package.json file to define project metadata and dependencies.
1. README.md file to document the project.
1. tsconfig.json file to configure TypeScript.

<!-- References -->

[Keep a Changelog url]: https://keepachangelog.com/en/1.0.0/
[Semantic Versioning url]: https://semver.org/spec/v2.0.0.html
[2.0.0]: https://github.com/SherpadNdabambi/node-starter/releases/tag/v2.0.0
[1.0.1]: https://github.com/SherpadNdabambi/node-starter/releases/tag/v1.0.1
[1.0.0]: https://github.com/SherpadNdabambi/node-starter/releases/tag/v1.0.0
