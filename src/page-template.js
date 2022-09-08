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
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
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
          <h4>Intern</h4><i class="bi bi-mortarboard"></i>
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
      <title>Keeve Corp Team Registry</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    </head> 
    <body>
      <header>
      <nav class="bg-danger p-3 mb-2 bg-danger text-white text-center">
        <div class="container text-center">
          <div class="text-center">
            <h1>Keeve Corp Team Registry</h1>
          </div>      
          <a class="p-3 mb-2 bg-danger text-white" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-heart" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Z"/>
          <path d="M3 1.5h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"/>
          <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.31 8 6.982Z"/>
          </svg>
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