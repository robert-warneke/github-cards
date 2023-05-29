const fetch = require("node-fetch");

function getWeekNumberOfDate(date, firstSundayOfYear) {
  const diff = date - firstSundayOfYear + (firstSundayOfYear.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
}

module.exports = async (req, res) => {
  const username = req.query.username || "robert-warneke";
  const year = Number(req.query.year) || new Date().getFullYear();

  const weekHeight = 8;
  const daySize = 10;
  const dayMargin = 4;
  const levelColors = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const firstDayOfYear = new Date(year, 0, 1);
  const lastDayOfYear = new Date(year, 11, 31);
  const weekCount = Math.ceil(((lastDayOfYear - firstDayOfYear) / (1000 * 60 * 60 * 24) + firstDayOfYear.getDay() + 1) / 7);

  const chartWidth = weekCount * (daySize + dayMargin);
  const chartHeight = 7 * (weekHeight + dayMargin);
  const svgWidth = chartWidth + 40;
  const svgHeight = chartHeight + 80;

  let svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">\n`;

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
      svgCode += `<text x="10" y="30" text-anchor="start" font-size="14">${yearText}</text>\n`;

      for (let day = 0; day < 7; day++) {
        const labelX = 10;
        const labelY = (day * (weekHeight + dayMargin)) + weekHeight + 40;
        svgCode += `  <text class="weekday-label" x="${labelX}" y="${labelY}" text-anchor="start" font-size="10">${weekdays[day]}</text>\n`;
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
              (currentDay > today && year === currentYear)) {
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
        if (month > today.getMonth() && year === today.getFullYear()) {
          continue;
        }
        const firstDayOfMonth = new Date(year, month, 1);
        const weekOfMonth = getWeekNumberOfDate(firstDayOfMonth, firstSundayOfYear);
        const labelX = (weekOfMonth * (daySize + dayMargin)) + daySize + 22;
        const labelY = svgHeight - 30; // adjusted Y position of month label to make it closer to the chart
        svgCode += `  <text class="month-label" x="${labelX}" y="${labelY}" text-anchor="start" font-size="10">${months[month]}</text>\n`;
      }
    }
  } catch (error) {
    console.error("Failed to fetch contribution data:", error);
  }

  svgCode += `</svg>`;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svgCode);
};
