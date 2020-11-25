// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  
  [![License](https://img.shields.io/badge/License-${data.license}-informational.svg)](https://opensource.org/licenses/Apache-2.0)
  
  ## Description
  ${data.description}

  ## Table of Contents
* [Installation](#installation)  
* [Usage](#usage)  
* [License](#license)  
* [Contributing](#contributing)  
* [Tests](#tests)  
* [Questions](#questions)
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## License
  Licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you have additional questions you can contact me directly via...  
  GitHub: [${data.github}](https://www.github.com/${data.github})    
  Email me additional questions at ${data.email}
`;
}

module.exports = generateMarkdown;
