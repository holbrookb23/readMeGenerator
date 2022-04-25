// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input


const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the application?',

        },
        {
            type: "input",
            name: 'description',
            message: 'How would you describe your application?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How will the user install this application?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will the application be used?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: "what licenses does the application use",
            choices: [
                {
                    name: "MIT",
                    value: "mit"
                },
                {
                    name: "Apache 2.0",
                    value: "apache"
                },
                {
                    name: "IPL 1.0",
                    value: "ipl"
                },
                {
                    name: "GPL v3",
                    value: "gpl"
                },
                {
                      name: "PDDL",
                      value: "pddl"
                } 
            ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests can the user run for this application?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: function (input) {
                const valid = /^([\w\.-]+)@([\w\.-]+)\.([a-z\.]{2,6})$/.test(input);
                return valid || "please enter a valid email"
            }
        },
    ]);
    
};

// TODO: Create a function to write README file
function writeToFile(data) {
    
    questions(data)
        .then((answers) => fs.writeFileSync('newREADME.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to readme.md'))
        .catch((err) => console.error(err));
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
