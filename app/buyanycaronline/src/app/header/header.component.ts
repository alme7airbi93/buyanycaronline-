import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthenticationService } from "../services/authentication.service";
import { User} from "../models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  loginForm: FormGroup;
  registerForm: FormGroup;
  invalid: boolean;

  constructor(private authServer: AuthenticationService, private formBuilder: FormBuilder) {
    this.currentUser = null;
    this.invalid = false;
    this.createLoginForm();
    this.createRegisterForm();
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username        : ['', [Validators.required, Validators.email]],
      password        : ['', [Validators.required]]
    });
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username        : ['', [Validators.required, Validators.email]],
      password        : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  onLoginSubmit() {
    if (this.loginForm.invalid) {
      this.invalid = true;
      console.log('Invalid', this.invalid);
      return;
    }
    this.authServer.login(this.loginForm.value).then( () => {
      this.currentUser = this.authServer.getCurrentUser();
    }).catch( err => {
      console.log('Error', err);
    });
  }

  onRegisterSubmit() {

  }
  get registerControls(): any {
    return this.registerForm.controls;
  }

  get loginControls(): any {
    return this.loginForm.controls;
  }

  logout() {
    this.currentUser = null;
    this.authServer.logout();
  }

  ngOnInit() {
  }
}
