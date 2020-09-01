CREATE DATABASE COMMERCE2


-- drop database COMMERCE2

USE COMMERCE2
select * from  users
CREATE TABLE provinces(
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    Province_name NVARCHAR(60) NOT NULL,
)
GO
-- EXEC sp_RENAME 'categories.categoryId', 'id'



CREATE TABLE users(
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    name NVARCHAR(60) NOT NULL,
    lastname NVARCHAR(60) NOT NULL,
    username NVARCHAR(60) NOT NULL,
    password NVARCHAR(60) NOT NULL,
    gender NVARCHAR(10) NOT NULL,
    phonenumber NVARCHAR(20) NOT NULL,
    emai NVARCHAR(70) UNIQUE NOT NULL ,
    province_id INT FOREIGN KEY REFERENCES provinces(id)
)
GO
CREATE TABLE categories(
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    categorie_name NVARCHAR(50) NOT NULL,
)
GO
CREATE TABLE publications(
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    title NVARCHAR(100) NOT NULL,
    condition NVARCHAR(20) NOT NULL,
    price INT NOT NULL,
    description TEXT NOT NULL,
    image_name NVARCHAR(MAX) NOT NULL,
    wasPublishedAt NVARCHAR(20) NOT NULL,
    users_id INT FOREIGN KEY REFERENCES users(id),
    categoryId INT FOREIGN KEY REFERENCES categories(id) ,
)
-- DROP TABLE publications
-- SELECT * from categories
