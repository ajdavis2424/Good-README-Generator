const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "Please provide a description of your project.",
  "How do you install your project?",
  "How do you intend for your project to be used?",
  "Who all has contributed to your project?",
  "How did you test your project?",
  "Please provide Instructions on how to use your project.",
  "What is your GitHub username",
  "What is your Email",
  "What licencing was used in your project",
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
        message: questions[],
        default: "Default Title",
      },
      {
        type: "input",
        name: "description",
        message: questions[],
        default: "Default Description",
      },
      {
        type: "input",
        name: "usage",
        message: questions[],
        default: "Default usage",
      },
      {
        type: "input",
        name: "Installation",
        message: questions[],
        default: "Default Install",
      },
      
      {
        type: "input",
        name: "test",
        message: questions[],
        default: "Default Test",
      },
      {
        type: "input",
        name: "instructions",
        message: questions[],
        default: "Default Instructions",
      },
      {
        type: "input",
        name: "contributors",
        message: questions[],
        default: "Default Contributors",
      },
      {
        type: "input",
        name: "username",
        message: questions[],
        default: "Default username",
      },
      {
        type: "input",
        name: "email",
        message: questions[],
        default: "Default Email",
      },
      {
        type: "list",
        name: "license",
        choices: ["MIT", "GNU GPLv3", "no license"],
        message: questions[],
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