CREATE TABLE t_user
(
    id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    login_name VARCHAR(20) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    password VARCHAR(50) NOT NULL,
    telephone VARCHAR(12),
    email VARCHAR(50),
    is_enable SMALLINT DEFAULT 1 NOT NULL,
    is_block SMALLINT DEFAULT 0 NOT NULL,
    is_admin SMALLINT DEFAULT 0 NOT NULL,
    birthday TIMESTAMP
);