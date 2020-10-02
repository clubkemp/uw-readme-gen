// function to generate markdown for README
const generateMarkdown = (data, repoName, shield) => {
  
  console.log("creating markdown on", data, repoName)
  const {title, description, install, usage, credits, license, contributing, tests, username, email } = data
  
  const markdown = `# ${title}
  ${shield}
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

module.exports = {generateMarkdown}
