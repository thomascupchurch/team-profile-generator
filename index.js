const fs = require("fs");
const inquirer = require("inquirer");
const generateTeam = require("./utils/generate-site");

const { profile } = require("console");
const { number } = require("yargs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = [];

console.log(`
    =================
    Create a new Team
    =================
    `);
const userPrompt = async () => {
  const answers = await inquirer
        .prompt({
            type: "list",
            name: "userRoleInput",
            message: "What role would you like to add?",
            choices: ["engineer", "intern", "finish"],
        });
    if (answers.userRoleInput == "engineer") {
        engineerQuestions();
    } else if (answers.userRoleInput == "intern") {
        internQuestions();
    } else {
        console.log(teamArray);
        quitFunction();
    }
};

const managerQuestions = async () => {
  const answers = await inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of the manager of this team?",
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
                type: "input",
                name: "managerId",
                message: "What is the ID for the manager?",
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
                type: "input",
                name: "managerEmail",
                message: "What is the email address for this manager?",
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
                type: "input",
                name: "managerPhone",
                message: "What is the ten digit office phone number for the manager?",
                // validate: managerPhoneInput => {
                //     if (managerPhoneInput.length === 10) {
                //       return true;
                //     } else {
                //       console.log('You need to enter a ten-digit (no other symbols or characters) office phone number.');
                //       return false;
                //     }
                // }
            },
        ]);

    const newManager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerPhone
    );

    console.log(newManager);
    teamArray.push(newManager);
    console.log("Manager Added!");
    userPrompt();
};

const engineerQuestions = async () => {
  const engAnswers = await inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the name of this engineer?",
                validate: (engineerNameInput_1) => {
                    if (engineerNameInput_1) {
                        return true;
                    } else {
                        console.log("You need to enter the name of an engineer.");
                        return false;
                    }
                },
            },

            {
                type: "input",
                name: "engineerId",
                message: "What is the Id for this engineer?",
                validate: (engineerIdInput_1) => {
                    const parsedId = parseInt(engineerIdInput_1);
                    if (engineerIdInput_1 && parsedId == engineerIdInput_1) {
                        return true;
                    } else {
                        console.log("You need to enter an engineer ID!");
                        return false;
                    }
                },
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is the email address for this engineer?",
                validate: (engineerEmailInput_1) => {
                    if (engineerEmailInput_1.includes("@")) {
                        return true;
                    } else {
                        console.log("You need to enter a valid email address.");
                        return false;
                    }
                },
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What is the github username for this engineer?",
                validate: (engineerGithubInput_1) => {
                    if (engineerGithubInput_1) {
                        return true;
                    } else {
                        console.log("You need to enter a github username.");
                        return false;
                    }
                },
            },
        ]);
    const newEngineer = new Engineer(
        engAnswers.engineerName,
        engAnswers.engineerId,
        engAnswers.engineerEmail,
        engAnswers.engineerGithub
    );
    teamArray.push(newEngineer);
    console.log("Engineer Added!");
    userPrompt();
};

const internQuestions = async () => {
  const intAnswers = await inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the name of this intern?",
                validate: (engineerNameInput_1) => {
                    if (engineerNameInput_1) {
                        return true;
                    } else {
                        console.log("You need to enter the name of an intern.");
                        return false;
                    }
                },
            },

            {
                type: "input",
                name: "internId",
                message: "What is the Id for this intern?",
                validate: (internIdInput_1) => {
                    const parsedId = parseInt(internIdInput_1);
                    if (internIdInput_1 && parsedId == internIdInput_1) {
                        return true;
                    } else {
                        console.log("You need to enter an intern ID!");
                        return false;
                    }
                },
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is the email address for this intern?",
                validate: (internEmailInput_1) => {
                    if (internEmailInput_1.includes("@")) {
                        return true;
                    } else {
                        console.log("You need to enter a valid email address.");
                        return false;
                    }
                },
            },

            {
                type: "input",
                name: "internSchool",
                message: "What school is this intern from?",
                validate: (internSchoolInput_1) => {
                    if (internSchoolInput_1) {
                        return true;
                    } else {
                        console.log("You need to enter a github username.");
                        return false;
                    }
                },
            },
        ]);
    const newIntern = new Intern(
        intAnswers.internName,
        intAnswers.internId,
        intAnswers.internEmail,
        intAnswers.internSchool
    );
    teamArray.push(newIntern);
    console.log("Intern Added!");
    userPrompt();
    
};

const quitFunction = () => {
   
        // const generatePage = require("./src/page-template");
        const generatedHtml = require("./src/page-template");
        // console.log(teamArray);
        // console.log('got to quit function');
        const readyHtml = generatedHtml(teamArray);
        generateTeam.copyFile();
        generateTeam.writeFile(readyHtml);
      };


managerQuestions();

// .then(function(data) {
//     console.log(data);
//     const TeamArray = teamArray.push(data);
//     console.log(teamArray);

// })
