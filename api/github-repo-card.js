const axios = require('axios');
const themes = require('./themes');
const languages = require('./languages');

module.exports = async (req, res) => {
  try {
    const user = req.query.user || 'robert-warneke';
    const repo = req.query.repo || 'github-cards';
    const theme = req.query.theme || 'light';
    const showUsername = req.query.showUsername === 'true' || false;
    const showLicense = req.query.showLicense !== 'false';

    let bgColorQuery = req.query.bgColor || null;
    let borderColorQuery = req.query.borderColor || null;
    let textColorQuery = req.query.textColor || null;
    let titleTextColorQuery = req.query.titleTextColor || null;
    let descriptionTextColorQuery = req.query.descriptionTextColor || null;
    let dataTextColorQuery = req.query.dataTextColor || null;
    let langTextColorQuery = req.query.langTextColor || null;
    let licenseTextColorQuery = req.query.licenseTextColor || null;
    let starTextColorQuery = req.query.starTextColor || null;
    let watchTextColorQuery = req.query.watchTextColor || null;
    let forkTextColorQuery = req.query.forkTextColor || null;
    let langDotColorQuery = req.query.langDotColor || null;
    let iconColorQuery = req.query.iconColor || null;
    let repoIconColorQuery = req.query.repoIconColor || null;
    let licenseIconColorQuery = req.query.licenseIconColor || null;
    let starIconColorQuery = req.query.starIconColor || null;
    let watchIconColorQuery = req.query.watchIconColor || null;
    let forkIconColorQuery = req.query.forkIconColor || null;

    // Fetch the repo data from the GitHub API using the GITHUB_TOKEN environment variable.
    const response = await axios.get(`https://api.github.com/repos/${user}/${repo}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PAT}`,
      },
    });

    const repoData = response.data;
    const stars = repoData.stargazers_count;
    const watching = repoData.subscribers_count;
    const forks = repoData.forks_count;
    const description = repoData.description;
    const lang = repoData.language;
    const langData = languages[lang];

    const themeColors = themes[theme](lang);

    // Decide the background color
    let bgColor = themeColors.background;
    if (bgColorQuery) {
      bgColor = '#' + bgColorQuery;
    }

    // Decide the border color
    let borderColor = themeColors.border;
    if (borderColorQuery) {
      borderColor = '#' + borderColorQuery;
    }

    // Decide the text color
    let textColor = themeColors.text;
    let titleTextColor = themeColors.titleText || textColor;
    let dataTextColor = themeColors.dataText || textColor;
    let descriptionTextColor = themeColors.descriptionText || textColor;
    if (textColorQuery) {
      textColor = '#' + textColorQuery;
      titleTextColor = textColor;
      descriptionTextColor = textColor;
      dataTextColor = textColor;
    }

    // Decide the title text color
    if (titleTextColorQuery) {
      titleTextColor = '#' + titleTextColorQuery;
    }

    // Decide the description text color
    if (descriptionTextColorQuery) {
      descriptionTextColor = '#' + descriptionTextColorQuery;
    }

    // Decide the data text color
    let langTextColor = themeColors.langText || dataTextColor;
    let licenseTextColor = themeColors.licenseText || dataTextColor;
    let starTextColor = themeColors.starText  || dataTextColor;
    let watchTextColor = themeColors.watchText || dataTextColor;
    let forkTextColor = themeColors.forkText || dataTextColor;
    if (dataTextColorQuery) {
      dataTextColor = '#' + dataTextColorQuery;
      langTextColor = dataTextColor;
      licenseTextColor = dataTextColor;
      starTextColor = dataTextColor;
      watchTextColor = dataTextColor;
      forkTextColor = dataTextColor;
    }

    // Decide the language text color
    if (langTextColorQuery) {
      langTextColor = '#' + langTextColorQuery;
    }

    // Decide the license text color
    if (licenseTextColorQuery) {
      licenseTextColor = '#' + licenseTextColorQuery;
    }

    // Decide the star text color
    if (starTextColorQuery) {
      starTextColor = '#' + starTextColorQuery;
    }

    // Decide the watching text color
    if (watchTextColorQuery) {
      watchTextColor = '#' + watchTextColorQuery;
    }

    // Decide the fork text color
    if (forkTextColorQuery) {
      forkTextColor = '#' + forkTextColorQuery;
    }

    // Decide the icon color
    let iconColor = themeColors.icon;
    let repoIconColor = themeColors.repoIcon || iconColor;
    let licenseIconColor = themeColors.licenseIcon || iconColor;
    let starIconColor = themeColors.starIcon || iconColor;
    let watchIconColor = themeColors.watchIcon || iconColor;
    let forkIconColor = themeColors.forkIcon || iconColor;
    if (iconColorQuery) {
      iconColor = '#' + iconColorQuery;
      repoIconColor = iconColor;
      licenseIconColor = iconColor;
      starIconColor = iconColor;
      watchIconColor = iconColor;
      forkIconColor = iconColor;
    }
    
    // Decide the repo icon color
    if (repoIconColorQuery) {
      repoIconColor = '#' + repoIconColorQuery;
    }

    // Decide the license icon color
    if (licenseIconColorQuery) {
      licenseIconColor = '#' + licenseIconColorQuery;
    }

    // Decide the star icon color
    if (starIconColorQuery) {
      starIconColor = '#' + starIconColorQuery;
    }

    // Decide the watch icon color
    if (watchIconColorQuery) {
      watchIconColor = '#' + watchIconColorQuery;
    }

    // Decide the fork icon color
    if (forkIconColorQuery) {
      forkIconColor = '#' + forkIconColorQuery;
    }

    // Decide the language dot color
    let langDotColor = themeColors.langDot;
    if (!langDotColor) {
      langDotColor = langData ? langData.color : '#000000';
    }
    if (langDotColorQuery) {
      langDotColor = '#' + langDotColorQuery;
    }

    // Define the title. If showUsername is true, show the username/repo. Otherwise, just show the repo.
    const title = showUsername ? `${user}/${repo}` : repo;

    // Create the dynamic SVG.
    const svg = `
    <svg width="400" height="120" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      .header { font: 600 14px 'Arial', Sans-Serif; fill: ${titleTextColor}; }
      .description { font: 400 12px 'Arial', Sans-Serif; }
      .langText { font: 400 11px 'Arial', Sans-Serif; fill: ${langTextColor}; }
      .licenseText { font: 400 11px 'Arial', Sans-Serif; fill: ${licenseTextColor}; }
      .starText { font: 400 11px 'Arial', Sans-Serif; fill: ${starTextColor}; }
      .watchText { font: 400 11px 'Arial', Sans-Serif; fill: ${watchTextColor}; }
      .forkText { font: 400 11px 'Arial', Sans-Serif; fill: ${forkTextColor}; }
      .badge { font: 600 11px 'Arial', Sans-Serif; }
      .truncate {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${descriptionTextColor};
      }
    </style>
  
    <rect data-testid="card-bg" x="0.5" y="0.5" rx="4.5" height="99%" stroke="${borderColor}" width="399" fill="${bgColor}" stroke-opacity="1"/>
  
    <g data-testid="card-title" transform="translate(25, 35)">
      <svg fill="${repoIconColor}" x="0" y="-13" viewBox="0 0 16 16" version="1.1" width="16" height="16">
        <!-- GitHub repository icon -->
        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
      </svg>
  
      <text x="25" y="-2" class="header" data-testid="header">${title}</text>
    </g>
  
    <g data-testid="main-card-body" transform="translate(25, 60)">
      <foreignObject x="0" y="-20" width="350" height="50">
        <div xmlns="http://www.w3.org/1999/xhtml" class="description">
          <span class="truncate">
            ${description}
          </span>
        </div>
      </foreignObject>
  
      <g transform="translate(0, 30)">
      <!-- Language and License -->
      ${repoData.language ? `
        <circle class="language-circle" cx="10" cy="8" r="6" fill="${langDotColor}" />
        <text class="langText" data-testid="language" x="20" y="12">${lang}</text>
      `: ''}
      
      ${showLicense ? `
      <svg fill="${licenseIconColor}" x="${repoData.language ? '80' : '10'}" y="0" width="16" height="16" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"/>
      </svg>
      <text data-testid="license" class="licenseText" x="${repoData.language ? '100' : '30'}" y="12">${repoData.license ? repoData.license.name : 'null'}</text>
    ` : ''}
      
        <!-- Stars icon -->
        <svg fill="${starIconColor}" x="180" y="0" viewBox="0 0 16 16" version="1.1" width="16" height="16">
          <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
        </svg>
        <text data-testid="stargazers" class="starText" x="200" y="12">${stars}</text>
  
        <!-- Watching icon -->
        <svg fill="${watchIconColor}" x="240" y="0" viewBox="0 0 16 16" version="1.1" width="16" height="16">
          <path d="M8 3C4.2 3 1 6 1 8s3.2 5 7 5 7-2 7-5-3.2-5-7-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
        <text data-testid="watching" class="watchText" x="260" y="12">${watching}</text>
  
        <!-- Forks icon -->
        <svg fill="${forkIconColor}" x="300" y="0" viewBox="0 0 16 16" version="1.1" width="16" height="16">
          <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
        </svg>
        <text data-testid="forkcount" class="forkText" x="320" y="12">${forks}</text>
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
