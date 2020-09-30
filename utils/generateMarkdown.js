//function to prep the data for README
function dataPrep (data){
  if (data.toc){
  data.toc =`* [Installation](#installation)\r\n
    * [Usage](#usage)\r\n
    * [Credits](#credits)\r\n
    * [License](#license)\r\n
    * [Contributions](#contributing)\r\n
    * [Tests](#tests)`
   
}
return data
}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log("creating markdown on",data)
  // function tocCheck(){
  //   if(data.toc){
  //     return `##Table of Contents\r\n
  //     ${data.toc}
  //     `
  //   }else{
  //     return ``
  //   }
  // }
  var mdArray = []
  for(const item in data){
    console.log(item, data[item])
    if(item ==="title"){
    console.log("pushing title")
    mdArray.push(`# ${data[item]}\r\n`)
    console.log(mdArray)
    }else{
    console.log("pushing content");
    mdArray.push(`## ${item}\r\n`);
    mdArray.push(`${data[item]}\r\n`);
    }
  }
  console.log(mdArray)
  return mdArray
  

  
}

module.exports = {generateMarkdown, dataPrep}
