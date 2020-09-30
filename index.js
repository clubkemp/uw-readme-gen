var inquirer = require('inquirer')
var fs = require("fs");
var mdGen = require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is your project title?"

    },
    {
        type:"input",
        name:"desc",
        message:"What is the project description?"

    },
    {
        type:"input",
        name:"install",
        message:"What are the installation notes?"

    },
    {
        type:"input",
        name:"usage",
        message:"What is the project usage?"

    },
    {
        type:"input",
        name:"Credits",
        message:"Give credit where credits due?"

    },
    {
        type:"list",
        name:"license",
        message:"What license?",
        choices:["GPL", "Apache", "MS-PL", "BSD", "CDDL", "EPL", "MIT"]

    },
    {
        type:"input",
        name:"contributing",
        message:"Contribution criteria"

    },
    {
        type:"input",
        name:"tests",
        message:"Relevant test?"

    },
    {
        type:"confirm",
        name:"toc",
        message:"Would you like a table of contents?"

    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers)
    })
    .catch(error => {
        if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else when wrong
        }
    });

}

// function call to initialize program
init();
