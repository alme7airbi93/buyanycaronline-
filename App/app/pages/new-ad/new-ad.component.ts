import { Component, OnInit, ChangeDetectorRef }      from '@angular/core';
import { Router, ActivatedRoute}  from "@angular/router";
import { FormBuilder, FormGroup}  from "@angular/forms";
import { FormControl, Validators} from "@angular/forms";

import { AdModel }                from '../../modules/ad.model';
import { AdService }              from '../../modules/ad.service';
import { VehicleModel }           from '../../modules/vehicle.model';
import { VehicleService }         from '../../modules/vehicle.service';
import { CarModel }               from '../../modules/car.model';
import { CarService }             from '../../modules/car.service';
import { BoatService }             from '../../modules/boat.service';
import { MakeModel }              from '../../modules/make.model';
import { MakeService }            from '../../modules/make.service';
import { ModelService }           from '../../modules/model.service';
import { ModelModel }             from '../../modules/model.model';
import { UploadService }          from '../../modules/upload.service';
import { CommonService }          from '../../modules/config';
import { AlertsService }         from 'angular-alert-module';
import { BoatModel } from 'App/app/modules/boat.model';
import { AuthenticationService } from '../../auth/authentication.service';
declare var $: any;

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})

export class NewAdComponent implements OnInit {

  user_id       : string;
  car_id        : string;
  boat_id       : string;
  ad            : AdModel;
  vehicle       : VehicleModel;
  car           : CarModel;
  boat          : BoatModel;
  makes         : MakeModel[];
  models        : ModelModel[];
  colors        : {};
  transmissions : {};
  years         : number[];
  fueltypes     : {};
  types         : any[];
  conditions    : {};
  features      : {};
  selectedMake  : string;
  selFeatures   : any [];
  currentUser   :any;
  newForm       : FormGroup;
  uploadForm    : FormGroup;
  imgFiles      : string[];
  public img_arr : any[];
  // photos: string[];
  exts: string[];
  ext: string;
  isUploaded: boolean;
  previewImgFile: string;
  vm : any;
  submitted = false;
  formData: any;
  error: string;
  lengths: any[];
  uploaded_img_arr: any[];
  inputType: string;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(private formBuilder   : FormBuilder,
              private adService     : AdService,
              private vehicleService: VehicleService,
              private carService    : CarService,
              private boatService   : BoatService,
              private makeService   : MakeService,
              private modelService  : ModelService,
              private uploadService : UploadService,
              private commonService : CommonService,
              private cdRef         : ChangeDetectorRef,
              private route         : ActivatedRoute,
              private router        : Router,
              private auth          :AuthenticationService,
              private alerts: AlertsService) { }
  ngOnInit() {

    this.getAllMakes();
    this.years        = this.commonService.years;
    this.fueltypes    = this.commonService.fueltypes;
    this.conditions   = this.commonService.conditions;
    this.transmissions= this.commonService.transmissions;
    this.colors       = this.commonService.colors;
    this.features     = this.commonService.features;
    this.types        = this.commonService.motors;
    this.isUploaded = false;
    this.currentUser = this.auth.currentUserValue;
    this.uploaded_img_arr = [];
    this.inputType = "CAR";
    this.lengths = this.commonService.lengths;
    // this.photos = [];
    this.img_arr = [];
    this.newForm = this.formBuilder.group({
      title:       ['', Validators.required],
      price:       ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      make_id:     ['', Validators.required],
      model_id:    ['', Validators.required],
      year:        ['', Validators.required],
      fueltype:    ['', Validators.required],
      condition:   ['', Validators.required],
      length: ['',Validators.required],
      transmission: ['', Validators.required],
      color:  ['', Validators.required],
    });
    // this.carForm = this.formBuilder.group([
    //   
    // ]);
    this.uploadForm = this.formBuilder.group({
      carimg:     ['']
    });
    this.formData = new FormData();
    this.user_id = this.route.snapshot.paramMap.get('user_id');

    let self = this;
    // $("#uploadPhoto-box").css("display","block");
    // $("#publishButton-container").css("display","block");
    // $("#uploadPhotoBox-container").css("opacity","1");
    $(document).ready(function() {
      console.log($(".photo-array").parent());
      var width  = $(".photo-array").parent().width();
      $(".photo-array").css("width",width*1.5 + 'px');
      // $("#uploadPhoto-box").css("display","block");
      // $("#publishButton-container").css("display","block");
      // $("#uploadPhotoBox-container").css("opacity","1");
      $("body").find("#newForm").submit(function(e) {
        e.preventDefault();
        if (!self.onSaveSubmit())
          return;
          $("#uploadPhoto-box").css("display","block");
          $("#publishButton-container").css("display","block");
          $("#uploadPhotoBox-container").css("opacity","1");
        self.selFeatures = [];
        var index = 0;
        $('input[type="checkbox"]:checked').each(function() {
          self.selFeatures[index] = this.value; index++;
        });

        /*$("body").on("click", ".uploadPhotoBox-delete", function() {
          $(this).closest('.uploadPhotoBox-item').css('display', 'none');
        });*/
      });
    });
  }

