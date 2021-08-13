const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./lib/Generate');

const { profile } = require('console');
const { number } = require('yargs');

function generateProfile() {

    console.log(`
    =================
    Create a new Team
    =================
    `);

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the manager of this team?',
                validate: managerNameInput => {
                    if (managerNameInput) {
                      return true;
                    } else {
                      console.log('You need to enter a manager name!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the ID for the manager?',
                validate: managerIdInput => {
                    const parsedId = parseInt(managerIdInput);
                    if (managerIdInput && parsedId == managerIdInput) {
                      return true;
                    } else {
                      console.log('You need to enter a manager ID!');
                      return false;
                    }
                }
            }
        
        ])
}



generateProfile();



// new profile().generateProfile();