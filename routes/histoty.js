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

    if((typeof req.body.email !== 'undefined' && req.body.email)
            || (typeof req.body.path !== 'undefined' && req.body.path)) {
        let sql = "INSERT INTO history_table (email, path) VALUE(?, ?);";
        connection.query(sql, [req.body.email, req.body.path], function (err, results, fields) {
            if (err) throw err;
            res.send('Create succes');
        });
    } else {
        res.send('Empty email or path!!');
    }
});

/* READ */
router.get('/', function(req, res, next) {
    let sql = "SELECT * FROM history_table WHERE delete_date IS NULL";
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
  
});

/* UPDATE */
router.put('/', function(req, res, next) {
    res.status(err.status || 405);
    res.render('pages/error');
});

/* DELETE */
router.delete('/', function(req, res, next) {
    let sql = "UPDATE history_table SET delete_date = CURRENT_TIMESTAMP WHERE seq = ?"
    connection.query(sql, [req.body.seq], function(err, result) {
        if (err) throw err;
        res.send('Delete success');
    });
});

module.exports = router;