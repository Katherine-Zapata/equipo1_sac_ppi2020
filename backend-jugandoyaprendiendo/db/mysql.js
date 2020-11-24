mysql = require('mysql');
const util = require('util')
var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'bju3dzagjgywjjwt2myx-mysql.services.clever-cloud.com',
  user     : 'upeat0b9jasonaxs',
  password : 'La4ytziQ7QlNNEkkxYfA',
  database : 'bju3dzagjgywjjwt2myx'
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports =  {connection: pool}