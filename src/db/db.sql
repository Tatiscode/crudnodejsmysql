-- Creando la base de datos
CREATE DATABASE crudnodejsmysql;
--Usando la base de datos
USE crudnodejsmysql;
--Creando tabala
CREATE TABLE customer{
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)  NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
};
--Mostrando todas las tablas
SHOW TABLES;
--Descripcion de la tabla
describe customer;
