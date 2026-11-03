const db = require('../models')
const bcrypt = require('bcryptjs')
const jwb = require('jsonwebtoken')

const User = db.users

exports.findAll = (req, res) => {
    User.findAll()
    .then(data => {
        res.send(data)
    })
}

exports.create = async (req, res) => {
    if(!req.body.fullname || !req.body.email || !req.body.password ){
        res.status(400).send({
            message: 'User must have a name, email and password'
        })
        return
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    // console.log(salt)
    // return;

    await User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hashPassword
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not insert the user'
        })
    })
}

exports.findOne = async (req, res) => {
    // console.log(req.body)
    const user = await User.findOne({where: {email:req.body.email}})

    if(!user){
        return res.status(400).send({
            message: "Username not found!"
        })
    }

    if(!await bcrypt.compare(req.body.password, user.password)){
        return res.status(400).send({
            message: "Password incorrect"
        })
    }
    
    
}

exports.logout = async (req, res) => {
    
}