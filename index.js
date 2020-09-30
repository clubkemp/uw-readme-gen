var inquirer = require('inquirer')
var fs = require("fs");
var utils = require("./utils/generateMarkdown.js")

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
    // {
    //     type:"confirm",
    //     name:"toc",
    //     message:"Would you like a table of contents?"

    // },
];

// function to write README file
function writeToFile(fileName, data) {
    data.forEach(e => {
        fs.appendFile(fileName, e, function (err) {
            if (err){
                return console.log(err);
            } 
            console.log(`Adding ${e}`);
          })
    });
    
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        // var cleanedData = utils.dataPrep(answers)
        var markdown = utils.generateMarkdown(answers);
        console.log(markdown)
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
