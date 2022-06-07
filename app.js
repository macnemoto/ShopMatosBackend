const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var mysql      = require('mysql');
const { json } = require('express/lib/response')

var connection = mysql.createConnection({
  host     : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user     : 'bsale_test',
  password : 'bsale_test',
  database : 'bsale_test'
});
 
connection.connect(error => {
    if (error) throw error;
    console.log('Connected to database');
});
setInterval(function () {
    connection.query('SELECT 1');
}, 4000);
 
/* connection.query('SELECT * FROM product', function (error, results, fields) {
  if (error) throw error;
  //respuesta en json
    return JSON.parse(JSON.stringify(results));

});
 
connection.end(); */






app.get('/', (req, res) => {

    connection.query('SELECT * FROM product', function (error, results, fields) {
        if (error) throw error; 
    
        
        let respuesta = JSON.parse(JSON.stringify(results));
        /* connection.end(); */
        res.send(respuesta)
      
      });
       
     
    
    
}


  
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})