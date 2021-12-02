(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "31zo":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifications/notifications.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Notifications</h5>\n        <p class=\"card-category\">Handcrafted by our friend\n          <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n          <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"card card-plain\">\n              <div class=\"card-header\">\n                <h5 class=\"card-title\">Notifications Style</h5>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"alert alert-info\">\n                  <span>This is a plain notification</span>\n                </div>\n                <div class=\"alert alert-info alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>This is a notification with close button.</span>\n                </div>\n                <div class=\"alert alert-info alert-with-icon alert-dismissible fade show\" data-notify=\"container\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span data-notify=\"icon\" class=\"nc-icon nc-bell-55\"></span>\n                  <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                </div>\n                <div class=\"alert alert-info alert-with-icon alert-dismissible fade show\" data-notify=\"container\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span data-notify=\"icon\" class=\"nc-icon nc-chart-pie-36\"></span>\n                  <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card card-plain\">\n              <div class=\"card-header\">\n                <h5 class=\"card-title\">Notification states</h5>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"alert alert-primary alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>\n                    <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                </div>\n                <div class=\"alert alert-info alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>\n                    <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                </div>\n                <div class=\"alert alert-success alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>\n                    <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>\n                    <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                </div>\n                <div class=\"alert alert-danger alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>\n                    <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"places-buttons\">\n          <div class=\"row\">\n            <div class=\"col-md-6 ml-auto mr-auto text-center\">\n              <h4 class=\"card-title\">\n                Notifications Places\n                <p class=\"category\">Click to view notifications</p>\n              </h4>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-8 ml-auto mr-auto\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                </div>\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                </div>\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-8 ml-auto mr-auto\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                </div>\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                </div>\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "3OJA":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.component.html */ "QMMq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let UserComponent = class UserComponent {
    ngOnInit() {
    }
};
UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'user-cmp',
        template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], UserComponent);



/***/ }),

/***/ "EDBo":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card \">\n      <div class=\"card-header \">\n        Google Maps\n      </div>\n      <div class=\"card-body \">\n        <div id=\"map\" class=\"map\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/user/user.component */ "3OJA");
/* harmony import */ var _pages_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/table/table.component */ "zAxE");
/* harmony import */ var _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/typography/typography.component */ "VVRr");
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/icons/icons.component */ "RDQg");
/* harmony import */ var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/maps/maps.component */ "s6Bl");
/* harmony import */ var _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/notifications/notifications.component */ "Xf8J");
/* harmony import */ var _pages_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/upgrade/upgrade.component */ "ZfGt");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");















let AdminLayoutModule = class AdminLayoutModule {
};
AdminLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]
        ],
        declarations: [
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _pages_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
            _pages_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
            _pages_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_13__["UpgradeComponent"],
            _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_9__["TypographyComponent"],
            _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_10__["IconsComponent"],
            _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_11__["MapsComponent"],
            _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"],
        ]
    })
], AdminLayoutModule);



/***/ }),

