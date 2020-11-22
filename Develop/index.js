const inquirer = require("inquirer");

// const { writeFile } = require("./utils/generateMarkdown.js");

// array of questions for user
// const questions = [];

// function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
const init = () => {
  return inquirer.prompt([
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
        "What iare the installation instructions for the project? (Required)",
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
      name: "contribute",
      message: "How can other developers contribute to the project? (Required)",
      validate: (contributeInput) => {
        if (contributeInput) {
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
          console.log(
            "Please provide details on how the project can be tested!"
          );
          return false;
        }
      },
    },
    {
      type: "radio",
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
  ]);
};

// function call to initialize program
init();

// const promptUser = () => {
//     return inquirer.prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is your name? (Required)",
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter your name!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "github",
//         message: "Enter your GitHub Username? (Required)",
//         validate: (githubInput) => {
//           if (githubInput) {
//             return true;
//           } else {
//             console.log("Please enter your GitHub Username!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "confirm",
//         name: "confirmAbout",
//         message:
//           'Would you like to enter some information about yourself for an "About" section?',
//         default: true,
//       },
//       {
//         type: "input",
//         name: "about",
//         message: "Provide some information about yourself:",
//         when: ({ confirmAbout }) => {
//           if (confirmAbout) {
//             return true;
//           } else {
//             return false;
//           }
//         },
//       },

//       {
//         type: "input",
//         name: "github",
//         message: "Provide some information about yourself:",
//         when: ({ confirmAbout }) => {
//           if (confirmAbout) {
//             return true;
//           } else {
//             return false;
//           }
//         },
//       },
//     ]);
//   };

//   const promptProject = (portfolioData) => {
//     // If there's no 'projects' array property, create one
//     if (!portfolioData.projects) {
//       portfolioData.projects = [];
//     }

//     console.log(`
//     =================
//     Add a New Project
//     =================
//     `);
//     return inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "name",
//           message: "What is the name of your project? (Required)",
//           validate: (projectNameInput) => {
//             if (projectNameInput) {
//               return true;
//             } else {
//               console.log("Please enter the name of your project!");
//               return false;
//             }
//           },
//         },
//         {
//           type: "input",
//           name: "description",
//           message: "Provide a description of the project (Required)",
//           validate: (projectDescriptionInput) => {
//             if (projectDescriptionInput) {
//               return true;
//             } else {
//               console.log("Please enter a description of the project!");
//               return false;
//             }
//           },
//         },
//         {
//           type: "checkbox",
//           name: "languages",
//           message: "What did you build this project with? (Check all that apply)",
//           choices: [
//             "JavaScript",
//             "HTML",
//             "CSS",
//             "ES6",
//             "jQuery",
//             "Bootstrap",
//             "Node",
//           ],
//         },
//         {
//           type: "input",
//           name: "link",
//           message: "Enter the GitHub link to your project. (Required)",
//           validate: (githubLinkInput) => {
//             if (githubLinkInput) {
//               return true;
//             } else {
//               console.log("Please enter your the GitHub link to your project!");
//               return false;
//             }
//           },
//         },
//         {
//           type: "confirm",
//           name: "feature",
//           message: "Would you like to feature this project?",
//           default: false,
//         },
//         {
//           type: "confirm",
//           name: "confirmAddProject",
//           message: "Would you like to enter another project?",
//           default: false,
//         },
//       ])
//       .then((projectData) => {
//         portfolioData.projects.push(projectData);
//         if (projectData.confirmAddProject) {
//           return promptProject(portfolioData);
//         } else {
//           return portfolioData;
//         }
//       });
//   };

//   promptUser()
//     .then(promptProject)
//     .then(portfolioData => {
//       return generatePage(portfolioData);
//     })
//     .then(pageHTML => {
//       return writeFile(pageHTML);
//     })
//     .then(writeFileResponse => {
//       console.log(writeFileResponse);
//       return copyFile();
//     })
//     .then(copyFileResponse => {
//       console.log(copyFileResponse);
//     })
//     .catch(err => {
//       console.log(err);
//     });
