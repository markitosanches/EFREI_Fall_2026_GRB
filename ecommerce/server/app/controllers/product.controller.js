const db = require('../models')
const Product = db.products

exports.findAll = (req, res) => {
    Product.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'Some error occured!'
        })
    })
}

exports.create = (req, res) => {
    // console.log(req.body)
    if(!req.body.name){
        res.status(400).send({
            message: 'The name is mandatory'
        })
        return;
    }
    Product.create(req.body)
    .then(data => {
        res.send(data)
    })
      .catch(err => {
        res.status(500).send({
            message: 'Could not insert the data'
        })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
//   console.log(id);
    Product.findByPk(id)
    .then(data => {
        res.send(data)
    })
      .catch(err => {
        res.status(500).send({
            message: 'Could not find the data'
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    Product.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Product updated'
            })
        }else{
            res.status(400).send({
                message: 'Product not found!'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not delete the data'
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Product.destroy({
        where: {id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Product Deleted'
            })
        }else{
            res.status(400).send({
                message: 'Product not found!'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not delete the data'
        })
    })
}