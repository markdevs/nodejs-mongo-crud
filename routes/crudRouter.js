const express = require('express');
const router = express.Router();
const crudModel = require('../models/Crud');



router.get('/', (req, res) => {
    res.send('Ok')
})

router.get('/all', async (req, res) => {
    try {
        let doc = await crudModel.find({})
        console.log(doc);
        res.send(doc);
    } catch (error) {
        res.send(error)
    }
})


router.post('/', express.urlencoded({extended:true}), async (req, res) => {
    let body = new crudModel(req.body);
    try {
        let doc = await body.save();
        console.log(doc);
        res.send(doc);
    } catch (error) {
        res.send(error)
    }
})


router.put('/', express.urlencoded({extended: true}), async (req, res) => {
    let update = req.params.id;
    try {
       let doc = await crudModel.findOneAndUpdate({update});
       console.log(doc);
       res.send(doc)
    } catch (error) {
        
    }
})


module.exports = router