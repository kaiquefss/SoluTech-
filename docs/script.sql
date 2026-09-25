DROP DATABASE solutech
CREATE DATABASE solutech

USE solutech
-- 1. Tabela USUARIOS
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR (75) NOT NULL UNIQUE,
    password VARCHAR(1000) NOT NULL,
    `role` ENUM('user', 'admin') NOT NULL DEFAULT 'user'
);

-- 2. Tabela CLIENTES
CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- 3. Tabela TELEFONE
CREATE TABLE phones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    observation VARCHAR(255),
    number VARCHAR(20) NOT NULL,
    ddd VARCHAR(3) NOT NULL,
    id_clients INT,
    FOREIGN KEY (id_clients)
    REFERENCES clients(id)
);

-- 4. Tabela ENDERECO
CREATE TABLE address (
    id INT PRIMARY KEY AUTO_INCREMENT,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(20) NOT NULL,
    district VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    id_clients INT,
    FOREIGN KEY (id_clients)
    REFERENCES clients(id)
);

-- 5. Tabela PRODUTOS
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    value DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);

-- 6. Tabela SERVICOS
CREATE TABLE services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    value DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    duration VARCHAR(50),
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);

-- 7. Tabela VENDAS
CREATE TABLE sales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    number VARCHAR(50) NOT NULL,
    payment_method ENUM('DINHEIRO', 'CARTAO', 'PIX') NOT NULL,
    total_value DECIMAL(10,2) NOT NULL,
    id_clients INT,
    FOREIGN KEY (id_clients)
    REFERENCES clients(id),
    id_users INT,
    FOREIGN KEY (id_users)
    REFERENCES users(id)
);

-- 8. Tabela ITENS
CREATE TABLE itens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    value DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    id_sales INT,
    FOREIGN KEY (id_sales)
    REFERENCES sales(id),
    id_products INT,
    FOREIGN KEY (id_products)
    REFERENCES products(id),
    id_services INT,
    FOREIGN KEY (id_services)
    REFERENCES services(id)
);
