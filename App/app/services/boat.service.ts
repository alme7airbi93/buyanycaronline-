import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './config';
@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(private http: HttpClient,
              private commonService: CommonService) { }
  addBoat(boat : any){
    return this.http.post(this.commonService.baseurl+'/boats', boat);
  }
  getAllBoat(){
    return this.http.get(this.commonService.baseurl+'/boats');
  }
  getAllSearchBoat(search : any){
    return this.http.post(this.commonService.baseurl + '/boats/search', search);
  }
  getBoatById(id : string){
    return this.http.get(this.commonService.baseurl+'/boats/'+id);
  }
  getBoatAloneById(id : string){
    return this.http.get(this.commonService.baseurl + '/boats/alone/' + id);
  }
  getSearchAllBoatOnIndex(params: any){
    return this.http.post(this.commonService.baseurl+'/boats/search-index',params);
  }
}
