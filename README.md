<div align="center">
    <h1>QAP</h1>
    <p>Test strategy, execution, and automation.</p>
    <a href="https://hawk-user.github.io/QAP/">Link to the deployed web application</a>
</div>

</br>

## Code Quality Overview

Quick overview of the health of the project's code, displaying maintainability, reliability, and other key indicators derived from static analysis.

![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=hawk-user_QAP&metric=code_smells)
![Bugs](https://sonarcloud.io/api/project_badges/measure?project=hawk-user_QAP&metric=bugs)
![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=hawk-user_QAP&metric=duplicated_lines_density)


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
