//put inquirer declaration at the top
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
// array of questions for user
const questions = [
    //These are the questions that are going to be asked in the terminal and put into the readme file
    {
        type: 'input',
        message: 'name the document',
        name: 'title'
    },
    {
        type: 'input',
        message: 'give it a description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'what are the different sections of the document',
        name: 'tableOfContents'
    },
    {
        type: 'input',
        message: 'type in installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'put usage information here',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'license information type goes here',
        name: 'license',
    },
    {
        type: 'input',
        message: 'type in your github username',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'type in your email',
        name: 'email'
    },
    {
        type: 'input',
        message: 'put badge information here',
        name: 'badgeInfo'
    },
    {
        type: 'input',
        message: 'Any testing information can go here',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Further questions and answers',
        name: 'questions'
    }
];

// function to write README file using 'fs'
// this is what is used to write the answers to the questions to the readme file for final display
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data,function (err){
        if (err){
            console.log(err.message);
        }else {
            console.log("readme created");
        }
    });


}

// function to initialize program
//this sections covers what is seen in the terminal for the user. The answers are plugged into the file system logic above
function init() {
    inquirer.prompt(questions).then((response)=>{
        console.log(response);
        //template literal is built here using a function `` and ${name}
          var params =   
          `## ${response.title}
## description
${response.description}
## Table of Contents
${response.tableOfContents}
## Installation
${response.installation}
## Usage
${response.usage}
## License
${response.license}
## Github ID
(${response.gitHub}) 
## Tests
${response.tests}
## Questions
${response.questions}
## Badges
${response.badgeInfo}
![](${response.badgeInfo})
            
            `;
        //call write to file here
        writeToFile('README.md', params);
    });
}

// function call to initialize program
init();
