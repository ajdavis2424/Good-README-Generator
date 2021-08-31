// function to generate markdown for README
function generateMarkdown(data) {
    let licenseTxt = "";
    let licenseBad = "";
    if (data.license === "MIT") {
      licenseBad =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
      licenseTxt = "This project is licensed under the MIT License";
    } else if (data.license === "GNU GPLv3") {
      licenseBad =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  
      licenseTxt = "This project is licensed under the GNU GPLv3 license ";
    } else if (data.license === "no license") {
      licenseBad = "no license";
      licenseTxt = "no license";
    }
    return `# ${data.title}
    ## Description
    ${data.description}
    ## Installation
    ${data.Installation}
    ## Usage
    ${data.usage}
    ## License
    ${licenseTxt}
    ${licenseBad}
    ${data.license}
    
    ## Contributing
    ${data.contributors}
    ## Questions
    Questions regarding this project:
    GitHub profile: https://github.com/${data.username}
    Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;