INSERT INTO department (name) 
VALUES ("Finance"),("Human Resources"),("Development"),("Sales");


INSERT INTO role (title, salary, department_id) 
VALUES ("Accountant", 100000, 1),("Head Accountant", 150000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Head of HR", 100000, 2),("Risk Management", 80000, 2),("Relations", 65000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Product Owner", 140000, 3),("Senior Developer", 120000, 3),("Junior Developer", 80000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 150000, 4),("Sales Associate", 120000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "DeLonge", 1, 1),("Mark", "Hoppus", 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Travis", "Barker", 2, 2),("Scott", "Raynor", 2, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Matt", "Skiba", 3, 3),("Billy Joe","Armstrong", 3, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tre", "Cool", 4, 4), ("Mike", "Dirnt", 4, null);
