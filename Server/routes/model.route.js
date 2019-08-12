    const express = require('express');
    const router = express.Router(); // eslint-disable-line
    const models = require('../controllers/model.controller');

    // Retrieve all Models
    router.get('/', models.findAll);

    // Retrieve a single Model with id
    router.get('/:id', models.findOne);

    // Retrieve a single Model with id
    router.get('/makeid/:make_id', models.findAllByMakeId);
    module.exports = router;