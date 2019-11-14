import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {ViewDataService} from "../../services/view-data.service";

declare var $: any;
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  public flag: boolean = true;
  // Test Command

  constructor(private dataService:ViewDataService, private router: Router, private authService: AuthenticationService) {}

  ngOnInit() {

  }

  onPlaceAd() {
    if (!this.authService.isLoggedIn()) {
      this.dataService.changeMessage("Please login first to publish an ad");
      $("#loginPopup").modal("show");
    }
    this.router.navigateByUrl("new-ad");
  }
}
