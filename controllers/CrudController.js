const crudModel = require('../models/Crud');

mainController = (req, res) => {
    res.render('home', {error: false, body: {} });
}


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
        res.send('Dados adicionados com sucesso');
    } catch (error) {
        res.render('home', {error, body: req.body})
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


module.exports = {mainController,allController, postController, putController}