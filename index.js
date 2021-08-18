const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./utils/generate-site');

const { profile } = require('console');
const { number } = require('yargs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];


console.log(`
    =================
    Create a new Team
    =================
    `)
    

const managerQuestions = () => {
    return (
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the manager of this team?',
                // validate: managerNameInput => {
                //     if (managerNameInput) {
                //       return true;
                //     } else {
                //       console.log('You need to enter a manager name!');
                //       return false;
                //     }
                // }
            },

            {
                type: 'input',
                name: 'managerId',
                message: 'What is the ID for the manager?',
                // validate: managerIdInput => {
                //     const parsedId = parseInt(managerIdInput);
                //     if (managerIdInput && parsedId == managerIdInput) {
                //       return true;
                //     } else {
                //       console.log('You need to enter a manager ID!');
                //       return false;
                //     }
                // }
            },

            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the email address for this manager?',
                // validate: managerEmailInput => {
                    
                //     if (managerEmailInput.includes('@')) {
                //       return true;
                //     } else {
                //       console.log('You need to enter a valid email address.');
                //       return false;
                //     }
                // }
            },

            {
                type: 'input',
                name: 'managerPhone',
                message: 'What is the ten digit office phone number for the manager?',
                // validate: managerPhoneInput => {
                    
                //     if (managerPhoneInput.length === 10) {
                //       return true;
                //     } else {
                //       console.log('You need to enter a ten-digit (no other symbols or characters) office phone number.');
                //       return false;
                //     }
                // }
            }
        ])

        .then((answers) => {
            const newManager = new Manager(
                answers.managerNameInput,
                answers.managerIdInput,
                answers.managerEmailInput,
                answers.managerOfficeNumberInput
            )

            teamArray.push(newManager);
            console.log('Manager Added!')
        }));
    };
    
    const engineerQuestions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of this engineer?',
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
                      console.log('You need to enter an engineer ID!');
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

        .then((engAnswers) => {
            const newEngineer = new Engineer(
                engAnswers.engineerNameInput,
                engAnswers.engineerIdInput,
                engAnswers.engineerEmailInput,
                engAnswers.engineerGithubInput
            )
            teamArray.push(newEngineer);
            console.log('Engineer Added!');
        })
        
    };


    const internQuestions = () => {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of this intern?',
                validate: engineerNameInput => {
                    
                    if (engineerNameInput) {
                      return true;
                    } else {
                      console.log('You need to enter the name of an intern.');
                      return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'internId',
                message: 'What is the Id for this intern?',
                validate: internIdInput => {
                    const parsedId = parseInt(internIdInput);
                    if (internIdInput && parsedId == internIdInput) {
                      return true;
                    } else {
                      console.log('You need to enter an intern ID!');
                      return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the email address for this intern?',
                validate: internEmailInput => {
                    
                    if (internEmailInput.includes('@')) {
                      return true;
                    } else {
                      console.log('You need to enter a valid email address.');
                      return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'internSchool',
                message: 'What school is this intern from?',
                validate: internSchoolInput => {
                    
                    if (internSchoolInput) {
                      return true;
                    } else {
                      console.log('You need to enter a github username.');
                      return false;
                    }
                }
            }
        ])

        .then((intAnswers) => {
            const newIntern = new Intern(
                intAnswers.internNameInput,
                intAnswers.internIdInput,
                intAnswers.internEmailInput,
                intAnswers.internGithubInput
            )
            teamArray.push(newIntern);
            console.log('Intern Added!');
        })
        .then(function() {
            const generatePage = require('./src/page-template');
            const generatedHtml = require('./src/page-template');
        })
        .then(function(teamArray) {
            console.log(teamArray);
            generateTeam.writeFile /*(JSON.stringify*/(generatedHtml)/*)*/;
        });
        
        
    }
  
    



    
    
       
    


        // .then(function(data) {
        //     console.log(data);
        //     const TeamArray = teamArray.push(data);
        //     console.log(teamArray);

        // })

        







