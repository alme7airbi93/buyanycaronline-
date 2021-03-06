var admin = require("firebase-admin");
var db = admin.firestore();
var date = require("../../config/date");

//Create new ad
exports.create = (req, res) => {
    // Create a ad

    let ad = {
        user_id     : req.body.user_id,
        title       : req.body.title, 
        price       : req.body.price,
        description : req.body.description,
        city        : req.body.city,
        no          : req.body.no,
        approve     : req.body.approve,
        publish     : req.body.publish,
        visitcount  : req.body.visitcount,
        create_at   : date.getDate(),
        update_at   : date.getDate()
    }

    // Save ad in the database
    var doc = db.collection("ads").doc();
    ad.id = doc.id;
    
    doc.set(ad)
    .then(data => {
        res.json(ad);
    }).catch(err => {
        return res.status(500).json({
            message: err.message || "Something wrong while creating the ad."
        });
    });
};


// Retrieve all ads from the database.
exports.findAll = async (req, res) => {
    
    let ads = [];
    
    const adSnaps = await db.collection('ads').get();

    adSnaps.forEach((adDoc) => {
        ad = adDoc.data();
        ads.push(ad);
    });

    res.json(ads);
};

// Find a single ad with a ad_id
exports.findOne = async (req, res) => {

    const adSnaps = await db.collection('ads').where('id', '==', req.params.id).get();

    adSnaps.forEach((adDoc) => {
        ad = adDoc.data();
        res.json(ad);
    });

};

exports.findOneByVehicleId = async (req,res) => {
    /*
     */
}

exports.findAllByUserId = async (req, res) => {
    
    let ads = [];
    
    const adSnaps = await db.collection('ads').where('user_id', '==', req.params.user_id).get();

    adSnaps.forEach((adDoc) => {
        ad = adDoc.data();
        ads.push(ad);
    });

    res.json(ads);

};

// Update a ad
exports.update = (req, res) => {
    // Find and update ad with the request body
    if (!req.params.id) {  // new
        var doc = db.collection("ads").doc();
        ad.id = doc.id;
        doc.set(ad);
    } else {               // update
        var ad = {}
        ad[req.body.fname] = req.body.fvalue;
        var doc = db.collection("ads").doc(req.params.id);
        doc.update(ad);
        return res.send({message: "Ad updated successfully!"});
    }
};

// Update a ad
exports.increaseVisitCount = async (req, res) => {
    
    const adSnaps = await db.collection('ads').where('id', '==', req.params.id).get();

    var ad = {}
    adSnaps.forEach((adDoc) => {
        ad = adDoc.data();
        ad.visitcount = ad.visitcount + 1;

        var doc = db.collection("ads").doc(req.params.id);
        doc.update(ad);
        return res.send({status: "success", message: "Ad's visit count increased successfully!", visitcount: ad.visitcount});      
    });


};

// Delete a Ad with the specified id in the request
exports.delete = (req, res) => {
    db.collection('ads').doc(req.params.id).delete()
    .then(ad => {
        if(!ad) {
            return res.status(404).send({
                message: "Ad not found with id " + req.params.id
            });
        }
        return res.send({message: "Ad deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Ad not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete ad with id " + req.params.id
        });
    });
};
exports.approve = (req,res) => {
    console.log(req.body.id);
    let ad_id = req.body.id;
    db.collection('ads').doc(ad_id).get()
    .then(ad => {
        let adDoc = ad.data();
        adDoc.approve = 1;
        let ad2 = db.collection('ads').doc(ad_id);
        ad2.update(adDoc);
        res.send({message: "Apporve changed successfully!", status: "Success"});
    });
}
