const express = require('express');
const boats = require('../controllers/boats.controller');
const router = express.Router();
//Create a new boat
//router.post('/',boats.create);
//retrive all boats
router.get('/',boats.findAll);

//retrieve searched boats on search page
router.post('/search',boats.findAllOnSearch);
router.get('/:id',boats.findOne);
module.exports  = router;

