const fs = require('fs');
const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');

const prompts = () => {
    return inquirer.prompt(
    [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your employee? ()Required',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee!');
                    return false;
                }
            }
        },
    ]

    )
};

prompts();