const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require('fs');
const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');

const teamArray = [];

const promptsManager = () => {
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
            name: 'managerId',
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
        }       
    ])
    .then(managerInfo => {
        const { managerName, managerId, managerEmail, office } = managerInfo;
        const manager = new Manager (managerName, managerId, managerEmail, office);

        teamArray.push(manager);
        console.log(manager);
    })
};
    
const promptsEmployee = () => {
    console.log(`
  =================
  Add a New Employee
  =================  
  `);      
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is the name of the employee? ()Required',
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Manager,please provide the ID number for the employee to continue ()Required',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter the ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Manager,please provide the email address for the employee to continue ()Required',
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true;
                } else {
                    console.log('Please enter email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeGithub',
            message: 'Kindly provide the Github profile link for the employee to continue ()Required',
            when: (input) => input.role === "Engineer",
            validate: employeeGithubInput => {
                if (employeeGithubInput) {
                    return true;
                } else {
                    console.log('Please enter Github!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please provide the name of the school the intern attended. ()Required',
            when: (input) => input.role === "Intern",
            validate: employeeSchool => {
                if (employeeSchool) {
                    return true;
                } else {
                    console.log('Please enter school name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(employeeInfo => {
        const { employeeName, employeeId, employeeEmail, employeeGithub, internSchool, addAnotherEmployee} = employeeInfo;
        const employee;

        
    })
}
/*
function pageGenerator () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}*/
promptsManager()
    .then(promptsEmployee);