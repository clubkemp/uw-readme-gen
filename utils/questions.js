//array of questions for inquirer prompt
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
        choices:["MIT", "GPLv3", "GPL", "CC-0"]

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

//export prompts
module.exports = {
    questions:questions
}