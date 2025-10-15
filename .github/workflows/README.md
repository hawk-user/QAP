# 🚀 Continuous Integration and Deployment Pipeline

This repository implements a modular GitHub Actions CI/CD architecture.

The pipeline ensures reliable testing, building, and deployment through reusable workflows, clear dependencies, and optional manual triggers.

---

## 🧭 Diagram Reference
![CI/CD Diagram](/.github/docs/ci.cd.pipeline.svg)

## 🧩 Workflow Overview

**Component Testing On The React-materials Library**

*Runs Jest component tests to verify that the UI components in the react-materials library work as expected.*
*Runs automatically when changes are made to the library or its tests, or can be launched manually.*

**System Testing On The Web Application**

*Runs Cypress system tests locally using a preview build of the web app.*
*This happens whenever changes are made to the web application or its tests, or can be run manually.*

**Run System Tests On The Web Application With Cypress**  
*A shared workflow that defines how system tests are run (setup, build, and Cypress execution).*
*It’s reused by both local and deployed testing workflows.*

**Build Web Application**  
*Builds the web app and prepares the production files.*
*Triggered after system tests succeed, or can be launched manually if needed.*

**Deploy WebApp to GitHub Pages**  
*Takes the built web app and publishes it to GitHub Pages.*
*This happens automatically after a successful build.*

**System Testing On The Deployed Web Application**  
*Once the site is deployed and live, this workflow waits for it to become available and then runs Cypress tests directly on the live version.*
*It can also be launched manually.*

---

## 📜 License
MIT © Salem Djekoun