CREATE DATABASE COMMERCE
-- USE COMMERCE
CREATE TABLE provinces(
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    Province_name NVARCHAR(60)
)
GO
-- USE COMMERCE

-- ALTER TABLE users
-- ADD UNIQUE (emai);
-- EXEC sp_RENAME 'categories.categoryId', 'id'
CREATE TABLE users(
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    name NVARCHAR(60),
    lastname NVARCHAR(60),
    username NVARCHAR(60),
    password NVARCHAR(60),
    gender NVARCHAR(10),
    phonenumber NVARCHAR(20),
    emai NVARCHAR(70) not null UNIQUE ,
    province_id INT FOREIGN KEY REFERENCES provinces(id)
)
GO
-- USE COMMERCE
-- ALTER TABLE users ADD CONSTRAINT emai UNIQUE(emai);
-- ALTER TABLE users DROP  emai ;

CREATE TABLE categories(
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    categorie_name NVARCHAR(50)
)
GO
CREATE TABLE publications(
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    title NVARCHAR(100),
    condition NVARCHAR(20),
    price INT,
    description TEXT,
    image_name NVARCHAR(MAX),
    wasPublishedAt NVARCHAR(20),
    users_id INT FOREIGN KEY REFERENCES users(id),
    categoryId INT FOREIGN KEY REFERENCES categories(id),
)
    -- use COMMERCE
GO
CREATE TABLE carritos(
    id INT IDENTITY(1,1) PRIMARY KEY NOT NULL, 
    userId INT FOREIGN KEY REFERENCES users(id),
    publicationId INT FOREIGN KEY REFERENCES publications(id),
);

-- INSERT INTO carritos VALUES( 3007, 5);

-- SELECT * from carritos

--  SELECT [id], [userId], [publicationId] FROM [carritos] AS [carritos];
--

-- DROP TABLE publications
-- SELECT * from categories
-- exec sp_rename 'carrito', 'carritos'