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

/***/ "./App/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./App/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./App/app/auth/auth.guard.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/index/index.component */ "./App/app/pages/index/index.component.ts");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ "./App/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/new-ad/new-ad.component */ "./App/app/pages/new-ad/new-ad.component.ts");
/* harmony import */ var _pages_manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/manage-ad/manage-ad.component */ "./App/app/pages/manage-ad/manage-ad.component.ts");
/* harmony import */ var _pages_car_search_car_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/car-search/car-search.component */ "./App/app/pages/car-search/car-search.component.ts");
/* harmony import */ var _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/car-detail/car-detail.component */ "./App/app/pages/car-detail/car-detail.component.ts");
/* harmony import */ var _pages_monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/monitor-page/monitor-page.component */ "./App/app/pages/monitor-page/monitor-page.component.ts");
/* harmony import */ var _pages_boat_search_boat_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/boat-search/boat-search.component */ "./App/app/pages/boat-search/boat-search.component.ts");
/* harmony import */ var _pages_boat_detail_boat_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/boat-detail/boat-detail.component */ "./App/app/pages/boat-detail/boat-detail.component.ts");













const routes = [
    { path: '', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"] },
    { path: 'user-profile/:user_id', component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'new-ad/:user_id', component: _pages_new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_6__["NewAdComponent"] },
    { path: 'manage-ad/:ad_id', component: _pages_manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_7__["ManageAdComponent"] },
    { path: 'monitor-page', component: _pages_monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_10__["MonitorPageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'car-search', component: _pages_car_search_car_search_component__WEBPACK_IMPORTED_MODULE_8__["CarSearchComponent"] },
    { path: 'car-detail', component: _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_9__["CarDetailComponent"] },
    { path: 'boat-search', component: _pages_boat_search_boat_search_component__WEBPACK_IMPORTED_MODULE_11__["BoatSearchComponent"] },
    { path: 'boat-detail', component: _pages_boat_detail_boat_detail_component__WEBPACK_IMPORTED_MODULE_12__["BoatDetailComponent"] },
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

/***/ "./App/app/app.component.css":
/*!***********************************!*\
  !*** ./App/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./App/app/app.component.ts":
/*!**********************************!*\
  !*** ./App/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modules_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/user.service */ "./App/app/modules/user.service.ts");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/authentication.service */ "./App/app/auth/authentication.service.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);








let AppComponent = class AppComponent {
    constructor(formBuilder, router, authenticationService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.title = 'buyanycaronline';
        this.loading = false;
        this.submitted = false;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
        this.registerForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
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
    // convenience getter for easy access to form fields
    get fLogin() { return this.loginForm.controls; }
    get fRegister() { return this.registerForm.controls; }
    onLoginSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        $('.modal-dialog-loader').show();
        let password = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(this.fLogin.password.value).toString();
        this.authenticationService.login(this.fLogin.username.value, password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe((data) => {
            console.log(data);
            $('.modal-dialog-loader').hide();
            $('#loginPopup').modal('toggle');
            if (data.type == 'ADMIN')
                this.router.navigate(["/monitor-page"]);
            else if (data.type == 'MORDERTER') {
                this.router.navigate(['/user-profile/' + data.id]);
            }
            else {
                this.router.navigate(['/user-profile/' + data.id]);
            }
        }, err => {
            $('.modal-dialog-loader').hide();
            this.loginForm.controls["password"].setErrors({ incorrect: true });
            this.loading = false;
        });
    }
    onRegisterSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        $('.modal-dialog-loader').show();
        this.user = {
            id: '',
            username: this.fRegister.username.value,
            password: ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(this.fRegister.password.value).toString(),
            type: '',
            message_id: '',
            billinginfo_id: '',
            token: ''
        };
        this.userService.addUser(this.user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe((user) => {
            $('.modal-dialog-loader').hide();
            if (user && user.token) {
                $('#registerPopup').modal('toggle');
                this.authenticationService.register(user);
                this.currentUser = user;
                if (user.type == 'ADMIN')
                    this.router.navigate(["/monitor-page"]);
                else
                    this.router.navigate(['/user-profile/' + user.id]);
            }
        }, err => {
            $('.modal-dialog-loader').hide();
            this.registerForm.controls["username"].setErrors({ exist: true });
            this.loading = false;
        });
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['']);
    }
    menuFunction() {
        var x = document.getElementById("mainMenu-links");
        if (x.className === "clearfix") {
            x.className += " open";
        }
        else {
            x.className = "clearfix";
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _modules_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./App/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./App/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        _modules_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], AppComponent);



/***/ }),

/***/ "./App/app/app.module.ts":
/*!*******************************!*\
  !*** ./App/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./App/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./App/app/app.component.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm2015/alerts.js");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/car.service */ "./App/app/modules/car.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/config */ "./App/app/modules/config.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/index/index.component */ "./App/app/pages/index/index.component.ts");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ "./App/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/new-ad/new-ad.component */ "./App/app/pages/new-ad/new-ad.component.ts");
/* harmony import */ var _pages_manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/manage-ad/manage-ad.component */ "./App/app/pages/manage-ad/manage-ad.component.ts");
/* harmony import */ var _pages_car_search_car_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/car-search/car-search.component */ "./App/app/pages/car-search/car-search.component.ts");
/* harmony import */ var _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/car-detail/car-detail.component */ "./App/app/pages/car-detail/car-detail.component.ts");
/* harmony import */ var _pages_monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/monitor-page/monitor-page.component */ "./App/app/pages/monitor-page/monitor-page.component.ts");
/* harmony import */ var _pages_boat_search_boat_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/boat-search/boat-search.component */ "./App/app/pages/boat-search/boat-search.component.ts");
/* harmony import */ var _pages_boat_detail_boat_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/boat-detail/boat-detail.component */ "./App/app/pages/boat-detail/boat-detail.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _pages_index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
            _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"],
            _pages_new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_12__["NewAdComponent"],
            _pages_manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_13__["ManageAdComponent"],
            _pages_car_search_car_search_component__WEBPACK_IMPORTED_MODULE_14__["CarSearchComponent"],
            _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_15__["CarDetailComponent"],
            _pages_monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_16__["MonitorPageComponent"],
            _pages_boat_search_boat_search_component__WEBPACK_IMPORTED_MODULE_17__["BoatSearchComponent"],
            _pages_boat_detail_boat_detail_component__WEBPACK_IMPORTED_MODULE_18__["BoatDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_7__["AlertsModule"].forRoot(),
        ],
        providers: [
            _modules_car_service__WEBPACK_IMPORTED_MODULE_8__["CarService"],
            _modules_config__WEBPACK_IMPORTED_MODULE_9__["CommonService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./App/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./App/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./App/app/auth/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AuthGuard);



/***/ }),

/***/ "./App/app/auth/authentication.service.ts":
/*!************************************************!*\
  !*** ./App/app/auth/authentication.service.ts ***!
  \************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/config */ "./App/app/modules/config.ts");






let AuthenticationService = class AuthenticationService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.post(this.commonService.baseurl + '/users/authenticate', { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    register(user) {
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
        }
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    setCurrentUser(user) {
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](user);
        this.currentUser = this.currentUserSubject.asObservable();
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _modules_config__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _modules_config__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], AuthenticationService);



/***/ }),

/***/ "./App/app/modules/ad.service.ts":
/*!***************************************!*\
  !*** ./App/app/modules/ad.service.ts ***!
  \***************************************/
/*! exports provided: AdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdService", function() { return AdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./App/app/modules/config.ts");




let AdService = class AdService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getAdById(id) {
        return this.http.get(this.commonService.baseurl + '/ads/' + id);
    }
    getAdVehicleId(vehicle_id) {
        return this.http.get(this.commonService.baseurl + '/ads/vehicle_id' + vehicle_id);
    }
    getAllAd() {
        return this.http.get(this.commonService.baseurl + '/ads');
    }
    getAllAdByUserId(user_id) {
        return this.http.get(this.commonService.baseurl + '/ads/userid/' + user_id);
    }
    addAd(ad) {
        return this.http.post(this.commonService.baseurl + '/ads', ad);
    }
    updateAd(id, fname, fvalue) {
        return this.http.put(this.commonService.baseurl + '/ads/' + id, { fname: fname, fvalue: fvalue });
    }
    increaseVisitCount(id) {
        return this.http.put(this.commonService.baseurl + '/ads/increase/' + id, { fname: 'visitcount', fvalue: '' });
    }
    deleteAd(id) {
        return this.http.delete(this.commonService.baseurl + '/ads/' + id);
    }
    approveAd(id) {
        return this.http.post(this.commonService.baseurl + '/ads/approve', { id: id });
    }
};
AdService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
AdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], AdService);



/***/ }),

/***/ "./App/app/modules/billinginfo.service.ts":
/*!************************************************!*\
  !*** ./App/app/modules/billinginfo.service.ts ***!
  \************************************************/
/*! exports provided: BillingInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingInfoService", function() { return BillingInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./App/app/modules/config.ts");




let BillingInfoService = class BillingInfoService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getBillingInfoById(id) {
        return this.http.get(this.commonService.baseurl + '/billinginfos/' + id);
    }
    getAllBillingInfo() {
        return this.http.get(this.commonService.baseurl + '/billinginfos');
    }
    updateBillingInfo(user_id, fname, fvalue) {
        return this.http.put(this.commonService.baseurl + '/billinginfos/' + user_id, { fname: fname, fvalue: fvalue });
    }
};
BillingInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
BillingInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], BillingInfoService);



/***/ }),

/***/ "./App/app/modules/boat.service.ts":
/*!*****************************************!*\
  !*** ./App/app/modules/boat.service.ts ***!
  \*****************************************/
/*! exports provided: BoatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoatService", function() { return BoatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./App/app/modules/config.ts");




let BoatService = class BoatService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    addBoat(boat) {
        return this.http.post(this.commonService.baseurl + '/boats', boat);
    }
    getAllBoat() {
        return this.http.get(this.commonService.baseurl + '/boats');
    }
    getAllSearchBoat(search) {
        return this.http.post(this.commonService.baseurl + '/boats/search', search);
    }
    getBoatById(id) {
        return this.http.get(this.commonService.baseurl + '/boats/' + id);
    }
    getBoatAloneById(id) {
        return this.http.get(this.commonService.baseurl + '/boats/alone/' + id);
    }
    getSearchAllBoatOnIndex(params) {
        return this.http.post(this.commonService.baseurl + '/boats/search-index', params);
    }
};
BoatService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
BoatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], BoatService);



/***/ }),

/***/ "./App/app/modules/car.service.ts":
/*!****************************************!*\
  !*** ./App/app/modules/car.service.ts ***!
  \****************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./App/app/modules/config.ts");




let CarService = class CarService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getCarById(id) {
        return this.http.get(this.commonService.baseurl + '/cars/' + id);
    }
    getCarByAdId(ad_id) {
        return this.http.get(this.commonService.baseurl + '/cars/ad/' + ad_id);
    }
    getAllCar() {
        return this.http.get(this.commonService.baseurl + '/cars');
    }
    getSearchAllCar(search) {
        return this.http.post(this.commonService.baseurl + '/cars/search', search);
    }
    getSearchAllCarOnIndex(search) {
        return this.http.post(this.commonService.baseurl + '/cars/search-index', search);
    }
    getCarAloneById(id) {
        return this.http.get(this.commonService.baseurl + '/cars/alone/' + id);
    }
    addCar(car) {
        return this.http.post(this.commonService.baseurl + '/cars', car);
    }
    updateCar(id, fname, fvalue) {
        return this.http.put(this.commonService.baseurl + '/cars/' + id, { fname: fname, fvalue: fvalue });
    }
    updateCarImageById(id, imgFile) {
        return this.http.put(this.commonService.baseurl + '/cars/img/' + id, { imgFile: imgFile });
    }
    deleteCarByVehicleId(vehicle_id) {
        return this.http.delete(this.commonService.baseurl + '/cars/vehicle/' + vehicle_id);
    }
};
CarService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
CarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], CarService);



/***/ }),

/***/ "./App/app/modules/config.ts":
/*!***********************************!*\
  !*** ./App/app/modules/config.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
class CommonService {
    constructor() {
        this.baseurl = "/api";
        this.motors = [
            {
                "id": "cars",
                "value": "CAR"
            },
            {
                "id": "boats",
                "value": "BOAT"
            },
            {
                "id": "motorcycles",
                "value": "MOTORCYCLE"
            },
            {
                "id": "heavyvehicles",
                "value": "HEAVYVEHICLE"
            },
            {
                "id": "numberplates",
                "value": "NUMBERPLATE"
            }
        ];
        this.years = [
            2015,
            2016,
            2017,
            2018,
            2019,
            2020
        ];
        this.fueltypes = [
            "Fueltype1",
            "Fueltype2"
        ];
        this.types = [
            "Boat",
            "Car",
        ];
        this.conditions = [
            "Condition1",
            "Condition2"
        ];
        this.transmissions = [
            "Transmission1",
            "Transmission2"
        ];
        this.colors = [
            "Red",
            "Green",
            "Blue"
        ];
        this.features = [
            "4 Wheel Drive",
            "Cruise Control",
            "Bluetooth System",
            "Air Conditioner"
        ];
        this.fromPrices = [
            5000,
            10000,
            20000
        ];
        this.toPrices = [
            100000,
            200000,
            500000
        ];
        this.lengths = [
            {
                "id": "0,10",
                "length": "Under 10ft",
            },
            {
                "id": "10,14",
                "length": "10-14 ft",
            },
            {
                "id": "15,19",
                "length": "15-19 ft",
            }, {
                "id": "20,24",
                "length": "20-24 ft",
            },
            {
                "id": "25,29",
                "length": "25-29 ft",
            },
            {
                "id": "30,39",
                "length": "30-39 ft",
            },
            {
                "id": "40,49",
                "length": "40-49 ft",
            },
            {
                "id": "50,69",
                "length": "50-69 ft",
            },
            {
                "id": "70,100",
                "length": "70-100 ft",
            },
            {
                "id": "100,10000",
                "length": "100+ ft",
            }
        ];
    }
}


/***/ }),

