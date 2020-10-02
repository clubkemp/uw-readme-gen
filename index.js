const inquirer = require('inquirer')
const fs = require("fs");
const path = require('path');
const md = require("./utils/generateMarkdown.js")
const {questions} = require("./utils/questions.js")
const license = require("./utils/license.js")

// function to initialize program
const init = () => {
    inquirer
    .prompt(questions)
    .then(answers => {  
        const repoName = path.basename(process.cwd());
        const shield = license.makeShield(answers.license)
        const markdown = md.generateMarkdown(answers, repoName, shield);
        return markdown
    }).then((res) => {
        fs.writeFileSync("README.md", res)
    }).catch(error => {
        if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else when wrong
        }
    });

}

// function call to initialize program
init();
