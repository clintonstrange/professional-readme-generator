const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your Project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter the title of your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of the project? (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please provide a description of the project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "install",
    message:
      "What are the installation instructions for the project? (Required)",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log(
          "Please provide installation instructions for the project!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "How can this project be used? (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide usage information for the project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "How can other developers contribute to the project? (Required)",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log(
          "Please provide details on how other developers can contribute to the project!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "How can the project be tested? (Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please provide details on how the project can be tested!");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please choose a license for the project",
    choices: ["L-1", "L-2", "L-3", "L-3", "L-4", "L-5", "L-6"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username? (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub Username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address? (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];

// function to write README file
// function writeToFile(data) {
//   const { writeFile } = require("./utils/generateMarkdown.js");
//   fs.writeFile("./README.md", generateMarkdown(data), err);
// }
// function to initialize program
const init = () => {
  return inquirer.prompt(questions);
};

function generateMarkdown(data) {
  return `# ${data.title}
    
    ## Description
    ### ${data.description}
  
    ## Installation Instructions
    ### ${data.install}
  
    ## Usage Information
    ### ${data.usage}
  
    ## Contribution Guidelines
    ### ${data.contribution}
  
    ## Test Instructions
    ### ${data.test}
  
    ## License
    ### ${data.license}
  
    ## GitHub Username
    ### ${data.github}
  
    ## Contact
    ### If you have any additional questions, please contact me directly at ${data.email}.
    
    ## Table of Contents
  
  `;
}

// function call to initialize program
init().then((answers) =>
  fs.writeFile("./README.md", generateMarkdown(answers), function (err) {
    if (err) {
      return console.log(err);
    }
  })
);
