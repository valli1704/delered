const express = require("express");
const cors = require("cors");


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
// const Role = db.role;

db.sequelize.sync();

require("./app/routers/userRouters")(app);

app.listen(8000,function(){
  console.log("port is running");
});