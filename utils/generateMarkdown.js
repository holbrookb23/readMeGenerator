// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badges = ``;

  if(license.includes('mit')) {
    badges += `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) `;
  }

  if(license.includes('apache')) {
    badges += `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg) `;
  }

  if(license.includes('ipl')) {
    badges += `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg) `;
  }

  if(license.includes('gpl')) {
    badges += `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg) `;
    
  }

  if(license.includes('pddl')) {
    badges += `![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg) `;
  }
  
  return badges;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let links = `\n`;
  if(license.includes("mit")) {
        links += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }

  if(license.includes("apache")) {
     links += `\n[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
    
  if(license.includes("ipl")) {
    links += `\n[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }

  if(license.includes("gpl")) {
    links += `\n[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }

  if(license.includes("pddl")) {
    links += `\n[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`;
  }

  return links
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `## Licenses\n
    ${renderLicenseLink(license)}\n`
}

function renderContents(content) {

  let table = `## Table of Contents\n`
    if (content.installation !== undefined) {
       table += `[Installation](#installation)\n`;
    }
    if (content.usage !== undefined) {
      table += `\n[Usage](#usage)\n`;
    }

    if (content.contributors !== undefined) {
      table += `\n[Credits](#credits)\n`;
    }

    if (content.license !== undefined) {
      table += `\n[License](#licenses)\n`;
    }

    if (content.tests !== undefined) {
      table += `\n[Tests](#tests)\n`;
    }

    if (content.email !== undefined) {
      table += `\n[Questions](#questions)`
    }
    return table;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let md = `# ${data.title}\n${renderLicenseBadge(data.license)}\n## Description\n${data.description}\n${renderContents(data)}`
  
  if (data.installation !== undefined) {
  md += `\n## Installation\n${data.installation}\n`
  }

  if (data.usage !== undefined) {
  md +=  `## Usage\n${data.usage}\n`
  }
  
  if (data.contributors !== undefined) {
    md += `## Credits\n${data.contributors}\n`
  }

  if (data.license !== undefined) {
    md += `${renderLicenseSection(data.license)}\n`
  }

  if (data.tests !== undefined) {
    md += `## Tests\n${data.tests}\n`
  }

  md += `## Questions\nIf you have any questions you can reach me at through github, [${data.github}](https://github.com/${data.github}), or by email, ${data.email}.`;

return md
}

module.exports = generateMarkdown;
