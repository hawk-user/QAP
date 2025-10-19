<div align="center">
    <h1>QAP</h1>
    <p>Test strategy, execution, and automation.</p>
    <a href="https://hawk-user.github.io/QAP/">Link to the deployed web application</a>
</div>

</br>

## Development Setup
This project uses several developper tools (like linters, Git hooks, CI helpers, etc.) to ensure consistency and code quality.</br>Follow the steps bellow to set up yout local environment.

### 1 - Prerequisites
Make sure you have the following intalled:
- **Go -** <small> required to run actionlint</small>
- **Node.js -** <small> requires version 22</small>
- **pnpm -** <small> package manager</small>

If **pnpm** is not installed yet:

```bash
    npm install -g pnpm
```

### 2 - Install dependencies
Install project dependencies using **pnpm**:

```bash
    pnpm install
```

### 3 - Enable Git hooks
This project uses <a hreh="https://typicode.github.io/husky/">Husky</a> for Git hooks.</br>After installing dependencies, you need to enable Husky manually:

```bash
    pnpm husky install
```

**Note:** This commands activates the pre-configured hooks.

### 4 - Shell script permissions
Contains several shell scripts that need excutable permissions to work correctly:

```
    .husky/                     -> Git hooks (run locally)
    .github/scripts/            -> CI helper scripts used by Github Actions
```

**Note:** These files are already marked as **executable** in the Git repository (via chmod+x), so if you clone the repository using Git on macOS, Linux, WSL, their executable flag will **normally be preserved automatically**.

However, in some environments(especially on **Window** or when downloading the project as a **.zip archive**), file permissions may not be preserved, Husky hooks or CI jobs might be fail with "permissions denied" errors.

To fix this, make sure all relevant scripts are executable:

```bash
    chmod +x .husky/* .github/scripts/*.sh
```

### 5 - Install actionlint
Actionlint is used in this projects to make the CI workflows more robust. It helps catch syntax errors or misconfiguration in Github Actions workflows before they break automated checks.

```bash
    go install github.com/rhysd/actionlint/cmd/actionlint@latest
```

## Code Quality Overview

Quick overview of the health of the project's code, displaying maintainability, reliability, and other key indicators derived from static analysis.

![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=hawk-user_QAP&metric=code_smells)
![Bugs](https://sonarcloud.io/api/project_badges/measure?project=hawk-user_QAP&metric=bugs)
![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=hawk-user_QAP&metric=duplicated_lines_density)
[![codecov](https://codecov.io/gh/hawk-user/QAP/graph/badge.svg?token=3V63X2XTS2)](https://codecov.io/gh/hawk-user/QAP)


## CI/CD Strategy

This repository implements a modular GitHub Actions CI/CD architecture.

The pipeline ensures reliable testing, building, and deployment through reusable workflows, clear dependencies, and optional manual triggers.


### Strategy mapping
![CI/CD Diagram](/docs/diagrams/CI-CD.pipeline.svg)

### How the project's automation pipeline ensures build, test, and delivery consistency.

The continuous integration process takes place in several successive, automated stages. First, tests are performed on the component library to verify that each element is functioning as expected. These tests run automatically when a change is made to the library or its tests, but they can also be run manually.

Next, more comprehensive tests are performed on the web application as a whole. These are run locally from a preliminary version of the site and verify that the entire system is working correctly. These tests are triggered automatically when changes are made to the application or its tests, but they can also be run manually.

Once all tests have been validated, a build phase prepares the production version of the site. This step can be triggered automatically after successful testing or launched manually if necessary.

Once build is complete, the site is automatically deployed to the intended publishing environment. Finally, a last series of tests is performed on the online version of the site to confirm that everything is working properly after deployment. This final check can also be launched manually.


---

<p>
    QAP is <a href="LICENSE">MIT Licensed</a>.
</p>

<a href="https://sonarcloud.io/summary/new_code?id=hawk-user_QAP">
    <img
        alt="Scanned on SonarQube Cloud badge"
        src="https://sonarcloud.io/images/project_badges/sonarcloud-highlight.svg"/>
</a>
