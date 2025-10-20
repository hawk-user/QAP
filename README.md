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
pnpm exec husky init
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


---

<p>
    QAP is <a href="LICENSE">MIT Licensed</a>.
</p>

<a href="https://sonarcloud.io/summary/new_code?id=hawk-user_QAP">
    <img
        alt="Scanned on SonarQube Cloud badge"
        src="https://sonarcloud.io/images/project_badges/sonarcloud-highlight.svg"/>
</a>
