const { users } = require("../models");
const user = require("../models/user")
const Jwt = require("jsonwebtoken");
const config = require("../config/config");
var bcrypt = require("bcryptjs");
const { userValidate } = require("../validator/user_validate");


exports.createUser = async (req, res) => {
    try {

      const userData = req.body;
      const { error, value } = userValidate.validate(userData);
      if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
      } else {
          var _users= await users.create({
            userName:  req.body.userName,
            email: req.body.email,
            password:bcrypt.hashSync(req.body.password,8)
          });

      
        console.log('data:::'+_users)
        res.status(200).send({message:"Users created successfully",users:_users})
      }
    }
    catch (err) {
        res.status(500).send({message:err.message})
    }
  }