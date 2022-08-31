const mysql = require('mysql2')
const config = require('./config')

// 创建连接池
// 连接池通过重用以前的连接来帮助减少连接到 MySQL 服务器所花费的时间，当你完成它们时让它们保持打开而不是关闭。
// 改善了查询的延迟，因为您避免了建立新连接所带来的所有开销。
const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
})

// 手动从连接池中获取连接
connections.getConnection((err, conn) => {
  conn.connect(err => {
    if (err) {
      console.log('数据库连接失败： ', err)
    } else {
      console.log('数据库连接成功！')
    }
  })
})

// 创建一个 promise/non-promise 连接
module.exports = connections.promise()
