const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const util = require("util");
const employeeArray = [];

const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require('./lib/htmlRenderer');
const makeHtml = require('./generateHtml.js');
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");

// const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github, answers.role)

const questions = [
  { name: "id", message: "What's the employee's id" },
  { name: "name", message: "What's the employee's name" },
  { name: "email", message: "What's the employee's email" },
  {
    type: "list",
    name: "role",
    message: "What's the employee's role",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const questionForManager = [
  { name: "officeNumber", message: "What's the manager's officeNumber" },
];

const questionForEngineer = [
  { name: "github", message: "What's the Engineer's github" },
];

const questionForIntern = [
  { name: "school", message: "What's the Intern's school" },
];

const confirm = [
  {
    type: "confirm",
    name: "adding",
    message: "Do you want to put more employee information",
  },
];

let addmore = true;
const init = async () => {
  const employees = [];

  const { id, name, role, email } = await inquirer.prompt(questions);

  if (role === "Manager") {
    const { officeNumber } = await inquirer.prompt(questionForManager);

    employeeArray.push(new Manager(id, name, email, officeNumber));
  } else if (role === "Engineer") {
    const { github } = await inquirer.prompt(questionForEngineer);
    console.log(github);

    employeeArray.push(new Engineer(id, name, email, github));
  } else {
    const { school } = await inquirer.prompt(questionForIntern);

    employeeArray.push(new Intern(id, name, email, school));
  }

  const { adding } = await inquirer.prompt(confirm);
  console.log(adding);
  addMore = adding;
  if (adding) {
    init();
    // console.log(employeeArray);

  } else {
    const html = makeHtml(employeeArray);
    console.log(html)
    // if addMore = false loop over employeeArray
    //display to indexed.html
    // if (!fs.existsSync(outputPath)) {
    //   const error = await mkdirAsync(OUTPUT_DIR);
    //   error && console.error(error);
    // }

    // const error = await writeFileAsync(outputPath, html);
    // error && console.error(error);
  }

  // while addMore is true
};

init();
