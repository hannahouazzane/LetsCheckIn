import mysql from 'mysql2'


export const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Laptopsrule1',
    database: "feeling_tracker"        
  });
  