/***/ "./App/app/modules/make.service.ts":
/*!*****************************************!*\
  !*** ./App/app/modules/make.service.ts ***!
  \*****************************************/
/*! exports provided: MakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeService", function() { return MakeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./App/app/modules/config.ts");




let MakeService = class MakeService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getMakeById(id) {
        return this.http.get(this.commonService.baseurl + '/makes/' + id);
    }
    getAllMakes() {
        return this.http.get(this.commonService.baseurl + '/makes');
    }
};
MakeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
MakeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], MakeService);



/***/ }),

/***/ "./App/app/modules/model.service.ts":
/*!******************************************!*\
  !*** ./App/app/modules/model.service.ts ***!
  \******************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./App/app/modules/config.ts");




let ModelService = class ModelService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getModelById(id) {
        return this.http.get(this.commonService.baseurl + '/models/' + id);
    }
    getAllModels() {
        return this.http.get(this.commonService.baseurl + '/models');
    }
    getAllModelByMakeId(make_id) {
        return this.http.get(this.commonService.baseurl + '/models/makeid/' + make_id);
    }
};
ModelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
ModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], ModelService);



/***/ }),

/***/ "./App/app/modules/upload.service.ts":
/*!*******************************************!*\
  !*** ./App/app/modules/upload.service.ts ***!
  \*******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./App/app/modules/config.ts");





let UploadService = class UploadService {
    constructor(httpClient, commonService) {
        this.httpClient = httpClient;
        this.commonService = commonService;
        this.SERVER_URL = this.commonService.baseurl + "/cars/upload/";
        this.SERVER_URL_BOAT = this.commonService.baseurl + "/boats/upload/";
    }
    upload(car_id, data) {
        let uploadURL = `${this.SERVER_URL}`;
        return this.httpClient.post(uploadURL + car_id, data, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                    const progress = Math.round(100 * event.loaded / event.total);
                    return { status: 'progress', message: progress };
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                    return event.body;
                default:
                    return `Unhandled event: ${event.type}`;
            }
        }));
    }
    uploadBoatImage(boat_id, data) {
        let uploadURL = `${this.SERVER_URL_BOAT}`;
        return this.httpClient.post(uploadURL + boat_id, data, {
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                    const progress = Math.round(100 * event.loaded / event.total);
                    return { status: 'progress', message: progress };
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                    return event.body;
                default:
                    return `Unhandled event: ${event.type}`;
            }
        }));
    }
};
UploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _config__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], UploadService);



/***/ }),

/***/ "./App/app/modules/user.service.ts":
/*!*****************************************!*\
  !*** ./App/app/modules/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./App/app/modules/config.ts");




let UserService = class UserService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getUserById(id) {
        return this.http.get(this.commonService.baseurl + '/users/' + id);
    }
    getAllUser() {
        return this.http.get(this.commonService.baseurl + '/users');
    }
    addUser(user) {
        return this.http.post(this.commonService.baseurl + '/users', user);
    }
    updateUser(user_id, fname, fvalue) {
        return this.http.put(this.commonService.baseurl + '/users/' + user_id, { fname: fname, fvalue: fvalue });
    }
    updateUser2(user_id, user) {
        return this.http.put(this.commonService.baseurl + '/users2/' + user_id, { user: user });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], UserService);



/***/ }),

/***/ "./App/app/modules/vehicle.service.ts":
/*!********************************************!*\
  !*** ./App/app/modules/vehicle.service.ts ***!
  \********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./App/app/modules/config.ts");




let VehicleService = class VehicleService {
    constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    getVehicleById(id) {
        return this.http.get(this.commonService.baseurl + '/vehicles/' + id);
    }
    getAllVehicle() {
        return this.http.get(this.commonService.baseurl + '/vehicles');
    }
    addVehicle(vehicle) {
        return this.http.post(this.commonService.baseurl + '/vehicles', vehicle);
    }
    updateVehicle(id, fname, fvalue) {
        return this.http.put(this.commonService.baseurl + '/vehicles/' + id, { fname: fname, fvalue: fvalue });
    }
    deleteVehicle(id) {
        return this.http.delete(this.commonService.baseurl + '/vehicles/' + id);
    }
    deleteVehicleByAdId(ad_id) {
        return this.http.delete(this.commonService.baseurl + '/vehicles/ad/' + ad_id);
    }
};
VehicleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _config__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], VehicleService);



/***/ }),

/***/ "./App/app/pages/boat-detail/boat-detail.component.css":
/*!*************************************************************!*\
  !*** ./App/app/pages/boat-detail/boat-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3BhZ2VzL2JvYXQtZGV0YWlsL2JvYXQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./App/app/pages/boat-detail/boat-detail.component.ts":
/*!************************************************************!*\
  !*** ./App/app/pages/boat-detail/boat-detail.component.ts ***!
  \************************************************************/
/*! exports provided: BoatDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoatDetailComponent", function() { return BoatDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/ad.service */ "./App/app/modules/ad.service.ts");
/* harmony import */ var _modules_boat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/boat.service */ "./App/app/modules/boat.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/config */ "./App/app/modules/config.ts");






let BoatDetailComponent = class BoatDetailComponent {
    constructor(boatService, adService, commonService, router) {
        this.boatService = boatService;
        this.adService = adService;
        this.commonService = commonService;
        this.router = router;
    }
    ngOnInit() {
        let boat_id = localStorage.getItem("boat_id");
        let ad_id = localStorage.getItem("ad_id");
        if (!boat_id) {
            alert("Something wrong!");
            this.router.navigate(['']);
            return;
        }
        this.boat = {};
        this.getBoatById(boat_id);
        this.increaseVisitCount(ad_id);
        $(document).ready(function () {
            var slideIndex = 0;
            $("body").on("click", ".vdItem-image", function () {
                var imageSrc = $(this).find('img').attr('src');
                $("#vd-previewImage").find('img').attr('src', imageSrc);
            });
            $("#vd-previewImageLeft").click(function () {
                slideIndex -= 1;
                if (slideIndex < 0)
                    slideIndex = $(".vdItem-image").length - 1;
                setImage();
            });
            $("#vd-previewImageRight").click(function () {
                slideIndex += 1;
                if (slideIndex > $(".vdItem-image").length - 1)
                    slideIndex = 0;
                setImage();
            });
            $("#vd-previewImageFullScreen").click(function () {
                $("#popupImage").attr('src', $("#vd-previewImage").find('img').attr('src'));
                $("#imagePopupContainer").css('display', 'block');
                $("body").css('overflow', 'hidden');
            });
            $("#closeImagePopupContainer").click(function () {
                $("#imagePopupContainer").css('display', 'none');
                $("body").css('overflow', 'auto');
            });
            function setImage() {
                var imageSrc = $(".vdItem-image").eq(slideIndex).find('img').attr('src');
                $("#vd-previewImage").find('img').attr('src', imageSrc);
            }
        });
    }
    getBoatById(id) {
        this.boatService.getBoatById(id).subscribe((data) => {
            this.boat = data;
            console.log("getBoatByid ", data);
            let imgFiles = [];
            for (let idx in data.imgfiles) {
                imgFiles[idx] = data.imgfiles[idx];
            }
            this.imgFiles = imgFiles;
            if (imgFiles.length > 0) {
                this.previewImgFile = imgFiles[0];
            }
        });
    }
    increaseVisitCount(ad_id) {
        this.adService.increaseVisitCount(ad_id).subscribe((data) => {
            this.boat = data;
            if (data.status == "success") {
                this.visitCount = data.visitCount;
            }
        });
    }
};
BoatDetailComponent.ctorParameters = () => [
    { type: _modules_boat_service__WEBPACK_IMPORTED_MODULE_4__["BoatService"] },
    { type: _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"] },
    { type: _modules_config__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BoatDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boat-detail',
        template: __webpack_require__(/*! raw-loader!./boat-detail.component.html */ "./node_modules/raw-loader/index.js!./App/app/pages/boat-detail/boat-detail.component.html"),
        styles: [__webpack_require__(/*! ./boat-detail.component.css */ "./App/app/pages/boat-detail/boat-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_boat_service__WEBPACK_IMPORTED_MODULE_4__["BoatService"],
        _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"],
        _modules_config__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], BoatDetailComponent);



/***/ }),

/***/ "./App/app/pages/boat-search/boat-search.component.css":
/*!*************************************************************!*\
  !*** ./App/app/pages/boat-search/boat-search.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3BhZ2VzL2JvYXQtc2VhcmNoL2JvYXQtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./App/app/pages/boat-search/boat-search.component.ts":
/*!************************************************************!*\
  !*** ./App/app/pages/boat-search/boat-search.component.ts ***!
  \************************************************************/
/*! exports provided: BoatSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoatSearchComponent", function() { return BoatSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_make_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/make.service */ "./App/app/modules/make.service.ts");
/* harmony import */ var _modules_model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/model.service */ "./App/app/modules/model.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/config */ "./App/app/modules/config.ts");
/* harmony import */ var _modules_boat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/boat.service */ "./App/app/modules/boat.service.ts");








let BoatSearchComponent = class BoatSearchComponent {
    constructor(formBuilder, boatService, makeService, modelService, commonService, route, router) {
        this.formBuilder = formBuilder;
        this.boatService = boatService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.commonService = commonService;
        this.route = route;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        $('.loader').show();
        this.getAllMakes();
        this.fromYears = this.commonService.years;
        this.toYears = this.commonService.years;
        this.fromPrices = this.commonService.fromPrices;
        this.toPrices = this.commonService.toPrices;
        this.lengths = this.commonService.lengths;
        this.findForm = this.formBuilder.group({
            make: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fromYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fromPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            orderid: ['HIGHEST_PRICE', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lengthID: ['0,0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        let search_params = JSON.parse(localStorage.getItem("search_params"));
        localStorage.removeItem("search_params");
        if (!search_params) {
            this.getAllBoat();
        }
        else {
            this.getSearchAllBoatOnIndex(search_params);
        }
    }
    getAllBoat() {
        this.boatService.getAllBoat().subscribe(data => {
            $('.loader').hide();
            console.log(data);
            this.boats = data;
            let imgArray;
            for (let i = 0; i < this.boats.length; i++) {
                imgArray = this.boats[i].imgfiles;
                if (undefined !== imgArray && imgArray.length > 0)
                    this.boats[i].imgFile = imgArray[0];
            }
        });
    }
    getSearchAllBoatOnIndex(params) {
        this.boatService.getSearchAllBoatOnIndex(params).subscribe((data) => {
            $('.loader').hide();
            this.boats = data;
        });
    }
    getAllMakes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.makeService.getAllMakes().subscribe(data => {
                this.makes = data;
                console.log(this.makes);
                setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
            });
        });
    }
    getModelByMakeId(make_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modelService.getAllModelByMakeId(make_id).subscribe(data => {
                this.models = data;
                console.log(this.models);
                setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
            });
        });
    }
    getBoatDetailById(boat_id, ad_id) {
        console.log('clicked');
        localStorage.removeItem("boat_id");
        localStorage.setItem("boat_id", boat_id);
        localStorage.removeItem("ad_id");
        localStorage.setItem("ad_id", ad_id);
        this.router.navigate(['boat-detail']);
    }
    onMakeChange(event) {
        const value = event.srcElement.value;
        console.log(value);
        this.getModelByMakeId(value);
    }
    onChangeSorted(event) {
        const value = event.srcElement.value;
        console.log(value);
    }
    onSubmit() {
        this.submitted = true;
        $('.loader').show();
        console.log(this.findForm.value);
        this.boatService.getAllSearchBoat(this.findForm.value)
            .subscribe(data => {
            $('.loader').hide();
            this.boats = data;
            console.log(this.boats);
        });
    }
};
BoatSearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _modules_boat_service__WEBPACK_IMPORTED_MODULE_7__["BoatService"] },
    { type: _modules_make_service__WEBPACK_IMPORTED_MODULE_4__["MakeService"] },
    { type: _modules_model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"] },
    { type: _modules_config__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BoatSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boat-search',
        template: __webpack_require__(/*! raw-loader!./boat-search.component.html */ "./node_modules/raw-loader/index.js!./App/app/pages/boat-search/boat-search.component.html"),
        styles: [__webpack_require__(/*! ./boat-search.component.css */ "./App/app/pages/boat-search/boat-search.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _modules_boat_service__WEBPACK_IMPORTED_MODULE_7__["BoatService"],
        _modules_make_service__WEBPACK_IMPORTED_MODULE_4__["MakeService"],
        _modules_model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"],
        _modules_config__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], BoatSearchComponent);



/***/ }),

/***/ "./App/app/pages/car-detail/car-detail.component.css":
/*!***********************************************************!*\
  !*** ./App/app/pages/car-detail/car-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3BhZ2VzL2Nhci1kZXRhaWwvY2FyLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./App/app/pages/car-detail/car-detail.component.ts":
/*!**********************************************************!*\
  !*** ./App/app/pages/car-detail/car-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: CarDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailComponent", function() { return CarDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/ad.service */ "./App/app/modules/ad.service.ts");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/car.service */ "./App/app/modules/car.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/config */ "./App/app/modules/config.ts");






