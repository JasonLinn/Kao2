const mysql = require('mysql');

//創建數據池
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'zxc123',
    database:'helloworld'
})

// 在数据池中进行会话操作
pool.getConnection(function (err, connection) {

    connection.query('SELECT * FROM first', (error, results, fields) => {
        console.log('results',results);
        // 结束会话
        connection.release();

        // 如果有错误就抛出
        if (error) throw error;
    })
})