/***/ "Ixm7":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"col-md-12\">\n  <div class=\"col-md-8 col-lg-8 col-8 col-sm-8 align-self-center mx-auto\">\n    <!-- <div class=\"row d-icons\">\n      <div class=\"col-lg-8 col-md-8 col-12 col-sm-12\" style=\"margin: 0 auto;\">\n        <button _ngcontent-prj-c157=\"\" type=\"button\" class=\"btn btn-sm btn-active\" (click)=\"saveToCalender()\" style=\"background-color: #fff !important;color: #0a0aab !important;\"  >\n          <i _ngcontent-prj-c157=\"\" aria-hidden=\"true\" class=\"fa fa-calendar clndr-icon\"></i>Save to calender</button>\n      </div>\n      </div> -->\n    </div>\n  </div>\n  <div class=\"col-md-12 col-12 col-sm-12\" style=\"padding: 20px 0px 0px 0px;\">\n    <div class=\"col-md-8 col-lg-8 col-8 col-sm-8 align-self-center mx-auto\">\n      <div class=\"row d-icons\">\n        <div class=\"col-lg-12 col-md-12 col-12 col-sm-12\">\n          <img src=\"{{imageFilesLocation}}{{image_url}}\" alt=\"\" class=\"tmp-image\" style=\"width: 90%; height: 85vh;\">\n          <!-- <img src=\"../../../assets/img/R.jpg\" alt=\"Flowers in Chania\" class=\"tmp-image\" style=\"width: 90%; height: 85vh;\"> -->\n\n        </div>\n          </div>\n          </div>\n           </div>\n           <div class=\"row mob-views \" style=\"margin: 0 auto;cursor: pointer;\" routerLink=\"/list-gift-vouchers\">\n            <div class=\"col-md-8 col-lg-8 col-12 col-sm-12 text-center mx-auto align-self-center \" >\n              <div class=\"row d-icons mob-views\">\n                <div class=\"col-lg-6 col-md-6 col-12 col-sm-12c mx-auto \">\n                  <button  type=\"button\" class=\"btn btn-sm btn-active menu-btn\" >\n                  <span style=\"font-size: 12px;color:#d9117d ;\">\n                               <img src=\"./assets/img/send_gift.png\" class=\"menu-img\">\n                    Send Gift Vouchers</span>\n                     <i class=\"fa fa-angle-right  fa-2x\" style=\"float: right;color: #d9117d;\" aria-hidden=\"true\"></i></button>\n                </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row mob-views\" style=\"margin: 0 auto;cursor: pointer;\" routerLink=\"/sent-video\">\n              <div class=\"col-md-8 col-lg-8 col-12 col-sm-12 text-center mx-auto align-self-center \" >\n                <div class=\"row d-icons\">\n                  <div class=\"col-lg-6 col-md-6 col-12 col-sm-12c mx-auto \">\n                    <button  type=\"button\" class=\"btn btn-sm btn-active menu-btn\">\n                     <span style=\"font-size: 12px;color: #d9117d;\">\n                                 <img src=\"./assets/img/send-video-02.png\" class=\"menu-img\">\n                      Send Video Wishes </span>\n                        <i class=\"fa fa-angle-right  fa-2x\" style=\"float: right;color: #d9117d;\"  aria-hidden=\"true\"></i></button>\n                  </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mob-views\" style=\"margin: 0 auto;cursor: pointer;\" routerLink=\"/users\" >\n                <div class=\"col-md-8 col-lg-8 col-12 col-sm-12 text-center mx-auto align-self-center \" >\n                  <div class=\"row d-icons\">\n                    <div class=\"col-lg-6 col-md-6 col-12 col-sm-12c mx-auto \">\n                      <button  type=\"button\" class=\"btn btn-sm btn-active menu-btn\">\n                      <span style=\"font-size: 12px; color: #d9117d;\">\n                            <img src=\"./assets/img/join-chat-02.png\" class=\"menu-img mr-4\"></span>\n                       <span class=\"mr-5\" style=\"color: #d9117d;\"> Join Chat</span>\n                          <i class=\"fa fa-angle-right  fa-2x\" style=\"float: right;color: #d9117d;\" aria-hidden=\"true\"></i></button>\n                    </div>\n                    </div>\n                  </div>\n                </div>\n\n\n\n                <style>\n                 .btn:hover{\n                    background-color: white !important;\n                  }\n                  @media screen and (max-width: 991px) {\n  .mob-views{\n    display: block;\n  }\n}\n                </style>\n");

/***/ }),

