CREATE DATABASE beef_db;

USE DATABASE beef_db;

CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    consumed BOOLEAN DEFAULT false,
    PRIMARY KEY (id),
)