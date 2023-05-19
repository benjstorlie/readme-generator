// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter repo title.',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Enter description.',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Enter installation instructions.',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Enter usage informatiom.',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines.',
    name: 'contributing'
  },
  {
    type: 'input',
    message: 'Enter test instructions.',
    name: 'tests'
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
    name: 'username'
  },
  {
    type: 'input',
    message: 'What email address do you want to include in the readme?',
    name: 'email'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
