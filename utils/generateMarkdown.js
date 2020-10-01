//function to prep the data for README
function dataPrep (data){
  if (data.toc){
  data.toc =`*[Installation](#installation)\r\n
    * [Usage](#usage)\r\n
    * [Credits](#credits)\r\n
    * [License](#license)\r\n
    * [Contributions](#contributing)\r\n
    * [Tests](#tests)`
   
}
return data
}

// function to generate markdown for README
const generateMarkdown = (data, repoName) => {
  
  console.log("creating markdown on", data, repoName)
  const {title, description, install, usage, credits, license, contributing, tests, username, email } = data
  
  const markdown = `# ${title}
  ![GitHub](https://img.shields.io/github/license/${username}/${repoName})
  ## Description 
  ${description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributions](#contributing)
  * [Tests](#tests)
  
  ## Installation 
  ${install}
  
  ## Usage
  ${usage}
  
  ## Credits
  ${credits}
  
  ## License
  ${license}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}
  
  ## Questions
  Have quesitons about this repo? Please reach out on github or via email
    * [${username}](https://github.com/${username})
    * ${email}`

  console.log("Trying to return", markdown)
  return markdown
}

module.exports = {generateMarkdown, dataPrep}
