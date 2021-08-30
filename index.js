var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  {type : "input"
  message : "ReadMe Generator"
  name : "Project Title"
},
  {type : "input"
  message : "LATER"
  name : "Table Of Contnents"
},
  {type : "input"
  message : "NPM"
  name : "Installation"
},
  
  
    {type : "input",
    message: "What is your name?",
    name: "First & Last",
  },

    { type : "input",
    message: "What is your email?",
    name: "Email"
  },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });