const axios = require('axios');
const themes = require('./themes');
const languages = require('./languages');

module.exports = async (req, res) => {
  try {
    // Get the user and repo from the request query parameters.
    const user = req.query.user || 'robert-warneke';
    const repo = req.query.repo || 'github-cards';
    const theme = req.query.theme || 'light';
    const showUsername = req.query.showUsername === 'true' || false;

    // Define theme colors based on the selected theme.
    const themeColors = themes[theme];

    // Fetch the repo data from the GitHub API using the GITHUB_TOKEN environment variable.
    const response = await axios.get(`https://api.github.com/repos/${user}/${repo}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
    const repoData = response.data;

    // Define the title. If showUsername is true, show the username/repo. Otherwise, just show the repo.
    const title = showUsername ? `${user}/${repo}` : repo;

    // Create the dynamic SVG.
    const svg = `
    <svg width="400" height="120" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      .header { font: 600 14px 'Arial', Sans-Serif; fill: ${themeColors.title}; }
      .description { font: 400 12px 'Arial', Sans-Serif; }
      .icon { fill: ${themeColors.icon}; }
      .datatext { font: 400 11px 'Arial', Sans-Serif; fill: ${themeColors.datatext}; }
      .badge { font: 600 11px 'Arial', Sans-Serif; }
      .truncate {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${themeColors.text};
      }
    </style>
  
    <rect data-testid="card-bg" x="0.5" y="0.5" rx="4.5" height="99%" stroke="${themeColors.border}" width="399" fill="${themeColors.background}" stroke-opacity="1"/>
  
    <g data-testid="card-title" transform="translate(25, 35)">
      <svg class="icon" x="0" y="-13" viewBox="0 0 16 16" version="1.1" width="16" height="16">
        <!-- GitHub repository icon -->
        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
      </svg>
  
      <text x="25" y="-2" class="header" data-testid="header">${title}</text>
    </g>
  
    <g data-testid="main-card-body" transform="translate(25, 60)">
      <foreignObject x="0" y="-20" width="350" height="50">
        <div xmlns="http://www.w3.org/1999/xhtml" class="description">
          <span class="truncate">
            ${repoData.description}
          </span>
        </div>
      </foreignObject>
  
      <g transform="translate(0, 30)">
        <!-- Language -->
        <circle class="language-circle" cx="10" cy="8" r="6" fill="${languages[repoData.language]?.color || '#586069'}" />
        <text data-testid="language" class="datatext" x="20" y="12">${repoData.language}</text>
  
        <!-- Stars icon -->
        <svg class="icon" x="210" y="0" viewBox="0 0 16 16" version="1.1" width="16" height="16">
          <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
        </svg>
        <text data-testid="stargazers" class="datatext" x="230" y="12">${repoData.stargazers_count}</text>
  
        <!-- Watching icon -->
        <svg class="icon" x="260" y="0" viewBox="0 0 16 16" version="1.1" width="16" height="16">
          <path d="M8 3C4.2 3 1 6 1 8s3.2 5 7 5 7-2 7-5-3.2-5-7-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
        <text data-testid="watching" class="datatext" x="280" y="12">${repoData.subscribers_count}</text>
  
        <!-- Forks icon -->
        <svg class="icon" x="310" y="0" viewBox="0 0 16 16" version="1.1" width="16" height="16">
          <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
        </svg>
        <text data-testid="forkcount" class="datatext" x="330" y="12">${repoData.forks_count}</text>

        <!-- License -->
        ${repoData.license ? `
        <svg class="icon" x="90" y="3" viewBox="0 0 16 16" version="1.1" width="16" height="16">
          <path d="M8.75.75a.75.75 0 00-1.5 0v3.5h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5z"></path>
        </svg>
        <text data-testid="license" class="datatext" x="110" y="12">${repoData.license.spdx_id}</text>
      ` : `
        <svg class="icon" x="90" y="3" viewBox="0 0 16 16" version="1.1" width="16" height="16">
          <path d="M8.75.75a.75.75 0 00-1.5 0v3.5h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5z"></path>
        </svg>
        <text data-testid="license" class="datatext" x="110" y="12">No license</text>
      `}
      
      </g>
    </g>
    </svg>
    `;

    // Set the content type to image/svg+xml so the browser knows how to display the response.
    res.setHeader('Content-Type', 'image/svg+xml');

    // Send the SVG as the response.
    res.send(svg);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred.');
  }
};
