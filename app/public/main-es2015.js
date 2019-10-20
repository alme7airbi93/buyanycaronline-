(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"main-wrapper\">\n\n  <!-- header -->\n  <app-header></app-header>\n  <!-- main content -->\n  <router-outlet></router-outlet>\n\n  <!-- Footer -->\n  <footer>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12\">\n          <div class=\"clearfix\">\n            <ul id=\"footer-links\">\n              <li><a href=\"\">Home</a> |\n              </li>\n              <li><a href=\"/car-search\"> Cars</a> |\n              </li>\n              <li><a href=\"/boat-search\"> Boats</a> |\n              </li>\n              <li><a href=\"#\"> About</a> |\n              </li>\n              <li><a href=\"#\"> Contact</a>\n              </li>\n            </ul>\n            <div id=\"footer-right\">Â© 2019 BUYANYCARONLINE</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"header-main\">\n    <div class=\"container clearfix\">\n      <div id=\"header-left\">\n        <div class=\"clearfix\">\n          <!--Logo-->\n          <a class=\"header-logo\" href=\"/\">\n            <img src=\"/assets/img/logo.jpg\" alt=\"Logo\">\n          </a>\n        </div>\n      </div>\n      <div id=\"header-right\">\n        <div *ngIf=\"!currentUser\" id=\"header-authentication\">\n          <button type=\"button\" data-toggle=\"modal\" data-target=\"#loginPopup\">LOGIN</button>\n          <span>|</span>\n          <button type=\"button\" data-toggle=\"modal\" data-target=\"#registerPopup\">REGISTER</button>\n        </div>\n        <div *ngIf=\"currentUser\" id=\"header-authentication\">\n          <div class=\"dropdown\" id=\"nav-mainMenu-links\">\n            <button class=\"dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\">\n              {{currentUser.username}}\n            </button>\n            <div id=\"header-authentication\" *ngIf=\"currentUser.type == 'ADMIN'\">\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\" href=\"monitor-page\">Ad Manage</a>\n                <a class=\"dropdown-item\" href=\"user-profile/{{currentUser.id}}\">User Profile</a>\n                <a class=\"dropdown-item\" (click)=\"logout()\">LOGOUT</a>\n              </div>\n            </div>\n            <div id=\"header-authentication\" *ngIf=\"currentUser.type == 'USER'\">\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\" href=\"user-profile/{{currentUser.id}}\">User Profile</a>\n                <a class=\"dropdown-item\" (click)=\"logout()\">LOGOUT</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"header-select\">\n          <div>\n            <a id=\"header-language\" href=\"#\" data-toggle=\"dropdown\" data-width=\"100%\">\n              <img src=\"/assets/img/lang-eng.png\">ENGLISH</a>\n            <ul class=\"dropdown-menu dropdown-menu-right\">\n              <li><a href=\"#\">Arabic</a></li>\n              <li><a href=\"#\">French</a></li>\n            </ul>\n          </div>\n          <!--<div>\n          <a id=\"header-currency\" href=\"#\" data-toggle=\"dropdown\" data-width=\"100%\">\n              <i class=\"fa fa-money\" style=\"margin-right: 3px;\"></i>AED</a>\n          <ul class=\"dropdown-menu dropdown-menu-right\">\n              <li><a href=\"#\">USD</a></li>\n              <li><a href=\"#\">INR</a></li>\n          </ul>\n          </div>-->\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <nav id=\"mainMenu\">\n    <div class=\"container\">\n      <div id=\"mainMenu-inner\">\n        <a href=\"javascript:void(0);\" id=\"mainMenu-icon\">\n          <i class=\"fa fa-bars\"></i>\n        </a>\n        <ul id=\"mainMenu-links\" class=\"clearfix\">\n          <li><a href=\"#\" class=\"active\">Home</a>\n          </li>\n          <li><a href=\"/car-search\">Cars</a>\n          </li>\n          <li><a href=\"/boat-search\">Boats</a>\n          </li>\n          <li><a href=\"#\">About</a>\n          </li>\n          <li><a href=\"#\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n\n\n<div class=\"modal fade\" id=\"loginPopup\">\n  <div class=\"modal-dialog\" style=\"max-width: 350px;\">\n    <div class=\"modal-content popup-form\">\n      <!-- Modal Header -->\n      <div class=\"modal-dialog-loader\" style=\"display:none;\"></div>\n      <div class=\"modal-header pf-header\">\n        <h4 class=\"pf-title\">Login</h4>\n        <button type=\"button\" class=\"close pf-close\" data-dismiss=\"modal\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-content\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\" method=\"post\">\n          <div class=\"form-group\">\n            <label class=\"pf-label\">Email</label>\n            <input type=\"email\" formControlName=\"username\" class=\"form-control pf-textInput\"\n                   [ngClass]=\"{ 'is-invalid': invalid && loginControls.username.errors }\"   placeholder=\"Enter your email\"/>\n            <div class=\"invalid-feedback\">\n              <div [ngClass]=\"{ 'is-invalid': invalid && loginControls.username.errors }\" class=\"invalid-feedback\">\n                 <div *ngIf=\"loginControls.username.errors.required\">User Name is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"pf-label\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control pf-textInput\"\n                   [ngClass]=\"{ 'is-invalid': invalid && loginControls.password.errors }\"  placeholder=\"Enter your password\"/>\n            <div class=\"invalid-feedback\">\n              <div [ngClass]=\"{ 'is-invalid': invalid && loginControls.password.errors }\" class=\"invalid-feedback\">\n               <div *ngIf=\"loginControls.password.errors.required\">Password is required</div>\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"pf-submit\"> Login </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"registerPopup\">\n  <div class=\"modal-dialog\" style=\"max-width: 350px;\">\n    <div class=\"modal-content popup-form\">\n      <!-- Modal Header -->\n      <div class=\"modal-dialog-loader\" style=\"display:none;\"></div>\n      <div class=\"modal-header pf-header\">\n        <h4 class=\"pf-title\">Register</h4>\n        <button type=\"button\" class=\"close pf-close\" data-dismiss=\"modal\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-content\">\n        <form [formGroup]=\"registerForm\" method=\"post\">\n          <div class=\"form-group\">\n            <label class=\"pf-label\">User Name</label>\n            <input email type=\"text\" formControlName=\"username\" class=\"form-control pf-textInput\"\n                   placeholder=\"Enter your user name\"/>\n            <div *ngIf=\"registerControls.username.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"registerControls.username.errors.required\">User Name is required</div>\n              <div *ngIf=\"registerControls.username.errors.exist\">User name already used</div>\n              <div *ngIf=\"registerControls.username.errors.email\">Email is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"pf-label\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control pf-textInput\"\n                   placeholder=\"Enter your password\"/>\n            <div *ngIf=\"registerControls.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"registerControls.password.errors.required\">Password is required</div>\n              <div *ngIf=\"registerControls.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"pf-label\">Confirm Password</label>\n            <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control pf-textInput\"\n                   placeholder=\"Enter your confirm password\"/>\n            <div *ngIf=\"registerControls.confirmPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"registerControls.confirmPassword.errors.required\">Confirm Password is required</div>\n              <div *ngIf=\"registerControls.confirmPassword.errors.minlength\">Password must be at least 6 characters\n              </div>\n              <div *ngIf=\"registerControls.confirmPassword.errors.mustMatch\">Passwords must match</div>\n            </div>\n          </div>\n          <input (click)=\"onRegisterSubmit()\" type=\"submit\" value=\"Register\" class=\"pf-submit\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "buyanycaronline";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/routes */ "./src/app/config/routes.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _config_routes__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/config/routes.ts":
/*!**********************************!*\
  !*** ./src/app/config/routes.ts ***!
  \**********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");




const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/config/storage.ts":
/*!***********************************!*\
  !*** ./src/app/config/storage.ts ***!
  \***********************************/
/*! exports provided: BROWSER_STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_STORAGE", function() { return BROWSER_STORAGE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const BROWSER_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(authServer, formBuilder) {
        this.authServer = authServer;
        this.formBuilder = formBuilder;
        this.currentUser = null;
        this.invalid = false;
        this.createLoginForm();
        this.createRegisterForm();
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    createRegisterForm() {
        this.registerForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
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
        this.authServer.login(this.loginForm.value).then(() => {
            this.currentUser = this.authServer.getCurrentUser();
        }).catch(err => {
            console.log('Error', err);
        });
    }
    onRegisterSubmit() {
    }
    get registerControls() {
        return this.registerForm.controls;
    }
    get loginControls() {
        return this.loginForm.controls;
    }
    logout() {
        this.currentUser = null;
        this.authServer.logout();
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/storage */ "./src/app/config/storage.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");





