var admin = require("firebase-admin");
var db = admin.firestore();
var date = require("../../config/date");
const path = require('path');
const fs = require('fs');
//Upload a image file
exports.upload = (req, res) => {
    let files = req.files;
    console.log("----***----");
    console.log(files.length);
    uploadToFireStore(req, res);
    
    
    
    // db.collection('cars').doc(car_id).get()
    // .then((doc) => {
    //     let data = doc.data();
    // })
    // db.collection('cars').doc(car_id).get()
    // .then((doc) => {
    //     let data = doc.data();
        
    //     let imgincrement = data.imgincrement;
    //     imgincrement++;

    //     let filename = car_id + "-" + imgincrement + ext;

    //     let imgfiles = [];
    //     imgfiles = JSON.parse(data.imgfiles);
    //     imgfiles.push(filename);

  
    //     file.mv("uploads/cars/" + filename, function(err, success) {
    //         let car = {};
    //         car.imgincrement = imgincrement;
    //         car.imgfiles = JSON.stringify(imgfiles);
    //         let doc = db.collection("cars").doc(car_id);
    //         doc.update(car)

    //         return res.json({success:true, filename:filename});
    //     });
        
    // });

};
async function uploadToFireStore(req,res) {
    let downloadURL ;
    let img_download_urls = [];
    let files = req.files;
    let car_id = req.params.car_id;
    for(file of files){
        if(!file) {
            return;
        }
        let ext = path.extname(file.originalname);
        let savedFilename = new Date().getTime() + '- car'+ ext;
        let fileUpload = req.bucket.file('cars/'+savedFilename);
        await fileUpload.save(new Buffer(file.buffer)).then(  
        result => {
            console.log("res   ",result);
        },
        error => {
            console.log(error);
        }
        );
        await fileUpload.getSignedUrl({
            action: 'read',
            expires: '03-09-2491'
          }).then(signedUrls => {
            downloadURL = signedUrls[0];
            console.log("------------------");
            console.log(downloadURL);
            img_download_urls.push(downloadURL);
          });
    }
    await db.collection('cars').doc(car_id).get()
    .then((doc) => {
        let data = doc.data();
        let imgincrement = data.imgincrement;
        imgincrement += files.length;
        let imgfiles = [];
        // console.log(typeof data.imgfiles);
        // console.log(JSON.parse(data.imgfiles))
        imgfiles = data.imgfiles;
        Array.prototype.push.apply(imgfiles, img_download_urls);
        let car = {};
        car.imgfiles = imgfiles;
        car.imgincrement = imgincrement;
        let carDoc = db.collection('cars').doc(car_id);
        carDoc.update(car);
        res.json({success:true,filename:downloadURL});
    });
}
//Create new car
exports.create = (req, res) => {
    // Create a car
    
    let car = {
        vehicle_id   : req.body.vehicle_id,
        distance     : req.body.distance, 
        bodytype     : req.body.bodytype,
        doors        : req.body.doors,
        features     : req.body.features,
        horsepower   : req.body.horsepower,
        transmission : req.body.transmission,
        color        : req.body.color,
        fueltype     : req.body.fueltype,
        regionalspecs: req.body.regionalspecs,
        imgincrement : req.body.imgincrement,
        imgfiles     : req.body.imgfiles,
        create_at    : date.getDate(),
        update_at    : date.getDate()
    }

    // Save car in the database
    let doc = db.collection("cars").doc();
    //const increment = db.FieldValue.increment(1);
    
    car.id = doc.id;
    
    doc.set(car)
    .then(data => {
        res.json(car);
    }).catch(err => {
        return res.status(500).json({
            message: err.message || "Something wrong while creating the car."
        });
    });
};


// Retrieve all cars from the database.
exports.findAll = async (req, res) => {
    
    let cars = [];
    
    const carSnaps = await db.collection('cars').get();

    let carArray = []; 
    carSnaps.forEach(function(doc) {carArray.push(doc);});

    for(const carDoc of carArray) {

        let car = carDoc.data();
        let car_id = car.id;
        let vehicleSnaps = await db.collection('vehicles').where('id', '==', car.vehicle_id).get();
        
        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        
        for(const vehicleDoc of vehicleArray) {

            let vehicle = vehicleDoc.data();
            Object.assign(car, vehicle);

            await Promise.all([
                db.collection('ads').where('id', '==', vehicle.ad_id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(car, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().value;
                });

                car.id = car_id;
                if(car.publish == "true")
                    cars.push(car);
            });
        }
    }

    res.json(cars);
    
};