/***/ "JSsR":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upgrade/upgrade.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-8 ml-auto mr-auto\">\n    <div class=\"card card-upgrade\">\n      <div class=\"card-header text-center\">\n        <h4 class=\"card-title\">Paper Dashboard PRO Angular</h4>\n          <p class=\"card-category\">Are you looking for more components? Please check our Premium Version of Paper Dashboard PRO.</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive table-upgrade\">\n          <table class=\"table\">\n            <thead>\n              <th></th>\n              <th class=\"text-center\">Free</th>\n              <th class=\"text-center\">PRO</th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Components</td>\n                <td class=\"text-center\">16</td>\n                <td class=\"text-center\">160</td>\n              </tr>\n              <tr>\n                <td>Plugins</td>\n                <td class=\"text-center\">4</td>\n                <td class=\"text-center\">15</td>\n              </tr>\n              <tr>\n                <td>Example Pages</td>\n                <td class=\"text-center\">7</td>\n                <td class=\"text-center\">27</td>\n              </tr>\n              <tr>\n                <td>Login, Register, Pricing, Lock Pages</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td>DataTables, VectorMap, SweetAlert, Wizard, FullCalendar etc...</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td>Mini Sidebar</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td>Premium Support</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td></td>\n                <td class=\"text-center\">Free</td>\n                <td class=\"text-center\">Just $49</td>\n              </tr>\n              <tr>\n                <td class=\"text-center\"></td>\n                <td class=\"text-center\">\n                  <a href=\"#\" class=\"btn btn-round btn-default disabled\">Current Version</a>\n                </td>\n                <td class=\"text-center\">\n                  <!-- <a target=\"_blank\" href=\"https://www.creative-tim.com/product/paper-dashboard-pro-angular?ref=pd-free-angular-upgrade-live\" class=\"btn btn-round btn-primary\">Upgrade to PRO</a> -->\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "QMMq":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card card-user\">\n      <div class=\"image\">\n        <img src=\"assets/img/damir-bosnjak.jpg\" alt=\"...\">\n      </div>\n      <div class=\"card-body\">\n        <div class=\"author\">\n          <a href=\"#\">\n            <img class=\"avatar border-gray\" src=\"assets/img/mike.jpg\" alt=\"...\">\n            <h5 class=\"title\">Chet Faker</h5>\n          </a>\n          <p class=\"description\">\n            @chetfaker\n          </p>\n        </div>\n        <p class=\"description text-center\">\n          \"I like the way you work it\n          <br> No diggity\n          <br> I wanna bag it up\"\n        </p>\n      </div>\n      <div class=\"card-footer\">\n        <hr>\n        <div class=\"button-container\">\n          <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-6 ml-auto\">\n              <h5>12\n                <br>\n                <small>Files</small>\n              </h5>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-6 ml-auto mr-auto\">\n              <h5>2GB\n                <br>\n                <small>Used</small>\n              </h5>\n            </div>\n            <div class=\"col-lg-3 mr-auto\">\n              <h5>24,6$\n                <br>\n                <small>Spent</small>\n              </h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">Team Members</h4>\n      </div>\n      <div class=\"card-body\">\n        <ul class=\"list-unstyled team-members\">\n          <li>\n            <div class=\"row\">\n              <div class=\"col-md-2 col-2\">\n                <div class=\"avatar\">\n                  <img src=\"assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n              </div>\n              <div class=\"col-md-7 col-7\">\n                DJ Khaled\n                <br />\n                <span class=\"text-muted\">\n                  <small>Offline</small>\n                </span>\n              </div>\n              <div class=\"col-md-3 col-3 text-right\">\n                <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row\">\n              <div class=\"col-md-2 col-2\">\n                <div class=\"avatar\">\n                  <img src=\"assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n              </div>\n              <div class=\"col-md-7 col-7\">\n                Creative Tim\n                <br />\n                <span class=\"text-success\">\n                  <small>Available</small>\n                </span>\n              </div>\n              <div class=\"col-md-3 col-3 text-right\">\n                <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n              </div>\n            </div>\n          </li>\n          <li>\n            <div class=\"row\">\n              <div class=\"col-md-2 col-2\">\n                <div class=\"avatar\">\n                  <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n              </div>\n              <div class=\"col-ms-7 col-7\">\n                Flume\n                <br />\n                <span class=\"text-danger\">\n                  <small>Busy</small>\n                </span>\n              </div>\n              <div class=\"col-md-3 col-3 text-right\">\n                <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"card card-user\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Edit Profile</h5>\n      </div>\n      <div class=\"card-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"col-md-5 pr-1\">\n              <div class=\"form-group\">\n                <label>Company (disabled)</label>\n                <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n              </div>\n            </div>\n            <div class=\"col-md-3 px-1\">\n              <div class=\"form-group\">\n                <label>Username</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"michael23\">\n              </div>\n            </div>\n            <div class=\"col-md-4 pl-1\">\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Email address</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 pr-1\">\n              <div class=\"form-group\">\n                <label>First Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Chet\">\n              </div>\n            </div>\n            <div class=\"col-md-6 pl-1\">\n              <div class=\"form-group\">\n                <label>Last Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Faker\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Address</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Melbourne, Australia\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 pr-1\">\n              <div class=\"form-group\">\n                <label>City</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Melbourne\">\n              </div>\n            </div>\n            <div class=\"col-md-4 px-1\">\n              <div class=\"form-group\">\n                <label>Country</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Australia\">\n              </div>\n            </div>\n            <div class=\"col-md-4 pl-1\">\n              <div class=\"form-group\">\n                <label>Postal Code</label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>About Me</label>\n                <textarea class=\"form-control textarea\">Oh so, your weak rhyme You doubt I'll bother, reading into it</textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\">Update Profile</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "RDQg":
/*!************************************************!*\
  !*** ./src/app/pages/icons/icons.component.ts ***!
  \************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./icons.component.html */ "vehm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let IconsComponent = class IconsComponent {
};
IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'icons-cmp',
        template: _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], IconsComponent);



