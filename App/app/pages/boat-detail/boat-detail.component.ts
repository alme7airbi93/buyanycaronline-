import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AdModel } from '../../modules/ad.model';
import { AdService } from '../../modules/ad.service';

import {BoatService} from '../../modules/boat.service';
import {CommonService} from  '../../modules/config';
declare var $: any;
@Component({
  selector: 'app-boat-detail',
  templateUrl: './boat-detail.component.html',
  styleUrls: ['./boat-detail.component.css']
})
export class BoatDetailComponent implements OnInit {
  boat:any;
  slideIndex: number;
  visitCount:number;

  imgFiles: string[];
  previewImgFile: string;
  features: string[];
  constructor(private boatService: BoatService,
              private adService: AdService,
              private commonService: CommonService,
              private router: Router) { }

  ngOnInit() {
    let boat_id = localStorage.getItem("boat_id");
    let ad_id = localStorage.getItem("ad_id");
    if(!boat_id){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }
    this.boat = {};
    this.getBoatById(boat_id);
    this.increaseVisitCount(ad_id);
    $(document).ready(function() {

      var slideIndex=0;

      $("body").on("click", ".vdItem-image", function() {
        var imageSrc= $(this).find('img').attr('src');
        $("#vd-previewImage").find('img').attr('src',imageSrc);
      });

      $("#vd-previewImageLeft").click(function() {
        slideIndex-=1;
        if(slideIndex<0)slideIndex=$(".vdItem-image").length-1;
        setImage();
      });

      $("#vd-previewImageRight").click(function() {
        slideIndex+=1;
        if(slideIndex>$(".vdItem-image").length-1)slideIndex=0;
        setImage();
      });

      $("#vd-previewImageFullScreen").click(function() {
        $("#popupImage").attr('src',$("#vd-previewImage").find('img').attr('src'));
        $("#imagePopupContainer").css('display','block');
        $("body").css('overflow','hidden');
      });

      $("#closeImagePopupContainer").click(function() {
        $("#imagePopupContainer").css('display','none');
        $("body").css('overflow','auto');
      });

      function setImage(){
        var imageSrc= $(".vdItem-image").eq(slideIndex).find('img').attr('src');
        $("#vd-previewImage").find('img').attr('src',imageSrc);
      }
    });
  }
  getBoatById(id: string){
    this.boatService.getBoatById(id).subscribe((data: any) => {
      this.boat = data;
      console.log("getBoatByid ",data);
      let imgFiles = [];
      for(let idx in data.imgfiles){
        imgFiles[idx] = data.imgfiles[idx];
      }
      this.imgFiles = imgFiles;
      if(imgFiles.length>0){
        this.previewImgFile = imgFiles[0];
      }
      
    })
  }
  increaseVisitCount(ad_id : string){
    this.adService.increaseVisitCount(ad_id).subscribe((data:any)=>{
      this.boat = data;
      if(data.status == "success") {
        this.visitCount = data.visitCount;
      }
    });
  }
}
