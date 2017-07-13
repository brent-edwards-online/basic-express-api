var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'nodeapi',
 password:'nodeapi',
 database:'node_express_api'
 
});
 module.exports=connection;