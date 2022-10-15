// TODO: Include packages needed for this application
// External Packages
const inquirer              = require('inquirer');
const fs                    = require('fs');
const util                  = require('util');

//Connect modules to application
const generateMarkdown      = require('./utils/generateMarkdown.js');
const licenseBadge          = require("./utils/licenseBadge").licenseBadge;
const questions             = require("./utils/questions").questions;

//to enable use of asyn await
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
