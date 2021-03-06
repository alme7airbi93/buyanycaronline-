const express = require('express');
// const adsRoutes = require('./ad.route');
// const billinginfoRoutes = require('./billinginfo.route');
// const carRoutes = require('./car.route');
// const  userRoutes = require('./user.route');

const ads = require('../controllers/ad.controller');
const router = express.Router(); // eslint-disable-line

router.post('/', ads.create);
    
// Retrieve all Ads
router.get('/', ads.findAll);

// Retrieve a single Ad with id
router.get('/:id', ads.findOne);

// Retrieve a single Ad with id
router.get('/userid/:user_id', ads.findAllByUserId);
// router.get('/vehicle_id/:vehicle_id',ads.findOneByVehicleId);
// Update a Ad with id
router.put('/:id', ads.update);

// Update to increase the Ad's visit count with id
router.put('/increase/:id', ads.increaseVisitCount);

// Delete a Ad with id
router.delete('/:id', ads.delete);
router.post('/approve',ads.approve);
// router.use('/billinginfos',billinginfoRoutes);
// router.use('/cars',carRoutes);
// router.use('/users',userRoutes);
module.exports = router;