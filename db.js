if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const mysql = require('mysql')

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'commercial'
// })

const pool = mysql.createPool({
  host: process.env.DB_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) reject(err)
      connection.query(sql, values, (err, results) => {
        if (err) reject(err)
        resolve(results)
      })
      connection.release()
    })
  })
}

module.exports = query