let CarDetailComponent = class CarDetailComponent {
    constructor(carService, adService, commonService, router) {
        this.carService = carService;
        this.adService = adService;
        this.commonService = commonService;
        this.router = router;
    }
    ngOnInit() {
        let car_id = localStorage.getItem("car_id");
        let ad_id = localStorage.getItem("ad_id");
        if (!car_id) {
            alert("Something wrong!");
            this.router.navigate(['']);
            return;
        }
        this.car = {};
        this.getCarById(car_id);
        this.increaseVisitCount(ad_id);
        $(document).ready(function () {
            var slideIndex = 0;
            $("body").on("click", ".vdItem-image", function () {
                var imageSrc = $(this).find('img').attr('src');
                $("#vd-previewImage").find('img').attr('src', imageSrc);
            });
            $("#vd-previewImageLeft").click(function () {
                slideIndex -= 1;
                if (slideIndex < 0)
                    slideIndex = $(".vdItem-image").length - 1;
                setImage();
            });
            $("#vd-previewImageRight").click(function () {
                slideIndex += 1;
                if (slideIndex > $(".vdItem-image").length - 1)
                    slideIndex = 0;
                setImage();
            });
            $("#vd-previewImageFullScreen").click(function () {
                $("#popupImage").attr('src', $("#vd-previewImage").find('img').attr('src'));
                $("#imagePopupContainer").css('display', 'block');
                $("body").css('overflow', 'hidden');
            });
            $("#closeImagePopupContainer").click(function () {
                $("#imagePopupContainer").css('display', 'none');
                $("body").css('overflow', 'auto');
            });
            function setImage() {
                var imageSrc = $(".vdItem-image").eq(slideIndex).find('img').attr('src');
                $("#vd-previewImage").find('img').attr('src', imageSrc);
            }
        });
    }
    getCarById(id) {
        this.carService.getCarById(id).subscribe((data) => {
            this.car = data;
            let imgFiles = [];
            this.imgFiles = [];
            this.previewImgFile = "";
            imgFiles = data.imgfiles;
            for (let i = 0; i < imgFiles.length; i++) {
                this.imgFiles[i] = imgFiles[i];
                if (i == 0)
                    this.previewImgFile = this.imgFiles[0];
            }
            this.features = JSON.parse(data.features);
        });
    }
    increaseVisitCount(ad_id) {
        this.adService.increaseVisitCount(ad_id).subscribe((data) => {
            this.car = data;
            if (data.status == "success") {
                this.visitCount = data.visitCount;
            }
        });
    }
};
CarDetailComponent.ctorParameters = () => [
    { type: _modules_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"] },
    { type: _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"] },
    { type: _modules_config__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CarDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-detail',
        template: __webpack_require__(/*! raw-loader!./car-detail.component.html */ "./node_modules/raw-loader/index.js!./App/app/pages/car-detail/car-detail.component.html"),
        styles: [__webpack_require__(/*! ./car-detail.component.css */ "./App/app/pages/car-detail/car-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"],
        _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"],
        _modules_config__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CarDetailComponent);



/***/ }),

/***/ "./App/app/pages/car-search/car-search.component.css":
/*!***********************************************************!*\
  !*** ./App/app/pages/car-search/car-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3BhZ2VzL2Nhci1zZWFyY2gvY2FyLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./App/app/pages/car-search/car-search.component.ts":
/*!**********************************************************!*\
  !*** ./App/app/pages/car-search/car-search.component.ts ***!
  \**********************************************************/
/*! exports provided: CarSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSearchComponent", function() { return CarSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/car.service */ "./App/app/modules/car.service.ts");
/* harmony import */ var _modules_make_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/make.service */ "./App/app/modules/make.service.ts");
/* harmony import */ var _modules_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/model.service */ "./App/app/modules/model.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/config */ "./App/app/modules/config.ts");








let CarSearchComponent = class CarSearchComponent {
    constructor(formBuilder, carService, makeService, modelService, commonService, route, router) {
        this.formBuilder = formBuilder;
        this.carService = carService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.commonService = commonService;
        this.route = route;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        $('.loader').show();
        this.getAllMakes();
        this.fromYears = this.commonService.years;
        this.toYears = this.commonService.years;
        this.fromPrices = this.commonService.fromPrices;
        this.toPrices = this.commonService.toPrices;
        this.findForm = this.formBuilder.group({
            make: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fromYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fromPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            orderid: ['HIGHEST_PRICE', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        let search_params = JSON.parse(localStorage.getItem("search_params"));
        localStorage.removeItem("search_params");
        if (!search_params) {
            this.getAllCar();
        }
        else {
            this.getSearchAllCarOnIndex(search_params);
        }
    }
    getCarById(id) {
        this.carService.getCarById(id).subscribe(data => {
            this.car = data;
        });
    }
    getAllCar() {
        this.carService.getAllCar().subscribe(data => {
            $('.loader').hide();
            this.cars = data;
            for (let i = 0; i < this.cars.length; i++) {
                let imgArray = this.cars[i].imgfiles;
                if (imgArray.length > 0)
                    this.cars[i].imgFile = imgArray[0];
                console.log(imgArray[0]);
            }
        });
    }
    ;
    getAllMakes() {
        this.makeService.getAllMakes().subscribe(data => {
            this.makes = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    }
    ;
    getModelByMakeId(make_id) {
        this.modelService.getAllModelByMakeId(make_id).subscribe(data => {
            this.models = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    }
    getCarDetailById(car_id, ad_id) {
        localStorage.removeItem("car_id");
        localStorage.setItem("car_id", car_id);
        localStorage.removeItem("ad_id");
        localStorage.setItem("ad_id", ad_id);
        this.router.navigate(['car-detail']);
    }
    getSearchAllCarOnIndex(params) {
        this.carService.getSearchAllCarOnIndex(params).subscribe(data => {
            $('.loader').hide();
            this.cars = data;
        });
    }
    onMakeChange(event) {
        const value = event.srcElement.value;
        this.getModelByMakeId(value);
    }
    onSubmit() {
        this.submitted = true;
        $('.loader').show();
        this.carService.getSearchAllCar(this.findForm.value)
            .subscribe(data => {
            $('.loader').hide();
            this.cars = data;
        });
    }
    // get the form short name to access the form fields
    get f() { return this.findForm.controls; }
};
CarSearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _modules_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"] },
    { type: _modules_make_service__WEBPACK_IMPORTED_MODULE_5__["MakeService"] },
    { type: _modules_model_service__WEBPACK_IMPORTED_MODULE_6__["ModelService"] },
    { type: _modules_config__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CarSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-search',
        template: __webpack_require__(/*! raw-loader!./car-search.component.html */ "./node_modules/raw-loader/index.js!./App/app/pages/car-search/car-search.component.html"),
        styles: [__webpack_require__(/*! ./car-search.component.css */ "./App/app/pages/car-search/car-search.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _modules_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"],
        _modules_make_service__WEBPACK_IMPORTED_MODULE_5__["MakeService"],
        _modules_model_service__WEBPACK_IMPORTED_MODULE_6__["ModelService"],
        _modules_config__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CarSearchComponent);



/***/ }),

/***/ "./App/app/pages/index/index.component.css":
/*!*************************************************!*\
  !*** ./App/app/pages/index/index.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3BhZ2VzL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./App/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./App/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/car.service */ "./App/app/modules/car.service.ts");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/authentication.service */ "./App/app/auth/authentication.service.ts");
/* harmony import */ var _modules_make_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/make.service */ "./App/app/modules/make.service.ts");
/* harmony import */ var _modules_model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/model.service */ "./App/app/modules/model.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/config */ "./App/app/modules/config.ts");









let IndexComponent = class IndexComponent {
    constructor(formBuilder, authenticationService, carService, makeService, modelService, commonService, router) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.carService = carService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.commonService = commonService;
        this.router = router;
        this.submitted = false;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
        this.motors = this.commonService.motors;
        this.fromYears = this.commonService.years;
        this.toYears = this.commonService.years;
        this.fromPrices = this.commonService.fromPrices;
        this.toPrices = this.commonService.toPrices;
        this.fueltypes = this.commonService.fueltypes;
        this.conditions = this.commonService.conditions;
        this.transmissions = this.commonService.transmissions;
        this.colors = this.commonService.colors;
        this.getAllMakes();
        this.findForm = this.formBuilder.group({
            motor: ['cars', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            make: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fromYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fromPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            transmission: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fueltype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            condition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onPlaceAd() {
        if (this.currentUser)
            this.router.navigate(['/new-ad/' + this.currentUser.id]);
        else
            $('#loginPopup').modal('toggle');
    }
    onSubmit() {
        localStorage.removeItem("search_params");
        localStorage.setItem("search_params", JSON.stringify(this.findForm.value));
        this.router.navigate(['car-search']);
    }
    onMakeChange(event) {
        const value = event.srcElement.value;
        this.getModelByMakeId(value);
    }
    getAllMakes() {
        this.makeService.getAllMakes().subscribe(data => {
            this.makes = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    }
    ;
    getModelByMakeId(make_id) {
        this.modelService.getAllModelByMakeId(make_id).subscribe(data => {
            this.models = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    }
    showHomeAdvanced() {
        var x = document.getElementById("home-form");
        if (x.className === "clearfix") {
            x.className += " open";
        }
        else {
            x.className = "clearfix";
        }
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _modules_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"] },
    { type: _modules_make_service__WEBPACK_IMPORTED_MODULE_6__["MakeService"] },
    { type: _modules_model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"] },
    { type: _modules_config__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./App/app/pages/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.css */ "./App/app/pages/index/index.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _modules_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"],
        _modules_make_service__WEBPACK_IMPORTED_MODULE_6__["MakeService"],
        _modules_model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"],
        _modules_config__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], IndexComponent);



/***/ }),

/***/ "./App/app/pages/manage-ad/manage-ad.component.css":
/*!*********************************************************!*\
  !*** ./App/app/pages/manage-ad/manage-ad.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3BhZ2VzL21hbmFnZS1hZC9tYW5hZ2UtYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./App/app/pages/manage-ad/manage-ad.component.ts":
/*!********************************************************!*\
  !*** ./App/app/pages/manage-ad/manage-ad.component.ts ***!
  \********************************************************/
/*! exports provided: ManageAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdComponent", function() { return ManageAdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/ad.service */ "./App/app/modules/ad.service.ts");
/* harmony import */ var _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/vehicle.service */ "./App/app/modules/vehicle.service.ts");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/car.service */ "./App/app/modules/car.service.ts");
/* harmony import */ var _modules_make_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/make.service */ "./App/app/modules/make.service.ts");
/* harmony import */ var _modules_model_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/model.service */ "./App/app/modules/model.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/config */ "./App/app/modules/config.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm2015/alerts.js");












let ManageAdComponent = class ManageAdComponent {
    constructor(formBuilder, adService, vehicleService, carService, makeService, modelService, commonService, route, router, alerts) {
        this.formBuilder = formBuilder;
        this.adService = adService;
        this.vehicleService = vehicleService;
        this.carService = carService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.commonService = commonService;
        this.route = route;
        this.router = router;
        this.alerts = alerts;
    }
    ngOnInit() {
        this.car = {};
        this.years = this.commonService.years;
        this.fueltypes = this.commonService.fueltypes;
        this.conditions = this.commonService.conditions;
        this.transmissions = this.commonService.transmissions;
        this.colors = this.commonService.colors;
        this.features = this.commonService.features;
        this.isNegative = false;
        let ad_id = this.route.snapshot.paramMap.get('ad_id');
        this.getCarByAdId(ad_id);
        this.getAllMakes();
        var self = this;
        $(document).ready(function () {
            $(".ba-input").change(function () {
                var fname = $(this).attr('id');
                var fvalue = $(this).val();
                var prev_fvalue = $(this).parent("div").prev().find("a").text();
                $(".fa-check").click();
                if (fname == 'price') {
                    if (fvalue < 0) {
                        self.isNegative = true;
                        $(this).parent("div").prev().find("a").text(prev_fvalue);
                    }
                    else {
                        var id = $("#ad_id").val();
                        $(this).parent("div").prev().find("a").text(fvalue);
                        self.updateAd(id, fname, fvalue);
                    }
                }
                if (fname == 'title' || fname == 'description') {
                    $(this).parent("div").prev().find("a").text(fvalue);
                    var id = $("#ad_id").val();
                    self.updateAd(id, fname, fvalue);
                }
            });
            $(".ba-select").change(function () {
                var fname = $(this).attr('id');
                var fvalue = $(this).val();
                var text = fvalue;
                if (fname == 'make_id' || fname == 'model_id')
                    text = $(this).find("option:selected").text();
                $(this).parent("div").prev().find("a").text(text);
                $(".fa-check").click();
                if (fname == 'make_id' ||
                    fname == 'model_id' ||
                    fname == 'year' ||
                    fname == 'condition') {
                    var id = $("#vehicle_id").val();
                    self.updateVehicle(id, fname, fvalue);
                }
                else if (fname == 'color' ||
                    fname == 'transmission' ||
                    fname == 'fueltype') {
                    var id = $("#car_id").val();
                    self.updateCar(id, fname, fvalue);
                }
            });
            $(".fa-pencil").click(function () {
                $(this).parent("div").removeClass("d-block");
                $(this).parent("div").addClass("d-none");
                $(this).parent("div").next().removeClass("d-none");
                $(this).parent("div").next().addClass("d-block");
                $(this).parent("div").next().find("input").focus();
                $(this).parent("div").next().find("select").focus();
            });
            $(".fa-check").click(function () {
                $(this).parent("div").removeClass("d-block");
                $(this).parent("div").addClass("d-none");
                $(this).parent("div").prev().removeClass("d-none");
                $(this).parent("div").prev().addClass("d-block");
            });
            $(".PhotoBox-delete").click(function () {
                $(this).parent(".PhotoBox-item").css('display', 'none');
            });
            $("body").on("click", ".PhotoBox-image", function () {
                var imageSrc = $(this).find('img').attr('src');
                $("#PhotoBox-preview").find('img').attr('src', imageSrc);
            });
        });
    }
    onMakeChange(event) {
        const value = event.srcElement.value;
        this.getModelByMakeId(value);
    }
    onDeleteSubmit(imgFile) {
        let imgFileName = imgFile;
        this.carService.updateCarImageById(this.car_id, imgFileName)
            .subscribe((data) => {
            this.getCarAloneById(this.car_id);
        });
    }
    onPublishSubmit() {
        if (this.car.approve == 0) {
            console.log('couldnt publish');
            this.alerts.setMessage("Can't publish before be approved.", 'error');
        }
        else {
            this.adService.updateAd(this.car.ad_id, 'publish', 'true').subscribe(data => {
            });
        }
    }
    changePreview(imgFile) {
        this.previewImgFile = imgFile;
    }
    getAllMakes() {
        this.makeService.getAllMakes().subscribe(data => {
            this.makes = data;
        });
    }
    ;
    getModelByMakeId(make_id) {
        this.modelService.getAllModelByMakeId(make_id).subscribe(data => {
            this.models = data;
        });
    }
    getCarByAdId(ad_id) {
        this.carService.getCarByAdId(ad_id).subscribe((data) => {
            this.car = data;
            this.car_id = data.id;
            console.log(data);
            this.getCarAloneById(this.car_id);
        });
    }
    getCarAloneById(car_id) {
        console.log("---*---");
        this.carService.getCarAloneById(car_id)
            .subscribe((data) => {
            this.imgFiles = data.imgfiles;
            this.previewImgFile = "";
            if (this.imgFiles.length > 0) {
                this.previewImgFile = this.imgFiles[0];
            }
            console.log(data.imgfiles.length);
            this.imgFiles = data.imgfiles;
        });
    }
    updateAd(id, fname, fvalue) {
        this.adService.updateAd(id, fname, fvalue)
            .subscribe(data => {
        });
    }
    updateVehicle(id, fname, fvalue) {
        this.vehicleService.updateVehicle(id, fname, fvalue)
            .subscribe(data => {
        });
    }
    updateCar(id, fname, fvalue) {
        this.carService.updateCar(id, fname, fvalue)
            .subscribe(data => {
        });
    }
};
ManageAdComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _modules_ad_service__WEBPACK_IMPORTED_MODULE_4__["AdService"] },
    { type: _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"] },
    { type: _modules_car_service__WEBPACK_IMPORTED_MODULE_6__["CarService"] },
    { type: _modules_make_service__WEBPACK_IMPORTED_MODULE_7__["MakeService"] },
    { type: _modules_model_service__WEBPACK_IMPORTED_MODULE_8__["ModelService"] },
    { type: _modules_config__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angular_alert_module__WEBPACK_IMPORTED_MODULE_10__["AlertsService"] }
];
ManageAdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-ad',
        template: __webpack_require__(/*! raw-loader!./manage-ad.component.html */ "./node_modules/raw-loader/index.js!./App/app/pages/manage-ad/manage-ad.component.html"),
        styles: [__webpack_require__(/*! ./manage-ad.component.css */ "./App/app/pages/manage-ad/manage-ad.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _modules_ad_service__WEBPACK_IMPORTED_MODULE_4__["AdService"],
        _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"],
        _modules_car_service__WEBPACK_IMPORTED_MODULE_6__["CarService"],
        _modules_make_service__WEBPACK_IMPORTED_MODULE_7__["MakeService"],
        _modules_model_service__WEBPACK_IMPORTED_MODULE_8__["ModelService"],
        _modules_config__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        angular_alert_module__WEBPACK_IMPORTED_MODULE_10__["AlertsService"]])
], ManageAdComponent);



/***/ }),

