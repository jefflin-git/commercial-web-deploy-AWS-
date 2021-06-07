if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}


const config = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_ROOT_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.DB_HOST_IP,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "commercial_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "protocol": "postgres",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
  },
  "travis": {
    "username": "travis",
    "database": "commercial_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  }
}

module.exports = config