  get fNew() { return this.newForm.controls; }
  get fBoat() { return this.newForm.get('boatForm'); }
  get fCar() {return this.newForm.get('carForm'); }
  ngAfterViewInit() {
    $('.selectpicker').selectpicker('refresh');
  }

  getAllMakes(): void {
    this.makeService.getAllMakes().subscribe(data=>{

      this.makes = data;
      setTimeout("$('.selectpicker').selectpicker('refresh')", 0);

    });
  };

  getModelByMakeId(make_id : string){
    this.modelService.getAllModelByMakeId(make_id).subscribe(data=>{

      this.models = data;
      setTimeout("$('.selectpicker').selectpicker('refresh')", 0);

    });
  }

  onMakeChange(event:Event) {

    const value:string = (<HTMLSelectElement>event.srcElement).value;
    this.getModelByMakeId(value);

  }
  changeTypes(event:Event) {
    console.log('-------');
    this.inputType = (<HTMLSelectElement>event.srcElement).value;
    console.log(this.inputType);
    this.submitted = false;
  }
  customValidation(){
    let pass = true;
    console.log(this.newForm.controls);
    var obj = this.newForm.controls;
    const mapped = Object.keys(obj).map(key => ({type: key, value: obj[key]}));
    console.log(mapped);
    for(let validated_item of mapped){
      if(this.inputType=="BOAT"){
        if(validated_item.value.errors){
          if(validated_item.type=="transmission"||validated_item.type=="color"){
              pass = true;
          }else{
            pass = false;
            break;
          }
        }
      }
      if(this.inputType=="CAR"){
        if(validated_item.value.errors){
          if(validated_item.type=="length"){
              pass = true;
          }else{
            pass = false;
            break;
          }
        }
      }
    }
    console.log(pass);
    return pass;
  }
  onSaveSubmit(){
    console.log(this.currentUser);
    this.submitted = true;
    let isPassed = this.customValidation();
    if (!isPassed) {
      setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
      return false;
    }
    this.ad = {
        id          : '',
        title       : this.newForm.value.title,
        price       : this.newForm.value.price,
        description : this.newForm.value.description,
        user_id     : this.user_id,
        city        : '',
        no          : 0,
        approve     : 0,
        publish     : false,
        visitcount  : 0
    }

    this.addAd();

    return true;

  }
  closeImage(item) {
    console.log(item);
    // this.img_arr.splice(item.idx, 1);
    // console.log(this.img_arr);
    var idx = this.img_arr.indexOf(item);
    this.img_arr.splice(idx,1);
    this.formData.set('file',[]);
    if(item.isUploaded){
      this.onDeleteSubmit(item);
      return;
    }
    for(let val of this.img_arr){
      this.formData.append('file',val.file);
    }
    // console.log(this.formData.getAll('file'));
  }
  onFileChange($event) {
    if ($event.target.files.length > 0) {
      const file = $event.target.files[0];
      console.log('file-data ',file);
      let reader = new FileReader();
      reader.onload = ($event:any) => {
      var obj = {
        file: file,
        base64: $event.target.result,
        isUploaded:false,
        imgPath: '',
      };
      this.img_arr.push(obj);
      }
      reader.readAsDataURL(file);
      this.uploadForm.get('carimg').setValue(file);
      this.formData.append('file',this.uploadForm.get('carimg').value);
    }
  }