/***/ "./App/app/pages/monitor-page/monitor-page.component.css":
/*!***************************************************************!*\
  !*** ./App/app/pages/monitor-page/monitor-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3BhZ2VzL21vbml0b3ItcGFnZS9tb25pdG9yLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./App/app/pages/monitor-page/monitor-page.component.ts":
/*!**************************************************************!*\
  !*** ./App/app/pages/monitor-page/monitor-page.component.ts ***!
  \**************************************************************/
/*! exports provided: MonitorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorPageComponent", function() { return MonitorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/ad.service */ "./App/app/modules/ad.service.ts");
/* harmony import */ var _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/vehicle.service */ "./App/app/modules/vehicle.service.ts");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/car.service */ "./App/app/modules/car.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/config */ "./App/app/modules/config.ts");







let MonitorPageComponent = class MonitorPageComponent {
    constructor(adService, vehicleService, carService, commonService, router) {
        this.adService = adService;
        this.vehicleService = vehicleService;
        this.carService = carService;
        this.commonService = commonService;
        this.router = router;
    }
    ngOnInit() {
        /*let car_id = localStorage.getItem("car_id");
        if(!car_id){
          alert("Something wrong!");
          this.router.navigate(['']);
          return;
        }*/
        this.car = {};
        this.getAllAd();
        //this.getCarById('4CqIoK3oZrbVxPsffotO');
        $(document).ready(function () {
            var slideIndex = 0;
            $("body").on("click", ".adSelectedItem-image", function () {
                var imageSrc = $(this).find('img').attr('src');
                $("#adSelected-previewImage").find('img').attr('src', imageSrc);
            });
            $("#vd-previewImageLeft").click(function () {
                slideIndex -= 1;
                if (slideIndex < 0)
                    slideIndex = $(".adSelectedItem-image").length - 1;
                setImage();
            });
            $("#vd-previewImageRight").click(function () {
                slideIndex += 1;
                if (slideIndex > $(".adSelectedItem-image").length - 1)
                    slideIndex = 0;
                setImage();
            });
            function setImage() {
                var imageSrc = $(".adSelectedItem-image").eq(slideIndex).find('img').attr('src');
                $("#adSelected-previewImage").find('img').attr('src', imageSrc);
            }
        });
    }
    getAllAd() {
        this.adService.getAllAd().subscribe(data => {
            this.ads = data;
            if (data[0])
                this.getCarByAdId(data[0].id);
            else
                this.car = {};
        });
    }
    ;
    getCarById(id) {
        this.carService.getCarById(id).subscribe(data => {
            this.car = data;
        });
    }
    getCarByAdId(ad_id) {
        this.carService.getCarByAdId(ad_id).subscribe((data) => {
            this.car = data;
            console.log(data);
            let imgFiles = [];
            this.imgFiles = [];
            this.previewImgFile = "";
            imgFiles = data.imgfiles;
            if (undefined != imgFiles) {
                for (let i = 0; i < imgFiles.length; i++) {
                    this.imgFiles[i] = imgFiles[i];
                    if (i == 0)
                        this.previewImgFile = this.imgFiles[0];
                }
            }
            if (undefined != data.features) {
                this.features = JSON.parse(data.features);
            }
        });
    }
    approveAd(ad) {
        console.log('--approve--');
        this.adService.approveAd(ad.id).subscribe(data => {
        });
    }
    deleteAd(ad) {
        this.adService.deleteAd(ad.id).subscribe(data => {
            this.deleteVehicleByAdId(ad.id);
            this.getAllAd();
        });
    }
    deleteVehicleByAdId(ad_id) {
        this.vehicleService.deleteVehicleByAdId(ad_id).subscribe((data) => {
            this.deleteCarByVehicleId(data.id);
        });
    }
    deleteCarByVehicleId(vehicle_id) {
        this.carService.deleteCarByVehicleId(vehicle_id).subscribe(data => {
        });
    }
};
MonitorPageComponent.ctorParameters = () => [
    { type: _modules_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"] },
    { type: _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] },
    { type: _modules_car_service__WEBPACK_IMPORTED_MODULE_5__["CarService"] },
    { type: _modules_config__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MonitorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-monitor-page',
        template: __webpack_require__(/*! raw-loader!./monitor-page.component.html */ "./node_modules/raw-loader/index.js!./App/app/pages/monitor-page/monitor-page.component.html"),
        styles: [__webpack_require__(/*! ./monitor-page.component.css */ "./App/app/pages/monitor-page/monitor-page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_ad_service__WEBPACK_IMPORTED_MODULE_3__["AdService"],
        _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"],
        _modules_car_service__WEBPACK_IMPORTED_MODULE_5__["CarService"],
        _modules_config__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MonitorPageComponent);



/***/ }),

/***/ "./App/app/pages/new-ad/new-ad.component.css":
/*!***************************************************!*\
  !*** ./App/app/pages/new-ad/new-ad.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3BhZ2VzL25ldy1hZC9uZXctYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./App/app/pages/new-ad/new-ad.component.ts":
/*!**************************************************!*\
  !*** ./App/app/pages/new-ad/new-ad.component.ts ***!
  \**************************************************/
/*! exports provided: NewAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAdComponent", function() { return NewAdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/ad.service */ "./App/app/modules/ad.service.ts");
/* harmony import */ var _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/vehicle.service */ "./App/app/modules/vehicle.service.ts");
/* harmony import */ var _modules_car_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/car.service */ "./App/app/modules/car.service.ts");
/* harmony import */ var _modules_boat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/boat.service */ "./App/app/modules/boat.service.ts");
/* harmony import */ var _modules_make_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/make.service */ "./App/app/modules/make.service.ts");
/* harmony import */ var _modules_model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/model.service */ "./App/app/modules/model.service.ts");
/* harmony import */ var _modules_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/upload.service */ "./App/app/modules/upload.service.ts");
/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/config */ "./App/app/modules/config.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm2015/alerts.js");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../auth/authentication.service */ "./App/app/auth/authentication.service.ts");















