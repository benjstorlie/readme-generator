# readme-generator

## Description

This is a command-line application that generates a new README.md file, given a series of prompts to the user.

## Installation

The readme generator requires nodejs and inquirer to support the command line prompts.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Video

## Credits

1. I got the regular expression for validating a GitHub username from a GitHub repository made by GitHub user [shinnn](https://github.com/shinnn).  It had instructions for installing it from npm, but I only needed the regular expression.

  - [npmjs.com/package/github-username-regex](https://www.npmjs.com/package/github-username-regex)
  - [github.com/shinnn/github-username-regex](https://github.com/shinnn/github-username-regex)

2. I got all the license badges and links from a page made by GitHub user [lukas-h](https://gist.github.com/lukas-h).

  - [Markdown License Badges for your Project](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

3. I used a Lorem Ipsum generator to have more interesting-looking text for my example video.

  - [loremipsum.io/generator](https://loremipsum.io/generator/)