class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        

    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return {
            id:this.id
        };
    }

    getEmail () {
        return {
            email: this.email
        };
    }

    getRole () {
        return `Employee`
    }
    /*function renderLicenseLink(license) {
        switch (license) {
          case "Manager":
            return "Manager"; 
          case "Engineer":
            return "Engineer";
          case "Intern":
            return "Intern"; 
          default:
            return "";
        }   */
}

module.exports = Employee;