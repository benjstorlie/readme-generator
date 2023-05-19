// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'no license') {
    return ''
  } else if (license === 'The MIT License') {
    return '\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n'
  } else if (license === 'Mozilla Public License 2.0') {
    return '\n[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n'
  } else if (license === 'IBM Public License Version 1.0') {
    return '\n[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)\n'
  } else if (license === 'Eclipse Public License 1.0') {
    return '\n[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)\n'
  } else if (license === 'ISC License (ISC)') {
    return '\n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n'
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'no license') {
    return ''
  } else if (license === 'The MIT License') {
    return `[${license}](https://opensource.org/licenses/MIT)`
  } else if (license === 'Mozilla Public License 2.0') {
    return `the [${license}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'IBM Public License Version 1.0') {
    return `the [${license}](https://opensource.org/licenses/IPL-1.0)`
  } else if (license === 'Eclipse Public License 1.0') {
    return `the [${license}](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === 'ISC License (ISC)') {
    return `the [${license}](https://opensource.org/licenses/ISC)`
  }
}

// Create a function that returns the license link for the Table of Contents
// If there is no license, return an empty string
function renderLicenseSectionLink(license) {
  if (license === 'no license') {
    return ''
  }
  return `\n- [License](#license)`
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'no license') {
    return ''
  }
  return `\n## License

This project is licensed under ${renderLicenseLink(license)} - see the LICENSE.md file for details
`
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)${renderLicenseSectionLink(data.license)}
- [Questions](#questions)
   

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}
${renderLicenseSection(data.license)}
## Questions

Here's how to reach me:

- GitHub Profile: [github.com/${data.username}](https://github.com/${data.username})

- Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
