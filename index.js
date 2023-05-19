// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter repo title.',
    name: 'title',
    filter(val) {
      return val.trim()
    }
  },
  {
    type: 'input',
    message: 'Enter description.',
    name: 'description',
    filter(val) {
      return val.trim()
    }
  },
  {
    type: 'input',
    message: 'Enter installation instructions.',
    name: 'installation',
    filter(val) {
      return val.trim()
    }
  },
  {
    type: 'input',
    message: 'Enter usage informatiom.',
    name: 'usage',
    filter(val) {
      return val.trim()
    }
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines.',
    name: 'contributing',
    filter(val) {
      return val.trim()
    }
  },
  {
    type: 'input',
    message: 'Enter test instructions.',
    name: 'tests',
    filter(val) {
      return val.trim()
    }
  },
  {
    type:'list',
    message: 'Choose a license for your application.',
    name: 'license',
    choices: ['no license']
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'username',
    filter(val) {
      return val.trim()
    }
  },
  {
    type: 'input',
    message: 'What email address do you want to include in the readme?',
    name: 'email',
    filter(val) {
      return val.trim()
    },
    validate(val) {
      const emailPattern = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
      if (emailPattern.test(val)) {
        return true
      }
      return "Please enter a valid email address."
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

}

// Function call to initialize app
init();
