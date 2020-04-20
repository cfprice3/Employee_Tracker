-- Department data

INSERT INTO department (name) 
VALUES ("Finance"),("Human Resources"),("Development"),("Sales");


-- Role data
-- Department 1, Financial
INSERT INTO role (title, salary, department_id) 
VALUES ("Head Accountant", 150000, 1);

INSERT INTO role (title, salary, department_id) 
VALUES ("Accountant", 100000, 1);

-- Department 2, Human Resources
INSERT INTO role (title, salary, department_id)
VALUES ("Head of HR", 100000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Risk Management", 80000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Relations", 65000, 2);

-- Department 3, Development
INSERT INTO role (title, salary, department_id)
VALUES ("Product Owner", 140000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Developer", 120000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Junior Developer", 80000, 3);

-- Department 4, Sales
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 150000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Associate", 120000, 4);


-- Employee Data
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "DeLonge", 1, null),("Mark", "Hoppus", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Travis", "Barker", 3, null),("Scott", "Raynor", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Matt", "Skiba", 6, null),("Billy Joe","Armstrong", 7, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tre", "Cool", 9, null),("Mike", "Dirnt", 10, 9);