// Find a single car with a car_id
exports.findOne = async (req, res) => {

    let car;
    
    const carSnaps = await db.collection('cars').where('id', '==', req.params.id).get();

    let carArray = []; 
    carSnaps.forEach(function(doc) {carArray.push(doc);});

    for(const carDoc of carArray) {

        car = carDoc.data();
        let vehicleSnaps = await db.collection('vehicles').where('id', '==', car.vehicle_id).get();
        
        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        
        for(const vehicleDoc of vehicleArray) {

            let vehicle = vehicleDoc.data();
            Object.assign(car, vehicle);

            await Promise.all([
                db.collection('ads').where('id', '==', vehicle.ad_id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(car, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().modelvalue;
                });
            });
        }
    }

    res.json(car);
};

// Find a single car alone with a car_id
exports.findAloneOne = async (req, res) => {

    let car = {};
    
    const carSnaps = await db.collection('cars').where('id', '==', req.params.id).get();

    carSnaps.forEach(function(doc) {
        car = doc.data();
        res.json(car);
    });
};

// Find a single car with a ad_id
exports.findOneByAdId = async (req, res) => {

    let car = {};
    
    const adSnaps = await db.collection('ads').where('id', '==', req.params.id).get();

    let adArray = []; 
    adSnaps.forEach(function(doc) {adArray.push(doc);});

    for(const adDoc of adArray) {

        ad = adDoc.data();
        Object.assign(car, ad);
        car.ad_id = ad.id;

        let vehicleSnaps = await db.collection('vehicles').where('ad_id', '==', ad.id).get();
        
        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        
        for(const vehicleDoc of vehicleArray) {

            let vehicle = vehicleDoc.data();
            Object.assign(car, vehicle);
            car.vehicle_id = vehicle.id;
        
            await Promise.all([
                db.collection('cars').where('vehicle_id', '==', vehicle.id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((carDoc) => {
                    Object.assign(car, carDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().value;
                });
            });
        }
    }

    res.json(car);
};

async function getAllByPrice(req, res, adSnaps) {

    let make_id     = req.body.make;
    let model_id    = req.body.model;
    let fromPrice   = Number(req.body.fromPrice);
    let toPrice     = Number(req.body.toPrice);
    let fromYear    = Number(req.body.fromYear);
    let toYear      = Number(req.body.toYear);
    
    let cars = [];
    
    let adArray = []; 
    adSnaps.forEach(function(doc) {adArray.push(doc);});

    for(const adDoc of adArray) {

        let ad = adDoc.data();
        let car = {};

        Object.assign(car, ad);
        let vehicleSnaps = await db.collection('vehicles').where('ad_id', '==', ad.id).get();
        let carSnaps = await db.collection('cars').get();
        let vehicleArray = [];
        let carArray = [];
        carSnaps.forEach(function(doc){
            carArray.push(doc);
        });
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        console.log(vehicleArray.length);
        console.log(carArray.length);
        for(const vehicleDoc of vehicleArray) {
            let vehicle = vehicleDoc.data();
            Object.assign(car, vehicle);
            await Promise.all([
                db.collection('cars').where('vehicle_id', '==', vehicle.id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((carDoc) => {
                    Object.assign(car, carDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().value;
                });
                
                if ((make_id   == "" || make_id   == car.make_id )  && 
                    (model_id  == "" || model_id  == car.model_id)  && 
                    (fromPrice == "" || fromPrice <= car.price   )  &&
                    (toPrice   == "" || toPrice   >= car.price   )  &&
                    (fromYear  == "" || fromYear  <= car.year    )  &&
                    (toYear    == "" || toYear    >= car.year    )  &&
                    (car.publish == "true" )) 

                cars.push(car);
            });
        }
    }

    res.json(cars);
}

async function getAllByYear(req, res, vehicleSnaps) {

    let make_id     = req.body.make;
    let model_id    = req.body.model;
    let fromPrice   = Number(req.body.fromPrice);
    let toPrice     = Number(req.body.toPrice);
    let fromYear    = Number(req.body.fromYear);
    let toYear      = Number(req.body.toYear);
    
    let cars = [];
    
    let vehicleArray = []; 
    vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});

    for(const vehicleDoc of vehicleArray) {

        let vehicle = vehicleDoc.data();
        let car = {};

        Object.assign(car, vehicle);

        let carSnaps = await db.collection('cars').where('vehicle_id', '==', vehicle.id).get();
        
        let carArray = [];
        carSnaps.forEach(function(doc) {carArray.push(doc);});
        
        for(const carDoc of carArray) {

            Object.assign(car, carDoc.data());

            await Promise.all([
                db.collection('ads').where('id', '==', vehicle.ad_id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(car, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().value;
                });
                
                if ((make_id   == "" || make_id   == car.make_id )  && 
                    (model_id  == "" || model_id  == car.model_id)  && 
                    (fromPrice == "" || fromPrice <= car.price   )  &&
                    (toPrice   == "" || toPrice   >= car.price   )  &&
                    (fromYear  == "" || fromYear  <= car.year    )  &&
                    (toYear    == "" || toYear    >= car.year    )  &&
                    (car.publish == "true" ))  

                cars.push(car);
            });
        }
    }

    res.json(cars);
}

// Retrieve all searched cars from the database.
exports.findAllOnSearch = async (req, res) => {
    
    let orderid = req.body.orderid;
    let adSnaps;
    let vehicleSnaps;

    switch(orderid) {
        case 'HIGHEST_PRICE':
            adSnaps = await db.collection('ads').orderBy('price', 'desc').get();
            getAllByPrice(req, res, adSnaps);
            break;
        case 'LOWEST_PRICE':
            adSnaps = await db.collection('ads').orderBy('price', 'asc').get();
            getAllByPrice(req, res, adSnaps);
            break;
        case 'NEWEST':
            vehicleSnaps = await db.collection('vehicles').orderBy('year', 'desc').get();
            getAllByYear(req, res, vehicleSnaps);
            break;
        case 'OLDEST':
            vehicleSnaps = await db.collection('vehicles').orderBy('year', 'asc').get();
            getAllByYear(req, res, vehicleSnaps);
            break;
    }
};

// Retrieve all searched cars from the database.
exports.findAllOnIndex = async (req, res) => {
    
    let motorTable  = req.body.motor;
    let make_id     = req.body.make;
    let model_id    = req.body.model;
    let fromPrice   = Number(req.body.fromPrice);
    let toPrice     = Number(req.body.toPrice);
    let fromYear    = Number(req.body.fromYear);
    let toYear      = Number(req.body.toYear);
    
    let cars = [];
       
    const carSnaps = await db.collection(motorTable).get();

    let carArray = []; 
    carSnaps.forEach(function(doc) {carArray.push(doc);});

    for(const carDoc of carArray) {

        let car = carDoc.data();
        let car_id = car.id;
        let vehicleSnaps = await db.collection('vehicles').where('id', '==', car.vehicle_id).get();
        
        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        
        for(const vehicleDoc of vehicleArray) {

            let vehicle = vehicleDoc.data();
            Object.assign(car, vehicle);

            await Promise.all([
                db.collection('ads').where('id', '==', vehicle.ad_id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(car, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    car.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    car.model = modelDoc.data().modelvalue;
                });
                
                car.id = car_id;
                if ((make_id   == "" || make_id   == car.make_id )  && 
                    (model_id  == "" || model_id  == car.model_id)  && 
                    (fromPrice == "" || fromPrice <= car.price   )  &&
                    (toPrice   == "" || toPrice   >= car.price   )  &&
                    (fromYear  == "" || fromYear  <= car.year    )  &&
                    (toYear    == "" || toYear    >= car.year    )  &&
                    (car.publish == "true" ))  
                cars.push(car);
            });
        }
    }
    res.json(cars);
};

// Update a car
exports.update = (req, res) => {
    // Find and update car with the request body
    if (!req.params.id) {  // new
        let doc = db.collection("cars").doc();
        car.id = doc.id;
        doc.set(car);
    } else {               // update
        let car = {}
        car[req.body.fname] = req.body.fvalue;
        let doc = db.collection("cars").doc(req.params.id);
        doc.update(car)
    }
};

// Update a car image
exports.updateImage = (req, res) => {
                
    let car_id = req.params.id;
    let imgPath = req.body.imgFile;
    console.log("index "+imgPath);
    db.collection('cars').doc(car_id).get()
    .then((doc) => {
        let car = doc.data();
        let imgFiles = [];
        imgFiles = car.imgfiles;
        let index = imgFiles.indexOf(imgPath);
        if (index > -1) {
            imgFiles.splice(index, 1);
        }
        car.imgfiles = imgFiles;
        let doc2 = db.collection("cars").doc(car_id)
        doc2.update(car)
        res.send({message: "Car images deleted successfully!", status: "Success"});

    });

};

// Delete a Car with the specified id in the request
exports.deleteByVehicleId = (req, res) => {
    
    db.collection('cars').where('vehicle_id', '==', req.params.id).get()
    .then(cars => {
        if(!cars) {
            return res.status(404).send({
                message: "Car not found with id " + req.params.id
            });
        }
        cars.forEach(function(car) {
            let id = car.data().id;
            car.ref.delete()
            .then(data=>{
                res.send({message: "Car deleted successfully!", status: "Success", id:id});
            });
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Car not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete car with id " + req.params.id
        });
    });
};

