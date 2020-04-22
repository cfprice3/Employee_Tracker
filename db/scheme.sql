CREATE DATABASE employees_db;

USE employees_db;

-- creates a table to accept values for department
CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- creates a table to accept values for role
CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    INDEX dep_ind(department_id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

-- creates a table to accept values for employee
CREATE TABLE employee(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    INDEX role_ind(role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT,
    INDEX man_ind(manager_id),
    CONSTRAINT fk_manaager FOREIGN KEY (manager_id) REFERENCES role(id)
);
