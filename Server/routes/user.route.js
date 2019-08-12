const express = require('express');
const users = require('../controllers/user.controller');
const router = express.Router();

    // Create a new User
    router.post('/', users.create);

    // Authenticate a User
    router.post('/authenticate', users.authenticate);
    
    // Retrieve all Users
    router.get('/', users.findAll);

    // Retrieve a single User with id
    router.get('/:id', users.findOne);

    // Update a User with id
    router.put('/:id', users.update);

    // Update a User with id
    router.put('/users2/:id', users.update2);//@@@@@@@@@@@@@@@@

    // Delete a User with id
    router.delete('/:id', users.delete);
    module.exports = router;