import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { MakeModel } from '../../modules/make.model';
import { MakeService } from '../../modules/make.service';

import { ModelService } from '../../modules/model.service';
import { ModelModel } from '../../modules/model.model';
import { CommonService } from '../../modules/config'
import {BoatService} from '../../modules/boat.service';
import { from } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-boat-search',
  templateUrl: './boat-search.component.html',
  styleUrls: ['./boat-search.component.css']
})
export class BoatSearchComponent implements OnInit {

  findForm: FormGroup;
  submitted = false;
  boats: any;
  makes       : MakeModel[];
  models      : ModelModel[];
  fromYears   : number[];
  toYears     : number[];
  fromPrices  : number[];
  toPrices    : number[];
  selectedMake: string;
  lengths:      any[];
  constructor(private formBuilder: FormBuilder,
              private boatService : BoatService,
              private makeService: MakeService,
              private modelService: ModelService,
              private commonService: CommonService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    $('.loader').show();
    this.getAllMakes();
    this.fromYears = this.commonService.years;
    this.toYears      = this.commonService.years;
    this.fromPrices   = this.commonService.fromPrices;
    this.toPrices     = this.commonService.toPrices;
    this.lengths      =this.commonService.lengths;
    this.findForm = this.formBuilder.group({
      make:       ['', Validators.required],
      model:      ['', Validators.required],
      fromYear:   ['', Validators.required],
      toYear:     ['', Validators.required],
      fromPrice:  ['', Validators.required],
      toPrice:    ['', Validators.required],
      orderid:    ['HIGHEST_PRICE', Validators.required],
      lengthID: ['0,0',Validators.required]
    });
    let search_params = JSON.parse(localStorage.getItem("search_params"));
    localStorage.removeItem("search_params");
    if(!search_params) {

      this.getAllBoat();

    } else {

      this.getSearchAllBoatOnIndex(search_params);

    }
  }
  getAllBoat(): void{
    this.boatService.getAllBoat().subscribe(data=>{

      $('.loader').hide();
      console.log(data);
      this.boats = data;
      let imgArray:string[];
      for(let i = 0; i < this.boats.length; i++) {
        imgArray = this.boats[i].imgfiles;
        if (undefined !== imgArray &&imgArray.length > 0)
          this.boats[i].imgFile = imgArray[0];
      }
    });
  }
  getSearchAllBoatOnIndex(params: any){
    this.boatService.getSearchAllBoatOnIndex(params).subscribe((data) => {
      $('.loader').hide();
      this.boats = data;
    })
  }
  async getAllMakes(){
    await this.makeService.getAllMakes().subscribe(data => {
      this.makes = data;
      console.log(this.makes);
      setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
    })
  }
  async getModelByMakeId(make_id : string){
    await this.modelService.getAllModelByMakeId(make_id).subscribe(data=>{
      this.models = data;
      console.log(this.models);
      setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
    });
  }
  getBoatDetailById(boat_id: string,ad_id:string){
    console.log('clicked');
    localStorage.removeItem("boat_id");
    localStorage.setItem("boat_id", boat_id);
    localStorage.removeItem("ad_id");
    localStorage.setItem("ad_id", ad_id);
    this.router.navigate(['boat-detail']);
  }
  onMakeChange(event: Event){
    const value:string = (<HTMLSelectElement>event.srcElement).value;
    console.log(value);
    this.getModelByMakeId(value);
  }
  onChangeSorted(event:Event){
    const value:string = (<HTMLSelectElement>event.srcElement).value;
    console.log(value);
  }
  onSubmit(){
    this.submitted = true;
    $('.loader').show();
    console.log(this.findForm.value);
    this.boatService.getAllSearchBoat(this.findForm.value)
    .subscribe( data => {
      $('.loader').hide();
      this.boats = data;
      console.log(this.boats)
    });
  }
}
