
const db =require("./assets/index")
const connection = require("./assets/connection")

// const mysql = require('mysql');
const inquirer = require("inquirer");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "sawyerROCK87",
//     database: "employees_db"
// });

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
//     askQuestions();
// });

function askQuestions() {
    inquirer.prompt({
        message: "what would you like to do?",
        type: "list",
        choices: [
            "view all employees",
            "view all departments",
            "add employee",
            "add department",
            "add role",
            "update employee role",
            "remove employee",
            "remove department",
            "remove role",
            "QUIT"
        ],
        name: "choice"
    }).then(answers => {
        console.log(answers.choice);
        switch (answers.choice) {
            case "view all employees":
                viewEmployees()
                break;

            case "view all departments":
                viewDepartments()
                break;

            case "add employee":
                addEmployee()
                break;

            case "add department":
                addDepartment()
                break;

            case "add role":
                addRole()
                break;

            case "update employee role":
                updateEmployeeRole();
                break;

            case "remove employee":
                removeEmployee();
                break;
                
            case "remove department":
                removeDepartment();
                break;
                
            case "remove role":
                removeRole();
                break;

            default:
                connection.end()
                break;
        }
    })
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        askQuestions();
    })
}

function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        askQuestions();
    })
}

function addEmployee() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employees role ID"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employees manager's ID?"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.table("Employee added successfully!");
            askQuestions();
        })
    })
}

function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What department do you want to add?"
    }, ]).then(function(res) {
        connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.table("Department added successfully!");
            askQuestions();
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title"
        }, {
            message: "enter salary:",
            type: "number",
            name: "salary"
        }, {
            message: "enter department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (response) {
        connection.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
            console.table(data);
        })
        askQuestions();
    })

}


    // inquirer.prompt([
    //     {
    //         message: "What is the first name of the employee you want to update?",
    //         type: "input",
    //         name: "first"
    //     }, 
    //     {
    //         message: "What is the last name of the employee you want to update?",
    //         type: "input",
    //         name: "last"
    //     },
    //        {
    //         message: "enter the new role ID:",
    //         type: "number",
    //         name: "role_id"
    //     }
    // ]).then(function (response) {
    //     connection.query("UPDATE employee SET role_id = ? WHERE (first_name, last_name) = (?,?)", [response.role_id, response.first, response.last], function (err, data) {
    //         console.table(data);
    //     })

async function updateEmployeeRole() {
    const employees = await db.findAllEmployees()
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        value: id, name: `${first_name} ${last_name}`      
      }));
        // console.table(employees);
        inquirer.prompt([
    {
      type: 'list',
      name: 'emp',
      message: 'Which employee would you like to update?',
      choices: employeeChoices
    },
    
    {
      message: "enter the new role ID:",
      type: "number",
      name: "role"
    }
      ]).then(function (response) {
        connection.query("UPDATE employee SET role_id = ? WHERE (id) = (?)", [response.role, response.emp], function (err, data) {
            if (err) throw err;
            console.table(data);
        })
        askQuestions();
})
};

async function removeEmployee() {
    const employees = await db.findAllEmployees()
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        value: id, name: `${id} ${first_name} ${last_name}`      
      }));
        // console.table(employees);
        inquirer.prompt([
    {
      type: 'list',
      name: 'emp',
      message: 'Which employee would you like to delete?',
      choices: employeeChoices
    },

      ]).then(function (response) {
        connection.query("DELETE FROM employee WHERE (id) = (?)", [response.emp], function (err, data) {
            if (err) throw err;
            console.table(data);
        })
        askQuestions();
})
};

async function removeDepartment() {
    const departments = await db.findAllDepartments()
    const departmentChoices = departments.map(({ id, name }) => ({
        value: id, name: `${id} ${name}`      
      }));
        // console.table(employees);
        inquirer.prompt([
    {
      type: 'list',
      name: 'dep',
      message: 'Which department would you like to delete?',
      choices: departmentChoices
    },

      ]).then(function (response) {
        connection.query("DELETE FROM department WHERE (id) = (?)", [response.dep], function (err, data) {
            if (err) throw err;
            console.table(data);
        })
        askQuestions();
})
};


async function removeRole() {
    const roles = await db.findAllRoles()
    const roleChoices = roles.map(({ id, title, salary, department_id }) => ({
        value: id, name: `${id} ${title} ${salary} ${department_id}`      
      }));
        // console.table(employees);
        inquirer.prompt([
    {
      type: 'list',
      name: 'rol',
      message: 'Which role would you like to delete?',
      choices: roleChoices
    },

      ]).then(function (response) {
        connection.query("DELETE * FROM role WHERE (id) = (?)", [response.rol], function (err, data) {
            if (err) throw err;
            console.table(data);
        })
        askQuestions();
})
};
askQuestions();