DROP DATABASE solutech
CREATE DATABASE solutech

USE solutech

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR (75) NOT NULL UNIQUE,
    password VARCHAR(1000) NOT NULL
);

CREATE TABLE products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(500),
    quantity INT NOT NULL DEFAULT0,
    value DECIMAL(10,2) NOT NULL,
    CHECK (quantity >= 0),
    CHECK (value >= 0 )
);

ALTER TABLE users ADD COLUMN role ENUM('user', 'admin') NOT NULL DEFAULT 'user';