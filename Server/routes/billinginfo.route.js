
const express = require('express');
const router = express.Router();
    const billinginfos = require('../controllers/billinginfo.controller');

    // Retrieve all BillingInfos
    router.get('/', billinginfos.findAll);

    // Retrieve a single BillingInfo with id
    router.get('/:id', billinginfos.findOne);

    // Update a BillingInfo with id
    router.put('/:id', billinginfos.update);
    module.exports = router;