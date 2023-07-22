// Function that returns a license badge based on the license passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPL v3':
      return '[![License: GNU GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    case 'Other':
      // Customize this link to the license of your choice or remove this case if not needed.
      return '[![License: Custom License](https://img.shields.io/badge/License-Custom%20License-red.svg)](https://example.com/custom-license)';
    default:
      return '';
  }
}

// Function that returns the license link based on the license passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'Unlicense':
      return 'http://unlicense.org/';
    case 'Other':
      // Customize this link to the license of your choice or remove this case if not needed.
      return 'https://example.com/custom-license';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
