const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "Please provide a description of your project.",
  "How do you install your project?",
  "How do you intend for your project to be used?",
  "What licencing was used in your project",
  "Who all has contributed to your project?",
  "How did you test your project?",
  "Please provide Instructions on how to use your project.",
  "What is your GitHub username",
  "What is your Email",
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) throw error;
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
        default: "Default Title",
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
        default: "Default Description",
      },
      {
        type: "input",
        name: "Installation",
        message: questions[2],
        default: "Default Install",
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
        default: "Default usage",
      },
      {
        type: "list",
        name: "license",
        choices: ["MIT", "GNU GPLv3", "no license"],
        message: questions[4],
      },
      {
        type: "input",
        name: "contributors",
        message: questions[5],
        default: "Default Contributors",
      },
      {
        type: "input",
        name: "test",
        message: questions[6],
        default: "Default Test",
      },
      {
        type: "input",
        name: "instructions",
        message: questions[7],
        default: "Default Instructions",
      },
      {
        type: "input",
        name: "username",
        message: questions[8],
        default: "Default username",
      },
      {
        type: "input",
        name: "email",
        message: questions[9],
        default: "Default Email",
      },
    ])
    .then(function (response) {
      const markDown = generateMarkdown(response);
      writeToFile("ReadMe2.md", markDown);
    });
}

// function call to initialize program
init();

















// comment out my intital start code
// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   {type : "input"
//   message : "ReadMe Generator"
//   name : "Project Title"
// },
//   {type : "input"
//   message : "LATER"
//   name : "Table Of Contnents"
// },
//   {type : "input"
//   message : "NPM"
//   name : "Installation"
// },
  
  
//     {type : "input",
//     message: "What is your name?",
//     name: "First & Last",
//   },

//     { type : "input",
//     message: "What is your email?",
//     name: "Email"
//   },
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });