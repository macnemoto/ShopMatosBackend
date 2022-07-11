require("dotenv").config();
const { Sequelize } = require("sequelize");
const sequelize = require("./config/connection");
const express = require("express");
const app = express();
const port = process.env.DB_PORT || 3000;
const Products = require("./models/product");

conection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
conection();

app.get("/", (req, res) => {

  Products.findAll({ raw: true }).then((results) => {
    console.log(results);
    res.send(results);
  });
});

// get product by id
app.get("/:category", (req, res) => {

  let name = req.params.category;
   Products.findAll({raw:true, where: { category: `${name}` } }).then((result) => {
    console.log(result);
    res.send(result);
 

  })

});

// get product by id
app.get("/product/:name",(req, res) => {
  /*   let name = req.params.name;
  connection.query(
    "SELECT * FROM product WHERE name like ?",
    ["%" + name + "%"],
    function (error, results, fields) {
      if (error) throw error;
      let respuesta = JSON.parse(JSON.stringify(results));
     
      console.log(respuesta);
      res.send(respuesta);
    }
  );
 */

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
