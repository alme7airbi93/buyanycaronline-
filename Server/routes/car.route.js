const express = require('express');
const cars = require('../controllers/car.controller');
const router = express.Router();
    //Create a new Ca
    router.post('/', cars.create);
    // Retrieve all Cars
    // router.get('/',function(req, res){
    //     res.json({success:true,data:'ppp'});
    // });
    router.get('/', cars.findAll);

    // Retrieve a single Car with id
    router.get('/:id', cars.findOne);

    // Retrieve a single Car with ad_id
    router.get('/ad/:id', cars.findOneByAdId);

    // Retrieve a single Car alone with car_id
    router.get('/alone/:id', cars.findAloneOne);

    // Retrieve searched Cars on search page
    router.post('/search', cars.findAllOnSearch);

    // Retrieve searched Cars on index page
    router.post('/search-index', cars.findAllOnIndex);

    // Update a Car with id
    router.put('/:id', cars.update);

    // Update a Car image with id
    router.put('/img/:id', cars.updateImage);

 

    // Delete a Car with Vehicle id
    router.delete('/vehicle/:id', cars.deleteByVehicleId);

    // Upload a Car image file
    router.post('/upload/:car_id', cars.upload);
    module.exports = router;