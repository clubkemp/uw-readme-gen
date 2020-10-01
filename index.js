const inquirer = require('inquirer')
const fs = require("fs");
const path = require('path');
const utils = require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is your project title?"

    },
    {
        type:"input",
        name:"description",
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
        message:"How do you use the software?"

    },
    {
        type:"input",
        name:"credits",
        message:"Give credit where credits due?"

    },
    {
        type:"list",
        name:"license",
        message:"What license?",
        choices:["MIT", "GPL", "Apache", "MS-PL", "BSD", "CDDL", "EPL"]

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
        type:"input",
        name:"username",
        message:"What's your gihub handle?"

    },
    {
        type:"input",
        name: "email",
        message: "What's your contact email?",
        validate: function (email) {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function (err) {
        if (err){
            return console.log(err);
        } 
        console.log(`Adding ${data}`);
        })
    
}

// function to initialize program
const init = () => {
    inquirer
    .prompt(questions)
    .then(answers => {
        const repoName = path.basename(process.cwd());
        //var cleanedData = utils.dataPrep(answers)
        console.log("Just before markdown", answers, repoName)
        const markdown = utils.generateMarkdown(answers, repoName);
        console.log(markdown)
        console.log("I'm bored, moving on")
        writeToFile("README", markdown)
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