let NewAdComponent = class NewAdComponent {
    constructor(formBuilder, adService, vehicleService, carService, boatService, makeService, modelService, uploadService, commonService, cdRef, route, router, auth, alerts) {
        this.formBuilder = formBuilder;
        this.adService = adService;
        this.vehicleService = vehicleService;
        this.carService = carService;
        this.boatService = boatService;
        this.makeService = makeService;
        this.modelService = modelService;
        this.uploadService = uploadService;
        this.commonService = commonService;
        this.cdRef = cdRef;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.alerts = alerts;
        this.submitted = false;
        this.uploadResponse = { status: '', message: '', filePath: '' };
    }
    ngOnInit() {
        this.getAllMakes();
        this.years = this.commonService.years;
        this.fueltypes = this.commonService.fueltypes;
        this.conditions = this.commonService.conditions;
        this.transmissions = this.commonService.transmissions;
        this.colors = this.commonService.colors;
        this.features = this.commonService.features;
        this.types = this.commonService.motors;
        this.isUploaded = false;
        this.currentUser = this.auth.currentUserValue;
        this.uploaded_img_arr = [];
        this.inputType = "CAR";
        this.lengths = this.commonService.lengths;
        // this.photos = [];
        this.img_arr = [];
        this.newForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            make_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fueltype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            condition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            length: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            transmission: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        // this.carForm = this.formBuilder.group([
        //   
        // ]);
        this.uploadForm = this.formBuilder.group({
            carimg: ['']
        });
        this.formData = new FormData();
        this.user_id = this.route.snapshot.paramMap.get('user_id');
        let self = this;
        // $("#uploadPhoto-box").css("display","block");
        // $("#publishButton-container").css("display","block");
        // $("#uploadPhotoBox-container").css("opacity","1");
        $(document).ready(function () {
            console.log($(".photo-array").parent());
            var width = $(".photo-array").parent().width();
            $(".photo-array").css("width", width * 1.5 + 'px');
            // $("#uploadPhoto-box").css("display","block");
            // $("#publishButton-container").css("display","block");
            // $("#uploadPhotoBox-container").css("opacity","1");
            $("body").find("#newForm").submit(function (e) {
                e.preventDefault();
                if (!self.onSaveSubmit())
                    return;
                $("#uploadPhoto-box").css("display", "block");
                $("#publishButton-container").css("display", "block");
                $("#uploadPhotoBox-container").css("opacity", "1");
                self.selFeatures = [];
                var index = 0;
                $('input[type="checkbox"]:checked').each(function () {
                    self.selFeatures[index] = this.value;
                    index++;
                });
                /*$("body").on("click", ".uploadPhotoBox-delete", function() {
                  $(this).closest('.uploadPhotoBox-item').css('display', 'none');
                });*/
            });
        });
    }
    get fNew() { return this.newForm.controls; }
    get fBoat() { return this.newForm.get('boatForm'); }
    get fCar() { return this.newForm.get('carForm'); }
    ngAfterViewInit() {
        $('.selectpicker').selectpicker('refresh');
    }
    getAllMakes() {
        this.makeService.getAllMakes().subscribe(data => {
            this.makes = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    }
    ;
    getModelByMakeId(make_id) {
        this.modelService.getAllModelByMakeId(make_id).subscribe(data => {
            this.models = data;
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
        });
    }
    onMakeChange(event) {
        const value = event.srcElement.value;
        this.getModelByMakeId(value);
    }
    changeTypes(event) {
        console.log('-------');
        this.inputType = event.srcElement.value;
        console.log(this.inputType);
        this.submitted = false;
    }
    customValidation() {
        let pass = true;
        console.log(this.newForm.controls);
        var obj = this.newForm.controls;
        const mapped = Object.keys(obj).map(key => ({ type: key, value: obj[key] }));
        console.log(mapped);
        for (let validated_item of mapped) {
            if (this.inputType == "BOAT") {
                if (validated_item.value.errors) {
                    if (validated_item.type == "transmission" || validated_item.type == "color") {
                        pass = true;
                    }
                    else {
                        pass = false;
                        break;
                    }
                }
            }
            if (this.inputType == "CAR") {
                if (validated_item.value.errors) {
                    if (validated_item.type == "length") {
                        pass = true;
                    }
                    else {
                        pass = false;
                        break;
                    }
                }
            }
        }
        console.log(pass);
        return pass;
    }
    onSaveSubmit() {
        console.log(this.currentUser);
        this.submitted = true;
        let isPassed = this.customValidation();
        if (!isPassed) {
            setTimeout("$('.selectpicker').selectpicker('refresh')", 0);
            return false;
        }
        this.ad = {
            id: '',
            title: this.newForm.value.title,
            price: this.newForm.value.price,
            description: this.newForm.value.description,
            user_id: this.user_id,
            city: '',
            no: 0,
            approve: 0,
            publish: false,
            visitcount: 0
        };
        this.addAd();
        return true;
    }
    closeImage(item) {
        console.log(item);
        // this.img_arr.splice(item.idx, 1);
        // console.log(this.img_arr);
        var idx = this.img_arr.indexOf(item);
        this.img_arr.splice(idx, 1);
        this.formData.set('file', []);
        if (item.isUploaded) {
            this.onDeleteSubmit(item);
            return;
        }
        for (let val of this.img_arr) {
            this.formData.append('file', val.file);
        }
        // console.log(this.formData.getAll('file'));
    }
    onFileChange($event) {
        if ($event.target.files.length > 0) {
            const file = $event.target.files[0];
            console.log('file-data ', file);
            let reader = new FileReader();
            reader.onload = ($event) => {
                var obj = {
                    file: file,
                    base64: $event.target.result,
                    isUploaded: false,
                    imgPath: '',
                };
                this.img_arr.push(obj);
            };
            reader.readAsDataURL(file);
            this.uploadForm.get('carimg').setValue(file);
            this.formData.append('file', this.uploadForm.get('carimg').value);
        }
    }
    onUploadSubmit() {
        $('.loader').show();
        console.log(this.formData);
        switch (this.inputType) {
            case "CAR":
                this.uploadCarImage();
                break;
            case "BOAT":
                this.uploadBoatImage();
                break;
            default:
                break;
        }
    }
    uploadCarImage() {
        this.uploadService.upload(this.car_id, this.formData).subscribe(data => {
            if (data.success == true) {
                $('.loader').hide();
                console.log(data);
                this.getCarAloneById(this.car_id);
            }
        });
    }
    uploadBoatImage() {
        this.uploadService.uploadBoatImage(this.boat_id, this.formData).subscribe(data => {
            if (data.success == true) {
                $('.loader').hide();
                console.log(data);
                //this.getBoatAloneById(this.boat_id);
            }
        });
    }
    onDeleteSubmit(item) {
        let imgFileName = item.imgPath;
        this.carService.updateCarImageById(this.car_id, imgFileName)
            .subscribe((data) => {
            this.getCarAloneById(this.car_id);
        });
    }
    onPublishSubmit() {
        this.adService.updateAd(this.vehicle.ad_id, 'publish', 'true').subscribe(data => {
            this.router.navigate(["/car-search"]);
        });
    }
    // get the form short name to access the form fields
    get f() { return this.newForm.controls; }
    getCarAloneById(car_id) {
        this.carService.getCarAloneById(car_id)
            .subscribe((data) => {
            this.imgFiles = [];
            this.imgFiles = data.imgfiles;
            this.formData.set('file', []);
            var i = 0;
            for (let item of this.img_arr) {
                item.isUploaded = true;
                item.imgPath = this.imgFiles[i];
                i++;
            }
        });
    }
    getBoatAloneById(car_id) {
        this.boatService.getBoatAloneById(car_id)
            .subscribe((data) => {
            this.imgFiles = [];
            this.imgFiles = data.imgfiles;
            this.formData.set('file', []);
            var i = 0;
            for (let item of this.img_arr) {
                item.isUploaded = true;
                item.imgPath = this.imgFiles[i];
                i++;
            }
        });
    }
    addAd() {
        this.adService.addAd(this.ad)
            .subscribe((data) => {
            this.vehicle = {
                id: '',
                ad_id: data.id,
                make_id: this.newForm.value.make_id,
                model_id: this.newForm.value.model_id,
                warrenty: true,
                cylinders: 0,
                condition: this.newForm.value.condition,
                year: Number(this.newForm.value.year),
                fueltype: this.newForm.value.fueltype
            };
            this.addVehicle();
        });
    }
    addVehicle() {
        this.vehicleService.addVehicle(this.vehicle)
            .subscribe((data) => {
            switch (this.inputType) {
                case "CAR":
                    this.setCarData(data);
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
    setCarData(data) {
        this.car = {
            id: '',
            vehicle_id: data.id,
            distance: '',
            bodytype: 0,
            doors: 0,
            features: JSON.stringify(this.selFeatures),
            horsepower: 0,
            transmission: this.newForm.value.transmission,
            color: this.newForm.value.color,
            fueltype: this.newForm.value.fueltype,
            regionalspecs: 0,
            imgincrement: 0,
            imgfiles: [],
            imgbase64Encoded: ''
        };
    }
    setBoatData(data) {
        this.boat = {
            id: '',
            vehicle_id: data.id,
            type: '',
            subtype: '',
            hours: 0,
            length: this.newForm.value.length,
            imgincrement: 0,
            imgfiles: [],
        };
    }
    addCar() {
        this.carService.addCar(this.car)
            .subscribe((data) => {
            this.car_id = data.id;
        });
    }
    addBoat() {
        this.boatService.addBoat(this.boat)
            .subscribe((data) => {
            console.log(data);
            this.boat_id = data.id;
        });
    }
};
NewAdComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _modules_ad_service__WEBPACK_IMPORTED_MODULE_4__["AdService"] },
    { type: _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"] },
    { type: _modules_car_service__WEBPACK_IMPORTED_MODULE_6__["CarService"] },
    { type: _modules_boat_service__WEBPACK_IMPORTED_MODULE_7__["BoatService"] },
    { type: _modules_make_service__WEBPACK_IMPORTED_MODULE_8__["MakeService"] },
    { type: _modules_model_service__WEBPACK_IMPORTED_MODULE_9__["ModelService"] },
    { type: _modules_upload_service__WEBPACK_IMPORTED_MODULE_10__["UploadService"] },
    { type: _modules_config__WEBPACK_IMPORTED_MODULE_11__["CommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] },
    { type: angular_alert_module__WEBPACK_IMPORTED_MODULE_12__["AlertsService"] }
];
NewAdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-ad',
        template: __webpack_require__(/*! raw-loader!./new-ad.component.html */ "./node_modules/raw-loader/index.js!./App/app/pages/new-ad/new-ad.component.html"),
        styles: [__webpack_require__(/*! ./new-ad.component.css */ "./App/app/pages/new-ad/new-ad.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _modules_ad_service__WEBPACK_IMPORTED_MODULE_4__["AdService"],
        _modules_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"],
        _modules_car_service__WEBPACK_IMPORTED_MODULE_6__["CarService"],
        _modules_boat_service__WEBPACK_IMPORTED_MODULE_7__["BoatService"],
        _modules_make_service__WEBPACK_IMPORTED_MODULE_8__["MakeService"],
        _modules_model_service__WEBPACK_IMPORTED_MODULE_9__["ModelService"],
        _modules_upload_service__WEBPACK_IMPORTED_MODULE_10__["UploadService"],
        _modules_config__WEBPACK_IMPORTED_MODULE_11__["CommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _auth_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
        angular_alert_module__WEBPACK_IMPORTED_MODULE_12__["AlertsService"]])
], NewAdComponent);



/***/ }),

/***/ "./App/app/pages/user-profile/user-profile.component.css":
/*!***************************************************************!*\
  !*** ./App/app/pages/user-profile/user-profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBcHAvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./App/app/pages/user-profile/user-profile.component.ts":
/*!**************************************************************!*\
  !*** ./App/app/pages/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/user.service */ "./App/app/modules/user.service.ts");
/* harmony import */ var _modules_billinginfo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/billinginfo.service */ "./App/app/modules/billinginfo.service.ts");
/* harmony import */ var _modules_ad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/ad.service */ "./App/app/modules/ad.service.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__);









let UserProfileComponent = class UserProfileComponent {
    constructor(formBuilder, userService, billinginfoService, adService, route, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.billinginfoService = billinginfoService;
        this.adService = adService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.loading = false;
    }
    ngOnInit() {
        this.user = {};
        let user_id = this.route.snapshot.paramMap.get('user_id');
        this.getUserById(user_id);
        this.getAllAdByUserId(user_id);
        this.accountForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
        var self = this;
        $(document).ready(function () {
            $('#username').keyup(function (e) {
                if (e.keyCode == 13) {
                    if (self.fAccount.username.errors) {
                        return;
                    }
                    var userid = $("#userid").val();
                    var fname = "username";
                    var fvalue = $(this).val();
                    $(this).parent("div").prev().find("a").text(fvalue);
                    $(".fa-check").click();
                    self.updateUser(userid, fname, fvalue);
                }
            });
            $('#confirmPassword').keyup(function (e) {
                if (e.keyCode == 13) {
                    if (self.fAccount.password.errors || self.fAccount.confirmPassword.errors) {
                        return;
                    }
                    var userid = $("#userid").val();
                    var fname = "password";
                    var fvalue = $(this).val();
                    fvalue = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(fvalue).toString();
                    $(".fa-check").click();
                    self.updateUser(userid, fname, fvalue);
                }
            });
            $('#country, #city, #address, #mobile').keyup(function (e) {
                if (e.keyCode == 13) {
                    var userid = $("#userid").val();
                    var fname = $(this).attr('id');
                    var fvalue = $(this).val();
                    $(this).parent("div").prev().find("a").text(fvalue);
                    $(".fa-check").click();
                    self.updateBillingInfo(userid, fname, fvalue);
                }
            });
            $(".fa-pencil").click(function () {
                $(".fa-check").click();
                if ($(this).parent("div").next().find("input").attr('id') == 'password') {
                    $("#confimrPasswordDiv").removeClass("d-none");
                    $("#confimrPasswordDiv").addClass("d-block");
                }
                $(this).parent("div").removeClass("d-block");
                $(this).parent("div").addClass("d-none");
                $(this).parent("div").next().removeClass("d-none");
                $(this).parent("div").next().addClass("d-block");
                $(this).parent("div").next().find("input").focus();
            });
            $(".fa-check").click(function () {
                if ($(this).parent("div").find("input").attr('id') == 'password') {
                    $("#confimrPasswordDiv").removeClass("d-block");
                    $("#confimrPasswordDiv").addClass("d-none");
                }
                $(this).parent("div").removeClass("d-block");
                $(this).parent("div").addClass("d-none");
                $(this).prev("input").val("");
                $(this).parent("div").prev().removeClass("d-none");
                $(this).parent("div").prev().addClass("d-block");
            });
        });
    }
    get fAccount() { return this.accountForm.controls; }
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
    onAccountSubmit() {
        this.submitted = true;
        if (this.accountForm.invalid) {
            return;
        }
        this.loading = true;
        $('.modal-dialog-loader').show();
        let updateUser = {
            id: this.user.id,
            username: this.fAccount.username.value,
            password: ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(this.fAccount.password.value).toString(),
            type: this.user.type,
            message_id: this.user.message_id,
            billinginfo_id: this.user.billinginfo_id,
            token: this.user.token
        };
        this.updateUser2(this.user.id, updateUser);
    }
    getUserById(id) {
        this.userService.getUserById(id).subscribe((data) => {
            this.user = data;
            this.billinginfoService.getBillingInfoById(data.billinginfo_id).subscribe(data => {
                let user_id = this.user.id;
                let username = this.user.username;
                Object.assign(this.user, data);
                this.user.id = user_id;
                this.user.username = username;
            });
        });
    }
    getAllAdByUserId(id) {
        this.adService.getAllAdByUserId(id).subscribe(data => {
            this.ads = data;
        });
    }
    updateUser(user_id, fname, fvalue) {
        this.userService.updateUser(user_id, fname, fvalue)
            .subscribe(data => {
        });
    }
    updateUser2(user_id, user) {
        this.userService.updateUser2(user_id, user)
            .subscribe((user) => {
            $('.modal-dialog-loader').hide();
            if (user && user.token) {
                this.user = user;
            }
        }, err => {
            $('.modal-dialog-loader').hide();
            this.accountForm.controls["username"].setErrors({ exist: true });
            this.loading = false;
        });
    }
    updateBillingInfo(user_id, fname, fvalue) {
        this.userService.getUserById(user_id)
            .subscribe((data) => {
            let billinginfo_id = data.billinginfo_id;
            this.billinginfoService.updateBillingInfo(billinginfo_id, fname, fvalue)
                .subscribe(data => {
            });
        });
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _modules_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _modules_billinginfo_service__WEBPACK_IMPORTED_MODULE_5__["BillingInfoService"] },
    { type: _modules_ad_service__WEBPACK_IMPORTED_MODULE_6__["AdService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./App/app/pages/user-profile/user-profile.component.html"),
        styles: [__webpack_require__(/*! ./user-profile.component.css */ "./App/app/pages/user-profile/user-profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _modules_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _modules_billinginfo_service__WEBPACK_IMPORTED_MODULE_5__["BillingInfoService"],
        _modules_ad_service__WEBPACK_IMPORTED_MODULE_6__["AdService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserProfileComponent);



/***/ }),

/***/ "./App/environments/environment.ts":
/*!*****************************************!*\
  !*** ./App/environments/environment.ts ***!
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

/***/ "./App/main.ts":
/*!*********************!*\
  !*** ./App/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./App/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./App/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./App/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./App/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  \n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Exo+2%3A400%2C300%2C500%2C600%2C700%7COpen+Sans%3A300%2C400%2C700&amp;subset=latin%2Clatin-ext&amp;ver=1.0.2\" type=\"text/css\" media=\"all\">\n  <link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"/assets/css/style.css\">\n\n  <title>Bunanycaronline</title>        \n</head>\n\n<div id=\"main-wrapper\">\n\n<!-- header -->\n<header>\n  <div id=\"header-main\">\n      <div class=\"container clearfix\">\n          <div id=\"header-left\">\n              <div class=\"clearfix\">\n                  <!--Logo-->\n                  <a class=\"header-logo\" href=\"/\">\n                      <img src=\"/assets/img/logo.jpg\" alt=\"Logo\">\n                  </a>\n              </div>\n          </div>\n          <div id=\"header-right\">\n              <div id=\"header-authentication\" *ngIf=\"!currentUser\">\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#loginPopup\">LOGIN</button>\n                  <span>|</span>\n                  <button type=\"button\" data-toggle=\"modal\" data-target=\"#registerPopup\">REGISTER</button>\n              </div>\n              <div id=\"header-authentication\" *ngIf=\"currentUser\">\n                    <div class=\"dropdown\" id = \"nav-mainMenu-links\">\n                        <button class=\"dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            {{currentUser.username}}\n                        </button>\n                        <div id=\"header-authentication\" *ngIf=\"currentUser.type == 'ADMIN'\">\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                <a class=\"dropdown-item\" href=\"monitor-page\">Ad Manage</a>\n                                <a class=\"dropdown-item\" href=\"user-profile/{{currentUser.id}}\">User Profile</a>\n                                <a class=\"dropdown-item\" (click)=\"logout()\">LOGOUT</a>\n                            </div>\n                        </div>\n                        <div id=\"header-authentication\" *ngIf=\"currentUser.type == 'USER'\">\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                <a class=\"dropdown-item\" href=\"user-profile/{{currentUser.id}}\">User Profile</a>\n                                <a class=\"dropdown-item\" (click)=\"logout()\">LOGOUT</a>\n                            </div>\n                        </div>\n                    </div>                  \n              </div>\n            \n              <div id=\"header-select\">\n                  <div>\n                    <a id=\"header-language\" href=\"#\" data-toggle=\"dropdown\" data-width=\"100%\">\n                        <img src=\"/assets/img/lang-eng.png\">ENGLISH</a>\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\n                        <li><a href=\"#\">Arabic</a></li>\n                        <li><a href=\"#\">French</a></li>\n                    </ul>\n                  </div>\n                  <!--<div>\n                  <a id=\"header-currency\" href=\"#\" data-toggle=\"dropdown\" data-width=\"100%\">\n                      <i class=\"fa fa-money\" style=\"margin-right: 3px;\"></i>AED</a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\">\n                      <li><a href=\"#\">USD</a></li>\n                      <li><a href=\"#\">INR</a></li>\n                  </ul>\n                  </div>-->\n              </div>\n          </div>\n      </div>\n  </div>\n\n  <nav id=\"mainMenu\">\n      <div class=\"container\">\n          <div id=\"mainMenu-inner\">\n              <a href=\"javascript:void(0);\" id=\"mainMenu-icon\" (click)=\"menuFunction()\">\n                  <i class=\"fa fa-bars\"></i>\n              </a>\n              <ul id=\"mainMenu-links\" class=\"clearfix\">\n                  <li><a href=\"#\" class=\"active\">Home</a>\n                  </li>\n                  <li><a href=\"/car-search\">Cars</a>\n                  </li>\n                  <li><a href=\"/boat-search\">Boats</a>\n                  </li>\n                  <li><a href=\"#\">About</a>\n                  </li>\n                  <li><a href=\"#\">Contact</a>\n                  </li>\n              </ul>\n          </div>\n      </div>\n  </nav>\n</header>\n\n<!-- main content -->\n<router-outlet></router-outlet>\n\n<!-- header -->\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n        <div class=\"clearfix\">\n          <ul id=\"footer-links\">\n            <li><a href=\"\">Home</a> |\n            </li>\n            <li><a href=\"/car-search\"> Cars</a> |\n            </li>\n            <li><a href=\"/boat-search\"> Boats</a> |\n            </li>\n            <li><a href=\"#\"> About</a> |\n            </li>\n            <li><a href=\"#\"> Contact</a> \n            </li>\n          </ul>\n          <div id=\"footer-right\">© 2019 BUYANYCARONLINE</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<div class=\"modal fade\" id=\"loginPopup\">\n  <div class=\"modal-dialog\" style=\"max-width: 350px;\">\n      <div class=\"modal-content popup-form\">\n          <!-- Modal Header -->\n          <div class=\"modal-dialog-loader\" style = \"display:none;\"></div>\n          <div class=\"modal-header pf-header\">\n              <h4 class=\"pf-title\">Login</h4>\n              <button type=\"button\" class=\"close pf-close\" data-dismiss=\"modal\">\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n          </div>\n          <div class=\"pf-content\">\n                <form [formGroup]=\"loginForm\" method=\"post\">\n                    <div class=\"form-group\">\n                        <label class=\"pf-label\">User Name</label>\n                        <input type=\"text\" formControlName=\"username\" class=\"form-control pf-textInput\" [ngClass]=\"{ 'is-invalid': submitted && fLogin.username.errors }\" placeholder=\"Enter your user name\"/>\n                        <div *ngIf=\"submitted && fLogin.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fLogin.username.errors.required\">User Name is required</div>\n                            <div *ngIf=\"fLogin.username.errors.email\">Email is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"pf-label\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control pf-textInput\" [ngClass]=\"{ 'is-invalid': submitted && fLogin.password.errors }\" placeholder=\"Enter your password\"/>\n                        <div *ngIf=\"submitted && fLogin.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fLogin.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"fLogin.password.errors.minlength\">Password must be at least 6 characters</div>\n                            <div *ngIf=\"fLogin.password.errors.incorrect\">Invalid username or password.</div>\n                        </div>\n                    </div>\n                    <input (click)=\"onLoginSubmit($event)\" type=\"submit\" value=\"Login\" class=\"pf-submit\">\n                </form>\n          </div>\n      </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"registerPopup\">\n  <div class=\"modal-dialog\" style=\"max-width: 350px;\">\n      <div class=\"modal-content popup-form\">\n          <!-- Modal Header -->\n          <div class=\"modal-dialog-loader\" style = \"display:none;\"></div>\n          <div class=\"modal-header pf-header\">\n              <h4 class=\"pf-title\">Register</h4>\n              <button type=\"button\" class=\"close pf-close\" data-dismiss=\"modal\">\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n              </button>\n          </div>\n          <div class=\"pf-content\">\n                <form [formGroup]=\"registerForm\" method=\"post\">\n                    <div class=\"form-group\">\n                        <label class=\"pf-label\">User Name</label>\n                        <input email type=\"text\" formControlName=\"username\" class=\"form-control pf-textInput\" [ngClass]=\"{ 'is-invalid': submitted && fRegister.username.errors }\" placeholder=\"Enter your user name\"/>\n                        <div *ngIf=\"submitted && fRegister.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fRegister.username.errors.required\">User Name is required</div>\n                            <div *ngIf=\"fRegister.username.errors.exist\">User name already used</div>\n                            <div *ngIf=\"fRegister.username.errors.email\">Email is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"pf-label\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control pf-textInput\" [ngClass]=\"{ 'is-invalid': submitted && fRegister.password.errors }\"  placeholder=\"Enter your password\"/>\n                        <div *ngIf=\"submitted && fRegister.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fRegister.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"fRegister.password.errors.minlength\">Password must be at least 6 characters</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"pf-label\">Confirm Password</label>\n                        <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control pf-textInput\" [ngClass]=\"{ 'is-invalid': submitted && fRegister.confirmPassword.errors }\"  placeholder=\"Enter your confirm password\" />\n                        <div *ngIf=\"submitted && fRegister.confirmPassword.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fRegister.confirmPassword.errors.required\">Confirm Password is required</div>\n                            <div *ngIf=\"fRegister.confirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n                            <div *ngIf=\"fRegister.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                        </div>\n                    </div>\n                    <input (click)=\"onRegisterSubmit($event)\" type=\"submit\" value=\"Register\" class=\"pf-submit\">\n                </form>\n          </div>\n      </div>\n  </div>\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./App/app/pages/boat-detail/boat-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./App/app/pages/boat-detail/boat-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content-wrapper\">\n        <div class=\"container\" id=\"vd-container\">\n            <div class=\"row\">\n                <div id=\"vdBox-container\">\n                    <div id=\"vd-box\">\n                        <div id=\"vdHeader\">\n                            <div id=\"vdHeader-title\">{{boat.title}}</div>\n                            <div><span>Price: </span>{{boat.price | currency}}</div>\n                            <div><span>Created Date: </span>{{boat.create_at}}</div>\n                        <div id=\"vdViewedHeader\">\n                            <div><span>Viewed This: </span>{{boat.visitcount}}</div> \n                        </div>\n                    </div>\n                        \n                    <div id=\"vd-preview\">\n                        <div id=\"vd-previewImage\">\n                            <i id=\"vd-previewImageLeft\" class=\"fa fa-caret-left\" aria-hidden=\"true\"></i>\n                            <img *ngIf = \"previewImgFile\" [src] = \"previewImgFile\">\n                            <i id=\"vd-previewImageFullScreen\" class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i>\t\n                            <i id=\"vd-previewImageRight\" class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\n                        </div>\n                            <div id=\"vdPreviewItems\">\n                                <div class=\"vdItem-image\" *ngFor = \"let imgFile of imgFiles\">\n                                    <img [src]=\"imgFile\">\n                                </div>\n                            </div>\n                            <div id=\"vd-info\">\n                                <div id=\"vdInfo-innerLeft\">\t\t\t\t\t\n                                    <div><span>Make: </span>{{boat.make}}</div>\n                                    <div><span>Model: </span>{{boat.model}}</div>\n                                    <div><span>Year:</span>{{boat.year}}</div>\n                                    <div><span>Price:</span>{{boat.price | currency}}</div>\n                                    <div><span>Transmission:</span>{{boat.transmission}}</div>\n                                    <div><span>FuelType:</span>{{boat.fueltype}}\n                                </div>\n                                    </div>\n                                <div id=\"vdInfo-innerRight\">\n                                    <div><span>Description: </span>\n                                        {{boat.description}}\n                                    </div>\n                                    <div><span>Features: </span>\n                                        <br>\n                                        <ul *ngFor = \"let feature of features\">\n                                            <li>{{feature}}</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"imagePopupContainer\">\n        <div style=\"padding-top: 40px;\">\n            <i id=\"closeImagePopupContainer\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n            <img *ngIf = \"previewImgFile\" id=\"popupImage\" [src] = \"previewImgFile\">\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./App/app/pages/boat-search/boat-search.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./App/app/pages/boat-search/boat-search.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content-wrapper\">\n    <div class=\"container\" id=\"sr-container\">\n        <div class=\"loader\" style=\"display: block;\"></div>\n        <div class=\"row\">\n            <div id=\"findBox-container\">\n                <div id=\"find-box\">\n                    <h2>FIND</h2>\n                    <form [formGroup] = \"findForm\" (ngSubmit) = \"onSubmit()\">\n                        <div class=\"col-md-12 col-sm-12\">\n                            <div class=\"hf-label\">MAKE</div>\n                            <div class=\"hf-select\">\n                                <select formControlName = \"make\" class=\"selectpicker\" (change) = \"onMakeChange($event)\" title=\"SELECT NAME\" data-width = \"100%\">\n                                    <option [value] = \"\"></option>\n                                    <option *ngFor=\"let make of makes\" [value] = \"make.id\">{{make.value}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12\">\n                            <div class=\"hf-label\">MODEL</div>\n                            <div class=\"hf-select\">\n                                <select formControlName = \"model\" class=\"selectpicker\" title=\"SELECT MODEL\" data-width=\"100%\">\n                                    <option [value] = \"\"></option>\n                                    <option *ngFor=\"let model of models\" [value]=\"model.id\" >{{model.value}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12\">\n                            <div class=\"hf-label\">YEAR</div>\n                            <div class=\"hf-select half\">\n                                <select formControlName = \"fromYear\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n                                    <option [value] = \"\"></option>\n                                    <option [value]=\"year\" *ngFor=\"let year of fromYears\">{{year}}</option>\n                                </select>\n                            </div>\n                            <div class=\"hf-select half\">\n                                <select formControlName = \"toYear\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n                                    <option [value] = \"\"></option>\n                                    <option [value]=\"year\" *ngFor=\"let year of toYears\">{{year}}</option>\n                                </select>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-12 col-sm-12\">\n                            <div class=\"hf-label\">PRICE</div>\n                            <div class=\"hf-select half\">\n                                <select formControlName = \"fromPrice\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n                                    <option [value] = \"\"></option>\n                                    <option [value]=\"price\" *ngFor=\"let price of fromPrices\">{{price}}</option>\n                                </select>\n                            </div>\n                            <div class=\"hf-select half\">\n                                <select formControlName = \"toPrice\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n                                    <option [value] = \"\"></option>\n                                    <option [value]=\"price\" *ngFor=\"let price of toPrices\">{{price}}</option>\n                                </select>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-12 col-sm-12\">\n                            <div class=\"hf-label\">ORDER</div>\n                            <div class=\"hf-select\">\n                                <select formControlName = \"orderid\" class=\"selectpicker\" title=\"SELECT ORDER\" data-width=\"100%\">\n                                    <option value = \"HIGHEST_PRICE\">Highest Price</option>\n                                    <option value = \"LOWEST_PRICE\">Lowest Price</option>\n                                    <option value = \"NEWEST\">Newest</option>\n                                    <option value = \"OLDEST\">Oldest</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12\">\n                            <div class=\"hf-label\">LENGTH</div>\n                            <div class=\"hf-select\">\n                                <select formControlName = \"lengthID\" class=\"selectpicker\" title=\"SELECT LENGTH\" data-width=\"100%\">\n                                    <option [value] = \"\"></option>\n                                    <option *ngFor=\"let length of lengths\" [value]=\"length.id\" >{{length.length}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12\">\n                            <button type=\"submit\" class=\"button\" id=\"hf-button\">Search</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div id=\"searchResultsBox-container\">\n                    <div id=\"searchResults-box\">\n                            <div class=\"search-body\">\n                                    <h2 class=\"col-md-7 search-title\">Search Results</h2>\n                                    <div class=\"col-md-5 price-select\">\n                                            <span class=\"col-md-5 sortby\">Sort By: </span>\n                                            <div class=\"col-md-7\">\n                                                    <select class = \"orderPicker\" (change) = \"onChangeSorted($event)\" title=\"SELECT NAME\"  data-margin=\"auto\" data-width=\"80%\">\n                                                            <option value=\"0\">Highest Price</option>\n                                                            <option value=\"1\">Lowest Price</option>\n                                                            <option value=\"2\">Newest</option>\n                                                            <option value=\"3\">Oldest</option>\n                                                    </select>\n                                            </div>\n                                        </div>\n                            </div>\n                            <div class=\"searchResults-item\" *ngFor=\"let boat of boats\">\n                                    <div class=\"searchResult-image\">\n                                        <img [src]=\"boat.imgFile\">\n                                    </div>\n                                    <div class=\"searchResult-info\">\n                                        <div>\n                                            <a (click)=\"getBoatDetailById(boat.id, boat.ad_id)\" class=\"searchResultInfo-title\"> {{boat.title}}</a>\n                                            <div class=\"searchResultInfo-price\"> {{boat.price|currency}}</div>\n                                        </div>\n                                        <div>\n                                            <div class=\"searchResult-info-inner1\">\n                                                <div><span>Make:{{boat.make}}</span> </div>\n                                                <div><span>Model:{{boat.model}}</span> </div>\n                                                <div><span>Length:</span>{{boat.length}} </div>\n                                            </div>\n                                            <div class=\"searchResult-info-inner2\">\n                                                <div><span>Fuel Type:</span>{{boat.fueltype}} </div>\n                                                <div><span>Condition:</span>{{boat.condition}} </div>\n                                                \n                                            </div>\n                                        </div>\n                                        <div class=\"searchResultInfo-date\"><span>Created Date:</span> {{boat.year}}</div>\n                                    </div>\n                                </div>\n                    </div>\n            </div>\n            <div id=\"adBox-container\">\n                    <div id=\"ad-box\">Empty block for ads</div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./App/app/pages/car-detail/car-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./App/app/pages/car-detail/car-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content-wrapper\">\n\t<div class=\"container\" id=\"vd-container\">\n\t\t<div class=\"row\">\n\t\t\t<div id=\"vdBox-container\">\n\t\t\t\t<div id=\"vd-box\">\n\t\t\t\t\t<div id=\"vdHeader\">\n\t\t\t\t\t\t<div id=\"vdHeader-title\">{{car.title}}</div>\n\t\t\t\t\t\t<div><span>Price: </span>{{car.price | currency}}</div>\n\t\t\t\t\t\t<div><span>Created Date: </span>{{car.create_at}}</div>\n\t\t\t\t\t<div id=\"vdViewedHeader\">\n\t\t\t\t\t\t<div><span>Viewed This: </span>{{car.visitcount}}</div> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t<div id=\"vd-preview\">\n\t\t\t\t\t<div id=\"vd-previewImage\">\n\t\t\t\t\t\t<i id=\"vd-previewImageLeft\" class=\"fa fa-caret-left\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<img *ngIf = \"previewImgFile\" [src] = \"previewImgFile\">\n\t\t\t\t\t\t<i id=\"vd-previewImageFullScreen\" class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i>\t\n\t\t\t\t\t\t<i id=\"vd-previewImageRight\" class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"vdPreviewItems\">\n\t\t\t\t\t\t\t<div class=\"vdItem-image\" *ngFor = \"let imgFile of imgFiles\">\n\t\t\t\t\t\t\t\t<img [src]=\"imgFile\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"vd-info\">\n\t\t\t\t\t\t\t<div id=\"vdInfo-innerLeft\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div><span>Make: </span>{{car.make}}</div>\n\t\t\t\t\t\t\t\t<div><span>Model: </span>{{car.model}}</div>\n\t\t\t\t\t\t\t\t<div><span>Year:</span>{{car.year}}</div>\n\t\t\t\t\t\t\t\t<div><span>Price:</span>{{car.price | currency}}</div>\n\t\t\t\t\t\t\t\t<div><span>Transmission:</span>{{car.transmission}}</div>\n\t\t\t\t\t\t\t\t<div><span>FuelType:</span>{{car.fueltype}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"vdInfo-innerRight\">\n\t\t\t\t\t\t\t\t<div><span>Description: </span>\n\t\t\t\t\t\t\t\t\t{{car.description}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div><span>Features: </span>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<ul *ngFor = \"let feature of features\">\n\t\t\t\t\t\t\t\t\t\t<li>{{feature}}</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div id=\"imagePopupContainer\">\n\t<div style=\"padding-top: 40px;\">\n\t\t<i id=\"closeImagePopupContainer\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n\t\t<img *ngIf = \"previewImgFile\" id=\"popupImage\" [src] = \"previewImgFile\">\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./App/app/pages/car-search/car-search.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./App/app/pages/car-search/car-search.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content-wrapper\">\n\t<div class=\"container\" id=\"sr-container\">\n\t\t<div class=\"loader\" style = \"display:block;\"></div>\n\t\t<div class=\"row\">\n\t\t\t<div id=\"findBox-container\">\n\t\t\t\t<div id=\"find-box\">\n\t\t\t\t\t<h2>FIND</h2>\n\t\t\t\t\t<form [formGroup]=\"findForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"hf-label\">MAKE</div>\n\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t<select formControlName = \"make\" class = \"selectpicker\" (change) = \"onMakeChange($event)\" title=\"SELECT NAME\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option *ngFor =  \"let make of makes\" [value] = \"make.id\">{{make.value}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"hf-label\">MODEL</div>\n\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t<select formControlName = \"model\" class=\"selectpicker\" title=\"SELECT MODEL\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let model of models\" [value]=\"model.id\" >{{model.value}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"hf-label\">YEAR</div>\n\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t<select formControlName = \"fromYear\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option [value]=\"year\" *ngFor=\"let year of fromYears\">{{year}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t<select formControlName = \"toYear\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option [value]=\"year\" *ngFor=\"let year of toYears\">{{year}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"hf-label\">PRICE</div>\n\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t<select formControlName = \"fromPrice\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option [value]=\"price\" *ngFor=\"let price of fromPrices\">{{price}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t<select formControlName = \"toPrice\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option [value] = \"\"></option>\n\t\t\t\t\t\t\t\t\t<option [value]=\"price\" *ngFor=\"let price of toPrices\">{{price}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"hf-label\">ORDER</div>\n\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t<select formControlName = \"orderid\" class=\"selectpicker\" title=\"SELECT ORDER\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t<option value = \"HIGHEST_PRICE\">Highest Price</option>\n\t\t\t\t\t\t\t\t\t<option value = \"LOWEST_PRICE\">Lowest Price</option>\n\t\t\t\t\t\t\t\t\t<option value = \"NEWEST\">Newest</option>\n\t\t\t\t\t\t\t\t\t<option value = \"OLDEST\">Oldest</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"button\" id=\"hf-button\">Search</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"searchResultsBox-container\">\n\t\t\t\t<div id=\"searchResults-box\">\n\t\t\t\t\t<div style=\"border-bottom: 1px solid #2f3c40;\">\n\t\t\t\t\t\t<h2>Search Results</h2>\n\t\t\t\t\t\t<div id=\"sortby-container\">\n\t\t\t\t\t\t\t<div id=\"sortby-label\">Sort by:</div>\n\t\t\t\t\t\t\t<div id=\"sortby\">\n\t\t\t\t\t\t\t\t<a id=\"sortby-selected\" href=\"#\" data-toggle=\"dropdown\" \n\t\t\t\t\t\t\t\t   data-width=\"100%\">Highest Price</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t\t\t\t<li><a>Highest Price</a></li>\n\t\t\t\t\t\t\t\t\t<li><a>Lowest Price</a></li>\n\t\t\t\t\t\t\t\t\t<li><a>Newest</a></li>\n\t\t\t\t\t\t\t\t\t<li><a>Oldest</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"searchResults-item\" *ngFor = \"let car of cars\">\n\t\t\t\t\t\t<div class=\"searchResult-image\">\n\t\t\t\t\t\t\t<img [src]=\"car.imgFile\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"searchResult-info\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a (click)=\"getCarDetailById(car.id, car.ad_id)\" class=\"searchResultInfo-title\"> {{car.title}}</a>\n\t\t\t\t\t\t\t\t<div class=\"searchResultInfo-price\"> {{car.price | currency}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div class=\"searchResult-info-inner1\">\n\t\t\t\t\t\t\t\t\t<div><span>Make:</span> {{car.make}}</div>\n\t\t\t\t\t\t\t\t\t<div><span>Model:</span> {{car.model}}</div>\n\t\t\t\t\t\t\t\t\t<div><span>Transmission:</span> {{car.transmission}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"searchResult-info-inner2\">\n\t\t\t\t\t\t\t\t\t<div><span>Fuel Type:</span> {{car.fueltype}}</div>\n\t\t\t\t\t\t\t\t\t<div><span>Condition:</span> {{car.condition}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"searchResultInfo-date\"><span>Created Date:</span> {{car.year}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"adBox-container\">\n\t\t\t\t<div id=\"ad-box\">Empty block for ads</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./App/app/pages/index/index.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./App/app/pages/index/index.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n\t<div id=\"home-main\">\n\t\t<div class=\"container-fluid\" id=\"home-container\">\n\t\t\t<div id=\"home-bg\">\n\t\t\t\t<div id=\"home-bg-inner\">\n\t\t\t\t\t<div id=\"home-form\" class=\"clearfix\">\n\t\t\t\t\t\t<a (click) = \"onPlaceAd()\" id=\"placeAd\"><i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Place Ad</a>\n\t\t\t\t\t\t<div style=\"position: relative;\">\n\n\t\t\t\t\t\t\t<h2>FIND VEHICLE</h2>\n\t\t\t\t\t\t\t<form [formGroup]=\"findForm\" (ngSubmit) = \"onSubmit()\" mothod = \"post\" style=\"margin: 0;\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">Motor</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"motor\" class = \"selectpicker\" title=\"SELECT MOTOR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor =  \"let motor of motors\" [value] = \"motor.id\">{{motor.value}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">MAKE</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"make\" class = \"selectpicker\" (change) = \"onMakeChange($event)\" title=\"SELECT MAKE\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor =  \"let make of makes\" [value] = \"make.id\">{{make.value}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">MODEL</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select id = \"modelnew\" formControlName = \"model\" class=\"selectpicker\" title=\"SELECT MODEL\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let model of models\" [value]=\"model.id\" >{{model.modelvalue}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">PRICE</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"fromPrice\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"price\" *ngFor=\"let price of fromPrices\">{{price}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"toPrice\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"price\" *ngFor=\"let price of toPrices\">{{price}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">YEAR</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"fromYear\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\" *ngFor=\"let year of fromYears\">{{year}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select half\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"toYear\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option [value]=\"year\" *ngFor=\"let year of toYears\">{{year}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">COLOR</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"color\" class=\"selectpicker\" title=\"SELECT COLOR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let color of colors\" [value]=\"color\" >{{color}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">TRANSMISSION</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"transmission\" class=\"selectpicker\" title=\"SELECT TRANSMISSION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let transmission of transmissions\" [value]=\"transmission\" >{{transmission}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">FUEL TYPE</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"fueltype\" class=\"selectpicker\" title=\"SELECT FUELTYPE\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let fueltype of fueltypes\" [value]=\"fueltype\" >{{fueltype}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-12 advancedf\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-label\">CONDITION\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t\t<select formControlName = \"condition\" class=\"selectpicker\" title=\"SELECT CONDITION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let condition of conditions\" [value]=\"condition\" >{{condition}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" (click)=\"showHomeAdvanced()\" id=\"home-advanced\">ADVANCED SEARCH <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"button\" id=\"hf-button\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> Search</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./App/app/pages/manage-ad/manage-ad.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./App/app/pages/manage-ad/manage-ad.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n\t<div class=\"container\" id=\"map-container\">\n\t\t<div class=\"row\">\n\t\t\t<div id=\"adInfoBox-container\">\n\t\t\t\t<div id=\"adInfo-box\">\n\t\t\t\t\t<input id = \"ad_id\" type = \"hidden\" value = \"{{car.ad_id}}\" />\n\t\t\t\t\t<input id = \"vehicle_id\" type = \"hidden\" value = \"{{car.vehicle_id}}\" />\n\t\t\t\t\t<input id = \"car_id\" type = \"hidden\" value = \"{{car.id}}\" />\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Title: </span><a>{{car.title}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<input id = \"title\" class = \"ba-input\" type = \"text\" placeholder = \"{{car.title}}\">\n\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Price: </span><a>{{car.price | currency}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<input id = \"price\" class = \"ba-input\" pattern=\"^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$\" type = \"currency\" placeholder = \"{{car.price}}\">\n\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Description: </span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i><a class=\"a-ads-description\">{{car.description}}</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<textarea id=\"description\" cols=\"30\" rows=\"10\" aria-invalid=\"false\" placeholder=\"{{car.description}}\" class=\"ba-input\"></textarea>\n\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hf-label\">Vehicle Details</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<input id = \"make\" type = \"hidden\" value = \"{{car.make_id}}\" />\n\t\t\t\t\t\t\t<span>Make: </span><a>{{car.make}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"make_id\" class=\"ba-select\" title=\"SELECT MAKE\" (change) = \"onMakeChange($event)\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let make of makes\" [value]=\"make.id\" >{{make.value}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<input id = \"model\" type = \"hidden\" value = \"{{car.model_id}}\" />\n\t\t\t\t\t\t\t<span>Model: </span><a>{{car.model}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"model_id\" class=\"ba-select\" title=\"SELECT MODEL\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let model of models\" [value]=\"model.id\" >{{model.modelvalue}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Year: </span><a>{{car.year}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"year\" class=\"ba-select\" title=\"SELECT YEAR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let year of years\" [value]=\"year\" >{{year}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Fuel Type: </span><a>{{car.fueltype}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"fueltype\" class=\"ba-select\" title=\"SELECT TRANSMISSION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let fueltype of fueltypes\" [value]=\"fueltype\" >{{fueltype}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Condition: </span><a>{{car.condition}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"condition\" class=\"ba-select\" title=\"SELECT CONDITION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let condition of conditions\" [value]=\"condition\" >{{condition}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Transmission: </span><a>{{car.transmission}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"transmission\" class=\"ba-select\" title=\"SELECT TRANSMISSION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let transmission of transmissions\" [value]=\"transmission\" >{{transmission}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>Color: </span><a>{{car.color}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t<select id = \"color\" class=\"ba-select\" title=\"SELECT COLOR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t<option *ngFor=\"let color of colors\" [value]=\"color\" >{{color}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t<i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"PhotoBox-container\">\n\t\t\t\t<div id=\"Photo-box\">\n\t\t\t\t\t<div style=\"border-bottom: 1px solid #2f3c40;\">\n\t\t\t\t\t\t<h2>Photos</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"PhotoBoxItem-container\">\n\t\t\t\t\t\t<div  class=\"left-exist-photo\" *ngFor = \"let imgFile of imgFiles\">\n\t\t\t\t\t\t\t<div class=\"lefted-close-btn\">\n\t\t\t\t\t\t\t\t<img class=\"close-icon\" src=\"../../../assets/img/Close.png\" (click)=\"onDeleteSubmit(imgFile)\"/>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<img src=\"{{imgFile}}\" class=\"left-preview-img\" (click)=\"changePreview(imgFile)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"PhotoBox-item\" *ngFor = \"let imgFile of imgFiles\">\n\t\t\t\t\t\t\t<div class=\"PhotoBox-image\">\n\t\t\t\t\t\t\t\t<img [src]=\"imgFile\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button class=\"PhotoBox-delete\" (click) = \"onDeleteSubmit(imgFile)\" [attr.data-index]=\"i\">Delete</button>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"PhotoBox-preview\">\n\t\t\t\t\t\t<img *ngIf = \"previewImgFile\" src=\"{{previewImgFile}}\">\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"publishButton-container\">\n\t\t\t\t\t<div *ngIf=\"!car.pubish\">\n\t\t\t\t\t\t<button id=\"publishButton\" (click) = \"onPublishSubmit()\">Publish</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<app-alerts></app-alerts>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./App/app/pages/monitor-page/monitor-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./App/app/pages/monitor-page/monitor-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n  <div class=\"container\" id=\"ma-container\">\n    <div class=\"row\">\n      <div id=\"adListBox-container\">\n        <div id=\"adList-box\">\n          <div class=\"adList-item\" *ngFor = \"let ad of ads\">\n            <div class=\"adList-info\">\n              <div><span style='cursor:pointer;' (click)=\"getCarByAdId(ad.id)\" >Ad Number: </span>222</div>\n              <div><span>Title: </span>{{ad.title}}</div>\n              <div><span>Price: </span>{{ad.price | currency}}</div>\n              <div><span>Created Date: </span>{{ad.create_at}}</div>\n            </div>\n            <div class=\"adList-buttons\">\n              <button (click)=\"approveAd(ad)\">Approve</button>\n              <button>Reject</button>\n              <button (click)=\"deleteAd(ad)\"><i class = \"fa fa-trash\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"adSelectedBox-container\">\n        <div id=\"adSelectedSearch-box\">Search: \n          <input type=\"text\" placeholder=\"Ad Number..\">\n          <button><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n        </div>\n        <div id=\"adSelected-box\">\n          <div id=\"adSelected-number\"><span>Ad Number: </span></div>\n          <div id=\"adSelected-info\">\n            <div class=\"hf-label\">Vehicle Details</div>\n            <div><span>Make: </span> {{car.make}}</div>\n            <div><span>Model: </span> {{car.model}}</div>\n            <div><span>Year:</span> {{car.year}}</div>\n            <div><span>Price:</span> {{car.price | currency}}</div>\n            <div><span>Transmission:</span> {{car.transmission}}</div>\n            <div><span>Fuel:</span> {{car.fueltype}}\n            </div>\n            <div><span>Description: </span>\n              <br>{{car.description}}\n            </div>\n            <div><span>Features: </span>\n              <br>\n              <ul *ngFor = \"let feature of features\">\n                <li>{{feature}}</li>\n              </ul>\n            </div>\n          </div>\n          <div id=\"adSelected-preview\">\n            <div id=\"adSelected-previewImage\">\n              <i class=\"fa fa-caret-left\" aria-hidden=\"true\" style=\"left:5px;\" id='vd-previewImageLeft'></i>\n              <img *ngIf = \"previewImgFile\" [src]=\"previewImgFile\">\n              <i class=\"fa fa-caret-right\" aria-hidden=\"true\" style=\"right: 5px;\" id='vd-previewImageRight'></i>\n            </div>\n            <div id=\"adSelectedPreviewItems\">\n              <div class=\"adSelectedItem-image\" *ngFor = \"let imgFile of imgFiles\">\n                <img [src]=\"imgFile\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./App/app/pages/new-ad/new-ad.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./App/app/pages/new-ad/new-ad.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n\t<div class=\"container\" id=\"nap-container\">\n\t\t<div class=\"loader\" style = \"display:none;\"></div>\n\t\t<div class=\"row\">\n\t\t\t<form [formGroup]=\"newForm\" id = \"newForm\" method=\"post\">\n\t\t\t\t<div id=\"vehicleDetailsBox-container\">\n\t\t\t\t\t<div id=\"vehicleDetails-box\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<h2>Ad Details</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">TITLE</div>\n\t\t\t\t\t\t\t\t<input formControlName = \"title\" class = \"form-control ad-input\" type = \"text\" [ngClass]=\"{ 'is-invalid': submitted && fNew.title.errors }\" placeholder = \"Enter title\"/>\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.title.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.title.errors.required\">Title is required</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">PRICE</div>\n\t\t\t\t\t\t\t\t<input formControlName = \"price\" class = \"form-control ad-input\" type = \"number\" [ngClass]=\"{ 'is-invalid': submitted && fNew.price.errors }\" placeholder = \"Enter price\"/>\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.price.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.price.errors.min\">Price is only required positive number</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.price.errors.required\">Price is required </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">DESCRIPTION</div>\n\t\t\t\t\t\t\t\t<textarea formControlName=\"description\" class=\"form-control ad-textarea\" cols=\"30\" rows=\"10\" aria-invalid=\"false\" [ngClass]=\"{ 'is-invalid': submitted && fNew.description.errors }\" placeholder=\"Enter description\" id = \"description\"></textarea>\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.description.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.description.errors.required\">Description is required</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"vehicleDetailsBox2-container\">\n\t\t\t\t\t<div id=\"vehicleDetails-box\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<h2>Vehicle Details</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\" style=\"\">MAKE</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"make_id\" class = \"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.make_id.errors }\" (change) = \"onMakeChange($event)\" title=\"SELECT NAME\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor =  \"let make of makes\" [value] = \"make.id\">{{make.value}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.make_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.make_id.errors.required\">Make is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">MODEL</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"model_id\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.model_id.errors }\" title=\"SELECT MODEL\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let model of models\" [value]=\"model.id\" >{{model.modelvalue}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.model_id.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.model_id.errors.required\">Model is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">YEAR</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"year\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.year.errors }\" title=\"SELECT YEAR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let year of years\" [value]=\"year\" >{{year}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.year.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.year.errors.required\">Year is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">FUEL TYPE</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"fueltype\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.fueltype.errors }\" title=\"SELECT FUELTYPE\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let fueltype of fueltypes\" [value]=\"fueltype\" >{{fueltype}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.fueltype.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.fueltype.errors.required\">Fueltype is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">CONDITION\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"condition\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.condition.errors }\" title=\"SELECT CONDITION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let condition of conditions\" [value]=\"condition\" >{{condition}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.condition.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.condition.errors.required\">Condition is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">TYPE\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control selectpicker \" title=\"SELECT TYPE\" data-width=\"100%\" (change)= \"changeTypes($event)\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let type of types\" [value]=\"type.value\" >{{type.value}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\" [hidden]=\"inputType!='BOAT'\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">LENGTH</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"length\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.length.errors }\" title=\"SELECT LENGTH\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let length of lengths\" [value]=\"length.id\" >{{length.length}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.length.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.length.errors.required&&inputType=='BOAT'\">Length is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\" [hidden]=\"inputType!='CAR'\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">TRANSMISSION</div>\n\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t<select formControlName = \"transmission\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.transmission.errors }\" title=\"SELECT TRANSMISSION\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let transmission of transmissions\" [value]=\"transmission\" >{{transmission}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.transmission.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.transmission.errors.required&&inputType=='CAR'\">Transmission is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\" [hidden]=\"inputType!='CAR'\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">COLOR</div>\n\t\t\t\t\t\t\t\t\t<div class=\"hf-select\">\n\t\t\t\t\t\t\t\t\t\t<select formControlName = \"color\" class=\"form-control selectpicker\" [ngClass]=\"{ 'is-invalid': submitted && fNew.color.errors }\" title=\"SELECT COLOR\" data-width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let color of colors\" [value]=\"color\" >{{color}}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fNew.color.errors&&inputType=='CAR'\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fNew.color.errors.required&&inputType=='CAR'\">Color is required</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\" [hidden]=\"inputType!='CAR'\">\n\t\t\t\t\t\t\t\t<div class=\"hf-label\">Features</div>\n\t\t\t\t\t\t\t\t<label class=\"hf-checkbox\" *ngFor=\"let feature of features\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [value]=\"feature\">{{feature}}\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"button\" id=\"hf-button\">Save</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<app-alerts></app-alerts>\n\t\t\t<div id=\"uploadPhotoBox-container\" style = \"display:block;\">\n\t\t\t\t<div id=\"uploadPhoto-box\"  style = \"display:block;\">\n\t\t\t\t\t<div style=\"border-bottom: 1px solid #2f3c40;\">\n\t\t\t\t\t\t<h2>Upload Photos</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div id=\"uploadPhotoBoxItem-container\">\n\t\t\t\t\t\t<div class=\"uploadPhotoBox-item\" *ngFor = \"let imgFile of imgFiles;\">\n\t\t\t\t\t\t\t<div class=\"uploadPhotoBox-image\">\n\t\t\t\t\t\t\t\t<img [src]=\"imgFile\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button class=\"uploadPhotoBox-delete\" (click) = \"onDeleteSubmit(imgFile)\" [attr.data-index]=\"i\">Delete</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<div class=\"photo-array\">\n\t\t\t\t\t\t<div class=\"add-Photo\">\n\t\t\t\t\t\t\t<form [formGroup]=\"uploadForm\">\n\t\t\t\t\t\t\t\t<input type=\"file\" name=\"carimg\" (change)=\"onFileChange($event)\"/>\n\t\t\t\t\t\t\t\t<button class=\"add-Photo-btn\"></button>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- id=\"uploadPhotoBox-preview\" -->\n\t\t\t\t\t\t<div  class=\"exist-photo\" *ngFor = \"let item of img_arr\">\n\t\t\t\t\t\t\t<div class=\"close-btn\">\n\t\t\t\t\t\t\t\t<img src=\"../../../assets/img/Close.png\" (click)=\"closeImage(item)\"/>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<img src=\"{{item.base64}}\" class=\"preview-img\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div id=\"publishButton-container\">\n\t\t\t\t\t<button class=\"col-md-4 uploadPhotoBox-uploadButton pt-2\" [hidden] = \"currentUser.type!='ADMIN'\" (click) = \"onPublishSubmit()\">Publish</button>\n\t\t\t\t\t<button class=\"col-md-4 uploadPhotoBox-uploadButton pt-2\" [hidden] = \"currentUser.type!='USER'\" (click) = \"onPublishSubmit()\">User's Button</button>\n\t\t\t\t\t<button class=\"col-md-4 uploadPhotoBox-uploadButton pt-2\" (click) = \"onUploadSubmit()\">Upload</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./App/app/pages/user-profile/user-profile.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./App/app/pages/user-profile/user-profile.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n\t\t<div class=\"container\" id=\"up-container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<form [formGroup]=\"accountForm\" method=\"post\">\n\t\t\t\t<div id=\"AccSettingsBox-container\">\n\t\t\t\t\t<div id=\"AccSettings-box\">\n\t\t\t\t\t\t<h2>Account Settings</h2>\n\t\t\t\t\t\t<div style=\"margin-top: 20px;\">\n\t\t\t\t\t\t\t<input id = \"userid\" type = \"hidden\" value = \"{{user.id}}\" />\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span>Name: </span><a>{{user.username}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t\t<input email type=\"text\" id=\"username\" formControlName=\"username\" class=\"form-control ba-input\" [ngClass]=\"{ 'is-invalid': submitted && fAccount.username.errors }\" placeholder=\"Enter email address\"/>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fAccount.username.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.username.errors.exist\">User name already used</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.username.errors.email\">Email is required</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span>Password: </span><a>**********</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t\t<input id = \"password\" formControlName=\"password\" class = \"form-control ba-input\" type = \"password\" [ngClass]=\"{ 'is-invalid': submitted && fAccount.password.errors }\" placeholder = \"Enter password\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fAccount.password.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.password.errors.required\">Password is required</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.password.errors.minlength\">Password must be at least 6 characters</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div id=\"confimrPasswordDiv\" class = \"d-none\">\n\t\t\t\t\t\t\t\t\t<input id = \"confirmPassword\" formControlName=\"confirmPassword\" class = \"form-control ba-input\" type = \"password\" [ngClass]=\"{ 'is-invalid': submitted && fAccount.confirmPassword.errors }\" placeholder = \"Enter confirm password\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && fAccount.confirmPassword.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.confirmPassword.errors.required\">Confirm Password is required</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.confirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"fAccount.confirmPassword.errors.mustMatch\">Passwords must match</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"hf-label\">ADDRESS</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span>Country: </span><a>{{user.country}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t\t<input id = \"country\" class = \"ba-input\" type = \"text\" placeholder = \"Enter country\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span>City: </span><a>{{user.city}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t\t<input id = \"city\" class = \"ba-input\" type = \"text\" placeholder = \"Enter city\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span>Street: </span><a>{{user.address}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t\t<input id = \"address\" class = \"ba-input\" type = \"text\" placeholder = \"Enter street\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"hf-label\">Contact details</div>\n\t\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span>Mobile: </span><a>{{user.mobile}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class = \"d-none\">\n\t\t\t\t\t\t\t\t\t<input id = \"mobile\" class = \"ba-input\" type = \"text\" placeholder = \"Enter mobile number\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--<div style=\"text-align:center;\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"button\" id=\"hf-button\">Save</button>\n\t\t\t\t\t\t</div>-->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<div id=\"manageAdsBox-container\">\n\t\t\t\t\t<div id=\"manageAds-box\">\n\t\t\t\t\t\t<h2>Manage Ads</h2>\n\t\t\t\t\t\t<div class=\"manageAdsItem\"  *ngFor = \"let ad of ads\">\n\t\t\t\t\t\t\t<div class=\"manageAdsItem-left\">\n\t\t\t\t\t\t\t\t<div><span>Title: </span>{{ad.title}}</div>\n\t\t\t\t\t\t\t\t<div><span>Price: </span>{{ad.price | currency}}</div>\n\t\t\t\t\t\t\t\t<div class=\"description\"><span>Description: </span><div class=\"ads-description\">{{ad.description}}</div></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"manageAdsItem-right\">\n\t\t\t\t\t\t\t\t<a href = \"/manage-ad/{{ad.id}}\">\n\t\t\t\t\t\t\t\t\t<button>Modify</button>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<button>Mark as sold</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"NewAdBox-container\">\n\t\t\t\t\t<div id=\"NewAd-box\">\n\t\t\t\t\t\t<h2>New Ad?</h2>\n\t\t\t\t\t\t<a href = \"/new-ad/{{user.id}}\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"button\">\n\t\t\t\t\t\t\t<i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Click here</button>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./App/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Downloads/buyanycaronline--master/buyanycaronline_v_o.1/App/main.ts */"./App/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map