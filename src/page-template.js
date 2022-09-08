//Need to complete these five functions
const generateManagerCard = function (manager) {
  return`
  <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>${manager.name}</h3>
          <h4>Manager</h4><i class="material-icons">content_paste</i>
      </div>
      <div class="card-body">
          <p class="id">ID: ${manager.id}</p>
          <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="office">Office Number: ${manager.officeNumber}</p>
      </div>
  </div>
</div>`
};
/*
const generateEngineerCard = function (engineer) {
  return``
};

const generateInternCard = function (intern) {
  return``
};*/
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
/*
    if (role === 'Engineer') {
      const engineerCard = generateEngineerCard(employee);

      pageArray.push(engineerCard);
    }

    if (role === 'Intern') {
      const internCard = generateInternCard(employee);

      pageArray.push(internCard);
    }
*/      
  }

  const employeeCards = pageArray.join('')

  const generateTeam = generateTeamRegistry(employeeCards); 
  return generateTeam;

}
const generateTeamRegistry = function (employeeCards) {
  return `  
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>  
    <body>
      <header>
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
              Bootstrap
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
    </body>
    </html>
  `;  
};
module.exports = generateSite; 