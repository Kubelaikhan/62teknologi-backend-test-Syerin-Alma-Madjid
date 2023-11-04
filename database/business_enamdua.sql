CREATE TABLE business (
    ids_business INT AUTO_INCREMENT PRIMARY KEY,
    alias VARCHAR(100) NOT NULL,
    name VARCHAR(225),
    term VARCHAR(255),
    is_closed TINYINT(1),
    longitude DECIMAL(10, 6),
    latitude DECIMAL(10, 6),
    location VARCHAR(255),
    radius INT(11),
    locale VARCHAR(255),
    ids_location VARCHAR(45),
    price_level INT(1),
    review_count INT(11),
    image_url VARCHAR(225),
    rating CHAR(4),
    phone VARCHAR(12),
    display_phone VARCHAR(12),
    distance INT(11),
    open_now TINYINT(1),
    open_at VARCHAR(4),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);


CREATE TABLE business_category (
  ids_category INT AUTO_INCREMENT PRIMARY KEY,
  ids_business INT,
  attribute_key_categories VARCHAR(255),
  attribute_value_categories TINYINT(1)
);


CREATE TABLE business_attribute (
  ids_attribute INT AUTO_INCREMENT PRIMARY KEY,
  ids_business INT,
  attribute_key VARCHAR(255),
  attribute_value TINYINT(1)
);

CREATE TABLE business_location (
  ids_location INT AUTO_INCREMENT PRIMARY KEY,
  address1 VARCHAR(255),
  address2 VARCHAR(255),
  address3 VARCHAR(255),
  city VARCHAR(45),
  zip_code VARCHAR(10),
  state VARCHAR(50),
  display_address TEXT
);

CREATE TABLE business_price (
  ids INT AUTO_INCREMENT PRIMARY KEY,
  price_level CHAR(1),
  price_name VARCHAR(30)
);




