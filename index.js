//put inquirer declaration at the top
const inquirer = require('inquirer');
const fs = require('fs');
// array of questions for user
const questions = [
    //change out message
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
        type: 'list',
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
        message: '',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'list',
        name: 'license'
    },
    {
        type: 'input',
        message: 'random',
        name: 'container'
    },
    {
        type: 'input',
        message: 'random',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'random',
        name: 'questions'
    },
];

// function to write README file using 'fs'
function writeToFile(fileName, data) {
    fs.writeFileSync(README.md,questions(response),function (err){
        if (){
            console.log(err.message);
        }else (){

        }
    });


}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response)=>{
        console.log(response);
        //template literal is built here using a function `` and ${name}
            `
            ###
            
            
            `
        //call write to file here
    });
}

// function call to initialize program
init();
