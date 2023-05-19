// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'no license') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'no license') {
    return ''
  }
  return `\n  - [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'no license') {
    return ''
  }
  return `\n## License {#license}

[${license}](#)
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests) ${renderLicenseLink(data.license)}
- [Questions](#questions)
   

## Description {#description}

${data.description}

## Installation {#installation}

${data.installation}

## Usage {#usage}

${data.usage}

## Contributing {#contributing}

${data.contributing}

## Tests {#tests}

${data.tests}
${renderLicenseSection(data.license)}
## Questions {#questions}

Here's how to reach me:

- GitHub Profile: [github.com/${data.username}](https://github.com/${data.username})

- Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
