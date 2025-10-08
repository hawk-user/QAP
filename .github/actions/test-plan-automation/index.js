const core = require('@actions/core');
const github = require('@actions/github');

function WavingGoodbye(message) {
  core.info(`👋 ${message}`);
  core.info("🤖 Exiting...");
}

async function run() {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) throw new Error("Missing GITHUB_TOKEN");

    const octokit = github.getOctokit(githubToken);
    const { context } = github;
    const { issue } = context.payload;
    const { owner, repo } = context.repo;

    if (!issue) {
      WavingGoodbye('No issue found in context.');
      return;
    }

    const { labels, user } = issue;
    const isTestPlan = labels?.some(l => l.name.toLowerCase() === 'test plan') ?? false;
    if (!isTestPlan) {
      WavingGoodbye('Issue is not a Test Plan');
      return;
    }

    const allowedUsers = ['hawk-user'];
    const author = user.login;

    const jsonMatch = issue.body.match(/```json\s*([\s\S]*?)```/);
    if (!jsonMatch) {
      await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: issue.number,
        body: "❌ Test Plan invalid: missing JSON test cases."
      });
      await octokit.rest.issues.addLabels({
        owner,
        repo,
        issue_number: issue.number,
        labels: ['needs-fix']
      });
      return;
    }

    let testCases;
    try {
      testCases = JSON.parse(jsonMatch[1]);
    } catch (e) {
      await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: issue.number,
        body: `❌ Invalid JSON: ${e.message}`
      });
      await octokit.rest.issues.addLabels({
        owner,
        repo,
        issue_number: issue.number,
        labels: ['needs-fix']
      });
      return;
    }

    const errors = [];
    const ids = new Set();
    testCases.forEach(tc => {
      ['id', 'scenario', 'steps', 'expected_result'].forEach(key => {
        if (!tc.hasOwnProperty(key)) errors.push(`Missing key '${key}' in test case: ${JSON.stringify(tc)}`);
      });
      if (ids.has(tc.id)) errors.push(`Duplicate test case id: ${tc.id}`);
      ids.add(tc.id);
    });

    if (errors.length > 0) {
      const comment = "❌ Test Plan validation errors:\n" + errors.map(e => `- ${e}`).join("\n");
      await octokit.rest.issues.createComment({ owner, repo, issue_number: issue.number, body: comment });
      await octokit.rest.issues.addLabels({ owner, repo, issue_number: issue.number, labels: ['needs-fix'] });
      return;
    }

    // ✅ Correction ici : récupération correcte du SHA de la branche par défaut
    const { data: repoInfo } = await octokit.rest.repos.get({ owner, repo });
    const defaultBranchName = repoInfo.default_branch;

    const { data: branchData } = await octokit.rest.repos.getBranch({
      owner,
      repo,
      branch: defaultBranchName
    });

    if (allowedUsers.includes(author)) {
      for (const tc of testCases) {
        const slug = issue.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
        const branchName = `test-plan/${slug}/${tc.id.toString().replace(/[^a-z0-9-]/gi, "-")}`;

        try {
          await octokit.rest.repos.getBranch({ owner, repo, branch: branchName });
          core.info(`Branch ${branchName} already exists. Skipping.`);
        } catch {
          await octokit.rest.git.createRef({
            owner,
            repo,
            ref: `refs/heads/${branchName}`,
            sha: branchData.commit.sha
          });
          core.info(`✅ Created branch ${branchName}`);
        }
      }

      await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: issue.number,
        body: "✅ Test Plan validated. Branches created for each test case."
      });

      await octokit.rest.issues.addLabels({
        owner,
        repo,
        issue_number: issue.number,
        labels: ['validated']
      });
    } else {
      await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: issue.number,
        body: "✅ Test Plan validated. You are not authorized to create branches. A team member can create them for you."
      });
      await octokit.rest.issues.addLabels({
        owner,
        repo,
        issue_number: issue.number,
        labels: ['validated']
      });
    }

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
