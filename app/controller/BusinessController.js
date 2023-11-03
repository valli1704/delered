const { business, businessType } = require("../models");
const Jwt = require("jsonwebtoken");
const config = require("../config/config");
const condition = { status: 1 };


exports.listBusinessType = async (req, res) => {
    try {
     
     data = await businessType.findAll({where: condition});
     res.status(200).send({message:"data retrieved successfully", data:data})

    }
    catch (err) {
        res.status(500).send({message:err.message})
    }
  }