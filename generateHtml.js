var team = [{name: 'edward'}, {name: 'ethan'}]
var fs = require("fs");
const Intern = require("./lib/Intern");
const Manager = require("./lib/manager");
function generateHtml(team) {
//console.log(team)

var cards = []

for (let index = 0; index < team.length; index++) {
let card = '';
if(team[index].role=== 'Engineer'){
    card = `
    <div class="card-top">
    <h1> My name is  ${team[index].name} </h1>
    </div>

    <p>My email is ${team[index].email}</p>
    <p>My id is ${team[index].id}</p>
    <p>My role is ${team[index].role}</p>
    <p>My Github is ${team[index].github}
        `
}
if(team[index].role=== 'Intern'){
    card = `
    <h1> My name is  ${team[index].name} </h1>
    <p>My email is ${team[index].email}</p>
    <p>My id is ${team[index].id}</p>
    <p>My role is ${team[index].role}</p>
    <p>My school is ${team[index].school}
        `
}
if(team[index].role=== 'Manager'){
    card = `
    <h1> My name is  ${team[index].name} </h1>
    <p>My email is ${team[index].email}</p><a href = "mailto: ${team[index].email}">Send Email</a>
    <p>My id is ${team[index].id}</p>
    <p>My role is ${team[index].role}</p>
    <p>My office number is ${team[index].officeNumber}
        `
}
    


    cards.push(card)

    
}

var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${cards}
</body>
</html>
`

fs.writeFile('test.html', html, function(err) {
console.log(err);
})
return html
}

module.exports = generateHtml
