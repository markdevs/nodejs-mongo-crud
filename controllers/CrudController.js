const crudModel = require('../models/Crud');

const allController = async (req, res) => {
    try {
        let doc = await crudModel.find({})
        console.log(doc);
        res.send(doc);
    } catch (error) {
        res.send(error)
    }
}


const postController = async (req, res) => {
    let body = new crudModel(req.body);
    try {
        let doc = await body.save();
        console.log(doc);
        res.send(doc);
    } catch (error) {
        res.send(error)
    }
}


const putController = async (req, res) => {
    let updateParam = req.body;
    try {
       let doc = await crudModel.findOneAndUpdate(query, {updateParam});
       console.log(doc);
       res.send(doc)
    } catch (error) {
        res.send(error)
    }
}


module.exports = {allController, postController, putController}