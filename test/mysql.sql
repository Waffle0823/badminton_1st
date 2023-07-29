CREATE DATABASE badminton;

DROP TABLE  IF EXISTS member_table;

CREATE TABLE member_table (
    seq         INT NOT NULL AUTO_INCREMENT,
    email       VARCHAR(20),
    pw          VARCHAR(20),
    address     VARCHAR(50),
    name        VARCHAR(10),
    phone       VARCHAR(11),
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    delete_date TIMESTAMP,
    PRIMARY KEY(seq)
) ENGINE=MYISAM CHARSET=utf8;

INSERT INTO member_table (email, pw, address, name, phone)
    VALUE('test1@gmail.com', 'test1', 'test1', 'test1', '01012341231');



DROP TABLE  IF EXISTS member_table;

CREATE TABLE history_table (
    seq         INT NOT NULL AUTO_INCREMENT,
    email       VARCHAR(20),
    path     VARCHAR(256),
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    delete_date TIMESTAMP,
    PRIMARY KEY(seq)
) ENGINE=MYISAM CHARSET=utf8;

INSERT INTO history_table (email, path)
    VALUE('test1@gmail.com', 'test1');