const inquirer = require('inquirer');

// questions for inquirer
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select your desired logo shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape?'
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What would you like to name your logo'
    },
];


init();