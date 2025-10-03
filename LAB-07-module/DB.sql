CREATE DATABASE scheduler_db;

USE scheduler_db;

CREATE TABLE schedules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255),
  channel VARCHAR(100) NOT NULL,
  time DATETIME NOT NULL,
  status ENUM('Pending','Published') DEFAULT 'Pending'
);
