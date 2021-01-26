DROP DATABASE IF EXISTS beef_db;

CREATE DATABASE beef_db;

USE beef_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    consumed BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);