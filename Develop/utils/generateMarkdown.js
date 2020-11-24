// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  [![License](https://img.shields.io/badge/License-${data.license}-informational.svg)](https://opensource.org/licenses/Apache-2.0)
  
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
  Notice: This project is under the ${data.license}
  
  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Questions
  If you have additional questions you can contact me directly via...  
  Go to my [GitHub Page](github.com/${data.github})    
  Email me at ${data.email}
  
`;
}

module.exports = generateMarkdown;
