const express = require('express');
// const adsRoutes = require('./ad.route');
// 
// const carRoutes = require('./car.route');

var admin = require("firebase-admin");
var serviceAccount = require("../../config/anycaronline.json");
const constant = require('../../config/constant');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: constant.DATABASEURL
});
const adsRoutes = require('./ad.route');
const carsRoutes = require('./car.route');
const  usersRoutes = require('./user.route');
const billinginfoRoutes = require('./billinginfo.route');
const makeRoutes = require('./make.route');
const vehicleRoutes = require('./vehicle.route');
const modelRoutes = require('./model.route');
const router = express.Router(); // eslint-disable-line
router.get('api/car-search',function(req,res){
  res.json({success: true});
})
router.use('/api/ads', adsRoutes);
router.use('/api/cars',carsRoutes);
router.use('/api/api/users',usersRoutes);
router.use('/api/billinginfos',billinginfoRoutes);
router.use('/api/makes',makeRoutes);
router.use('/api/vehicles', vehicleRoutes);
router.use('/api/models',modelRoutes);

// router.post('/ads', ads.create);
    
// // Retrieve all Ads
// router.get('/ads', ads.findAll);

// // Retrieve a single Ad with id
// router.get('/ads/:id', ads.findOne);

// // Retrieve a single Ad with id
// router.get('/ads/userid/:user_id', ads.findAllByUserId);

// // Update a Ad with id
// router.put('/ads/:id', ads.update);

// // Update to increase the Ad's visit count with id
// router.put('/ads/increase/:id', ads.increaseVisitCount);

// // Delete a Ad with id
// router.delete('/ads/:id', ads.delete);
// router.use('/billinginfos',billinginfoRoutes);
// router.use('/cars',carRoutes);
// router.use('/users',userRoutes);
module.exports = router;