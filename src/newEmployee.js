const inquirer = require("inquirer");
validateInput = (input) => {
  // input ? true : "dont leave me blank :(";
  if (input) {
    return true;
  }
  return "dont leave me blank :(";
};
class Employee {
  constructor(id, email, name) {
    this.id = id;
    this.email = email;
    this.name = name;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this;
  }
}

module.exports = Employee;
