// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  -[description](#description)
-[install](#install)
-[usage](#usage)
-[contribution](#contribution)
-[test](#test)
-[licenses](#licenses)
-[github](#github)
-[contact](#contact)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.install}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## Test Instructions
  ${data.test}

  ## License
  ${data.license}

  ## GitHub Username
  ${data.github}

  ## Contact
  If you have any additional questions, please contact me directly at ${data.email}.
  
`;
}

module.exports = generateMarkdown;
