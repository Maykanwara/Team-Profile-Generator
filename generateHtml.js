var team = [{ name: "edward" }, { name: "ethan" }];
var fs = require("fs");
const Intern = require("./lib/Intern");
const Manager = require("./lib/manager");
function generateHtml(team) {


  var cards = [];

  for (let index = 0; index < team.length; index++) {
    let card = "";
    if (team[index].role === "Engineer") {
      card = `<div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">Edward</h2>
        <h3 class="card-title">
          <i class="fas fa-glasses mr-2"></i>Engineer
        </h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: 1</li>
          <li class="list-group-item">
            Email:
            <a href = "mailto: seattlehomie49@yahoo.com">seattlehomie49@yahoo.com</a>
          </li>
          <li class="list-group-item">
            GitHub:
            <a
              href="https://github.com/Maykanwara/Team-Profile-Generator.git"
              target="_blank"
              rel="noopener noreferrer"
              >maykanwara</a
            >
          </li>
        </ul>
      </div>
    </div>`;
    }
    

    if (team[index].role === "Manager") {
      card = `<div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">Kanwara</h2>
          <h3 class="card-title">
            <i class="fas fa-mug-hot mr-2"></i>Manager
          </h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: 2</li>
            <li class="list-group-item">
              Email:
              <a href="mailto:maykanwara@gmail.com">maykanwara@gmail.com</a>
            </li>
            <li class="list-group-item">Office number: 1</li>
          </ul>
        </div>
      </div>`;
    }


    if (team[index].role === "Intern") {
        card =  `<div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">Ethan</h2>
          <h3 class="card-title">
            <i class="fas fa-user-graduate mr-2"></i>Intern
          </h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: 3</li>
            <li class="list-group-item">
              Email:
              <a href ="mailto: kanwara_p@yahoo.com">kanwara_p@yahoo.com</a>
            </li>
            <li class="list-group-item">School: UW</li>
          </ul>
        </div>
      </div>`;
    }

    

    cards.push(card);
  }

  var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Document</title>
</head>
<body>
<div class="container">
<div class="row">
  <div class="team-area col-12 d-flex justify-content-center">
    ${cards.join("")}
    </div>
      </div>
    </div>
</body>
</html>
`;

  fs.writeFile("output/test.html", html, function (err) {
    console.log(err);
  });
  return html;
}

module.exports = generateHtml;
