// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
* [Installation](#installation)  
* [Usage](#usage)  
* [License](#license)  
* [Contribution](#contribution)  
* [Testing](#testing)  
* [Questions](#questions)
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## License
  Noteice: This project is under the ${data.license}
  
  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Questions
  If you have additional questions you can contact me directly via...  
  GitHub: (github.com/${data.github})   
  Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
