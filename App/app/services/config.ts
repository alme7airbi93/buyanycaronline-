export class CommonService {

    baseurl: string = "/api";

    motors   = [
        {
          "id"    : "cars",
          "value" : "CAR"
        },
        {
          "id"    : "boats",
          "value" : "BOAT"
        },
        {
          "id"    : "motorcycles",
          "value" : "MOTORCYCLE"
        },
        {
          "id"    : "heavyvehicles",
          "value" : "HEAVYVEHICLE"
        },
        {
          "id"    : "numberplates",
          "value" : "NUMBERPLATE"
        }
    ];

    years = [
        2015,
        2016,
        2017,
        2018,
        2019,
        2020
    ];

    fueltypes = [
        "Fueltype1",
        "Fueltype2"
    ];
    types = [
      "Boat",
      "Car",
    ];
    conditions = [
        "Condition1",
        "Condition2"
    ];
  
    transmissions = [
        "Transmission1",
        "Transmission2"
    ];
  
    colors = [
        "Red",
        "Green",
        "Blue"
    ];
  
    features = [
        "4 Wheel Drive",
        "Cruise Control",
        "Bluetooth System",
        "Air Conditioner"
    ];
   
    fromPrices = [
        5000,
        10000,
        20000
    ];

    toPrices = [
        100000,
        200000,
        500000
    ];
    lengths = [
      {
        "id":"0,10",
        "length":"Under 10ft",
      },
      {
        "id":"10,14",
        "length":"10-14 ft",
      },
      {
        "id":"15,19",
        "length":"15-19 ft",
      },{
        "id":"20,24",
        "length":"20-24 ft",
      },
      {
        "id":"25,29",
        "length":"25-29 ft",
      },
      {
        "id":"30,39",
        "length":"30-39 ft",
      },
      {
        "id":"40,49",
        "length":"40-49 ft",
      },
      {
        "id":"50,69",
        "length":"50-69 ft",
      },
      {
        "id":"70,100",
        "length":"70-100 ft",
      },
      {
        "id":"100,10000",
        "length":"100+ ft",
      }

    ]
}