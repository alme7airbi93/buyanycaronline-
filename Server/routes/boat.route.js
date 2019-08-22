const express = require('express');
const boats = require('../controllers/boats.controller');
const router = express.Router();
const Multer = require("multer");
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
});
//Create a new boat
//router.post('/',boats.create);
//retrive all boats
router.get('/',boats.findAll);

//retrieve searched boats on search page
router.post('/search',boats.findAllOnSearch);
router.get('/:id',boats.findOne);
router.post('/search-index',boats.findAllOnIndex);
router.post('/',boats.create);
router.post('/upload/:boat_id',multer.array("file"),boats.upload);
router.get('/alone/:id',boats.findAloneOne)
module.exports  = router;

