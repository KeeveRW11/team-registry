const fs = require('fs');
const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');

const prompts = () => {
    return inquirer.prompt(
    [
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the manager? ()Required',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Manager,please provide your ID number to continue ()Required',
            validate: manageIDInput => {
                if (manageIDInput) {
                    return true;
                } else {
                    console.log('Please enter your ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Manager,please provide your email address to continue ()Required',
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office? ()Required',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee!');
                    return false;
                }
            }
        },
    ])

    
};



prompts();