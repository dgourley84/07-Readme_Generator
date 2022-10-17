
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

  ${data.description}

  ${data.licenseBadge}

  ${data.repo}

  [A deployed version can be viewed here.](${data.URL})

  [The repository can be viewed here.](${data.GithubURL})

  ---
## Contents
1. [About](#about)
    1. [Usage](#usage)
    2. [User Story](#user-story)
    3. [Acceptance criteria](#acceptance-criteria)
    4. [Visuals](#visuals)
2. [Installation](#installation)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Authors and acknowledgment](#authors-and-acknowledgments)
7. [Questions](#questions)
---
## About

  ${data.description}

---
## Usage
  
  ${data.usage}

---
## User Story
  
---
## Acceptance Criteria
  
  
---
## Visuals:
  ![]()
---
## Installation:

  ${data.installation}

---
## License
  License used for this project - ${data.license}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
---

## Contributing:

  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  Following a code review, your feature will be merged.

---

## Tests:

  ${data.test}

---
## Authors & Acknowledgments

  ${data.author}

---

## Questions:
* GitHub Username: [${data.userName}](https://github.com/${data.userName})
* GitHub Email: (${data.userEmail})


`;
}

module.exports = generateMarkdown;
