var admin = require("firebase-admin");
var db = admin.firestore();
var date = require("../../config/date");
const path = require('path');
exports.create = (req, res) => {
    let boat = {
        vehicle_id  :req.body.vehicle_id,
        length: req.body.length,
        type: req.body.type,
        subtype: req.body.subtype,
        hours: req.body.hours,
        imgfiles: req.body.imgfiles,
        create_at: date.getDate(),
        update_at: date.getDate(),
    }

    // Save boat in the database
    var doc = db.collection("boats").doc();
    boat.id = doc.id;

    doc.set(boat)
    .then(data => {
        res.json(boat);
    }).catch(err => {
        return res.status(500).json({
            message: err.message || "Something wrong while creating the boat."
        });
    });
}
exports.findAloneOne = async (req, res) => {

    let boat = {};
    
    const boatSnaps = await db.collection('boats').where('id', '==', req.params.id).get();

    carSnaps.forEach(function(doc) {
        boat = doc.data();
        res.json(boat);
    });
};
exports.findOne = async (req,res) => {
    let boat ;
    const boatSnaps = await db.collection('boats').where('id','==',req.params.id).get();
    let boatArray = [];
    boatSnaps.forEach(function(doc){
        boatArray.push(doc);
    });
    for (const boatDoc of boatArray){
        const vehicleSnaps = await db.collection('vehicles').where('id','==',boatDoc.data().vehicle_id).get();
        let vehicleArray = [];
        boat  = boatDoc.data();
        vehicleSnaps.forEach(function(doc){vehicleArray.push(doc);});
        for(const vehicleDoc of vehicleArray){
            let vehicle = vehicleDoc.data();
            Object.assign(boat, vehicle);
            await Promise.all([
                db.collection('ads').where('id', '==', vehicle.ad_id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(boat, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    boat.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    boat.model = modelDoc.data().modelvalue;
                });
            });
        }
    }
    res.json(boat);
}
exports.findAll = async (req,res) => {
    let boats = [];
    const boatSnaps = await db.collection('boats').get();

    let boatArray = [];
    boatSnaps.forEach(function(doc){
        boatArray.push(doc);
    });
    for(const boatDoc of boatArray){
        let boat = boatDoc.data();
        let boat_id = boat.id;
        let vehicleSnaps = await db.collection('vehicles').where('id','==',boat.vehicle_id).get();

        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        for(const vehicleDoc of vehicleArray){
            let vehicle = vehicleDoc.data();
            Object.assign(boat,vehicle);
            await Promise.all([
                db.collection('ads').where('id','==',vehicle.ad_id).get(),
                db.collection('makes').where('id','==',vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function(snaps) {
                snaps[0].forEach((adDoc) => {
                    Object.assign(boat,adDoc.data());
                })
                snaps[1].forEach((makeDoc) => {
                    boat.make = makeDoc.data().value;
                });
                snaps[2].forEach((modelDoc) => {
                    boat.model = modelDoc.data().value;
                });
                boat.id = boat_id;
                boats.push(boat);
            })
        }
    }
    res.json(boats);
}
exports.findAllOnSearch = async (req,res) => {
    let orderid = req.body.orderid;
    let lengthid = req.body.lengthid;
    let to,from;
    let adSnaps;
    let vehicleSnaps;
    
    switch(orderid) {
        case 'HIGHEST_PRICE':
            adSnaps = await db.collection('ads').orderBy('price', 'desc').get();
            getAllByPrice(req, res,adSnaps);
            break;
        case 'LOWEST_PRICE':
            adSnaps = await db.collection('ads').orderBy('price', 'asc').get();
            getAllByPrice(req, res,adSnaps);
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
    
}
exports.findAllOnIndex  = async (req,res) => {
    let make_id     = req.body.make;
    let model_id    = req.body.model;
    let fromPrice   = Number(req.body.fromPrice);
    let toPrice     = Number(req.body.toPrice);
    let fromYear    = Number(req.body.fromYear);
    let toYear      = Number(req.body.toYear);
    let boats = [];

    const boatSnaps = await db.collection("boats").get();

    let boatArray = []; 
    boatSnaps.forEach(function(doc) {carArray.push(doc);});

    for(const boatDoc of boatArray) {

        let boat = boatDoc.data();
        let boat_id = boat.id;
        let vehicleSnaps = await db.collection('vehicles').where('id', '==', boat.vehicle_id).get();
        
        let vehicleArray = [];
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        
        for(const vehicleDoc of vehicleArray) {

            let vehicle = vehicleDoc.data();
            Object.assign(boat, vehicle);

            await Promise.all([
                db.collection('ads').where('id', '==', vehicle.ad_id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(boat, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    boat.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    boat.model = modelDoc.data().modelvalue;
                });
                
                boat.id = car_id;
                if ((make_id   == "" || make_id   == boat.make_id )  && 
                    (model_id  == "" || model_id  == boat.model_id)  && 
                    (fromPrice == "" || fromPrice <= boat.price   )  &&
                    (toPrice   == "" || toPrice   >= boat.price   )  &&
                    (fromYear  == "" || fromYear  <= boat.year    )  &&
                    (toYear    == "" || toYear    >= boat.year    )  &&
                    (car.publish == "true" ))  
                cars.push(car);
            });
        }
    }
    res.json(cars);
}
async function getByPrice(req,res) {
    let make_id     = req.body.make;
    let model_id    = req.body.model;
    let fromPrice   = Number(req.body.fromPrice);
    let toPrice     = Number(req.body.toPrice);
    let fromYear    = Number(req.body.fromYear);
    let toYear      = Number(req.body.toYear);
    let lengthid = req.body.lengthID;
    console.log(lengthid);
    var to,from;
    let boats = [];
    let vehicleArray = [];
    let boatArray = [];
    from = lengthid.split(',')[0];
    to = lengthid.split(',')[1];
    let boatSnaps ;
    let vehicleSnaps;
    if(to == 10000){
        boatSnaps = await db.collection('boats').where('length','>=',from).get();
        console.log(boatSnaps);
    }else{
        console.log(to+','+from);
        boatSnaps = await db.collection('boats').where('length','>=',from).where('length','<=',to).get();
    }
    await boatSnaps.forEach(function(doc){
        boatArray.push(doc);
    });
    for(boatDoc of boatArray){
        console.log("boatArrayLength ",boatArray.length);
    	let boat = boatDoc.data();
    	vehicleSnaps = await db.collection('vehicles').where('id','==',boat.vehicle_id).get();
    	
        try{
            vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        }catch (ex){
            console.log(ex);
        }
        Object.assign(boat,boatDoc.data());
    	for(vehicleDoc of vehicleArray){
    		let vehicle = vehicleDoc.data();
            console.log("vehicleArray ",vehicleArray.length);
            console.log('vehicle '+vehicle);
    		Object.assign(boat,vehicle);
    		await Promise.all([
    			db.collection('ads').where('id','==',vehicle.ad_id).get(),
    			db.collection('makes').where('id','==',vehicle.make_id).get(),
    			db.collection('models').where('id','==',vehicle.model_id).get()
    		]).then(function(snaps) {
    			snaps[0].forEach((adDoc) => {
    				Object.assign(boat,adDoc.data());
    			});
    			snaps[1].forEach((makeDoc) => {
    				boat.make = makeDoc.data().value;
    			});
    			snaps[2].forEach((modelDoc) => {
    				boat.model = modelDoc.data().value;
    			})
    			boats.push(boat)
    		})
    	}
    }
        res.json(boats);
}
async function getAllByYear(req,res,vehicleSnaps){
    let make_id     = req.body.make;
    let model_id    = req.body.model;
    let fromPrice   = Number(req.body.fromPrice);
    let toPrice     = Number(req.body.toPrice);
    let fromYear    = Number(req.body.fromYear);
    let toYear      = Number(req.body.toYear);
    let boats = [];
    let vehicleArray = [];
    let lengthID = req.body.lengthID;
    let from = Number(lengthID.split(',')[0]);
    let to = Number(lengthID.split(',')[1])
    console.log(to+','+from);
    vehicleSnaps.forEach(function(doc){
        vehicleArray.push(doc);
    });
    for(const vehicleDoc of vehicleArray){
        let vehicle = vehicleDoc.data();
        let boat = {};
        Object.assign(boat,vehicle);
        let boatSnaps = await db.collection('boats').where('vehicle_id','==',vehicle.id).get();
        let boatArray = [];
        boatSnaps.forEach(function(doc) {boatArray.push(doc);});
        for(const boatDoc of boatArray) {

            Object.assign(boat, boatDoc.data());

            await Promise.all([
                db.collection('ads').where('id', '==', boat.ad_id).get(),
                db.collection('makes').where('id', '==', boat.make_id).get(),
                db.collection('models').where('id', '==', boat.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((adDoc) => {
                    Object.assign(boat, adDoc.data());
                });

                snaps[1].forEach((makeDoc) => {
                    boat.make = makeDoc.data().value;
                });

                snaps[2].forEach((modelDoc) => {
                    boat.model = modelDoc.data().value;
                });
                
                if ((make_id   == "" || make_id   == boat.make_id )  && 
                    (model_id  == "" || model_id  == boat.model_id)  && 
                    (fromPrice == "" || fromPrice <= boat.price   )  &&
                    (toPrice   == "" || toPrice   >= boat.price   )  &&
                    (fromYear  == "" || fromYear  <= boat.year    )  &&
                    (toYear    == "" || toYear    >= boat.year    ) &&(to == 0 || boat.length<=to)
                    &&(from == 0|| boat.length>=from))  

                    boats.push(boat);
            });
        }
    }
    res.json(boats);
}
async function getAllByPrice(req,res,adSnaps){
    let make_id = req.body.make;
    let model_id = req.body.model;
    let fromPrice   = Number(req.body.fromPrice);
    let toPrice     = Number(req.body.toPrice);
    let fromYear    = Number(req.body.fromYear);
    let toYear      = Number(req.body.toYear);
    let lengthID = req.body.lengthID;
    let from = Number(lengthID.split(',')[0]);
    let to = Number(lengthID.split(',')[1])
    console.log(to+','+from);
    let boats = [];
    var flag = false;
    let adArray = []; 
    adSnaps.forEach(function(doc) {adArray.push(doc);});

    for(const adDoc of adArray) {
        flag = false;
        let ad = adDoc.data();
        let boat = {};
        Object.assign(boat, ad);
        let vehicleSnaps = await db.collection('vehicles').where('ad_id', '==', ad.id).get();
        let boatSnaps = await db.collection('boats').get();
        let vehicleArray = [];
        let boatArray = [];
        boatSnaps.forEach(function(doc){
            boatArray.push(doc);
        });
        vehicleSnaps.forEach(function(doc) {vehicleArray.push(doc);});
        console.log("boatArrat ",boatArray.length);
        console.log("vehicleArray",vehicleArray.length);
        for(const vehicleDoc of vehicleArray) {
            let vehicle = vehicleDoc.data();
            console.log("vehicle_id ",vehicle.id);
            console.log("boat->vehicle_id",boatArray[0].data().vehicle_id);
            Object.assign(boat, vehicle);
            await Promise.all([
                db.collection('boats').where('vehicle_id', '==', vehicle.id).get(),
                db.collection('makes').where('id', '==', vehicle.make_id).get(),
                db.collection('models').where('id', '==', vehicle.model_id).get()
            ]).then(function (snaps) {
                
                snaps[0].forEach((boatDoc) => {
                    if(boatDoc.data().vehicle_id)
                        flag = true;
                    Object.assign(boat, boatDoc.data());
                });
                snaps[1].forEach((makeDoc) => {
                    boat.make = makeDoc.data().value;
                });
                snaps[2].forEach((modelDoc) => {
                    boat.model = modelDoc.data().value;
                });
                console.log(flag);
                console.log(boat.make_id);
                if (flag&&(make_id  == "" || make_id  == boat.make_id )&&(model_id =="" || boat.model_id == model_id)&&
                    (toPrice == "" || toPrice   >= boat.price)  &&
                    (fromYear == "" || fromYear  <= boat.year)  &&
                    (toYear == "" || toYear    >= boat.year)&&(to == 0 || boat.length<=to)
                    &&(from == 0|| boat.length>=from)) {
                        boats.push(boat);
                }
                   
            });
        }
    }

    res.json(boats);
}
exports.upload = async(req,res) => {
    let files = req.files;
    console.log("----***----");
    console.log(files.length);
    uploadToFireStore(req, res);
}
async function uploadToFireStore(req,res) {
    let downloadURL ;
    let img_download_urls = [];
    let files = req.files;
    let boat_id = req.params.boat_id;
    console.log("boat_id "+boat_id);
    for(file of files){
        if(!file) {
            return;
        }
        let ext = path.extname(file.originalname);
        let savedFilename = new Date().getTime() + '- boat'+ ext;
        let fileUpload = req.bucket.file('boats/'+savedFilename);
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
    await db.collection('boats').doc(boat_id).get()
    .then((doc) => {
        let data = doc.data();
        let imgincrement = data.imgincrement;
        imgincrement += files.length;
        let imgfiles = [];
        // console.log(typeof data.imgfiles);
        // console.log(JSON.parse(data.imgfiles))
        imgfiles = data.imgfiles;
        Array.prototype.push.apply(imgfiles, img_download_urls);
        let boat = {};
        boat.imgfiles = imgfiles;
        boat.imgincrement = imgincrement;
        let boatDoc = db.collection('boats').doc(boat_id);
        boatDoc.update(boat);
        res.json({success:true,filename:downloadURL});
    });
}