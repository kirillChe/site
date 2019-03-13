#!/usr/bin/env node

const mysql = require('mysql2');
const configs = require(__dirname + '/../app/configs/env.json');

const connection = mysql.createConnection({
  host: configs.db.host,
  user: configs.db.username,
  password: configs.db.password
});

connection.query(
  `CREATE DATABASE IF NOT EXISTS ${configs.db.database} CHARACTER SET UTF8 COLLATE utf8_bin;`,
  (err) => {
    if (err) {
      console.log(err.message);
      return process.exit(1);
    }
    process.exit(0);
  }
);
