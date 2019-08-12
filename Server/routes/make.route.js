const express = require('express');
const router = express.Router();

    const makes = require('../controllers/make.controller');

    // Retrieve all Makes
    router.get('/', makes.findAll);

    // Retrieve a single Make with id
    router.get('/:id', makes.findOne);
    module.exports = router;