/***/ }),

/***/ "TIPq":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typography/typography.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"title\">Paper Table Heading</h5>\n        <p class=\"category\">Created using Montserrat Font Family</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"typography-line\">\n          <h1>\n            <span>Header 1</span>The Life of Paper Dashboard </h1>\n        </div>\n        <div class=\"typography-line\">\n          <h2>\n            <span>Header 2</span>The Life of Paper Dashboard </h2>\n        </div>\n        <div class=\"typography-line\">\n          <h3>\n            <span>Header 3</span>The Life of Paper Dashboard </h3>\n        </div>\n        <div class=\"typography-line\">\n          <h4>\n            <span>Header 4</span>The Life of Paper Dashboard </h4>\n        </div>\n        <div class=\"typography-line\">\n          <h5>\n            <span>Header 5</span>The Life of Paper Dashboard </h5>\n        </div>\n        <div class=\"typography-line\">\n          <h6>\n            <span>Header 6</span>The Life of Paper Dashboard </h6>\n        </div>\n        <div class=\"typography-line\">\n          <p>\n            <span>Paragraph</span>\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n          </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Quote</span>\n          <blockquote>\n            <p class=\"blockquote blockquote-primary\">\n              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n              <br>\n              <br>\n              <small>\n                - Noaa\n              </small>\n            </p>\n          </blockquote>\n        </div>\n        <div class=\"typography-line\">\n          <span>Muted Text</span>\n          <p class=\"text-muted\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n          </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Primary Text</span>\n          <p class=\"text-primary\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Info Text</span>\n          <p class=\"text-info\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Success Text</span>\n          <p class=\"text-success\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Warning Text</span>\n          <p class=\"text-warning\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n          </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Danger Text</span>\n          <p class=\"text-danger\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n        </div>\n        <div class=\"typography-line\">\n          <h2>\n            <span>Small Tag</span>\n            Header with small subtitle\n            <br>\n            <small>Use \"small\" tag for the headers</small>\n          </h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "Ixm7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/api.service */ "eokG");





let DashboardComponent = class DashboardComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.evntid = localStorage.getItem('eventId');
    }
    ngOnInit() {
        $(".modal-backdrop").removeClass('modal-backdrop');
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        this.eventDetails();
        gapi.load("client:auth2", function () {
            gapi.auth2.init({ client_id: "523157720270-ig1k9m3a8v6pabsh3vnt1mqcjcfgfqm0.apps.googleusercontent.com" });
        });
    }
    eventDetails() {
        this.apiService.getEventDetail(this.evntid).subscribe((res) => {
            if (res) {
                console.log(res);
                this.evntDetail = res['detail'];
                this.imageFilesLocation = res.imageFilesLocation;
                this.image_url = res['detail'].image_url;
            }
            else {
            }
        }, error => {
        });
    }
    sendVideoWish() {
    }
    joinChat() {
    }
    // function to add events to google calender start
    authenticate() {
        return gapi.auth2.getAuthInstance()
            .signIn({ scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events" }).then((res) => {
            this.loadClient();
            setTimeout(() => {
                this.execute();
            }, 2000);
        }, function (err) {
        });
    }
    execute() {
        return gapi.client.calendar.events.insert({
            "calendarId": "primary",
            "conferenceDataVersion": 1,
            "maxAttendees": 3,
            "sendNotifications": true,
            "sendUpdates": "all",
            "supportsAttachments": false,
            "resource": {
                "end": {
                    "date": this.evntDetail.date
                },
                "start": {
                    "date": this.evntDetail.date
                },
                "description": "test",
                "summary": this.evntDetail.title
            }
        })
            .then(function (response) {
            // Handle the results here (response.result has the parsed body).
        }, function (err) {
        });
    }
    loadClient() {
        gapi.client.setApiKey("AIzaSyARK4GRhFCrbhyIXKAJrL2Vkkepz_1eVss");
        return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
            .then(function () {
        }, function (err) {
        });
    }
    saveToCalender() {
        this.authenticate();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: app_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'dashboard-cmp',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DashboardComponent);



