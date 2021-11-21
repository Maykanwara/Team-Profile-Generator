const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const fs = require('fs');
const util= require('until');

const mkdirAsync = until.promisifify(fs.mkdir);
const writeFileAsync = until.promisifify(fs.writeFile);

const OUTPUT_DIR = path.resolve(_dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');
const Employee = require('./lib/Employee');
const inquirer = require('inquirer');

const questions = [
    { name:'id' , message:"What's the employee's id" },
    { name:'name' , message:"What's the employee's name" },
    { name:'email' , message:"What's the employee's email" },
    {
        type: 'list',
        name: 'role',
        message: "What's the employee's role",
        choices: ['Manager' , 'Engineer' , 'Intern'],
    },
];


const questionForManager = [
    { name: 'officeNumber' , message: "What's the manager's officeNumber" },
];


const questionForEngineer = [
    { name: 'github' , message: "What's the Engineer's github" },
];


const questionForIntern = [
    { name: 'school' , message: "What's the Intern's school" },
];


const confirm = [
    {
        type: 'confirm' ,
        name:'adding' ,
        message: 'Do you want to put more employee information' ,
    },
];


const init = async() => {
    const employees = [];
    let addmore = true;


    while (addMore) {
        
    const { id, name, role } = await inquirer.prompt(questions);

    if(role ==='Manager') {
        const { officeNumber } = await inquirer.prompt(questionForManager);


        Employee.push(new Manager(id, name, email, officeNumber));
    } else if (role ==='Engineer') {
        const {github } = await inquirer.prompt(questionForEngineer);


        Employee.push(new Engineer (id, name, email, github));
    } else {
        const {school } = await inquirer.prompt(questionForIntern);


        Employee.push(new Intern(id, name, email, school));
    }

    const {adding} = await inquirer.prompt(confirm);

    addMore = adding;
}




const html = render(employees);

if(!fs.existsSync(outputPath)) {
    const error = await mkdirAsync(OUTPUT_DIR);
    error && console.error(error);
}


const error = await writeFileAsync(outputPath, html);
error && console.error(error);
};

init();






  
    
   

    




















