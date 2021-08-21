const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
 
  
  const generateTeam = (teamArray) => {
    
    let generatedHtml = '';

    teamArray.forEach((element) => {
      if (element instanceof Manager) {
        generatedHtml += `
          <div class="col">
          <div class='card' style='width: 18rem;'>
          <div class ='card-header' style="background-color:lightblue">
          ${element.name}
          </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>${element.getRole()}</li>
          <li class='list-group-item'>${element.id}</li>
          <li class='list-group-item'><address><a href="mailto:${element.email}">${element.email}</a></address></li>
          <li class='list-group-item'>${element.getOfficeNumber()}</li>
        </ul>
        </div>
        </div>
        `; 
      } else if (element instanceof Engineer) {
        generatedHtml += `
        <div class="col">
        <div class='card' style='width: 18rem;'>
        <div class='card-header' style="background-color:lightblue">
        ${element.name}
        </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>${element.getRole()}</li>
          <li class='list-group-item'>${element.id}</li>
          <li class='list-group-item'><address><a href="mailto:${element.email}">${element.email}</a></address></li>
          <li class='list-group-item'><a href="https://github.com/${element.getGithub()}">${element.getGithub()}</a></li>
          </ul>
        </div>
        </div>
        `;
      } else if (element instanceof Intern) {
        generatedHtml += `
        <div class="col">
        <div class='card' style='width: 18rem;'>
        <div class='card-header' style="background-color:lightblue">
        ${element.name}
        </div>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>${element.getRole()}</li>
          <li class='list-group-item'>${element.id}</li>
          <li class='list-group-item'><address><a href="mailto:${element.email}">${element.email}</a></address></li>
          <li class='list-group-item'>${element.getSchool()}</li>
          </ul>
        </div>
        </div>
        `;
      }
    })
    
      return generatedHtml;
   

  };

  const htmlTemplate = (teamArray) => {
  return (
  `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3" style="background-color:brown;">
        <h1 class="page-title text-secondary bg-dark py-2 px-3" style="background-color:red">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
    <div class="row">
    ${generateTeam(teamArray)}
    </div>
    </main>
    </body>
    </html>
    `
  )
    ;
     
  }
  // generatedHtml += htmlTemplate;
  
  // generatedHtml += generateTeam;
  
  module.exports = htmlTemplate;