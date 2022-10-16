// TODO: Include packages needed for this application
// External Packages
const inquirer              = require('inquirer');
const fs                    = require('fs');
const util                  = require('util');

//Connect modules to application
const generateMarkdown      = require('./utils/generateMarkdown.js');
const licenseBadge          = require("./utils/licencBadges").licenseBadge;
const questions             = require("./utils/questions").questions;

//to enable use of async await
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {

        // Prompt Inquirer questions
        const answers = await inquirer.prompt(questions);
        console.log("Your responses: ", answers);

        //Pass licenceBages to generate licence bagde
        answers.licenseBadge = licenseBadge(answers.license);
    
        // Pass Inquirer answers to generateMarkdown
        console.log("Generating your README next...")
        let readMeData = generateMarkdown(answers);
        console.log(readMeData);
    
        // Write markdown to file
        await writeFileAsync('create-README.md', readMeData);

    } catch (error) {
        console.log(error);
    }

}

// Function call to initialize app
init();

//End of line
