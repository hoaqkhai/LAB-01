
-- Database: Hub Media Multi-channel

CREATE DATABASE IF NOT EXISTS hub_media;
USE hub_media;

-- 1. Users
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(150) UNIQUE,
    role ENUM('Admin','Content','Marketer') NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Campaigns
CREATE TABLE campaigns (
    campaign_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE,
    owner_id INT,
    FOREIGN KEY (owner_id) REFERENCES users(user_id)
);

-- 3. Contents
CREATE TABLE contents (
    content_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body_text TEXT,
    media_url VARCHAR(255),
    type ENUM('post','image','video') NOT NULL,
    author_id INT,
    campaign_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(user_id),
    FOREIGN KEY (campaign_id) REFERENCES campaigns(campaign_id)
);

-- 4. Schedules
CREATE TABLE schedules (
    schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT,
    channel ENUM('Web','FB','Zalo','YouTube','TikTok') NOT NULL,
    publish_time DATETIME,
    status ENUM('pending','published','failed') DEFAULT 'pending',
    FOREIGN KEY (content_id) REFERENCES contents(content_id)
);

-- 5. Comments
CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT,
    user_id INT,
    comment_text TEXT,
    status ENUM('pending','approved','rejected') DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (content_id) REFERENCES contents(content_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 6. Analytics
CREATE TABLE analytics (
    analytic_id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT,
    views INT DEFAULT 0,
    likes INT DEFAULT 0,
    shares INT DEFAULT 0,
    platform ENUM('Web','FB','Zalo','YouTube','TikTok'),
    collected_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (content_id) REFERENCES contents(content_id)
);
