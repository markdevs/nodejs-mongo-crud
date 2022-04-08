const express = require('express');
const router = express.Router();
const {mainController ,allController, postController, putController} = require('../controllers/CrudController');



router.get('/', mainController)

router.get('/all', allController)


router.post('/', express.urlencoded({extended:true}), postController,)


router.put('/', express.urlencoded({extended: true}), putController)


module.exports = router