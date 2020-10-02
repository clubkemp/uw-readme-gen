// function to generate markdown for README
const generateMarkdown = (data, shield) => {
  
  //spread the data out for easy access
  const {title, description, install, usage, credits, license, contributing, tests, username, email } = data
  
  //template literal with variable interjections from the user input
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

  //return the markdown for use in index
  return markdown
}
//export the function
module.exports = {generateMarkdown}