/***/ }),

/***/ "VVRr":
/*!**********************************************************!*\
  !*** ./src/app/pages/typography/typography.component.ts ***!
  \**********************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "TIPq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TypographyComponent = class TypographyComponent {
};
TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'typography-cmp',
        template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], TypographyComponent);



/***/ }),

/***/ "Xf8J":
/*!****************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notifications.component.html */ "31zo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");




let NotificationsComponent = class NotificationsComponent {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showNotification(from, align) {
        const color = Math.floor(Math.random() * 5 + 1);
        switch (color) {
            case 1:
                this.toastr.info('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-info alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 2:
                this.toastr.success('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-success alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 3:
                this.toastr.warning('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-warning alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 4:
                this.toastr.error('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
                    timeOut: 4000,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: "alert alert-danger alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 5:
                this.toastr.show('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-primary alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            default:
                break;
        }
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'notifications-cmp',
        template: _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], NotificationsComponent);



/***/ }),

/***/ "ZfGt":
/*!****************************************************!*\
  !*** ./src/app/pages/upgrade/upgrade.component.ts ***!
  \****************************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./upgrade.component.html */ "JSsR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let UpgradeComponent = class UpgradeComponent {
    ngOnInit() {
    }
};
UpgradeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'upgrade-cmp',
        template: _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], UpgradeComponent);



/***/ }),

/***/ "lUBK":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table/table.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\"> Simple Table</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead class=\" text-primary\">\n              <th>\n                Name\n              </th>\n              <th>\n                Country\n              </th>\n              <th>\n                City\n              </th>\n              <th class=\"text-right\">\n                Salary\n              </th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  Dakota Rice\n                </td>\n                <td>\n                  Niger\n                </td>\n                <td>\n                  Oud-Turnhout\n                </td>\n                <td class=\"text-right\">\n                  $36,738\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Minerva Hooper\n                </td>\n                <td>\n                  Curaçao\n                </td>\n                <td>\n                  Sinaai-Waas\n                </td>\n                <td class=\"text-right\">\n                  $23,789\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Sage Rodriguez\n                </td>\n                <td>\n                  Netherlands\n                </td>\n                <td>\n                  Baileux\n                </td>\n                <td class=\"text-right\">\n                  $56,142\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Philip Chaney\n                </td>\n                <td>\n                  Korea, South\n                </td>\n                <td>\n                  Overland Park\n                </td>\n                <td class=\"text-right\">\n                  $38,735\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Doris Greene\n                </td>\n                <td>\n                  Malawi\n                </td>\n                <td>\n                  Feldkirchen in Kärnten\n                </td>\n                <td class=\"text-right\">\n                  $63,542\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Mason Porter\n                </td>\n                <td>\n                  Chile\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-right\">\n                  $78,615\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Jon Porter\n                </td>\n                <td>\n                  Portugal\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-right\">\n                  $98,615\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n    <div class=\"card card-plain\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\"> Table on Plain Background</h4>\n        <p class=\"card-category\"> Here is a subtitle for this table</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead class=\" text-primary\">\n              <th>\n                Name\n              </th>\n              <th>\n                Country\n              </th>\n              <th>\n                City\n              </th>\n              <th class=\"text-right\">\n                Salary\n              </th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  Dakota Rice\n                </td>\n                <td>\n                  Niger\n                </td>\n                <td>\n                  Oud-Turnhout\n                </td>\n                <td class=\"text-right\">\n                  $36,738\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Minerva Hooper\n                </td>\n                <td>\n                  Curaçao\n                </td>\n                <td>\n                  Sinaai-Waas\n                </td>\n                <td class=\"text-right\">\n                  $23,789\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Sage Rodriguez\n                </td>\n                <td>\n                  Netherlands\n                </td>\n                <td>\n                  Baileux\n                </td>\n                <td class=\"text-right\">\n                  $56,142\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Philip Chaney\n                </td>\n                <td>\n                  Korea, South\n                </td>\n                <td>\n                  Overland Park\n                </td>\n                <td class=\"text-right\">\n                  $38,735\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Doris Greene\n                </td>\n                <td>\n                  Malawi\n                </td>\n                <td>\n                  Feldkirchen in Kärnten\n                </td>\n                <td class=\"text-right\">\n                  $63,542\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Mason Porter\n                </td>\n                <td>\n                  Chile\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-right\">\n                  $78,615\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Jon Porter\n                </td>\n                <td>\n                  Portugal\n                </td>\n                <td>\n                  Gloucester\n                </td>\n                <td class=\"text-right\">\n                  $98,615\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/user/user.component */ "3OJA");
/* harmony import */ var _pages_table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/table/table.component */ "zAxE");
/* harmony import */ var _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/typography/typography.component */ "VVRr");
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/icons/icons.component */ "RDQg");
/* harmony import */ var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/maps/maps.component */ "s6Bl");
/* harmony import */ var _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/notifications/notifications.component */ "Xf8J");
/* harmony import */ var _pages_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/upgrade/upgrade.component */ "ZfGt");
/* harmony import */ var app_pages_list_gift_vouchers_list_gift_vouchers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/list-gift-vouchers/list-gift-vouchers.component */ "4cL1");
/* harmony import */ var app_pages_voucher_details_voucher_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/voucher-details/voucher-details.component */ "oUjK");
/* harmony import */ var app_pages_payment_address_payment_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/payment-address/payment-address.component */ "gBfA");
/* harmony import */ var app_pages_add_video_add_video_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/add-video/add-video.component */ "2Yxq");
/* harmony import */ var app_pages_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/list-users/list-users.component */ "oWoX");
/* harmony import */ var app_pages_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/chat-box/chat-box.component */ "KHX4");
/* harmony import */ var app_pages_register_email_register_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/pages/register-email/register-email.component */ "WZA7");
/* harmony import */ var app_pages_group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/pages/group-chat/group-chat.component */ "2E9f");
















