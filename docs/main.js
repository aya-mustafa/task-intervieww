"use strict";
(self["webpackChunkinterviewTask"] = self["webpackChunkinterviewTask"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ 544);
/* harmony import */ var _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/card-component/card-component.component */ 7711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: "",
  component: _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_1__.CardComponentComponent
}, {
  path: "dashboard",
  component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/header/header.component */ 2073);



class AppComponent {
  constructor() {
    this.title = 'InterviewTask';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _component_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/header/header.component */ 2073);
/* harmony import */ var _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/card-component/card-component.component */ 7711);
/* harmony import */ var _component_card_component_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/card-component/pages/main-page/main-page.component */ 6504);
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ 544);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _component_card_component_card_component_component__WEBPACK_IMPORTED_MODULE_3__.CardComponentComponent, _component_card_component_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__.MainPageComponent, _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule]
  });
})();

/***/ }),

/***/ 7711:
/*!**********************************************************************!*\
  !*** ./src/app/component/card-component/card-component.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponentComponent: () => (/* binding */ CardComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ 6504);


class CardComponentComponent {
  constructor() {
    this.cards = [{
      icon: "fa-solid fa-screwdriver-wrench",
      name: "صيانة السيارة"
    }, {
      icon: "fa-solid fa-car",
      name: " احقيقه خصم تأمين ايارات "
    }, {
      icon: "fa-solid fa-scale-balanced",
      name: " بلاغ عن احتيال"
    }, {
      icon: "fa-solid fa-car-burst",
      name: " الأبلاغ عن حادث"
    }, {
      icon: "fa-solid fa-car",
      name: " ملخص تقييم الأضرار"
    }, {
      icon: "fa-solid fa-scale-balanced",
      name: "بلاغ عن احتيال"
    }, {
      icon: "fa-solid fa-car-burst",
      name: " الأبلاغ عن حادث"
    }, {
      icon: "fa-solid fa-screwdriver-wrench",
      name: "صيانة السيارة"
    }, {
      icon: "fa-solid fa-car",
      name: " احقيقه خصم تأمين السيارات "
    }, {
      icon: "fa-solid fa-car",
      name: " ملخص تقييم الأضرار"
    }];
  }
  static #_ = this.ɵfac = function CardComponentComponent_Factory(t) {
    return new (t || CardComponentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardComponentComponent,
    selectors: [["app-card-component"]],
    decls: 5,
    vars: 1,
    consts: [[1, "mt-2", "container", "pt-3"], [1, "w-75", "m-auto"], [1, "text-center", "my-4"], [3, "cards"]],
    template: function CardComponentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0623\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-main-page", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cards", ctx.cards);
      }
    },
    dependencies: [_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6504:
/*!*********************************************************************************!*\
  !*** ./src/app/component/card-component/pages/main-page/main-page.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



const _c0 = function (a0) {
  return {
    "selected": a0
  };
};
const _c1 = function (a0) {
  return {
    "title-selected": a0
  };
};
const _c2 = function (a0) {
  return {
    "icon-selected": a0
  };
};
const _c3 = function (a0) {
  return {
    "name-selected": a0
  };
};
function MainPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const card_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.selectCard(card_r1, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5)(2, "div", 6)(3, "div")(4, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](card_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, card_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.name);
  }
}
const _c4 = function (a0) {
  return {
    "button-selected": a0
  };
};
class MainPageComponent {
  constructor(_Router) {
    this._Router = _Router;
    this.cards = "";
    this.isSelected = false;
    this.arr = [];
  }
  selectCard(card, i) {
    this.cards.forEach(c => this.isSelected = false);
    card.isSelected = true;
    this.isSelected = true;
    this.currentElement = this.cards[i];
  }
  okButton() {
    console.log(this.currentElement);
    if (this.currentElement != undefined) {
      this.arr.push(this.currentElement);
    }
    console.log(this.arr);
    this._Router.navigateByUrl('/dashboard');
  }
  static #_ = this.ɵfac = function MainPageComponent_Factory(t) {
    return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainPageComponent,
    selectors: [["app-main-page"]],
    inputs: {
      cards: "cards"
    },
    decls: 5,
    vars: 4,
    consts: [[1, "row", "pt-2"], ["class", "col", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center", "mb-3"], [1, "button-submit", "mt-2", "btn", "btn-block", 3, "ngClass", "click"], [1, "col", 3, "click"], [1, "card", "text-center", "mb-4", 3, "ngClass"], [1, "card-body", "d-flex", "justify-content-center", "align-items-center"], [1, "card-title", 3, "ngClass"], [3, "ngClass"], [1, "card-text", 3, "ngClass"]],
    template: function MainPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_1_Template, 8, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_3_listener() {
          return ctx.okButton();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u062A\u0623\u0643\u064A\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx.isSelected));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".card[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  width: 45px;\n  border: 1px solid #E2E2E2;\n  border-radius: 4px;\n  padding: 5px;\n  margin: auto;\n  margin-bottom: 5px;\n  color: #878686;\n}\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.button-submit[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 300px;\n  height: 45px;\n  border: 1px solid #cecccc;\n  border-radius: 4px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: rgb(52, 137, 79);\n}\n\n.name-selected[_ngcontent-%COMP%], .title-selected[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n.button-selected[_ngcontent-%COMP%] {\n  color: white;\n  background-color: rgb(52, 137, 79);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2NhcmQtY29tcG9uZW50L3BhZ2VzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9pdGklMjBwcm9qZWN0L2ludGVydmlld1Rhc2svc3JjL2FwcC9jb21wb25lbnQvY2FyZC1jb21wb25lbnQvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUo7QURDSTtFQUVJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBUjtBREVJO0VBRUksV0FBQTtFQUNBLFlBQUE7QUNEUjs7QURLQTtFQUVJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FES0E7RUFDSSxrQ0FBQTtBQ0ZKOztBRElBO0VBRUksc0JBQUE7QUNGSjs7QURJQTtFQUNJLFlBQUE7RUFDQSxrQ0FBQTtBQ0RKIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRcclxue1xyXG4gICAgd2lkdGggOiAxNDBweDtcclxuICAgIGhlaWdodCA6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6NHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLmNhcmQtdGl0bGVcclxuICAgIHtcclxuICAgICAgICB3aWR0aDo0NXB4O1xyXG4gICAgICAgIGJvcmRlciA6IDFweCBzb2xpZCAjRTJFMkUyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nIDo1cHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBjb2xvcjojODc4Njg2XHJcbiAgICB9XHJcbiAgICAuY2FyZC10aXRsZSBpXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6MzJweDtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b24tc3VibWl0XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIHdpZHRoIDozMDBweDtcclxuICAgIGhlaWdodDo0NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlY2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCAxMzcsIDc5KTtcclxufVxyXG4ubmFtZS1zZWxlY3RlZCwudGl0bGUtc2VsZWN0ZWRcclxue1xyXG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50XHJcbn1cclxuLmJ1dHRvbi1zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDEzNywgNzkpO1xyXG59IiwiLmNhcmQge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQgLmNhcmQtdGl0bGUge1xuICB3aWR0aDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UyRTJFMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzg3ODY4Njtcbn1cbi5jYXJkIC5jYXJkLXRpdGxlIGkge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uYnV0dG9uLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMTM3LCA3OSk7XG59XG5cbi5uYW1lLXNlbGVjdGVkLCAudGl0bGUtc2VsZWN0ZWQge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLXNlbGVjdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDEzNywgNzkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 544:
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 1060);



function DashboardComponent_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td")(15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25)(18, "div", 26)(19, "div", 27)(20, "div", 28)(21, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 30)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0627\u0644\u0634\u0643\u0648\u064A \u0645\u0642\u062F\u0645\u0647 \u0641 \u0641\u0631\u0639 \u0627\u0644\u062F\u0642\u0647\u0644\u064A\u0647 \u0645\u0646 \u0645 \u0645 \u0639 \u064A\u0642\u0648\u0644 \u0628\u0623\u0646 \u0647\u0646\u0627\u0643 \u062D\u0627\u062F\u062A \u0644\u0644\u0633\u064A\u0627\u0631\u0647 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31)(30, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u063A\u0644\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, item_r1.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.leaderCity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 10, item_r1.date));
  }
}
const _c0 = function (a0, a1) {
  return {
    itemsPerPage: a0,
    currentPage: a1
  };
};
class DashboardComponent {
  constructor() {
    this.today = Date.now();
    this.items = [{
      type: "شكوي1",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي2",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي3",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي4",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "5شكوي",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }, {
      type: "شكوي6",
      date: this.today,
      city: "الرياض",
      leaderCity: "اداره الشكاوي",
      status: "تم قبولها"
    }];
    this.p = 1; // Current page number
    this.pageSize = 3; // Number of items to display per page
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 87,
    vars: 7,
    consts: [[1, "container", "mt-4", "pt-4", "text-center", "text-white"], [1, "row"], [1, "col-md-3", "mb-3"], [1, "newComplaints"], [1, "mt-2"], [1, "acceptedComplaints"], [1, "rejectedComplaints1"], [1, "col-md-3"], [1, "rejectedComplaints"], [1, "d-flex", "justify-content-between", "text-black", "my-2", "filteration"], [1, "date"], [1, "ms-3"], ["name", "", "id", ""], ["selected", "", "value", ""], ["value", ""], [1, "filter"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "text-center", "paginati"], [3, "pageChange"], ["scope", "row"], [1, "status"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "border", "border-0", "bg-transparent"], [1, "fa-solid", "fa-eye"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0634\u0643\u0627\u0648\u064A \u062C\u062F\u064A\u062F\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "150");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "div", 5)(10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0634\u0643\u0627\u0648\u064A \u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2)(15, "div", 6)(16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0634\u0643\u0627\u0648\u064A \u062A\u0645 \u0627\u0639\u062A\u0645\u0627\u062F\u0647\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0634\u0643\u0627\u0648\u064A \u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9)(27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u062C\u062F\u064A\u062F\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10)(30, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 12)(33, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0627\u0644\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Feb 17, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15)(44, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 12)(47, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0627\u0644\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u062C\u062F\u064A\u062F\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0642\u0628\u0648\u0644\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15)(56, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0627\u0644\u062D\u0627\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 12)(59, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0627\u0644\u0643\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0642\u0628\u0648\u0644\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u0627\u0644\u0634\u0643\u0627\u0648\u064A \u0627\u0644\u0645\u0631\u0641\u0648\u0636\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 16)(66, "thead")(67, "tr")(68, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0631\u0642\u0645 \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0646\u0648\u0639 \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0643\u0648\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u0627\u0644\u0645\u062F\u064A\u0646\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u0627\u0644\u0627\u062F\u0627\u0631\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0627\u0644\u062D\u0627\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0639\u0631\u0636");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DashboardComponent_tr_83_Template, 32, 12, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19)(86, "pagination-controls", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DashboardComponent_Template_pagination_controls_pageChange_86_listener($event) {
          return ctx.p = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](84, 1, ctx.items, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.pageSize, ctx.p)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginatePipe],
    styles: [".col-md-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 5px 7px;\n}\n\n.newComplaints[_ngcontent-%COMP%] {\n  background-color: #FDBE7B;\n}\n\n.acceptedComplaints[_ngcontent-%COMP%] {\n  background-color: #12AA77;\n}\n\n.rejectedComplaints1[_ngcontent-%COMP%] {\n  background-color: #FF6A6F;\n}\n\n.rejectedComplaints[_ngcontent-%COMP%] {\n  background-color: #43A7D8;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #12AA77 !important;\n  color: #fff;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n}\n\n.status[_ngcontent-%COMP%] {\n  color: #FDBE7B;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #E7FFF3;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9c9999;\n}\n\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #12AA77;\n  color: #fff;\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 640px) {\n  .filteration[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .filteration[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .filteration[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n  .filteration[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding-top: 120px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9pdGklMjBwcm9qZWN0L2ludGVydmlld1Rhc2svc3JjL2FwcC9jb21wb25lbnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUVJLHlCQUFBO0FDQUo7O0FERUE7RUFFSSx5QkFBQTtBQ0FKOztBREdBO0VBRUkseUJBQUE7QUNESjs7QURHQTtFQUVJLHlCQUFBO0FDREo7O0FESUE7RUFFSSxvQ0FBQTtFQUNBLFdBQUE7QUNGSjs7QURJQTtFQUVJLGlCQUFBO0FDRko7O0FESUE7RUFFSSxjQUFBO0FDRko7O0FESUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNESjs7QURHQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FDREo7O0FER0E7RUFFSSx5QkFBQTtFQUNBLFdBQUE7QUNESjs7QURHQTtFQUVJLGFBQUE7QUNESjs7QURJQTtFQUNJO0lBRUkseUJBQUE7RUNGTjtFREdNO0lBTUksbUJBQUE7RUNOVjtFREVVO0lBRUksV0FBQTtFQ0RkO0VESVU7SUFFSSxZQUFBO0VDSGQ7RURPRTtJQUVJLDZCQUFBO0VDTk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtMz5kaXZcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIHBhZGRpbmc6IDVweCA3cHg7XHJcbn1cclxuLm5ld0NvbXBsYWludHNcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZEQkU3QjtcclxufVxyXG4uYWNjZXB0ZWRDb21wbGFpbnRzXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzEyQUE3NztcclxuICAgIFxyXG59XHJcbi5yZWplY3RlZENvbXBsYWludHMxXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjZBNkZcclxufVxyXG4ucmVqZWN0ZWRDb21wbGFpbnRzXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQzQTdEOFxyXG59XHJcblxyXG50aGVhZCB0aFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJBQTc3ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbnRkXHJcbntcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcbi5zdGF0dXNcclxue1xyXG4gICAgY29sb3I6I0ZEQkU3QlxyXG59XHJcbnNlbGVjdHtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRTdGRkYzO1xyXG59XHJcbmxhYmVsXHJcbntcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgY29sb3I6IzljOTk5OVxyXG59XHJcbi5tb2RhbC1mb290ZXIgYnV0dG9uXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMkFBNzc7XHJcbiAgICBjb2xvciA6ICNmZmZcclxufVxyXG4uc2VhcmNoSW5wdXRcclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG4gICAgLmZpbHRlcmF0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICBkaXZcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjUwcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lclxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufSIsIi5jb2wtbWQtMyA+IGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG59XG5cbi5uZXdDb21wbGFpbnRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZEQkU3Qjtcbn1cblxuLmFjY2VwdGVkQ29tcGxhaW50cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMkFBNzc7XG59XG5cbi5yZWplY3RlZENvbXBsYWludHMxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkE2Rjtcbn1cblxuLnJlamVjdGVkQ29tcGxhaW50cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0M0E3RDg7XG59XG5cbnRoZWFkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyQUE3NyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxudGQge1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbn1cblxuLnN0YXR1cyB7XG4gIGNvbG9yOiAjRkRCRTdCO1xufVxuXG5zZWxlY3Qge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFN0ZGRjM7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzljOTk5OTtcbn1cblxuLm1vZGFsLWZvb3RlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJBQTc3O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaElucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmZpbHRlcmF0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5maWx0ZXJhdGlvbiBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmZpbHRlcmF0aW9uIGRpdiBsYWJlbCB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLmZpbHRlcmF0aW9uIGRpdiBzZWxlY3Qge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTIwcHggIWltcG9ydGFudDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 2073:
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




function HeaderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15)(3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0641\u0647\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0645\u062F\u0642\u0642 \u0627\u0644\u0634\u0643\u0627\u0648\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class HeaderComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this.showElement = this.router.url === '/dashboard';
      }
    });
  }
  getHeaderStyles() {
    const url = this.router.url;
    const styles = [];
    if (url.includes('/dashboard')) {
      styles.push('dashboard-header');
    }
    if (url.includes('/mainpage')) {
      styles.push('mainpage-header');
    }
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 12,
    vars: 3,
    consts: [[1, "header", 3, "ngClass"], [1, "container"], [1, "d-flex", "justify-content-between", "nav"], [1, "pt-0"], ["src", "../../../assets/images/download 1.png", "alt", ""], ["class", "searchInput", 4, "ngIf"], [1, "d-flex", "align-items-center", "header-right"], [1, "notification", "ms-3", "d-flex", "justify-content-center", "align-items-center"], [1, "fa-regular", "fa-bell"], [1, "language", "d-flex", "justify-content-center", "align-items-center"], ["class", " leader d-flex", 4, "ngIf"], [1, "searchInput"], ["placeholder", "\u0645\u0627 \u0627\u0644\u0630\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0629\u061F", 1, "form-control"], [1, "leader", "d-flex"], ["src", "../../../assets/images/download.jpeg", "alt", "", 1, "rounded-circle", "mt-2"], [1, "mt-4", "pt-3", "me-2", "leaderInfo"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 7, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getHeaderStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showElement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showElement);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".header[_ngcontent-%COMP%] {\n  background-color: #F4F4F4;\n  box-shadow: 0px 0px 10px #cdcbcb;\n  height: 105px;\n}\n.header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  transform: translateY(-10%);\n}\n.header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #E1E3E6;\n  width: 62px;\n  height: 48px;\n  border-radius: 8px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 450px;\n  margin-top: 38px;\n  border-radius: 18px;\n}\n\n.leader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 90px;\n}\n\n.leader[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  line-height: 0px;\n}\n\n@media screen and (max-width: 640px) {\n  .nav[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .leader[_ngcontent-%COMP%] {\n    display: block !important;\n    text-align: center;\n    order: 1;\n  }\n  .leader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .leader[_ngcontent-%COMP%]   .leaderInfo[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n  }\n  .searchInput[_ngcontent-%COMP%] {\n    order: 4;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9pdGklMjBwcm9qZWN0L2ludGVydmlld1Rhc2svc3JjL2FwcC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FDQUo7QURDSTtFQUVJLDJCQUFBO0FDQVI7QURDUTtFQUVJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQVo7O0FES0E7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBREtBO0VBRUksV0FBQTtFQUNBLFlBQUE7QUNISjs7QURLQTtFQUVJLGdCQUFBO0FDSEo7O0FES0E7RUFDSTtJQUVJLGNBQUE7RUNITjtFREtFO0lBRUksYUFBQTtFQ0pOO0VETUU7SUFFSSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQ0xOO0VETU07SUFFSSxXQUFBO0lBQ0EsWUFBQTtFQ0xWO0VEUU07SUFFSSwwQkFBQTtFQ1BWO0VEVUU7SUFFSSxRQUFBO0VDVE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggIDEwcHggI2NkY2JjYjtcclxuICAgIGhlaWdodDogMTA1cHg7XHJcbiAgICAuaGVhZGVyLXJpZ2h0XHJcbiAgICB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gICAgICAgIC5sYW5ndWFnZSwubm90aWZpY2F0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTFFM0U2O1xyXG4gICAgICAgICAgICB3aWR0aDogNjJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5pbnB1dFxyXG57XHJcbiAgICB3aWR0aDo0NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG59XHJcbi5sZWFkZXIgaW1nXHJcbntcclxuICAgIHdpZHRoOjgwcHg7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxufVxyXG4ubGVhZGVyIGg2XHJcbntcclxuICAgIGxpbmUtaGVpZ2h0OjBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcbiAgICAubmF2IFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmRhc2hib2FyZC1oZWFkZXJcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgLmxlYWRlclxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIGltZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubGVhZGVySW5mb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaElucHV0XHJcbiAgICB7XHJcbiAgICAgICAgb3JkZXI6IDQ7XHJcbiAgICB9XHJcbn0iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjZGNiY2I7XG4gIGhlaWdodDogMTA1cHg7XG59XG4uaGVhZGVyIC5oZWFkZXItcmlnaHQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG59XG4uaGVhZGVyIC5oZWFkZXItcmlnaHQgLmxhbmd1YWdlLCAuaGVhZGVyIC5oZWFkZXItcmlnaHQgLm5vdGlmaWNhdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUUzRTY7XG4gIHdpZHRoOiA2MnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogNDUwcHg7XG4gIG1hcmdpbi10b3A6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cbi5sZWFkZXIgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cblxuLmxlYWRlciBoNiB7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5uYXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG4gIC5sZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9yZGVyOiAxO1xuICB9XG4gIC5sZWFkZXIgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLmxlYWRlciAubGVhZGVySW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlYXJjaElucHV0IHtcbiAgICBvcmRlcjogNDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map