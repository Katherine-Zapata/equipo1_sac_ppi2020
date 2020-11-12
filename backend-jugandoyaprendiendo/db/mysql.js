const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'bju3dzagjgywjjwt2myx-mysql.services.clever-cloud.com',
  user     : 'upeat0b9jasonaxs',
  password : 'La4ytziQ7QlNNEkkxYfA',
  database : 'bju3dzagjgywjjwt2myx'
});

connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
    }else{
      console.log("Conexión extablecida con el servidor de MySQL")
    }
});

module.exports =  {connection: connection}