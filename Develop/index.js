const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

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
    choices: [
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "Creative Commons License",
      "Eclipse License",
      "GNU GPL v3 License",
      "GNU GPL v2 License",
      "The MIT License",
      "Mozilla Public License 2.0",
      "The Perl License",
      "The Unlicense License",
    ],
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

// function to initialize program
const init = () => {
  return inquirer.prompt(questions);
};

// function call to initialize program
init().then((answers) =>
  fs.writeFile("./README.md", generateMarkdown(answers), function (err) {
    if (err) {
      return console.log(err);
    }
  })
);
