// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'userName',
        default: 'dgourley84',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        name: 'repo',
        type: 'input',
        message: "What is the name of your GitHub repo?",
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
    name: "URL",
    type: "input",
    message: "What is the URL of the live site?",
    },
    {
    name: "GithubURL",
    type: "input",
    message: "What is the repository URL?",
    },
    {
        name: 'title',
        type: 'input',
        message: "What is the title of your project?",
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        name: 'description',
        type: 'input',
        message: "Write a description of your project.",
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A contact email is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Mozilla",
          "MIT",
          "Apache",
          "Boost",
        ],
    },
    {
        type: "input",
        message: "Please enter any testing protocols you used for your project?",
        name: "test",
    },
    {
        type: "input",
        name: "author",
        message: "What is your name?",
    
    },
];

module.exports = {
    questions: questions,
};