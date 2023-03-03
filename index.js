// Variables and dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateReadme = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description", 
        message: "Provide a description for your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Provide a quick guide for the installation process if required: "
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project used for?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Who are the contributors of this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Are there tests included?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the corresponding license for this project: ",
        choices: [
            "None",
            "Apache",
            "GNU",
            "MIT",
            "BSD",
            "Boost",
            "Creative Commons",
            "Eclipse",
            "Mozilla",
            "Unilicense"
        ] 
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
];

function promptUser() {
    return inquirer.prompt(questions);
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await promptUser();
    const content = generateReadme(answers);
    await writeFileAsync('./output/README.md', content);
    console.log('README file successfully created!');
}

// Function call to initialize app
init();
