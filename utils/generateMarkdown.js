// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  const licenseBadges = [{
      name: 'Apache',
      badge: '[![License: Apache](https://img.shields.io/badge/License-Apache-blue)](https://www.apache.org/licenses/LICENSE-2.0)'
    },
    {
      name: 'BSD 3',
      badge: '[![License: BSD3](https://img.shields.io/badge/License-BSD3-blue)](https://opensource.org/licenses/BSD-3-Clause)'
    },
    {
      name: 'BSD 2',
      badge: '[![License: BSD2](https://img.shields.io/badge/License-BSD2-blue)](https://opensource.org/licenses/BSD-2-Clause)'
    },
    {
      name: 'GPL',
      badge: '[![License: GPL](https://img.shields.io/badge/License-GPL-blue)](https://www.gnu.org/licenses/licenses.html)'
    },
    {
      name: 'MIT',
      badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)'
    },
    {
      name: 'none',
      badge: '',
    }
  ];
  for (let i = 0; i < licenseBadges.length; i++) {
    if (answers === licenseBadges[i].name) {
      return licenseBadges[i].badge;
    }
  }
}

// Function that returns the license section of README

function renderLicenseSection(answers) {
  if (answers.license === 'none') {
    return "";
  } else {
    return `
## License
${renderLicenseBadge(answers.license)}
`;
  }
}

// Function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

${renderLicenseBadge(answers.license)}

## Description
  ${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#test)
- [Questions](#questions)
## Installation
  ${answers.installation}
## Usage
  ${answers.usage}
## Contributing
  ${answers.contributing}
${renderLicenseSection(answers)}
## Tests
  ${answers.test}
## Questions
  Any Questions? Please contact me at one of the following for more information:

  [Github](https://github.com/${answers.github})  
  [LinkedIn](${answers.linkedin})  
  [${answers.email}](mailto:${answers.email})
`;
}

module.exports = generateMarkdown;
