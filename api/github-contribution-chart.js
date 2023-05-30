const fetch = require("node-fetch");
const themes = require('./themes');

function getWeekNumberOfDate(date, firstSundayOfYear) {
  const diff = date - firstSundayOfYear + (firstSundayOfYear.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
}

module.exports = async (req, res) => {
  let username = req.query.user || "robert-warneke";
  let year = Number(req.query.year) || new Date().getFullYear();
  let fullYear = req.query.showFullYear === 'true';
  let showUsername = req.query.showUsername !== 'false';
  let showGitHubIcon = req.query.showGitHubIcon !== 'false';
  let theme = req.query.theme || 'light';
  let bgColorQuery = req.query.bgColor || null;
  let borderColorQuery = req.query.borderColor || null;
  let textColorQuery = req.query.textColor || null;
  let dayLabelColorQuery = req.query.dayLabelColor || null;
  let monthLabelColorQuery = req.query.monthLabelColor || null;
  let keyLabelColorQuery = req.query.keyLabelColor || null;
  let yearLabelColorQuery = req.query.yearLabelColor || null;
  let userLabelColorQuery = req.query.userLabelColor || null;
  let githubIconColorQuery = req.query.githubIconColor || null;

  const weekHeight = 8;
  const daySize = 10;
  const dayMargin = 4;
  const levelColors = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const themeColors = themes[theme]();

  let bgColor = themeColors.background;
  if (bgColorQuery) {
    bgColor = '#' + bgColorQuery;
  }

  let borderColor = themeColors.border;
  if (borderColorQuery) {
    borderColor = '#' + borderColorQuery
  }

  let textColor = themeColors.text;
  let dayLabelColor = themeColors.dayLabel || textColor;
  let monthLabelColor = themeColors.monthLabel || textColor;
  let keyLabelColor = themeColors.keyLabel || textColor;
  let yearLabelColor = themeColors.yearLabel || textColor;
  let userLabelColor = themeColors.userLabel || textColor;
  let githubIconColor = themeColors.githubIcon || textColor;
  if (textColorQuery) {
    textColor = '#' + textColorQuery;
    dayLabelColor = textColor;
    monthLabelColor = textColor;
    keyLabelColor = textColor;
    yearLabelColor = textColor;
    userLabelColor = textColor;
    githubIconColor = textColor;
  }

  if (dayLabelColorQuery) {
    dayLabelColor = '#' + dayLabelColorQuery;
  }

  if (monthLabelColorQuery) {
    monthLabelColor = '#' + monthLabelColorQuery;
  }

  if (keyLabelColorQuery) {
    keyLabelColor = '#' + keyLabelColorQuery;
  }

  if (yearLabelColorQuery) {
    yearLabelColor = '#' + yearLabelColorQuery;
  }

  if (userLabelColorQuery) {
    userLabelColor = '#' + userLabelColorQuery;
  }

  if (githubIconColorQuery) {
    githubIconColor = '#' + githubIconColorQuery;
  }

  const firstDayOfYear = new Date(year, 0, 1);
  const lastDayOfYear = new Date(year, 11, 31);
  const weekCount = Math.ceil(((lastDayOfYear - firstDayOfYear) / (1000 * 60 * 60 * 24) + firstDayOfYear.getDay() + 1) / 7);

  const chartWidth = weekCount * (daySize + dayMargin);
  const chartHeight = 7 * (weekHeight + dayMargin);
  const svgWidth = chartWidth + 40;
  const svgHeight = chartHeight + 60;

  let svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">\n`;

  svgCode += `<rect x="0" y="0" width="${svgWidth}" height="${svgHeight}" fill="${bgColor}" stroke="${borderColor}" stroke-opacity="1" ry="8"/>\n`;

// Define color box properties
const colorBoxSize = 10;
const colorBoxMargin = 4;
const colorBoxLabelMargin = 5; // to add some space between box and label
const keyStartX = svgWidth - (levelColors.length * (colorBoxSize + colorBoxMargin)) - 40; // Adjust as per your needs - added -70 to move it to the left
const keyStartY = 18; // Adjust as per your needs

// Inside your loop through each level color
for (let i = 0; i < levelColors.length; i++) {
  // Determine box position
  const boxX = keyStartX + (i * (colorBoxSize + colorBoxMargin));
  const boxY = keyStartY;

  // Add color box
  svgCode += `  <rect class="color-box" width="${colorBoxSize}" height="${colorBoxSize}" x="${boxX}" y="${boxY}" fill="${levelColors[i]}" />\n`;

  // Add color box label
  if (i === 0) {
    svgCode += `  <text class="color-box-label" x="${boxX - colorBoxLabelMargin}" y="${boxY + colorBoxSize/2}" dominant-baseline="central" text-anchor="end" font-size="10" fill="${keyLabelColor}">Less</text>\n`;
  } else if (i === levelColors.length - 1) {
    svgCode += `  <text class="color-box-label" x="${boxX + colorBoxSize + colorBoxLabelMargin}" y="${boxY + colorBoxSize/2}" dominant-baseline="central" text-anchor="start" font-size="10" fill="${keyLabelColor}">More</text>\n`;
  }

}

  try {
    const firstSundayOfYear = new Date(firstDayOfYear);
    while (firstSundayOfYear.getDay() !== 0) {
      firstSundayOfYear.setDate(firstSundayOfYear.getDate() - 1);
    }
    const from = firstSundayOfYear.toISOString();

    const to = lastDayOfYear.toISOString();

    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection(from: "${from}", to: "${to}") {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  weekday
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PAT}`,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        Accept: "application/vnd.github.v4.idl",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    const contributions = data?.data?.user?.contributionsCollection?.contributionCalendar;

    if (contributions) {
      const totalContributions = contributions.totalContributions;
      const weeks = contributions.weeks;

      const currentYear = new Date().getFullYear();
      const yearText = year === currentYear ? `${year}: ${totalContributions} Contributions (so far)` : `${year}: ${totalContributions} Contributions`;
      svgCode += `<text x="35" y="25" text-anchor="start" font-size="14" fill="${yearLabelColor}">${yearText}</text>\n`;

      if (showUsername) {
        const usernameX = svgWidth / 2;
        svgCode += `<text x="${usernameX}" y="25" text-anchor="middle" font-size="16" fill="${userLabelColor}">${username}</text>\n`;
      }

      // Before the yearText SVG element
      if (showGitHubIcon) {
        svgCode += `
        <svg x="10" y="10" width="20" height="20" viewBox="0 0 496 512">
          <path style="fill:${githubIconColor}" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
      `;
      }

      for (let day = 0; day < 7; day++) {
        const labelX = 10;
        const labelY = (day * (weekHeight + dayMargin)) + weekHeight + 40;
        svgCode += `  <text class="weekday-label" x="${labelX}" y="${labelY}" text-anchor="start" font-size="10" fill="${dayLabelColor}">${weekdays[day]}</text>\n`;
      }

      const today = new Date();

      for (let week = 0; week < weekCount; week++) {
        const weekData = weeks[week];
        if (!weekData) continue;

        const contributionDays = weekData.contributionDays;
        
        for (let day = 0; day < 7; day++) {
          const currentDay = new Date(year, 0, 1 + (week * 7) + day);

          // Skip rendering for days before Jan 1st and after Dec 31st
          if ((week === 0 && day < firstDayOfYear.getDay()) || 
            (week === weekCount - 1 && day > lastDayOfYear.getDay()) || 
            (currentDay > today && year === currentYear && !fullYear)) {
          continue;
        }
      

          const contributionData = contributionDays.find((dayData) => dayData.weekday === day);
          const contributions = contributionData ? contributionData.contributionCount : 0;
          const translateX = (week * (daySize + dayMargin)) + daySize + 22;
          const translateY = (day * (weekHeight + dayMargin)) + 40;
          const fill = levelColors[Math.min(contributions, levelColors.length - 1)];

          svgCode += `  <rect class="day" width="${daySize}" height="${daySize}" x="${translateX}" y="${translateY}" fill="${fill}" />\n`;
        }
      }

      for (let month = 0; month < months.length; month++) {
        // Only skip if showFullYear is false and month is in future
        if (!fullYear && month > today.getMonth() && year === today.getFullYear()) {
          continue;
        }
        const firstDayOfMonth = new Date(year, month, 1);
        const weekOfMonth = getWeekNumberOfDate(firstDayOfMonth, firstSundayOfYear);
        const labelX = (weekOfMonth * (daySize + dayMargin)) + daySize + 22;
        const labelY = svgHeight - 10; // adjusted Y position of month label to make it closer to the chart
        svgCode += `  <text class="month-label" x="${labelX}" y="${labelY}" text-anchor="start" font-size="10" fill="${monthLabelColor}">${months[month]}</text>\n`;
      }
      
    }
  } catch (error) {
    console.error("Failed to fetch contribution data:", error);
  }

  svgCode += `</svg>`;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svgCode);
};
