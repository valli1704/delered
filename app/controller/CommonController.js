const { users } = require("../models");
const user = require("../models/business")
const Jwt = require("jsonwebtoken");
const config = require("../config/config");



exports.countryList = async (req, res) => {
    try {

      console.log("Data-countryList")
    }
    catch (err) {
        res.status(500).send({message:err.message})
    }
  }


  exports.stateList = async (req, res) => {
    try {

      console.log("Data-stateList")
    }
    catch (err) {
        res.status(500).send({message:err.message})
    }
  }