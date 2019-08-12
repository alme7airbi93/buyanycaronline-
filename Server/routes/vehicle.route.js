const express = require('express');
const router = express.Router(); // eslint-disable-line
const vehicles = require('../controllers/vehicle.controller');

// Create a new Vehicle
router.post('/', vehicles.create);

// Retrieve all Vehicles
router.get('/', vehicles.findAll);

// Retrieve a single Vehicle with id
router.get('/:id', vehicles.findOne);

// Update a Vehicle with id
router.put('/:id', vehicles.update);

// Delete a Vehicle with id
router.delete('/:id', vehicles.delete);

// Delete a Vehicle with Ad id
router.delete('/ad/:id', vehicles.deleteByAdId);
module.exports = router;