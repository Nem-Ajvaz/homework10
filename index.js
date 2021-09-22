const Manager = require("./src/newManager");
const Engineer = require("./src/newEngineer");
const Intern = require("./src/newIntern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const myTeamMembers = [];

function createTeam() {
  inquirer
    .prompt({
      type: "list",
      name: "addEmployee",
      messaage: "Please add an employee, or click done",
      choices: ["Manager", "Intern", "Engineer", "Done"],
    })
    .then((response) => {
      const employeeSelected = response.addEmployee;
      switch (employeeSelected) {
        case "Manager":
          managerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        case "Engineer":
          engineerQuestions();
          break;
        case "Done":
          console.log(myTeamMembers);
          buildTeam(myTeamMembers);
          break;
      }
    });
}

const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the manager's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID number: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email address: ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number:",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.id,
        response.email,
        response.name,
        response.officeNumber
      );
      myTeamMembers.push(manager);

      createTeam();
    });
};

const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the engineer's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the engineer's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the engineer's github url?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.id,
        response.email,
        response.name,
        response.github
      );
      myTeamMembers.push(engineer);
      createTeam();
    });
};

const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the intern's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the intern's id number: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the intern's email address: ",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's alma mater: ",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.id,
        response.email,
        response.name,
        response.school
      );
      myTeamMembers.push(intern);
      createTeam();
    });
};

const buildTeam = (teamMembers) => {
  const completedTeam = [];

  teamMembers.forEach((employee) => {
    myTeam = ``;
    switch (employee.constructor.name) {
      case "Manager":
        myTeam = `<div class="card m-2" style="width: 18rem">
          <div class="card-header bg-primary text-white">
            <h2 class="employeename text-center">${employee.getName()}</h2>
            <h2 class="roletype text-center">
              <i class="fas fa-mug-hot mr-2"></i>${employee.constructor.name}
            </h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="id list-group-item">ID: ${employee.getId()}</li>
            <li class="email list-group-item">
              Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
            </li>
            <li class="list-group-item">
              Office number: ${employee.getOffice()}
            </li>
          </ul>
        </div>`;

        break;
      case "Intern":
        myTeam = `<div class="card m-2" style="width: 18rem">
          <div class="card-header bg-primary text-white">
            <h2 class="name text-center">${employee.getName()}</h2>
            <h2 class="role text-center">
            <i class="fas fa-user-graduate mr-2"></i>${
              employee.constructor.name
            }
            </h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="id list-group-item">ID: ${employee.getId()}</li>
            <li class="email list-group-item">
              Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
            </li>
            <li class="list-group-item">School: ${employee.getSchool()}</li>
          </ul>
        </div>`;

        break;
      case "Engineer":
        myTeam = `<div class="card m-2" style="width: 18rem">
          <div class="card-header bg-primary text-white">
            <h2 class="name text-center">${employee.getName()}</h2>
            <h2 class="role text-center">
              <i class="fas fa-glasses mr-2"></i>${employee.constructor.name}
            </h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="id list-group-item">ID: ${employee.getId()}</li>
            <li class="email list-group-item">
              Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
            </li>
            <li class="number list-group-item">
              GitHub:
              <a
                href="https://github.com/${employee.getGithub()}"
                target="_blank"
                rel="noopener noreferrer"
              >${employee.getGithub()}
              </a>
            </li>
          </ul>
        </div>`;
        break;
    }

    completedTeam.push(myTeam);
  });

  generateHTML(completedTeam);
};

const generateHTML = (completedTeam) => {
  //appending html elements together before generating the file
  let docStart = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  
      <title>Team Profile Generator</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid bg-danger text-white text-center">
        <div class="container">
          <h1 class="display-4 font-weight-bold">My Team</h1>
        </div>
      </div>
      <div
        class="
          container
          d-flex
          flex-row flex-wrap
          w-75
          p-3
          justify-content-center
        "
      >`;

  let docEnd = `
      </div>
    </body>
  </html>
  `;

  for (let i = 0; i < completedTeam.length; i++) {
    docStart = docStart + completedTeam[i];
  }
  docStart = docStart + docEnd;

  fs.writeFile("./index.html", docStart, (err) => {
    if (err) throw err;
    console.log("Your file has been saved as: generatedIndex.html.");
  });
};

init = () => {
  createTeam();
};

init();
