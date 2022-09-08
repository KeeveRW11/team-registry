//Need to complete these five functions
const generateManagerCard = function (manager) {
  return`
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header p-3 mb-2 bg-primary text-white">
          <h3>${manager.name}</h3>
          <h4>Manager</h4><i class="bi bi-cup-hot"></i>
      </div>
      <div class="card-body">
          <p class="id">ID: ${manager.id}</p>
          <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="office">Office Number: ${manager.office}</p>
      </div>
    </div>
  </div>`
};

const generateEngineerCard = function (engineer) {
  return`
  <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header p-3 mb-2 bg-primary text-white">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><i class="bi bi-eyeglasses"></i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.employeeGithub}">${engineer.employeeGithub}</a></p>
        </div>
    </div>
  </div>`
};

const generateInternCard = function (intern) {
  return`
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header p-3 mb-2 bg-primary text-white">
          <h3>${intern.name}</h3>
          <h4>Intern</h4><i class="material-icons">assignment_ind</i>
      </div>
      <div class="card-body">
          <p class="id">ID: ${intern.id}</p>
          <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
          <p class="school">School: ${intern.school}</p>
      </div>
    </div>
  </div>`
};

//Need to create function to push array to the page
generateSite = (data) => {

  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole(); 

    if (role === 'Manager') {
      const managerCard = generateManagerCard(employee);

      pageArray.push(managerCard);
    }

    if (role === 'Engineer') {
      const engineerCard = generateEngineerCard(employee);

      pageArray.push(engineerCard);
    }

    if (role === 'Intern') {
      const internCard = generateInternCard(employee);

      pageArray.push(internCard);
    }
     
  }

  const employeeCards = pageArray.join('')

  const generateTeam = generateTeamRegistry(employeeCards); 
  return generateTeam;

}

const generateTeamRegistry = function (employeeCards) {
  return `  
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Bootstrap demo</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </head> 
    <body>
      <header>
      <nav class="navbar bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24">
          </a>
        </div>
      </nav>
      </header>
      <main class="container my-5">
        <div class="container flex-row justify-space-between align-center py-3">
        <div class="row justify-content-center" id="team-cards">
        <!--Team Cards-->
        ${employeeCards}
        </div>
        </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
    </body>
    </html>
  `;  
};
module.exports = generateSite; 