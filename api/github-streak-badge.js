const { Octokit } = require("@octokit/rest");
const { graphql } = require("@octokit/graphql");

const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
});

const DEFAULT_USER = "robert-warneke";

module.exports = async (req, res) => {
  try {
    let user = req.query.user || DEFAULT_USER;
    let showUser = req.query.showUser !== 'false';

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

    // Fetch the user's contribution activity using the GraphQL API
    const { user: userData } = await graphql(
      `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `,
      {
        username: user,
        headers: {
          authorization: `token ${process.env.GITHUB_PAT}`,
        },
      }
    );

    const streak = calculateStreak(userData.contributionsCollection.contributionCalendar.weeks);

    // Create the badge SVG
    const badgeSvg = createBadge(streak, user, showUser, leftSectionColor, leftTextColor, rightTextColor);

    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(badgeSvg);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const padding = 10;

function createBadge(streak, username = '', showUser = true, leftSectionColor, leftTextColor, rightTextColor) {
    const leftSectionText = showUser && username
      ? `${username}'s GitHub Streak`
      : 'GitHub Streak';
    const rightSectionText = `${streak} days`;
  
    const paddingX = 4; // Padding on the left and right sides of the left section text
  
    const leftSectionTextWidth = getTextWidth(leftSectionText);
    const leftSectionWidth = leftSectionTextWidth + 2 * padding + 2 * paddingX;
    const rightSectionWidth = getTextWidth(rightSectionText) + 2 * padding;
  
    const leftSectionTextX = padding + paddingX + leftSectionTextWidth / 2;
  
    const badgeSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${leftSectionWidth + rightSectionWidth}" height="20">
        <linearGradient id="gradient" x2="0" y2="100%">
          <stop offset="0" stop-color="#eaeaea" stop-opacity=".1"/>
          <stop offset="1" stop-opacity=".1"/>
        </linearGradient>
        <rect width="${leftSectionWidth}" height="20" fill="${leftSectionColor}"/>
        <rect x="${leftSectionWidth}" width="${rightSectionWidth}" height="20" fill="#97ca00"/>
        <text x="${leftSectionTextX}" y="14" fill="${leftTextColor}" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11" font-weight="bold">${leftSectionText}</text>
        <text x="${leftSectionWidth + rightSectionWidth/2}" y="14" fill="${rightTextColor}" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11" font-weight="bold">${rightSectionText}</text>
      </svg>
    `;
  
    return badgeSvg;
  }
  
  

function calculateStreak(weeks) {
  let streak = 0;
  let currentStreak = 0;

  for (const week of weeks) {
    for (const day of week.contributionDays) {
      if (day.contributionCount > 0) {
        currentStreak++;
      } else {
        if (currentStreak > streak) {
          streak = currentStreak;
        }
        currentStreak = 0;
      }
    }
  }

  if (currentStreak > streak) {
    streak = currentStreak;
  }

  return streak;
}

function getTextWidth(text) {
  return text.length * 6;  
}
