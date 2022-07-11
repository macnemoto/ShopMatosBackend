require("dotenv").config();
const { Sequelize } = require("sequelize");
const op = Sequelize.Op;
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

app.get("/", async (req, res) => {
  await Products.findAll({ raw: true }).then((results) => {
    console.log(results);
    res.send(results);
  });
});

// get product by id
app.get("/:category", async (req, res) => {
  let name = req.params.category;
  await Products.findAll({ raw: true, where: { category: `${name}` } }).then(
    (result) => {
      console.log(result);
      res.send(result);
    }
  );
});

// get product by id
app.get("/product/:nombre", async (req, res) => {
  let nombre = req.params.nombre;
  await Products.findAll({
    raw: true,
    where: {
      name: {
        [op.like]: "%" + nombre + "%",
      },
    },
  }).then((result) => {
    console.log(result);
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