const AdminLayoutRoutes = [
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'list-gift-vouchers', component: app_pages_list_gift_vouchers_list_gift_vouchers_component__WEBPACK_IMPORTED_MODULE_8__["ListGiftVouchersComponent"] },
    { path: 'voucher-details/:id', component: app_pages_voucher_details_voucher_details_component__WEBPACK_IMPORTED_MODULE_9__["VoucherDetailsComponent"] },
    { path: 'payment/:id', component: app_pages_payment_address_payment_address_component__WEBPACK_IMPORTED_MODULE_10__["PaymentAddressComponent"] },
    { path: 'sent-video', component: app_pages_add_video_add_video_component__WEBPACK_IMPORTED_MODULE_11__["AddVideoComponent"] },
    { path: 'users', component: app_pages_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_12__["ListUsersComponent"] },
    { path: 'chat/:id/:buser', component: app_pages_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_13__["ChatBoxComponent"] },
    { path: 'chat', component: app_pages_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_13__["ChatBoxComponent"] },
    { path: 'user', component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"] },
    { path: 'table', component: _pages_table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"] },
    { path: 'typography', component: _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"] },
    { path: 'icons', component: _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"] },
    { path: 'maps', component: _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_5__["MapsComponent"] },
    { path: 'notifications', component: _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"] },
    { path: 'upgrade', component: _pages_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__["UpgradeComponent"] },
    { path: 'register', component: app_pages_register_email_register_email_component__WEBPACK_IMPORTED_MODULE_14__["RegisterEmailComponent"] },
    { path: 'group-chat', component: app_pages_group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_15__["GroupChatComponent"] },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];


/***/ }),

/***/ "s6Bl":
/*!**********************************************!*\
  !*** ./src/app/pages/maps/maps.component.ts ***!
  \**********************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./maps.component.html */ "EDBo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let MapsComponent = class MapsComponent {
    ngOnInit() {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    }
};
MapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'maps-cmp',
        template: _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], MapsComponent);



/***/ }),

/***/ "vehm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card demo-icons\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">100 Awesome Nucleo Icons</h5>\n        <p class=\"card-category\">Handcrafted by our friends from\n          <a href=\"https://nucleoapp.com/?ref=1712\">NucleoApp</a>\n        </p>\n      </div>\n      <div class=\"card-body all-icons\">\n        <div id=\"icons-wrapper\">\n          <section>\n            <ul>\n              <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n              </li>\n              <!-- list of icons here with the proper class-->\n            </ul>\n          </section>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "zAxE":
/*!************************************************!*\
  !*** ./src/app/pages/table/table.component.ts ***!
  \************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table.component.html */ "lUBK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TableComponent = class TableComponent {
    ngOnInit() {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    }
};
TableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'table-cmp',
        template: _raw_loader_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], TableComponent);



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module-es2015.js.map