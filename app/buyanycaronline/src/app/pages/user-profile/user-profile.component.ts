import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {AuthenticationService} from "../../services/authentication.service";
declare var $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  updateForm: FormGroup;
  currentUser: User;
  constructor(private authService:AuthenticationService, private formBuilder: FormBuilder) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit() {
    this.initUpdateForm();
    this.viewHandler();
  }

  initUpdateForm() {
    this.updateForm = this.formBuilder.group({
      username        : ['', [Validators.required, Validators.email]],
      hash        : ['', [Validators.required, Validators.minLength(6)]],
      confirmHash : ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.MustMatch('hash', 'confirmHash')
    });
  }

  get updateFormControls():any {
    return this.updateForm.controls;
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  viewHandler() {
    $(function updateView(element) {
      console.log("Element", element);
    })
  }

}
