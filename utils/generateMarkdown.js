// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Licensing: 
  [![license](https://img.shields.io/badge/license-${data.license}-green)](https://shields.io)

  ##Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ##License: 
  ${data.license}

  ## Contributing: 
  ${data.contributing}

  ##Tests
  ${data.tests}

  ## Questions
  - Visit my GitHub: [${data.username}](https://github.com/${data.username})
  - Email me with any additional questions: ${data.email}
`;
}

module.exports = generateMarkdown;
