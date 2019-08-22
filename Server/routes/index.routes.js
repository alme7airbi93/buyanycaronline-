const express = require('express');
// const adsRoutes = require('./ad.route');
// 
// const carRoutes = require('./car.route');

var admin = require("firebase-admin");
var serviceAccount = require("../../config/anycaronline.json");
const constant = require('../../config/constant');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: constant.DATABASEURL,
  storageBucket:constant.firebaseStorageBucketURL,
});
var bucket = admin.storage().bucket();
const adsRoutes = require('./ad.route');
const carsRoutes = require('./car.route');
const boatRoutes = require('./boat.route');
const  usersRoutes = require('./user.route');
const billinginfoRoutes = require('./billinginfo.route');
const makeRoutes = require('./make.route');
const vehicleRoutes = require('./vehicle.route');
const modelRoutes = require('./model.route');
const router = express.Router(); // eslint-disable-line
router.use(function(req, res, next) {
  if (!req.admin) {
    req.admin = admin;
  }
  if (!req.bucket) {
    req.bucket = bucket;
  }
  next();
});

router.get('api/car-search',function(req,res){
  res.json({success: true});
});
router.use(function(req, res, next) {
  if (!req.admin) {
    req.admin = admin;
  }
  if (!req.bucket) {
    req.bucket = bucket;
  }
  next();
});
router.use('/api/ads', adsRoutes);
router.use('/api/cars',carsRoutes);
router.use('/api/users',usersRoutes);
router.use('/api/billinginfos',billinginfoRoutes);
router.use('/api/makes',makeRoutes);
router.use('/api/vehicles', vehicleRoutes);
router.use('/api/models',modelRoutes);
router.use('/api/boats',boatRoutes);
module.exports = router;