const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
});

const DEFAULT_USER = "robert-warneke";

module.exports = async (req, res) => {
  try {
    let user = req.query.user || DEFAULT_USER;
    let repo = req.query.repo;
    let lastCommit = null;

    let showRepo = req.query.showRepo !== 'false';

    let leftSectionColorQuery = req.query.leftSectionColor || null;
    let leftSectionColor = '#555';
    if (leftSectionColorQuery) {
      leftSectionColor = '#' + leftSectionColorQuery;
    }

    let textColorQuery = req.query.textColor || null;
    let leftTextColorQuery = req.query.leftTextColor || null;
    let rightTextColorQuery = req.query.rightTextColor || null;
    let textColor = "#fff";
    let leftTextColor = "#fff";
    let rightTextColor = "#fff";
    if (textColorQuery) {
      textColor = '#' + textColorQuery;
      leftTextColor = textColor;
      rightTextColor = textColor;
    }

    if (leftTextColorQuery) {
      leftTextColor = '#' + leftTextColorQuery;
    }

    if (rightTextColorQuery) {
      rightTextColor = '#' + rightTextColorQuery;
    }

    if (repo) {
      // Fetch the last commit information from a specific repo
      const response = await octokit.repos.listCommits({
        owner: user,
        repo,
        per_page: 1,
      });
      lastCommit = response.data[0];
    } else {
      // Fetch all repositories for the user
      const repos = await octokit.repos.listForUser({
        username: user,
        sort: 'updated',
      });

      // Fetch the latest commit for each repository
      for (const repo of repos.data) {
        const response = await octokit.repos.listCommits({
          owner: user,
          repo: repo.name,
          per_page: 1,
        });

        const commit = response.data[0];
        if (!lastCommit || new Date(commit.commit.committer.date) > new Date(lastCommit.commit.committer.date)) {
          lastCommit = commit;
        }
      }
    }

    const commitMessage = lastCommit.commit.message;
    const commitDate = lastCommit.commit.committer.date;

    // Create the badge SVG
    const badgeSvg = createBadge(commitMessage, commitDate, repo, showRepo, leftSectionColor, leftTextColor, rightTextColor);

    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(badgeSvg);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const padding = 10;

function createBadge(commitMessage, commitDate, repoName = '', showRepo = true, leftSectionColor, leftTextColor, rightTextColor) {
  const leftSectionText = showRepo && repoName 
    ? `Last Commit to ${repoName}`
    : 'Last Commit';
  const rightSectionText = formatDate(commitDate);

  const leftSectionWidth = getTextWidth(leftSectionText) + 2 * padding;
  const rightSectionWidth = getTextWidth(rightSectionText) + 2 * padding;

  const badgeSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${leftSectionWidth + rightSectionWidth}" height="20">
      <linearGradient id="gradient" x2="0" y2="100%">
        <stop offset="0" stop-color="#eaeaea" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <rect width="${leftSectionWidth}" height="20" fill="${leftSectionColor}"/>
      <rect x="${leftSectionWidth}" width="${rightSectionWidth}" height="20" fill="#97ca00"/>
      <text x="${leftSectionWidth/2}" y="14" fill="${leftTextColor}" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11" font-weight="bold">${leftSectionText}</text>
      <text x="${leftSectionWidth + rightSectionWidth/2}" y="14" fill="${rightTextColor}" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11" font-weight="bold">${rightSectionText}</text>
    </svg>
  `;

  return badgeSvg;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function getTextWidth(text) {
  return text.length * 6;  
}
