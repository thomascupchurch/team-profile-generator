const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./utils/generate-site');

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
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the email address for this manager?',
                validate: managerEmailInput => {
                    
                    if (managerEmailInput.includes('@')) {
                      return true;
                    } else {
                      console.log('You need to enter a valid email address.');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerPhone',
                message: 'What is the ten digit office phone number for the manager?',
                validate: managerPhoneInput => {
                    
                    if (managerPhoneInput.length === 10) {
                      return true;
                    } else {
                      console.log('You need to enter a ten-digit (no other symbols or characters) office phone number.');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the first engineer?',
                validate: engineerNameInput => {
                    
                    if (engineerNameInput) {
                      return true;
                    } else {
                      console.log('You need to enter the name of an engineer.');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the Id for this engineer?',
                validate: engineerIdInput => {
                    const parsedId = parseInt(engineerIdInput);
                    if (engineerIdInput && parsedId == engineerIdInput) {
                      return true;
                    } else {
                      console.log('You need to enter a manager ID!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the email address for this engineer?',
                validate: engineerEmailInput => {
                    
                    if (engineerEmailInput.includes('@')) {
                      return true;
                    } else {
                      console.log('You need to enter a valid email address.');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the github username for this engineer?',
                validate: engineerGithubInput => {
                    
                    if (engineerGithubInput) {
                      return true;
                    } else {
                      console.log('You need to enter a github username.');
                      return false;
                    }
                }
            }
            
        
        ])
}



generateProfile();



// new profile().generateProfile();