let AuthenticationService = class AuthenticationService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    handleError(error) {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    }
    makeAuthApiCall(urlPath, user) {
        const url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + urlPath;
        return this.http
            .post(url, user)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    getToken() {
        return this.storage.getItem('customer-token');
    }
    saveToken(token) {
        this.storage.setItem('customer-token', token);
    }
    login(user) {
        return this.makeAuthApiCall('login', user).then((authRes) => {
            this.saveToken(authRes.token);
        });
    }
    register(user) {
        return this.makeAuthApiCall('register', user).then((authRes) => {
            this.saveToken(authRes.token);
        });
    }
    logout() {
        this.storage.removeItem('customer-token');
    }
    isLoggedIn() {
        const token = this.getToken();
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > (Date.now() / 1000);
        }
        else {
            return false;
        }
    }
    getCurrentUser() {
        if (this.isLoggedIn()) {
            const token = this.getToken();
            const { username } = JSON.parse(atob(token.split('.')[1]));
            return { username };
        }
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: Storage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_config_storage__WEBPACK_IMPORTED_MODULE_2__["BROWSER_STORAGE"],] }] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config_storage__WEBPACK_IMPORTED_MODULE_2__["BROWSER_STORAGE"]))
], AuthenticationService);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    apiBaseUrl: "http://localhost:3000/",
    production: true
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    apiBaseUrl: "http://localhost:3000/",
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\almehairbi\NodeJS\buyanycaronline\app\buyanycaronline\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map