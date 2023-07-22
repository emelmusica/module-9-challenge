const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter your project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'ISC', 'Unlicense', 'Other']
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// Function to generate the README content
function generateReadme(data) {
  return `
# ${data.projectTitle}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or concerns regarding this project, please contact ${
    data.githubUsername
  } at ${data.email}.
`;
}

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateReadme(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
