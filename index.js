//for user prompts in CLI
const inquirer = require('inquirer')
//for exporting files
const fs = require("fs");
//would be used if need to grab repo name(aka directory name)
// const path = require('path');
//for generating markdown
const md = require("./utils/generateMarkdown.js")
//for list of user prompts
const {questions} = require("./utils/questions.js")
//for changing the input license into a shield
const license = require("./utils/license.js")

// function to initialize program
const init = () => {
    //setup the user inputs
    inquirer
    .prompt(questions)
    //once user input comes in then do work
    .then(answers => {
        //would use this to pass into function for dynamic shield generation and github stats  
        //const repoName = path.basename(process.cwd());
        //generate the shield form input
        const shield = license.makeShield(answers.license)
        //generate markdown by giving it the shield and the answers
        const markdown = md.generateMarkdown(answers, shield);
        //return the generated markdown
        return markdown
    })
    //once the markdown is done cooking, then write the file
    .then((res) => {
        //take the response(markdown) and write it to README
        fs.writeFileSync("README_staging.md", res)
    }).catch(error => console.log(error));

}

// function call to initialize program
init();
