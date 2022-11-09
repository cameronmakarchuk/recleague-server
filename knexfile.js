module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: process.env.SQL_USER ?? 'root',
    password: process.env.SQL_PASSWORD ?? 'rootroot',
    database: 'recleague',
    charset: 'utf8'
  },
};