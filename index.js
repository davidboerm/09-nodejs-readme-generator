// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      name: 'title',
      type: 'input',
      message: 'Give your project a title.',
    },
    {
      name: 'description',
      type: 'input',
      message: 'Briefly describe the project.',
    },
    {
      name: 'installation',
      type: 'input',
      message: 'Add any installation instructions.',
    },
    {
      name: 'usage',
      type: 'input',
      message: 'Add usage details.'
    },
    {
      name: 'contributing',
      type: 'input',
      message: 'Add any directions for contribution.',
    },
    {
      name: 'license',
      type: 'list',
      message: 'Choose license type.',
      choices: ['Apache', 'BSD 3', 'BSD 2', 'GPL', 'MIT', 'none'],
    },
    {
      name: 'test',
      type: 'input',
      message: 'Add any information regarding testing apps.',
    },
    {
      name: 'email',
      type: 'input',
      message: 'Input your email address.',
    },
    {
      name: 'linkedin',
      type: 'input',
      message: 'Input your LinkedIn profile link.',
    },
    {
      name: 'github',
      type: 'input',
      message: 'Input your Github username(case sensitive).',
    },
  ]);
}
 
 // function to init app
 function init() {
  promptUser()
    // .then((answers) => console.log(answers.license))
    .then((answers) => writeFileAsync('./output/README.md', generateMarkdown(answers)))
    .then(() => console.log('README.md successfully generated!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