  onUploadSubmit() {
    $('.loader').show();
    console.log(this.formData);
    switch(this.inputType){
      case "CAR":
          this.uploadCarImage();
          break;
      case "BOAT":
          this.uploadBoatImage()
          break;
      default:
        break;
    }
    
  }
  uploadCarImage(){
    this.uploadService.upload(this.car_id, this.formData).subscribe(
      data => {
        if(data.success == true) {
          $('.loader').hide();
          console.log(data);
          this.getCarAloneById(this.car_id);
        }
      }
    );
  }
  uploadBoatImage(){
    this.uploadService.uploadBoatImage(this.boat_id, this.formData).subscribe(
      data => {
        if(data.success == true) {
          $('.loader').hide();
          console.log(data);
          //this.getBoatAloneById(this.boat_id);
        }
      }
    );
  }
  onDeleteSubmit(item:any){
    let imgFileName = item.imgPath;

    this.carService.updateCarImageById(this.car_id, imgFileName)
      .subscribe( (data) => {
        this.getCarAloneById(this.car_id);
      });
  }

  onPublishSubmit() {
    this.adService.updateAd(this.vehicle.ad_id, 'publish', 'true').subscribe(
      data => {
        this.router.navigate(["/car-search"]);
      }
    );
  }
  // get the form short name to access the form fields
  get f() { return this.newForm.controls; }

  getCarAloneById(car_id:string) {
    this.carService.getCarAloneById(car_id)
    .subscribe( (data:CarModel) => {
      this.imgFiles = [];
      this.imgFiles = data.imgfiles;
      this.formData.set('file',[]);
      var i = 0;
      for(let item of this.img_arr){
        item.isUploaded = true;
        item.imgPath = this.imgFiles[i];
        i++;
      }
    });
  }
  getBoatAloneById(car_id:string) {
    this.boatService.getBoatAloneById(car_id)
    .subscribe( (data:BoatModel) => {
      this.imgFiles = [];
      this.imgFiles = data.imgfiles;
      this.formData.set('file',[]);
      var i = 0;
      for(let item of this.img_arr){
        item.isUploaded = true;
        item.imgPath = this.imgFiles[i];
        i++;
      }
    });
  }

  addAd(){
    this.adService.addAd(this.ad)
      .subscribe( (data:AdModel) => {

        this.vehicle = {
          id          : '',
          ad_id       : data.id,
          make_id     : this.newForm.value.make_id,
          model_id    : this.newForm.value.model_id,
          warrenty    : true,
          cylinders   : 0,
          condition   : this.newForm.value.condition,
          year        : Number(this.newForm.value.year),
          fueltype    : this.newForm.value.fueltype
        }

        this.addVehicle();
      });
  }

  addVehicle(){
    this.vehicleService.addVehicle(this.vehicle)
      .subscribe( (data:VehicleModel) => {
        switch(this.inputType){
          case "CAR":
              this.setCarData(data)
              this.addCar();
              break;
          case "BOAT":
              this.setBoatData(data);
              this.addBoat();
              break;
          default:
            this.addCar();
            break;
        }
      });
  }
  setCarData(data:any){
    this.car = {
      id           : '',
      vehicle_id   : data.id,
      distance     : '',
      bodytype     : 0,
      doors        : 0,
      features     : JSON.stringify(this.selFeatures),
      horsepower   : 0,
      transmission : this.newForm.value.transmission,
      color        : this.newForm.value.color,
      fueltype     : this.newForm.value.fueltype,
      regionalspecs: 0,
      imgincrement : 0,
      imgfiles     : [],
      imgbase64Encoded: ''
    }
  }
  setBoatData(data){
    this.boat = {
      id              : '',
      vehicle_id      :data.id,
      type            : '',
      subtype         : '',
      hours           : 0,
      length          :this.newForm.value.length,
      imgincrement    : 0,
      imgfiles        : [],
    }
  }
  addCar(){
    this.carService.addCar(this.car)
      .subscribe( (data:CarModel) => {
        this.car_id = data.id;
      });
  }
  addBoat(){
    this.boatService.addBoat(this.boat)
      .subscribe( (data:BoatModel) => {
        console.log(data);
        this.boat_id = data.id;
      });
  }

}
