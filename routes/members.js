var express = require('express');
var router = express.Router();
const mysql = require('mysql');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: 'localhost',
    user: 'root',
    password: 'dev1234',
    database: 'badminton'
};

let connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속

/* CREATE */
router.post('/', function(req, res, next) {
    let sql = "INSERT INTO member_table (email, pw, address, name, phone) VALUE(?, ?, ?, ?, ?);";
    connection.query(sql, [req.body.email, req.body.pw, req.body.address, req.body.name, req.body.phone], function (err, results, fields) {
        if (err) throw err;
        res.send('Create succes');
    });
});

/* READ */
router.get('/', function(req, res, next) {
    let sql = "SELECT * FROM member_table WHERE delete_date IS NULL";
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
  
});

/* UPDATE */
router.put('/', function(req, res, next) {
    let sql = "UPDATE member_table SET pw = ? WHERE email = ?";
    connection.query(sql, [req.body.pw, req.body.email], function (err, result) {
        if (err) throw err;
        res.send('Update succes');
    });
});

/* DELETE */
router.delete('/', function(req, res, next) {
    let sql = "UPDATE member_table SET delete_date = CURRENT_TIMESTAMP WHERE email = ?"
    connection.query(sql, [req.body.email], function(err, result) {
        if (err) throw err;
        res.send('Delete success');
    });
});

module.exports = router;