//function to prep the data for README
function dataPrep (data){
  if (data.toc){
  data.toc = [
    `* [Installation](#installation)`,
   `* [Usage](#usage)`,
   `* [Credits](#credits)`,
   `* [License](#license)`,
   `* [Contributions](#contributing)`,
   `* [Tests](#tests)`
   ]
}else{

}
return data
}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log("creating markdown on",data)
  // function tocCheck(){
  //   if(data.toc){
  //     return `##Table of Contents
  //     ${data.toc}
  //     `
  //   }
  // }
  
  return `# ${data.title}## Description`
  // ${data.desc}
  // ## Table of Contents 
  // ## Install
  // ${data.install}
  // ## Usage
  // ${data.usage}
  // ## Credits
  // ${data.credits}
  // ## License
  // ${license}
  // ## Contributing
  // ${data.contributing}
  // ## tests
  // ${tests}
}

module.exports = {generateMarkdown, dataPrep}

