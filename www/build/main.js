webpackJsonp([0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
        // this.baseUrl="http://192.168.1.56:8585/open/volunteer";  //local
        this.baseUrl = "http://13.233.175.188:8585/open/volunteer";
        this.baseUrl1 = "http://13.233.175.188:8585/open/mobile"; //server
    }
    CommonService.prototype.generateOTP = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.baseUrl + "/generateOTP", data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.verifyOTP = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(data);
        // let urlSearchParams = new URLSearchParams();
        // console.log("InService*********",data)
        // urlSearchParams.append('voterId', data.voterId);
        // urlSearchParams.append('otp', data.otp);
        // let body = urlSearchParams.toSring()
        return this.http
            .post(this.baseUrl + "/verifyOTP", data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getState = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/states", options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getConstituencys = function (parliamentaryId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl +
            "/assemblyConstituencyByParliamentoryId/" +
            parliamentaryId, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getParliamentary = function (stateId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/parliamentaryConstituency/" + stateId, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getWards = function (assemblyConstituencyId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/wardsAndBooths/" + assemblyConstituencyId, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getDashboardData = function (constituencyId, wardNo, boothId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl +
            "/dashboard/" +
            constituencyId +
            "/" +
            wardNo +
            "/" +
            boothId, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.searchVoters = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.baseUrl + "/search", data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getSearchNearByVoters = function (srno) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/searchNearBy/" + srno, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/getApplicationSettings", options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.AddNewVoter = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.baseUrl + "/complaint", data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getBooth = function (wardNo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/booths/" + wardNo, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getSurveyQuestions = function (stateId, wardNo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/surveyQuestions/" + stateId + "/" + wardNo, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getPartys = function (stateId, wardNo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/partys/" + stateId + "/" + wardNo, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.postPartys = function (voterId, partyId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/party-preference/" + voterId + "/" + partyId, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.postMobile = function (voterId, mobile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/citizen-mobile/" + voterId + "/" + mobile, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.postStatus = function (citizenId, status) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/citizen-status/" + citizenId + "/" + status, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.postSegmentation = function (citizenId, segmentation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl +
            "/citizen-segmentation/" +
            citizenId +
            "/" +
            segmentation, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.postCitizenVoted = function (citizenId, voted) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/citizen-voted/" + citizenId + "/" + voted, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.postsurvey = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.baseUrl + "/survey", data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.postLocation = function (citizenId, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.baseUrl + "/setLocation/" + citizenId, data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getCitizens = function (state, assemblyNo, wardNo, date, boothNo, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var parmas = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        parmas.append("state", state);
        parmas.append("assemblyNo", assemblyNo);
        parmas.append("wardNo", wardNo);
        parmas.append("date", date);
        parmas.append("boothNos", boothNo);
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, params: parmas });
        return this.http
            .post(this.baseUrl + "/citizens", data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getComplaints = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl1 + "/complaintByCitizen/" + data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getNotificationData = function (citizenId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/notification/" + citizenId, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.markAsReadNotification = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.baseUrl + "/notificationSeen", data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getDepts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/departnemt", options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getSubdepts = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/subDepartnemt/" + data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.selectIncident = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.baseUrl + "/complaint", data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.uploadImage = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.baseUrl + "/upload-image", data, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getImage = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/logo.jpg", options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getNews = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/news/" + id, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getAllText = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/getAdminSettings", options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getActionSettings = function (stateId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/actions/" + stateId, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getCitizenData = function (citizenId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl1 + "/citizen/" + citizenId, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getNotificationByAssembly = function (assemblyId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/notifications/" + assemblyId, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.shareUsingMobile = function (citizenId, mobile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/sendSMSToCitizen/" + citizenId + "/" + mobile, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService.prototype.getVoterOtherInfo = function (citizenId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.baseUrl + "/voter-other-information/" + citizenId, options_n).map(function (res) { return res.json(); });
    };
    CommonService.prototype.updateCitizenVolunteerDetail = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(data);
        return this.http.post(this.baseUrl + "/updateCitizenVolunteerDetail", data, options_n).map(function (res) { return res.json(); });
    };
    CommonService.prototype.goToLoginPage = function (mobileNo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        var options_n = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.baseUrl + "/getVolunteerStatus/" + mobileNo, options_n)
            .map(function (res) { return res.json(); });
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_localdatasync_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SettingsPage = (function () {
    function SettingsPage(nav, loadingCtrl, translate, commonService, network, MyNetwork, alertCtrl, toastCtrl, modalCtrl, localdataSync, menu) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.commonService = commonService;
        this.network = network;
        this.MyNetwork = MyNetwork;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.localdataSync = localdataSync;
        this.menu = menu;
        this.imageUrl = "";
        this.selectedPrinter = [];
        this.hideOption = false;
        if (!localStorage.getItem('volunteerId')) {
            this.isLoggedin = false;
            localStorage.removeItem("language");
        }
        else {
            this.isLoggedin = true;
        }
        if (localStorage.getItem("language") != undefined) {
            this.translate.use(localStorage.getItem("language"));
            this.lang = localStorage.getItem("language");
        }
        else {
            this.lang = "none";
        }
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
        this.getAllText();
    }
    SettingsPage.prototype.ionViewDidEnter = function () {
        if (!localStorage.getItem('volunteerId')) {
            this.menu.swipeEnable(false);
        }
    };
    SettingsPage.prototype.checkNetworkConnection = function () {
        this.MyNetwork.checkNetworkConnection();
    };
    SettingsPage.prototype.switchLanguage = function () {
        if (this.lang != 'none') {
            localStorage.setItem('language', this.lang);
            this.translate.use(this.lang);
            if (!localStorage.getItem('volunteerId')) {
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            }
        }
        else {
            this.presentToast('Select language');
        }
    };
    SettingsPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    SettingsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    SettingsPage.prototype.changeOption = function () {
        this.hideOption = true;
    };
    SettingsPage.prototype.gotoNotification = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__notifications_notifications__["a" /* NotificationsPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'settings',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/settings/settings.html"*/'<ion-header class="login-header auth-header" *ngIf=\'isLoggedin\'>\n    <ion-navbar>\n        <img class="logo" src="{{imageUrl}}">\n        <div id="ex4" float-right>\n            <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf=\'localdataSync.anyChange\'\n                data-count="!">\n                <ion-icon class="refresh-icon" name="md-sync"></ion-icon>\n            </span>\n            <ion-icon class="refresh-icon1" name="md-sync" *ngIf=\'!localdataSync.anyChange\'></ion-icon>\n        </div>\n        <button ion-button menuToggle>\n            <ion-icon class="menu_icon" name="menu"></ion-icon>\n        </button>\n        <ion-buttons end style="display: flex !important;">\n            <button ion-button (click)="gotoNotification()">\n                <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <ion-row *ngIf=\'!isLoggedin\'>\n        <ion-col class="bjplogo">\n            <img class="logo1" src="{{imageUrl}}">\n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\'!isLoggedin\'>\n        <ion-col>\n        </ion-col>\n    </ion-row>\n    <ion-list>\n        <ion-item>\n            <ion-label>{{\'Language\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="lang" (ionChange)="switchLanguage()" okText="{{\'Ok\'|translate}}" cancelText="{{\'Cancel\'|translate}}">\n                    <ion-option value="en">{{\'English\' | translate}}<span *ngIf="lang !== \'en\' && lang !== \'none\'">(English)</span></ion-option>\n                    <ion-option value="hi">{{\'Hindi\' | translate}}<span *ngIf="lang !== \'en\' && lang !== \'none\'">(Hindi)</span></ion-option>\n                    <ion-option value="kn">{{\'Kannada\' | translate}}<span *ngIf="lang !== \'en\' && lang !== \'none\'">(Kannada)</span></ion-option>\n                </ion-select>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer *ngIf=\'isLoggedin\'>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_5__providers_checknetwork__["a" /* MyNetwork */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_localdatasync_service__["a" /* LocaldataSync */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_citizen__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_ward__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_booth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_localdatasync_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_forkJoin__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var wardlist = (function () {
    function wardlist() {
    }
    return wardlist;
}());
var SyncPage = (function () {
    function SyncPage(nav, loadingCtrl, navParams, toastCtrl, alertCtrl, commonService, translate, modalCtrl, events, network, MyNetwork, MyCitizenDatabase, wardProvider, boothProvider, localdataSync) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.network = network;
        this.MyNetwork = MyNetwork;
        this.MyCitizenDatabase = MyCitizenDatabase;
        this.wardProvider = wardProvider;
        this.boothProvider = boothProvider;
        this.localdataSync = localdataSync;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.localWardList = [];
        this.syncingstatus = '';
        this.enableSpinner = false;
        this.current_date = new Date();
        this.isSyncing = false;
        this.selectedWard = false;
        this.imageUrl = "";
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    }
    SyncPage.prototype.ngOnInit = function () {
        this.getAllText();
        this.translate.use(localStorage.getItem('language'));
        if (!localStorage.getItem('wardNo')) {
            this.wardNo = '-1';
            this.wardId = '-1';
            localStorage.setItem('wardNo', '-1');
            localStorage.setItem('wardId', '-1');
        }
        else {
            this.wardId = localStorage.getItem('wardId');
            this.wardNo = localStorage.getItem('wardNo');
        }
        this.constituencyId = localStorage.getItem('constituencyId');
        this.stateName = localStorage.getItem('stateName');
        this.stateId = localStorage.getItem('stateId');
        this.assemblyNo = localStorage.getItem('assemblyNo');
        this.last_synch_date = localStorage.getItem('last_synch_date');
        this.getWardBooth();
    };
    SyncPage.prototype.portChange = function (event) {
        this.selectedWard = true;
        this.wardDefault = event;
    };
    SyncPage.prototype.ionViewDidLoad = function () {
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    SyncPage.prototype.checkNetworkConnection = function () {
        this.MyCitizenDatabase.getUser();
        this.MyNetwork.checkNetworkConnection();
    };
    SyncPage.prototype.sync = function () {
        var _this = this;
        if (localStorage.getItem('last_synch_date') == '-1') {
            this.syncData();
        }
        else if (this.selectedWard) {
            if (this.wardDefault.value.no == localStorage.getItem('wardNo') || (localStorage.getItem('wardId') == '-1' && this.wardDefault.value.no == 'All')) {
                this.syncData();
            }
            else {
                var alert_1 = this.alertCtrl.create({
                    title: 'Sync',
                    message: 'All the previous data will be lost. Are you sure you want to sync? ',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Ok',
                            handler: function () {
                                _this.syncData1();
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }
        else {
            this.syncData();
        }
    };
    SyncPage.prototype.syncData1 = function () {
        var _this = this;
        this.localWardList = [];
        this.enableSpinner = true;
        this.isSyncing = true;
        if (this.selectedWard) {
            this.selectedWard = false;
            if (this.wardDefault.value.no == 'All') {
                this.wardNo = '-1';
                localStorage.setItem('wardId', '-1');
            }
            else {
                this.wardNo = this.wardDefault.value.no;
                localStorage.setItem('wardId', this.wardDefault.value.id);
                this.wardId = this.wardDefault.value.id;
            }
        }
        localStorage.setItem('wardNo', this.wardNo);
        localStorage.setItem('last_synch_date', '-1');
        this.MyCitizenDatabase.deleteCitizens().then(function () {
            _this.showPartys().then(function () {
                if (_this.wardNo == '-1') {
                    _this.wardProvider.getAllWards().then(function (wardRes) {
                        var calls = [];
                        _this.localWardList = wardRes;
                        _this.y = wardRes.length;
                        if (wardRes.length > 0) {
                            for (var index = 0; index < wardRes.length; index++) {
                                var call = _this.commonService.getCitizens(_this.stateName, _this.assemblyNo, wardRes[index].no, -1, -1, []);
                                calls.push(call);
                                _this.x++;
                                _this.syncingstatus = 'inprogress';
                            }
                            Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_forkJoin__["forkJoin"])(calls).subscribe(function (results) {
                                _this.z = results.length;
                                if (results.length > 0) {
                                    var finalResult = [];
                                    for (var index = 0; index < results.length; index++) {
                                        _this.addAllCitizens(results[index]).then(function () {
                                        });
                                    }
                                    _this.syncingstatus = 'completed';
                                    setTimeout(function () {
                                        _this.enableSpinner = false;
                                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__["a" /* dashboardPage */]);
                                    }, 3000);
                                }
                                // }
                            });
                        }
                    }).catch(function (e) {
                    });
                }
                else {
                    _this.y = 1;
                    var call = _this.commonService.getCitizens(_this.stateName, _this.assemblyNo, _this.wardNo, -1, -1, []);
                    _this.x = 1;
                    Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_forkJoin__["forkJoin"])([call]).subscribe(function (results) {
                        _this.z = 1;
                        if (results.length > 0) {
                            _this.addAllCitizens(results[0]).then(function () {
                                _this.syncingstatus = 'completed';
                                setTimeout(function () {
                                    _this.enableSpinner = false;
                                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__["a" /* dashboardPage */]);
                                }, 3000);
                            });
                        }
                    });
                }
            });
        }).catch(function (e) {
        });
    };
    SyncPage.prototype.syncData = function () {
        var _this = this;
        this.isSyncing = true;
        this.enableSpinner = true;
        this.localWardList = [];
        if (this.selectedWard) {
            this.selectedWard = false;
            if (this.wardDefault.value.no == 'All') {
                this.wardNo = '-1';
                localStorage.setItem('wardId', '-1');
            }
            else {
                this.wardNo = this.wardDefault.value.no;
                localStorage.setItem('wardId', this.wardDefault.value.id);
            }
        }
        localStorage.setItem('wardNo', this.wardNo);
        localStorage.setItem('last_synch_date', '-1');
        this.showPartys().then(function () {
            if (_this.wardNo == '-1') {
                _this.wardProvider.getAllWards().then(function (wardRes) {
                    _this.localWardList = wardRes;
                    var calls = [];
                    _this.y = wardRes.length;
                    if (wardRes.length > 0) {
                        for (var index = 0; index < wardRes.length; index++) {
                            var call = _this.commonService.getCitizens(_this.stateName, _this.assemblyNo, wardRes[index].no, _this.last_synch_date, -1, []);
                            calls.push(call);
                            _this.x++;
                            _this.syncingstatus = 'inprogress';
                        }
                        Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_forkJoin__["forkJoin"])(calls).subscribe(function (results) {
                            _this.z = results.length;
                            if (results.length > 0) {
                                var finalResult = [];
                                for (var index = 0; index < results.length; index++) {
                                    _this.addAllCitizens(results[index]).then(function () {
                                    });
                                }
                                _this.syncingstatus = 'completed';
                                setTimeout(function () {
                                    _this.enableSpinner = false;
                                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__["a" /* dashboardPage */]);
                                }, 3000);
                            }
                        });
                    }
                }).catch(function (e) {
                    console.warn("err", e);
                });
            }
            else {
                _this.y = 1;
                var call = _this.commonService.getCitizens(_this.stateName, _this.assemblyNo, _this.wardNo, _this.last_synch_date, -1, []);
                _this.x = 1;
                Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_forkJoin__["forkJoin"])([call]).subscribe(function (results) {
                    _this.z = 1;
                    _this.addAllCitizens(results[0]).then(function () {
                        setTimeout(function () {
                            _this.enableSpinner = false;
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard__["a" /* dashboardPage */]);
                        }, 3000);
                    });
                });
            }
        });
    };
    SyncPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.warn("err", err);
        });
    };
    SyncPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    SyncPage.prototype.addAllCitizens = function (res) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.MyCitizenDatabase.addUser(res).then(function (response) {
                resolve(response);
            }).catch(function (e) {
                resolve(e);
            });
        });
    };
    SyncPage.prototype.getWardBooth = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: "Fetching data...."
        });
        this.commonService.getWards(this.constituencyId).subscribe(function (res) {
            if (res.wards.length > 0) {
                _this.wardProvider.addWards(res.wards).then(function () {
                    _this.loading.dismiss();
                });
                _this.wardlist = res.wards;
                var obj = {
                    no: "All",
                    id: -1
                };
                _this.wardlist.unshift(obj);
                if (localStorage.getItem('wardNo') == '-1') {
                    _this.ward = _this.wardlist[0];
                }
                else {
                    _this.wardlist.forEach(function (element, index) {
                        if (JSON.parse(localStorage.getItem('wardNo')) == element.no) {
                            _this.ward = _this.wardlist[index];
                        }
                    });
                }
            }
            _this.loading = _this.loadingCtrl.create({
                content: "Saving data..."
            });
            if (res.booths.length > 0) {
                _this.boothProvider.addBooth(res.booths).then(function () {
                    _this.loading.dismiss();
                });
            }
        }, function (err) {
            console.log("err", err);
            _this.loading.dismiss();
        });
    };
    SyncPage.prototype.showPartys = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.commonService.getPartys(_this.constituencyId, _this.wardId).subscribe(function (res) {
                localStorage.setItem('electionParty', JSON.stringify(res.Data));
                resolve(true);
            }, function (error) {
                resolve(true);
            }, function () {
            });
        });
    };
    SyncPage.prototype.gotoNotification = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__notifications_notifications__["a" /* NotificationsPage */]);
    };
    SyncPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sync',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/sync/sync.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n        <div id="ex4" float-right>\n            <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf=\'localdataSync.anyChange\' data-count="!">\n                <ion-icon class="refresh-icon" name="md-sync"></ion-icon>\n            </span>\n            <ion-icon class="refresh-icon1" name="md-sync" *ngIf=\'!localdataSync.anyChange\'></ion-icon>\n        </div>\n        <ion-buttons end style="display: flex !important;">\n            <button ion-button (click)="gotoNotification()">\n                <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <ion-label class="textLabel">Preferred Ward number</ion-label>\n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label>Ward number</ion-label>\n                <ionic-selectable item-content [(ngModel)]="ward" [items]="wardlist" itemValueField="id" itemTextField="no"\n                    [canSearch]="true" (onChange)="portChange($event)">\n                    <ng-template ionicSelectableValueTemplate let-port="value">\n                        {{port.no}}\n                    </ng-template>\n                </ionic-selectable>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button ion-button block class="auth-action-button login-button" (click)="sync()">Sync</button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n        </ion-col>\n    </ion-row>\n    <div *ngIf=\'enableSpinner\' style="text-align: center;">\n            <ion-spinner name="dots"></ion-spinner>\n    </div>    \n    <div *ngIf="isSyncing">            \n        <div *ngIf="localWardList.length > 0">\n            <ion-row *ngFor=\'let ward of localWardList\'>\n                <ion-col>\n                    Ward {{ward.no}} {{syncingstatus}}\n                </ion-col>\n            </ion-row>\n        </div>\n        <ion-row>\n            <ion-col>\n                Ward syncing inprogress... {{x}}/{{y}}\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                Ward synced ... {{z}}/{{y}}\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/sync/sync.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3__providers_checknetwork__["a" /* MyNetwork */],
            __WEBPACK_IMPORTED_MODULE_4__providers_citizen__["a" /* MyCitizenDatabase */], __WEBPACK_IMPORTED_MODULE_7__providers_ward__["a" /* WardProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_booth__["a" /* BoothProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_localdatasync_service__["a" /* LocaldataSync */]])
    ], SyncPage);
    return SyncPage;
}());

//# sourceMappingURL=sync.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchVotersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_citizen__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ward__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_booth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_voters_result_search_voters_result__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_localdatasync_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SearchVotersPage = (function () {
    function SearchVotersPage(navCtrl, loadingCtrl, navParams, commonService, translate, toastCtrl, modalCtrl, events, MyCitizenDatabase, wardProvider, localdataSync, boothProvider, network, geolocation, MyNetwork) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.MyCitizenDatabase = MyCitizenDatabase;
        this.wardProvider = wardProvider;
        this.localdataSync = localdataSync;
        this.boothProvider = boothProvider;
        this.network = network;
        this.geolocation = geolocation;
        this.MyNetwork = MyNetwork;
        this.searchlist = [];
        this.position = {};
        this.boothId = "";
        this.data = [];
        this.isValidSearchForm = false;
        this.searchWard = "";
        this.isPrefered = false;
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        this.getAllText();
        this.translate.use(localStorage.getItem("language"));
        this.wardNo = localStorage.getItem("wardNo");
        if (this.wardNo == "-1") {
            this.isPrefered = false;
            this.ward = "-1";
        }
        else {
            this.isPrefered = true;
            this.ward = this.wardNo;
        }
        this.showWard();
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            voterId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^[a-zA-Z0-9]*$/)]),
            status: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            familyname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^[a-zA-Z ]*$/)]),
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^[a-zA-Z ]*$/)]),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            booth: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            distance: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            respondedStatus: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            srno: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)])
        });
    }
    SearchVotersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.form.controls["respondedStatus"].setValue("none");
        }, 0);
        if (this.network.type == "none") {
            this.imageUrl = "assets/images/Smartneta/smart_neta_logo.png";
        }
        else {
            this.imageUrl =
                "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
        this.geolocation.getCurrentPosition().then(function (pos) {
            _this.position["latitude"] = pos.coords.latitude;
            _this.position["longitude"] = pos.coords.longitude;
        });
    };
    SearchVotersPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    SearchVotersPage.prototype.checkNetworkConnection = function () {
        this.MyNetwork.checkNetworkConnection();
    };
    SearchVotersPage.prototype.showWard = function () {
        var _this = this;
        this.wardProvider
            .getAllWards()
            .then(function (data) {
            _this.wardList = data;
            var obj = {
                no: "All",
                id: -1
            };
            _this.wardList.unshift(obj);
            if (localStorage.getItem("wardNo") == "-1") {
                _this.searchWard = "-1";
                _this.searchWardId = "";
                // this.ward = this.wardList[0];
            }
            else {
                _this.wardList.forEach(function (element, index) {
                    if (JSON.parse(localStorage.getItem("wardNo")) == element.no) {
                        _this.ward = _this.wardList[index];
                    }
                });
                _this.searchWard = localStorage.getItem("wardNo");
                _this.searchWardId = localStorage.getItem("wardId");
            }
            _this.showBooth();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SearchVotersPage.prototype.portChange = function (event) {
        this.boothId = event.value.no;
        this.validateInput();
    };
    SearchVotersPage.prototype.wardChange = function (event) {
        this.searchWard = event.value.no;
        this.searchWardId = event.value.id;
        this.showBooth();
    };
    SearchVotersPage.prototype.showBooth = function () {
        var _this = this;
        this.boothList = [];
        this.boothId = null;
        this.selectedBooth = null;
        this.boothProvider
            .getAllBooths(this.searchWard)
            .then(function (data) {
            _this.boothList = data;
            var obj = {
                no: "None",
                id: -1
            };
            _this.boothList.unshift(obj);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SearchVotersPage.prototype.postSearch = function () {
        var _this = this;
        var data = {};
        data["voterId"] = this.form.value.voterId;
        data["wardNo"] = this.searchWard;
        data["wardId"] = this.searchWardId;
        data["boothId"] = this.boothId && this.boothId == "None" ? "-1" : this.boothId;
        data["firstName"] = this.form.value.firstname;
        data["familyName"] = this.form.value.familyname;
        data["address"] = this.form.value.address;
        data["respondedStatus"] = this.form.value.respondedStatus == "none" ? "" : this.form.value.respondedStatus;
        data["srNo"] = this.form.value.srno;
        data["searchingWard"] = this.form.value.booth ? this.form.value.booth.ward_no : null;
        data["assemblyId"] = localStorage.getItem('constituencyId');
        data["stateName"] = localStorage.getItem('stateName');
        data["searchingBoothId"] = this.form.value.booth ? this.form.value.booth.id : null;
        this.loading = this.loadingCtrl.create({
            content: ""
        });
        this.loading.present();
        if (this.form.value.distance && this.form.value.distance.length > 0) {
            data["distance"] = this.form.value.distance;
            data["latitude"] = this.position["latitude"];
            data["longitude"] = this.position["longitude"];
            console.log("distance search ", data);
            this.commonService.searchVoters(data).subscribe(function (res) {
                _this.searchlist = [];
                _this.loading.dismissAll();
                res.data.forEach(function (element) {
                    _this.searchlist.push(element);
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_voters_result_search_voters_result__["a" /* SearchVotersResultPage */], {
                    searchlist: _this.searchlist,
                    boothName: _this.form.value.booth.name
                });
            }, function (err) {
                _this.loading.dismissAll();
            });
        }
        else {
            this.MyCitizenDatabase.searchVoters(data)
                .then(function (res) {
                _this.searchlist = [];
                res.forEach(function (element) {
                    _this.searchlist.push(element);
                });
                var boothName = _this.form.value.booth && _this.form.value.booth.name ? _this.form.value.booth.name : "";
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_voters_result_search_voters_result__["a" /* SearchVotersResultPage */], {
                    searchlist: _this.searchlist,
                    boothName: boothName
                });
                _this.loading.dismissAll();
            })
                .catch(function (err) {
                console.log(err);
                _this.loading.dismissAll();
            });
        }
    };
    SearchVotersPage.prototype.validateInput = function () {
        console.log("Enter validateInput");
        this.isValidSearchForm = false;
        var boothId = this.boothId && this.boothId == "None" ? "-1" : this.boothId;
        this.form.value.firstname = this.form.value.firstname.trim().replace(/[^a-zA-Z ]/g, "");
        this.form.value.familyname = this.form.value.familyname.trim().replace(/[^a-zA-Z ]/g, "");
        this.form.value.voterId = this.form.value.voterId.trim().replace(/[^a-zA-Z0-9]/g, "");
        this.form.value.srno = this.form.value.srno.trim().replace(/[^0-9]/g, "");
        this.form.value.respondedStatus = this.form.value.respondedStatus && this.form.value.respondedStatus == "none" ? "" : this.form.value.respondedStatus;
        if (this.searchWard) {
            if ((boothId !== null && boothId !== "" && boothId != "-1") ||
                (this.form.value.distance && this.form.value.distance.length > 0) ||
                (this.form.value.voterId && this.form.value.voterId.length > 2) ||
                (this.form.value.srno && this.form.value.srno.length > 0) ||
                (this.form.value.firstname && this.form.value.firstname.length > 2) ||
                (this.form.value.familyname && this.form.value.familyname.length > 2) ||
                (this.form.value.address && this.form.value.address.length > 2) ||
                (this.form.value.respondedStatus && this.form.value.respondedStatus.length > 0)) {
                this.isValidSearchForm = true;
            }
            else {
                this.isValidSearchForm = false;
            }
        }
        // else {
        //   this.isValidSearchForm = false;
        // }
    };
    SearchVotersPage.prototype.gotoNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__notifications_notifications__["a" /* NotificationsPage */]);
    };
    SearchVotersPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: "bottom",
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    SearchVotersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "search-voters",template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/search-voters/search-voters.html"*/'<ion-header class="login-header auth-header">\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menu_icon"></ion-icon>\n      </button>\n    </ion-buttons>\n    <img class="logo" src="{{ imageUrl }}" />\n    <div id="ex4" float-right>\n      <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf="localdataSync.anyChange"\n        data-count="!">\n        <ion-icon class="refresh-icon" name="md-sync"></ion-icon>\n      </span>\n      <ion-icon class="refresh-icon1" name="md-sync" *ngIf="!localdataSync.anyChange"></ion-icon>\n    </div>\n    <ion-buttons end style="display: flex !important;">\n      <button ion-button (click)="gotoNotification()">\n        <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n  <form class="login-form auth-form" [formGroup]="form">\n    <ion-item>\n      <ion-label stacked class="textLabel">{{\n        "Voter Id" | translate\n      }}</ion-label>\n      <ion-input type="text" (ionChange)="validateInput(form)" formControlName="voterId"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="isPrefered">\n      <ion-label stacked class="textLabel">{{\n        "Ward Number" | translate\n      }}</ion-label>\n      <ion-input type="text" [disabled]="isPrefered" [value]="ward.no"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!isPrefered">\n      <ion-label stacked class="textLabel">{{ "Ward Number" | translate }}\n        <span class="cla-imp">*</span></ion-label>\n      <ionic-selectable item-content [ngModelOptions]="{ standalone: true }" [(ngModel)]="ward" [items]="wardList"\n        itemValueField="id" itemTextField="no" [canSearch]="true" (onChange)="wardChange($event)">\n        <ng-template ionicSelectableValueTemplate let-port="value">\n          {{ port.no }}\n        </ng-template>\n      </ionic-selectable>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked class="textLabel">{{ "Booth Number" | translate }}\n      </ion-label>\n      <ionic-selectable item-content formControlName="booth" [items]="boothList" itemValueField="id" itemTextField="no"\n        [canSearch]="true" [(ngModel)]="selectedBooth" (onChange)="portChange($event)">\n        <ng-template ionicSelectableValueTemplate let-port="value">\n          {{ port.no }}\n        </ng-template>\n      </ionic-selectable>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked class="textLabel">{{\n        "Serial Number" | translate\n      }}</ion-label>\n      <ion-input type="tel" (ionChange)="validateInput(form)" formControlName="srno"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked class="textLabel">{{\n        "First Name" | translate\n      }}</ion-label>\n      <ion-input type="text" (ionChange)="validateInput(form)" formControlName="firstname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked class="textLabel">{{\n        "Family Name" | translate\n      }}</ion-label>\n      <ion-input type="text" (ionChange)="validateInput(form)" formControlName="familyname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked class="textLabel">{{\n        "Address" | translate\n      }}</ion-label>\n      <ion-input type="text" (ionChange)="validateInput(form)" formControlName="address"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="this.network.type != \'none\'">\n      <ion-label stacked class="textLabel">{{\n        "Distance(in Km)" | translate\n      }}</ion-label>\n      <ion-input type="tel" (ionChange)="validateInput(form)" formControlName="distance"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked class="textLabel">{{\n        "Status" | translate\n      }}</ion-label>\n      <ion-select (ionChange)="validateInput(form)" class="selectfrom" interface="popover"\n        formControlName="respondedStatus">\n        <ion-option value="responded">Responded</ion-option>\n        <ion-option value="not at home">Not at home</ion-option>\n        <ion-option value="call back">Call back</ion-option>\n        <ion-option value="refused">Refused</ion-option>\n        <ion-option value="not visited">Not Visited</ion-option>\n        <ion-option value="none">None</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button block class="auth-action-button login-button" (click)="postSearch()"\n      [disabled]="!isValidSearchForm" type="submit">\n      {{ "Submit" | translate }}\n    </button>\n  </form>\n</ion-content>\n<ion-footer>\n  <p class="footer" *ngIf="descText != undefined">\n    &copy;{{ descText.footer }}\n    <a href="http://smartneta.com/privacy-policy/"><u class="privacy">Privacy Policy</u></a>\n  </p>\n</ion-footer>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/search-voters/search-voters.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_citizen__["a" /* MyCitizenDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ward__["a" /* WardProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_localdatasync_service__["a" /* LocaldataSync */],
            __WEBPACK_IMPORTED_MODULE_5__providers_booth__["a" /* BoothProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_11__providers_checknetwork__["a" /* MyNetwork */]])
    ], SearchVotersPage);
    return SearchVotersPage;
}());

//# sourceMappingURL=search-voters.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connectivity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Network } from '@ionic-native/network';

/*
  Generated class for the ConnectivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Connectivity = (function () {
    function Connectivity(platform) {
        this.platform = platform;
        this.onDevice = this.platform.is('cordova');
    }
    Connectivity = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */]])
    ], Connectivity);
    return Connectivity;
}());

//# sourceMappingURL=connectivity-service.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 226;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaldataSync; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__citizen__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaint__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey_answers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocaldataSync = (function () {
    function LocaldataSync(myCitizenDatabase, myComplaintDatabase, mySurveyAnswerDatabase, commonService, loadingCtrl, toastCtrl) {
        this.myCitizenDatabase = myCitizenDatabase;
        this.myComplaintDatabase = myComplaintDatabase;
        this.mySurveyAnswerDatabase = mySurveyAnswerDatabase;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.anyChange = false;
        this.syncSatusCitizen = false;
        this.syncSatusAnswer = false;
        this.syncSatusComplaints = false;
    }
    LocaldataSync.prototype.checkDataTosync = function () {
        if (localStorage.getItem('unsynched_data') == 'true') {
            this.anyChange = true;
        }
        else {
            this.anyChange = false;
        }
    };
    LocaldataSync.prototype.checkStatus = function () {
        if (this.syncSatusAnswer && this.syncCitizen && this.syncComplaints) {
            localStorage.setItem('unsynched_data', null);
            this.checkDataTosync();
        }
    };
    LocaldataSync.prototype.syncCitizen = function () {
        var _this = this;
        this.stateName = localStorage.getItem('stateName');
        this.wardNo = localStorage.getItem('wardNo');
        this.assemblyNo = localStorage.getItem('assemblyNo');
        this.unsynched_data = localStorage.getItem('unsynched_data');
        this.last_synch_date = localStorage.getItem('last_synch_date');
        return new Promise(function (resolve, reject) {
            _this.loading = _this.loadingCtrl.create({
                content: "Citizen Syncing...",
            });
            _this.loading.present().then(function () {
                _this.myCitizenDatabase.getDataToSync().then(function (res) {
                    _this.commonService.getCitizens(_this.stateName, _this.assemblyNo, _this.wardNo, _this.last_synch_date, -1, res).subscribe(function (res) {
                        _this.myCitizenDatabase.addUser(res).then(function (response) {
                            _this.loading.dismissAll();
                            _this.presentToast("Citizen Synced");
                            _this.syncSatusCitizen = true;
                            _this.checkStatus();
                            resolve(response);
                        }).catch(function (e) {
                            resolve(e);
                            _this.loading.dismissAll();
                            _this.presentToast("Citizen Syning failed");
                            resolve(e);
                        });
                    }, function (err) {
                        _this.loading.dismissAll();
                        _this.presentToast("Citizen Syning failed");
                        resolve(err);
                    });
                }).catch(function (ex) {
                    _this.loading.dismissAll();
                    _this.presentToast("Citizen Syning failed");
                    resolve(ex);
                });
            });
        });
    };
    LocaldataSync.prototype.syncComplaints = function () {
        var _this = this;
        this.stateName = localStorage.getItem('stateName');
        this.wardNo = localStorage.getItem('wardNo');
        this.assemblyNo = localStorage.getItem('assemblyNo');
        this.unsynched_data = localStorage.getItem('unsynched_data');
        this.last_synch_date = localStorage.getItem('last_synch_date');
        return new Promise(function (resolve, reject) {
            _this.loading = _this.loadingCtrl.create({
                content: "Complaints Syncing...",
            });
            _this.loading.present().then(function () {
                _this.myComplaintDatabase.getDataToSync().then(function (data) {
                    _this.commonService.AddNewVoter(data).subscribe(function (res) {
                        if (res.message == "success") {
                            _this.myComplaintDatabase.deleteComplaints().then(function (data) {
                                _this.presentToast("Complaints Synced");
                                _this.loading.dismissAll();
                                console.log("Enter");
                                _this.syncSatusComplaints = false;
                                _this.checkStatus();
                                resolve(res);
                            }).catch(function (e) {
                                _this.loading.dismissAll();
                                _this.presentToast("Complaints Syning failed");
                                resolve(e);
                            });
                        }
                        else {
                            _this.loading.dismissAll();
                            _this.presentToast("Complaints Syning failed");
                            resolve('not synced');
                        }
                    }, function (err) {
                        _this.loading.dismissAll();
                        _this.presentToast("Complaints Syning failed");
                        resolve(err);
                    });
                }).catch(function (ex) {
                    _this.loading.dismissAll();
                    _this.presentToast("Complaints Syning failed");
                    resolve(ex);
                });
            });
        });
    };
    LocaldataSync.prototype.syncSurveyAns = function () {
        var _this = this;
        this.stateName = localStorage.getItem('stateName');
        this.wardNo = localStorage.getItem('wardNo');
        this.assemblyNo = localStorage.getItem('assemblyNo');
        this.unsynched_data = localStorage.getItem('unsynched_data');
        this.last_synch_date = localStorage.getItem('last_synch_date');
        return new Promise(function (resolve, reject) {
            _this.loading = _this.loadingCtrl.create({
                content: "Survey Answer Syncing...",
            });
            _this.loading.present().then(function () {
                _this.mySurveyAnswerDatabase.getDataToSync().then(function (data) {
                    _this.commonService.postsurvey(data).subscribe(function (res) {
                        if (res.message == "success") {
                            _this.mySurveyAnswerDatabase.deleteAnswers().then(function (data) {
                                _this.loading.dismissAll();
                                _this.presentToast("Survey Answer Synced");
                                _this.syncSatusAnswer = true;
                                _this.checkStatus();
                                resolve(res);
                            }).catch(function (e) {
                                _this.loading.dismissAll();
                                _this.presentToast("Survey Answer Syning failed");
                                resolve(e);
                            });
                        }
                        else {
                            _this.loading.dismissAll();
                            _this.presentToast("Survey Answer Syning failed");
                            resolve('not synced');
                        }
                    }, function (err) {
                        console.log("err", err.error);
                        resolve(err);
                        _this.loading.dismissAll();
                        _this.presentToast("Survey Answer Syning failed");
                    });
                }).catch(function (ex) {
                    _this.loading.dismissAll();
                    _this.presentToast("Survey Answer Syning failed");
                    resolve(ex);
                });
            });
        });
    };
    LocaldataSync.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    LocaldataSync = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__citizen__["a" /* MyCitizenDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__complaint__["a" /* MyComplaintDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__survey_answers__["a" /* MySurveyAnswerDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* ToastController */]])
    ], LocaldataSync);
    return LocaldataSync;
}());

//# sourceMappingURL=localdatasync.service.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsPage = (function () {
    function NotificationsPage(nav, loadingCtrl, commonService, toastCtrl, translate) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.commonService = commonService;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        this.loading = this.loadingCtrl.create({
            content: this.translate.instant('please wait')
        });
        this.constituencyId = localStorage.getItem('constituencyId');
        this.getAllText();
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        this.getNotifications();
    };
    NotificationsPage.prototype.getNotifications = function () {
        var _this = this;
        this.loading.present();
        this.commonService.getNotificationByAssembly(this.constituencyId).subscribe(function (res) {
            _this.notifications = res;
            _this.notificationsCount = res.length;
            _this.loading.dismiss();
        }, function (err) {
            console.log("err", err);
            _this.loading.dismiss();
        });
    };
    NotificationsPage.prototype.markAsReadNotification = function (notificationId) {
        var _this = this;
        var data = {
            "notificatoinId": notificationId,
            "citizenId": this.citizenId
        };
        this.commonService.markAsReadNotification(data).subscribe(function (res) {
            _this.presentToast(_this.translate.instant('Mark as read'));
            _this.getNotifications();
        }, function (err) {
            console.log("err", err);
        });
    };
    NotificationsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NotificationsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
            _this.getNotifications();
            _this.getAllText();
            refresher.complete();
        }, 2000);
    };
    NotificationsPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'notifications-page',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/notifications/notifications.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <img class="logo" src="{{imageUrl}}">\n        <button ion-button menuToggle>\n            <ion-icon class="menu_icon" name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div class="buttons">\n        <h2 class="head">{{\'Notifications\' | translate}}</h2>\n        <ion-row class="space" *ngFor="let c of notifications">\n            <ion-col class="schedule-data1 shadow">\n                <div class="data-item">\n                    <div class="title">{{\'Notification\' | translate}}:{{c.header}}</div>\n                    <div>{{\'Notification date\' | translate}}:{{c.createdDate | date: \'dd/MM/yy\'}}</div>\n                    <div>{{c.body}}</div>\n                    <div><a href={{c.webLink}}>{{c.webLink}}</a></div>\n                    <!-- <ion-icon class="check_icon" name="checkmark-circle" (click)="markAsReadNotification(c.id)"></ion-icon> -->\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="notificationsCount == 0">\n            <ion-col class="schedule-data1 shadow" style="text-align: center;">\n                <div class="title">{{\'notifications not found.\' | translate}}</div>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otp_otp__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, commonService, menu, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.statelist = [];
        this.constituencylist = [];
        this.parliamentarylist = [];
        this.wardlist = [];
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        this.login = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            state: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            constituency: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            parliamentary: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.showState();
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    LoginPage.prototype.showState = function () {
        var _this = this;
        ;
        this.commonService.getState().subscribe(function (res) {
            _this.statelist = res.states;
        }, function (error) {
            console.log('Something went wrong in State');
        });
    };
    LoginPage.prototype.showConstituency = function (id) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: ""
        });
        this.loading.present();
        this.commonService.getConstituencys(id).subscribe(function (res) {
            _this.loading.dismissAll();
            _this.constituencylist = res.assemblyConstituencys;
        }, function (error) {
            _this.loading.dismissAll();
            console.log("Something went wrong in State");
        });
    };
    LoginPage.prototype.showParliamentary = function (id) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: ""
        });
        this.loading.present();
        this.commonService.getParliamentary(id).subscribe(function (res) {
            _this.loading.dismissAll();
            _this.parliamentarylist = res.parliamentaryConstituencys;
        }, function (error) {
            _this.loading.dismissAll();
            console.log("Something went wrong in State");
        });
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var data = {};
        data["mobile"] = this.login.value.mobile;
        data["assemblyConstituencyId"] = this.login.value.constituency;
        this.loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loading.present();
        this.commonService.generateOTP(data).subscribe(function (resp) {
            _this.res = resp;
            _this.loading.dismissAll();
            if (_this.res.msg == "success") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__otp_otp__["a" /* OtpPage */], {
                    mobile: _this.login.value.mobile,
                    stateId: _this.login.value.state,
                    constituencyId: _this.login.value.constituency
                });
            }
            else {
                _this.presentToast(_this.res.msg);
            }
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast(err.statusText);
            console.log("err", err);
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: "bottom",
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "login-page",template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/login/login.html"*/'<ion-header class="login-header auth-header">\n  <ion-navbar>\n    <ion-title style="color: black">Sign in</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n  <ion-row>\n    <ion-col class="bjplogo">\n      <img class="logo1" src="{{imageUrl}}">\n    </ion-col>\n  </ion-row>\n  <form class="login-form auth-form" [formGroup]="login" (ngSubmit)="doLogin(login.value)">\n    <ion-item>\n      <ion-label stacked class="textLabel">State</ion-label>\n      <ion-select [(ngModel)]="stateId" class="selectfrom" (ionChange)="showParliamentary(stateId)" interface="popover"\n        formControlName="state">\n        <ion-option *ngFor="let item of statelist; let i=index" value="{{item.id}}">{{item.state}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked class="textLabel">Parliamentary Constituency</ion-label>\n      <ion-select [(ngModel)]="parliamentaryId" class="selectfrom" (ionChange)="showConstituency(parliamentaryId)"\n        interface="popover" formControlName="parliamentary">\n        <ion-option *ngFor="let item of parliamentarylist; let i=index" value="{{item.id}}">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked class="textLabel">Assembly Constituency</ion-label>\n      <ion-select [(ngModel)]="constituencyId" class="selectfrom" interface="popover" formControlName="constituency">\n        <ion-option *ngFor="let item of constituencylist; let i=index" value="{{item.id}}">{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked class="textLabel">Your Mobile no.</ion-label>\n      <ion-input type="tel" formControlName="mobile" minlength="10" maxlength="10"></ion-input>\n    </ion-item>\n    <button ion-button block class="auth-action-button login-button" type="submit" [disabled]="!login.valid">Submit</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sync_sync__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_voters_search_voters__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OtpPage = (function () {
    function OtpPage(navCtrl, navParams, alertCtrl, loadingCtrl, toastCtrl, commonService, androidPermissions, platform, network, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.androidPermissions = androidPermissions;
        this.platform = platform;
        this.network = network;
        this.menu = menu;
        this.allowedToCreateUser = true;
        this.allowedToUpdateUser = true;
        this.unsynched_data = null;
        this.last_synch_date = -1;
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        this.mobile = this.navParams.get('mobile');
        this.stateId = this.navParams.get('stateId');
        this.constituencyId = this.navParams.get('constituencyId');
        localStorage.setItem('last_synch_date', this.last_synch_date);
        localStorage.setItem('unsynched_data', this.unsynched_data);
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            otp: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
        });
        if (this.platform.is('ios')) {
            this.deviceType = "ios";
        }
        else if (this.platform.is('android')) {
            this.deviceType = "android";
        }
    }
    OtpPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    OtpPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    OtpPage.prototype.submit = function () {
        var _this = this;
        var data = {};
        data['otp'] = this.form.value.otp;
        if (data['otp'].length != 4) {
            this.presentToast('Invalid OTP');
            return false;
        }
        data['mobile'] = this.mobile;
        data['assemblyConstituencyId'] = this.constituencyId;
        data['deviceId'] = localStorage.getItem('deviceId');
        data['deviceType'] = this.deviceType;
        this.loading = this.loadingCtrl.create({
            content: "Loading...",
        });
        this.loading.present();
        this.commonService.verifyOTP(data).subscribe(function (data) {
            if (data.msg == 'success') {
                _this.res = data;
                _this.volunteerId = _this.res.volunteer.id;
                _this.statename = _this.res.volunteer.assemblyConstituency.parliamentaryConstituency.district.stateAssembly.state;
                _this.assemblyno = _this.res.volunteer.assemblyConstituency.no;
                _this.loading.dismissAll();
                localStorage.setItem('allowedToCreateUser', _this.res.volunteer.assemblyConstituency.parliamentaryConstituency.district.stateAssembly.createCitizen);
                localStorage.setItem('allowedToUpdateUser', _this.res.volunteer.assemblyConstituency.parliamentaryConstituency.district.stateAssembly.updateCitizen);
                localStorage.setItem('mobile', _this.mobile);
                localStorage.setItem('stateId', _this.stateId);
                localStorage.setItem('stateName', _this.statename);
                localStorage.setItem('constituencyId', _this.constituencyId);
                localStorage.setItem('assemblyNo', _this.assemblyno);
                localStorage.setItem('volunteerId', _this.volunteerId);
                if (localStorage.getItem('last_synch_date') === undefined) {
                    localStorage.setItem('last_synch_date', _this.last_synch_date);
                    localStorage.setItem('unsynched_data', _this.unsynched_data);
                }
                if (_this.network.type) {
                    if (localStorage.getItem('wardNo')) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* dashboardPage */]);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__sync_sync__["a" /* SyncPage */]);
                    }
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__search_voters_search_voters__["a" /* SearchVotersPage */]);
                }
            }
            else {
                _this.loading.dismissAll();
                _this.presentToast("Invalid OTP");
            }
        }, function (err) {
            console.log('err', err);
            _this.loading.dismissAll();
            _this.presentToast('Invalid OTP!!');
        });
    };
    OtpPage.prototype.ReSendOTP = function () {
        var _this = this;
        var data = {};
        this.loading = this.loadingCtrl.create({
            content: "Loading...",
        });
        this.loading.present();
        data['mobile'] = this.mobile;
        data['assemblyConstituencyId'] = this.constituencyId;
        this.commonService.generateOTP(data).subscribe(function (resp) {
            _this.res = resp;
            _this.loading.dismissAll();
            if (_this.res.msg == 'success') {
                _this.presentToast("Request for OTP initiated");
            }
            else {
                _this.presentToast(_this.res.msg);
            }
        }, function (err) {
            _this.loading.dismissAll();
            console.log('err', err);
        });
    };
    OtpPage.prototype.next = function (el) {
        el.setFocus();
    };
    OtpPage.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!inputChar) {
            return false;
        }
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    OtpPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('otp1'),
        __metadata("design:type", Object)
    ], OtpPage.prototype, "otp1", void 0);
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-otp',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/otp/otp.html"*/'<ion-header class="login-header auth-header">\n  <ion-navbar>\n    <ion-title>Verify OTP</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col class="bjplogo">\n      <img class="logo1" src="{{imageUrl}}">\n    </ion-col>\n  </ion-row>\n  <form [formGroup]="form" (ngSubmit)="submit(form.value)">\n    <ion-label stacked>Enter OTP</ion-label>\n    <ion-item class="input-border" margin-bottom no-padding>\n      <ion-input type="tel" placeholder="Enter OTP" formControlName="otp" maxlength="4" pattern="[0-9]{4}"></ion-input>\n    </ion-item>\n  \n    <button ion-button block type="submit"[disabled]="!form.valid" class="otp_btn">\n        Verify OTP\n      </button>\n  \n      <ion-row>\n        <ion-col class="btn-resend">\n          <span (click)="ReSendOTP()">Resend OTP</span>\n        </ion-col>\n      </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNetwork; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localdatasync_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyNetwork = (function () {
    function MyNetwork(network, loadingCtrl, toastCtrl, alertCtrl, localdataSync) {
        var _this = this;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.localdataSync = localdataSync;
        this.online = true;
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.presentToast('You are now offline!!!');
            _this.online = false;
        });
        var connectSubscription = this.network.onConnect().subscribe(function () {
            _this.presentToast('You are now online!!!');
            _this.online = true;
        });
    }
    MyNetwork.prototype.checkNetworkConnection = function () {
        var _this = this;
        if (this.network.type == "none") {
            this.presentToast('No Internet Connection');
        }
        else if (this.network.type == "2g") {
            var alert_1 = this.alertCtrl.create({
                title: 'warning',
                message: 'Slow Internet Connection',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            ;
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            _this.localdataSync.syncComplaints().then(function (res) {
                            }).catch(function (e) {
                                console.log(e);
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.localdataSync.syncComplaints().then(function (res) {
            }).catch(function (e) {
                console.log(e);
            });
            this.localdataSync.syncSurveyAns().then(function (res) {
                console.log(res);
            }).catch(function (e) {
                console.log(e);
            });
            this.localdataSync.syncCitizen().then(function (res) {
                console.log(res);
            }).catch(function (e) {
                console.log(e);
            });
        }
    };
    MyNetwork.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    MyNetwork = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__localdatasync_service__["a" /* LocaldataSync */]])
    ], MyNetwork);
    return MyNetwork;
}());

//# sourceMappingURL=checknetwork.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchVotersResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_voters_edit_search_voters_edit__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_voters_view_location_search_voters_view_location__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_new_voters_add_new_voters__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select_action_select_action__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_localdatasync_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__complaints_complaints__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__citizen_details_citizen_details__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SearchVotersResultPage = (function () {
    function SearchVotersResultPage(navCtrl, loadingCtrl, navParams, localdataSync, commonService, translate, modalCtrl, network, MyNetwork) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.localdataSync = localdataSync;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.network = network;
        this.MyNetwork = MyNetwork;
        this.searchlist = [];
        this.searchlistFinal = [];
        this.boothName = '';
        this.offset = 0;
        this.limit = 50;
        this.createUser = "true";
        this.updateUser = "true";
        this.imageUrl = "";
        this.getAllText();
        this.translate.use(localStorage.getItem('language'));
        this.searchlist = this.navParams.get('searchlist');
        this.offset = 0;
        this.searchlistFinal = [];
        for (var index = 0; index < this.limit; index++) {
            if (this.searchlist[index]) {
                this.searchlistFinal.push(this.searchlist[index]);
                this.offset = this.offset + 1;
            }
        }
        this.boothName = this.navParams.get('boothName');
        this.noRecords = this.searchlist.length;
        if (localStorage.getItem("allowedToCreateUser")) {
            this.createUser = localStorage.getItem("allowedToCreateUser");
            this.updateUser = localStorage.getItem("allowedToUpdateUser");
        }
    }
    SearchVotersResultPage.prototype.ionViewDidLoad = function () {
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    SearchVotersResultPage.prototype.checkNetworkConnection = function () {
        this.MyNetwork.checkNetworkConnection();
    };
    SearchVotersResultPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    SearchVotersResultPage.prototype.searchEdit = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_voters_edit_search_voters_edit__["a" /* SearchVotersEditPage */], { item: item });
    };
    SearchVotersResultPage.prototype.SearchViewLocation = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_voters_view_location_search_voters_view_location__["a" /* SearchVotersViewLocationPage */], { item: item });
    };
    SearchVotersResultPage.prototype.ShowAddNewVotersPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__add_new_voters_add_new_voters__["a" /* AddNewVotersPage */]);
    };
    SearchVotersResultPage.prototype.ShowSelectActionPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__select_action_select_action__["a" /* SelectActionPage */], { item: item, boothName: this.boothName });
    };
    SearchVotersResultPage.prototype.showComplaintPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__complaints_complaints__["a" /* ComplaintsPage */], { citizenId: id });
    };
    SearchVotersResultPage.prototype.ShowMoreDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__citizen_details_citizen_details__["a" /* CitizenDetailsPage */], { citizenId: id });
    };
    SearchVotersResultPage.prototype.gotoNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */]);
    };
    SearchVotersResultPage.prototype.loadMore = function (infiniteScroll) {
        for (var index = 0; index < this.limit; index++) {
            if (this.searchlist[this.offset]) {
                this.searchlistFinal.push(this.searchlist[this.offset]);
                this.offset = this.offset + 1;
            }
        }
        infiniteScroll.complete();
    };
    SearchVotersResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'search-voters-result',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/search-voters-result/search-voters-result.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n        <div id="ex4" float-right>\n            <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf=\'localdataSync.anyChange\'\n                data-count="!">\n                <ion-icon class="refresh-icon" name="md-sync"></ion-icon>\n            </span>\n            <ion-icon class="refresh-icon1" name="md-sync" *ngIf=\'!localdataSync.anyChange\'></ion-icon>\n        </div>\n        <ion-buttons end style="display: flex !important;">\n            <button ion-button (click)="gotoNotification()">\n                <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <ion-row>\n        <ion-col col-10>\n            <h2 class="head">{{\'Voters\' | translate}}</h2>\n        </ion-col>\n        <ion-col col-2>\n            <button *ngIf=\'createUser == "true"\' ion-button block class="auth-action-button login-button" (click)="ShowAddNewVotersPage()">{{\'Add\'| translate}}</button>\n        </ion-col>\n    </ion-row>\n    <ng-container *ngIf="noRecords != 0">\n        <div class="space" *ngFor="let item of searchlistFinal; let i=index">\n            <ion-row>\n                <ion-col class="schedule-data1 shadow">\n                    <div class="data-item" style="width: 90%;float:left;">\n                        <div (click)="ShowSelectActionPage(item)">\n                            <div>{{\'Voter Id\' | translate}}: {{item.voter_id}} </div>\n                            <div>{{\'First Name\' | translate}}: {{item.first_name}}</div>\n                            <div>{{\'Family Name\' | translate}}: {{item.family_name}}</div>\n                            <div>{{\'Gender\' | translate}}: {{item.gender}}</div>\n                            <div>{{\'Age\' | translate}}: {{item.age}}</div>\n                            <div>{{\'Address\' | translate}}: {{item.address}}</div>\n                            <div>{{\'Serial Number\' | translate}}: {{item.srno}}</div>\n                            <div>{{\'Booth Number\' | translate}}: {{item.booth_no}}</div>\n                            <div>{{\'Polling Booth\' | translate}}: {{boothName}}</div>\n                            <div>{{\'Status\' | translate}}: <span style=\'color: green; text-transform: capitalize\' *ngIf="item.responded_status == \'responded\'">\n                                    {{item.responded_status}}</span> <span *ngIf="item.responded_status == \'null\'">\n                                    None</span><span style=\'text-transform: capitalize\' *ngIf="item.responded_status != \'responded\' && item.responded_status != \'null\'">\n                                    {{item.responded_status}}</span>\n                            </div>\n                        </div>\n                        <div style="display : none;">\n                            <button ion-button class="auth-action-button login-button" (click)="showComplaintPage(item.id)">Complaints</button>\n                            <button ion-button class="auth-action-button login-button" (click)="ShowMoreDetailPage(item.id)">More Details</button>\n                        </div>\n                    </div>\n                    <div style="width: 10%; float: right;">\n                        <ion-icon  *ngIf=\'updateUser == "true"\' name="create" (click)="searchEdit(item)" class="edit-icon"></ion-icon>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n        <ion-infinite-scroll (ionInfinite)="loadMore($event)" loadingSpinner="bubbles" loadingText="Loading Users...">\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </ng-container>\n    <ion-row class="space" *ngIf="noRecords == 0">\n        <ion-col class="schedule-data1 shadow">\n            <div class="data-item">\n                <div class="title1">{{\'No records found\' | translate}}</div>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-content>\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/search-voters-result/search-voters-result.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_11__providers_localdatasync_service__["a" /* LocaldataSync */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_10__providers_checknetwork__["a" /* MyNetwork */]])
    ], SearchVotersResultPage);
    return SearchVotersResultPage;
}());

//# sourceMappingURL=search-voters-result.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchVotersEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_complaint__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_localdatasync_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchVotersEditPage = (function () {
    function SearchVotersEditPage(navCtrl, loadingCtrl, navParams, commonService, translate, modalCtrl, events, localdataSync, network, toastCtrl, myComplaintDatabase) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.localdataSync = localdataSync;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.myComplaintDatabase = myComplaintDatabase;
        this.imageUrl = "";
        this.getAllText();
        this.translate.use(localStorage.getItem('language'));
        this.stateId = localStorage.getItem('stateId');
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            voterId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            familyname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            pollingstation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('')
        });
        this.item = this.navParams.get('item');
        this.form.setValue({
            voterId: this.item.voter_id,
            familyname: this.item.family_name,
            firstname: this.item.first_name,
            gender: this.item.gender,
            age: this.item.age,
            pollingstation: this.item.booth_no,
            address: this.item.address
        });
    }
    SearchVotersEditPage.prototype.ionViewDidLoad = function () {
        this.myComplaintDatabase.connectToDb();
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    SearchVotersEditPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SearchVotersEditPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    SearchVotersEditPage.prototype.EditSearchVoters = function () {
        var _this = this;
        var data = {};
        data['complaint'] = "family:" + this.form.value.familyname + ";\n    firstName:" + this.form.value.firstname + ";\n    gender:" + this.form.value.gender + ";\n    age:" + this.form.value.age + ";\n    pollingstation:" + this.form.value.pollingstation + ";\n    address:" + this.form.value.address + ";";
        data['name'] = "update voter";
        data['compliantSource'] = "Volunteer";
        data['stateAssembly'] = { id: this.stateId };
        data['citizen'] = this.item;
        this.loading = this.loadingCtrl.create({
            content: '',
        });
        this.loading.present();
        this.myComplaintDatabase.upateUser(data).then(function (res) {
            _this.loading.dismissAll();
            localStorage.setItem('unsynched_data', 'true');
            _this.localdataSync.checkDataTosync();
            _this.presentToast("Updated successfully");
            _this.navCtrl.pop();
        }).catch(function (err) {
            _this.loading.dismissAll();
        });
    };
    SearchVotersEditPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    SearchVotersEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'search-voters-edit',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/search-voters-edit/search-voters-edit.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <form class="login-form auth-form" [formGroup]="form">\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Voter Id\' | translate}}</ion-label>\n            <ion-input type="text"  formControlName="voterId" disabled></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'First Name\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="firstname" disabled></ion-input>\n        </ion-item>\n        <ion-item>\n                <ion-label stacked class="textLabel">{{\'Family Name\' | translate}}</ion-label>\n                <ion-input type="text" formControlName="familyname" disabled></ion-input>\n            </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Gender\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="gender" disabled></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Booth Number\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="pollingstation" disabled></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Age\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="age"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Address\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="address"></ion-input>\n        </ion-item>\n\n        <ion-row>\n            <ion-col col-6>\n                    <button ion-button block class="auth-action-button login-button" (click)="EditSearchVoters()" type="submit" [disabled]="!form.valid">{{\'Submit\' | translate}}</button>\n            </ion-col>\n            <ion-col col-6>\n                    <button ion-button block class="auth-action-button login-button" color="secondary" (click)="back()" type="submit">{{\'Cancel\' | translate}}</button>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>\n<ion-footer>\n        <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u class="privacy">Privacy Policy</u></a></p>\n    </ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/search-voters-edit/search-voters-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_7__providers_localdatasync_service__["a" /* LocaldataSync */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_complaint__["a" /* MyComplaintDatabase */]])
    ], SearchVotersEditPage);
    return SearchVotersEditPage;
}());

//# sourceMappingURL=search-voters-edit.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchVotersViewLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchVotersViewLocationPage = (function () {
    function SearchVotersViewLocationPage(navCtrl, loadingCtrl, navParams, commonService, translate, modalCtrl, events, network) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.network = network;
        this.SearchNearBy = [];
        this.imageUrl = "";
        this.getAllText();
        this.translate.use(localStorage.getItem('language'));
        this.item = this.navParams.get('item');
        this.srno = this.item.srno;
    }
    SearchVotersViewLocationPage.prototype.ionViewDidLoad = function () {
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    SearchVotersViewLocationPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    SearchVotersViewLocationPage.prototype.showSearchNearBy = function () {
        var _this = this;
        this.commonService.getSearchNearByVoters(this.srno).subscribe(function (res) {
            _this.SearchNearBy = res.data;
            _this.noRecords = _this.SearchNearBy.length;
        }, function (err) {
            console.log("err", err);
        });
    };
    SearchVotersViewLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'search-voters-view-location',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/search-voters-view-location/search-voters-view-location.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <div class="buttons">\n        <h2 class="head">{{\'Voters\' | translate}}</h2>\n    </div>\n    <ion-row class="space" *ngIf="item">\n        <ion-col class="schedule-data1 shadow">\n            <div class="data-item">\n                <div>{{\'Voter Id\' | translate}}:{{item.voterId}}</div>\n                <div>{{\'First name\' | translate}}:{{item.firstName}}</div>\n                <div>{{\'Family name\' | translate}}:{{item.familyName}}</div>\n                <div>{{\'Gender\' | translate}}:{{item.gender}}</div>\n                <div>{{\'Age\' | translate}}:{{item.age}}</div>\n                <div>{{\'Polling station\' | translate}}:{{item.booth.address}}</div>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <button ion-button block (click)="showSearchNearBy()" class="auth-action-button login-button">\n        {{\'Voters in location\' | translate}}\n    </button>\n\n    <ng-container *ngIf="noRecords != 0">\n        <ion-row class="space" *ngFor="let item of SearchNearBy; let i=index">\n            <ion-col class="schedule-data1 shadow">\n                <div class="data-item">\n                    <div>{{\'Voter Id\' | translate}}:{{item.voterId}}</div>\n                    <div>{{\'First name\' | translate}}:{{item.firstName}}</div>\n                    <div>{{\'Family name\' | translate}}:{{item.familyName}}</div>\n                    <div>{{\'Gender\' | translate}}:{{item.gender}}</div>\n                    <div>{{\'Age\' | translate}}:{{item.age}}</div>\n                    <div>{{\'Polling station\' | translate}}:{{item.booth.address}}</div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ng-container>\n    \n    <ion-row class="space" *ngIf="noRecords == 0">\n        <ion-col class="schedule-data1 shadow">\n            <div class="data-item">\n                <div class="title1">{{\'No records found\' | translate}}</div>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-content>\n<ion-footer>\n        <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u class="privacy">Privacy Policy</u></a></p>\n    </ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/search-voters-view-location/search-voters-view-location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], SearchVotersViewLocationPage);
    return SearchVotersViewLocationPage;
}());

//# sourceMappingURL=search-voters-view-location.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewVotersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_booth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_complaint__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_localdatasync_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddNewVotersPage = (function () {
    function AddNewVotersPage(navCtrl, loadingCtrl, navParams, commonService, translate, modalCtrl, events, toastCtrl, boothProvider, myComplaintDatabase, network, MyNetwork, localdataSync) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.boothProvider = boothProvider;
        this.myComplaintDatabase = myComplaintDatabase;
        this.network = network;
        this.MyNetwork = MyNetwork;
        this.localdataSync = localdataSync;
        this.bootlist = [];
        this.imageUrl = "";
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
        this.getAllText();
        this.translate.use(localStorage.getItem('language'));
        this.stateId = localStorage.getItem('stateId');
        this.wardNo = localStorage.getItem('wardNo');
        this.showBooth();
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            voterid: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            familyname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            pollingstation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('')
        });
    }
    AddNewVotersPage.prototype.ionViewDidLoad = function () {
        this.myComplaintDatabase.connectToDb();
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    AddNewVotersPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AddNewVotersPage.prototype.checkNetworkConnection = function () {
        this.MyNetwork.checkNetworkConnection();
    };
    AddNewVotersPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    AddNewVotersPage.prototype.showBooth = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '',
        });
        this.loading.present();
        this.boothProvider.getAllBooths(this.wardNo).then(function (data) {
            _this.bootlist = data;
            _this.loading.dismissAll();
        }).catch(function (err) {
            console.log(err);
            _this.loading.dismissAll();
        });
    };
    AddNewVotersPage.prototype.addNewVoters = function () {
        var _this = this;
        var data = {};
        data['complaint'] = "voterId:" + this.form.value.voterid + ";\n    family:" + this.form.value.familyname + ";\n    firstName:" + this.form.value.firstname + ";\n    gender:" + this.form.value.gender + ";\n    age:" + this.form.value.age + ";\n    pollingstation:" + this.form.value.pollingstation + ";\n    address:" + this.form.value.address + ";";
        data['name'] = "create voter";
        data['compliantSource'] = "Volunteer";
        data['stateAssembly'] = { id: this.stateId };
        data['voterId'] = this.form.value.voterid;
        this.loading = this.loadingCtrl.create({
            content: '',
        });
        this.loading.present();
        this.myComplaintDatabase.addUser(data).then(function (res) {
            _this.loading.dismissAll();
            _this.presentToast("Add successfully");
            localStorage.setItem('unsynched_data', 'true');
            _this.localdataSync.checkDataTosync();
            _this.navCtrl.pop();
        }).catch(function (err) {
            _this.loading.dismissAll();
        });
    };
    AddNewVotersPage.prototype.gotoNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
    };
    AddNewVotersPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    AddNewVotersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-new-voters',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/add-new-voters/add-new-voters.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n        <div id="ex4" float-right>\n            <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf=\'localdataSync.anyChange\' data-count="!">\n                <ion-icon class="refresh-icon" name="md-sync" ></ion-icon>\n            </span>\n            <ion-icon class="refresh-icon1" name="md-sync"  *ngIf=\'!localdataSync.anyChange\'></ion-icon>\n        </div>\n        <ion-buttons end style="display: flex !important;">\n            <button ion-button (click)="gotoNotification()">\n                <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <form class="login-form auth-form" [formGroup]="form">\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Voter Id\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="voterid"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'First Name\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="firstname"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Family Name\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="familyname"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Gender\' | translate}}</ion-label>\n            <ion-select interface="popover" formControlName="gender">\n                <ion-option value="male">Male</ion-option>\n                <ion-option value="female">Female</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Age\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="age"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Booth Number\' | translate}}</ion-label>\n            <ion-select class="selectfrom" interface="popover" formControlName="pollingstation">\n                <ion-option *ngFor="let item of bootlist; let i=index" value="{{item.id}}">{{item.name}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked class="textLabel">{{\'Address\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="address"></ion-input>\n        </ion-item>\n\n        <ion-row>\n            <ion-col col-6>\n                <button ion-button block class="auth-action-button login-button" (click)="addNewVoters()" type="submit"\n                    [disabled]="!form.valid">{{\'Submit\' | translate}}</button>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button block class="auth-action-button login-button" color="secondary" (click)="back()">{{\'Cancel\'\n                    | translate}}</button>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/add-new-voters/add-new-voters.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_booth__["a" /* BoothProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_complaint__["a" /* MyComplaintDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_9__providers_checknetwork__["a" /* MyNetwork */],
            __WEBPACK_IMPORTED_MODULE_10__providers_localdatasync_service__["a" /* LocaldataSync */]])
    ], AddNewVotersPage);
    return AddNewVotersPage;
}());

//# sourceMappingURL=add-new-voters.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectActionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey_question_survey_question__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_citizen__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_localdatasync_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__printer_list_modal_printer_list_modal__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_print__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__other_information_other_information__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__registered_complaints_page_registered_complaints_page__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var SelectActionPage = (function () {
    function SelectActionPage(navCtrl, loadingCtrl, navParams, toastCtrl, commonService, translate, modalCtrl, events, printProvider, alertCtrl, geolocation, localdataSync, socialSharing, myCitizenDatabase, network, MyNetwork) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.printProvider = printProvider;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.localdataSync = localdataSync;
        this.socialSharing = socialSharing;
        this.myCitizenDatabase = myCitizenDatabase;
        this.network = network;
        this.MyNetwork = MyNetwork;
        this.partylist = [];
        this.text = "hello";
        this.selectedPrinter = [];
        this.actionList = [
            { action: "mobile", label: "Mobile #" },
            { action: "segmentation", label: "A+/A/B/C" },
            { action: "partypreference", label: "Party Preference" },
            { action: "survey", label: "Survey" },
            { action: "markasVoted", label: "Mark as Voted" },
            { action: "print", label: "Print" },
            { action: "share", label: "Share" },
            { action: "status", label: "Update Status" },
            { action: "otherInformation", label: "Other Information" },
            { action: "registeredComplaints", label: "Register complaints" }
        ];
        this.statuslist = [
            { name: "Not at Home", value: "not at home" },
            { name: "Call Back", value: "call back" },
            { name: "Refused", value: "refused" }
        ];
        this.segmentationlist = [
            { label: "A+", segmentation: "A+" },
            { label: "A", segmentation: "A" },
            { label: "B", segmentation: "B" },
            { label: "C", segmentation: "C" }
        ];
        this.sharelist = [
            { name: "SMS", value: "sms" },
            { name: "Whatsapp", value: "whatsapp" }
        ];
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        this.getAllText();
        this.translate.use(localStorage.getItem("language"));
        if (localStorage.getItem("actions")) {
            this.actionList = [];
            this.actionList = JSON.parse(localStorage.getItem("actions"));
        }
        if (localStorage.getItem("segmentations")) {
            this.segmentationlist = [];
            this.segmentationlist = JSON.parse(localStorage.getItem("segmentations"));
        }
        this.language = localStorage.getItem("language");
        this.item = this.navParams.get("item");
        this.boothName = this.navParams.get("boothName");
        this.citizenId = this.item.id;
        this.wardNo = localStorage.getItem("wardNo");
        this.voted = this.item.voted;
        if (this.voted == true) {
            this.text = "Voted";
        }
        else {
            this.text = "Mark as Voted";
        }
        this.showPartys();
        this.online = this.MyNetwork.online;
    }
    SelectActionPage.prototype.ionViewDidLoad = function () {
        this.setLocation();
        if (this.network.type == "none") {
            this.imageUrl = "assets/images/Smartneta/smart_neta_logo.png";
        }
        else {
            this.imageUrl =
                "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    SelectActionPage.prototype.checkNetworkConnection = function () {
        this.MyNetwork.checkNetworkConnection();
    };
    SelectActionPage.prototype.actionFun = function (value) {
        switch (value) {
            case "mobile":
                this.presentMobile();
                break;
            case "segmentation":
                this.UpdateSegmentation();
                break;
            case "partypreference":
                this.presentParty();
                break;
            case "survey":
                this.ShowSurveyQuestionPage();
                break;
            case "markasVoted":
                this.postMarkasVoted();
                break;
            case "print":
                this.listBTDevice();
                break;
            case "share":
                this.openShareOptions();
                break;
            case "status":
                this.UpdateStatus();
                break;
            case "otherInformation":
                this.getOtherInformation();
                break;
            case "registeredComplaints":
                this.getRegisterComplaints();
                break;
        }
    };
    SelectActionPage.prototype.getOtherInformation = function () {
        if (this.MyNetwork.online == true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__other_information_other_information__["a" /* OtherInformationPage */], { item: this.item });
        }
        else {
            this.presentToast('You are now offline!!!');
        }
    };
    SelectActionPage.prototype.getRegisterComplaints = function () {
        if (this.MyNetwork.online == true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__registered_complaints_page_registered_complaints_page__["a" /* RegisteredComplaintsPage */], { item: this.item });
        }
        else {
            this.presentToast('You are now offline!!!');
        }
    };
    SelectActionPage.prototype.openShareOptions = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("Share");
        this.sharelist.forEach(function (l) {
            alert.addInput({
                type: "radio",
                label: l.name,
                value: l.value
            });
        });
        alert.addButton({
            text: "Cancel",
            role: "cancel"
        });
        alert.addButton({
            text: "Ok",
            handler: function (data) {
                if (data) {
                    if (data == "sms") {
                        _this.shareByMobile();
                    }
                    else {
                        _this.shareFun();
                    }
                }
                else {
                    _this.presentToast("Invalid input");
                }
            }
        });
        alert.present();
    };
    SelectActionPage.prototype.shareByMobile = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Send SMS",
            inputs: [
                {
                    name: "MobileNo",
                    placeholder: "Mobile no.",
                    type: "tel"
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function (data) {
                    }
                },
                {
                    text: "Share",
                    handler: function (data) {
                        if (data.MobileNo != "") {
                            if (data.MobileNo.length >= 10) {
                                _this.setLocation();
                                _this.loading = _this.loadingCtrl.create({
                                    content: ""
                                });
                                _this.loading.present();
                                _this.commonService
                                    .shareUsingMobile(_this.citizenId, data.MobileNo)
                                    .subscribe(function (res) {
                                    _this.loading.dismissAll();
                                    _this.presentToast("SMS Sent Successfully");
                                }, function (err) {
                                    console.log("err", err.error);
                                    _this.loading.dismissAll();
                                    _this.presentToast("Failed to Save");
                                });
                            }
                            else {
                                _this.presentToast("Please Enter minimum 10 Digit Number");
                            }
                        }
                        else {
                            _this.presentToast("Please Enter Mobile Number");
                        }
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    SelectActionPage.prototype.setLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.geolocation.getCurrentPosition().then(function (pos) {
                _this.latitude = pos.coords.latitude;
                _this.longitude = pos.coords.longitude;
                var data = {};
                data["longitude"] = _this.longitude;
                data["latitude"] = _this.latitude;
                _this.loading = _this.loadingCtrl.create({
                    content: ""
                });
                _this.loading.present();
                _this.myCitizenDatabase
                    .postLocation(_this.citizenId, data)
                    .then(function (res) {
                    _this.loading.dismissAll();
                })
                    .catch(function (err) {
                    console.log("err", err);
                    _this.loading.dismissAll();
                    _this.presentToast("Failed to set Location");
                });
            });
            var watch = _this.geolocation.watchPosition().subscribe(function (pos) {
            });
            watch.unsubscribe();
        });
    };
    SelectActionPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    SelectActionPage.prototype.ShowSurveyQuestionPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__survey_question_survey_question__["a" /* SurveyQuestionPage */], { item: this.item });
    };
    SelectActionPage.prototype.showPartys = function () {
        this.partylist = JSON.parse(localStorage.getItem("electionParty"));
    };
    SelectActionPage.prototype.presentMobile = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Update Mobile",
            inputs: [
                {
                    name: "MobileNo",
                    placeholder: "Mobile no.",
                    type: "tel"
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Submit",
                    handler: function (data) {
                        if (data.MobileNo != "") {
                            if (data.MobileNo.length >= 10) {
                                _this.setLocation();
                                _this.loading = _this.loadingCtrl.create({
                                    content: ""
                                });
                                _this.loading.present();
                                _this.myCitizenDatabase
                                    .postMobile(_this.citizenId, data.MobileNo)
                                    .then(function (res) {
                                    _this.loading.dismissAll();
                                    _this.presentToast("Mobile Number Updated Successfully");
                                    localStorage.setItem("unsynched_data", "true");
                                    _this.localdataSync.checkDataTosync();
                                })
                                    .catch(function (err) {
                                    console.log("err", err.error);
                                    _this.loading.dismissAll();
                                    _this.presentToast("Failed to Save");
                                });
                            }
                            else {
                                // this.presentToast("Please Enter Minimum 10 Digit Number");
                                alert.setMessage('Please Enter Minimum 10 Digit Number');
                                return false;
                            }
                        }
                        else {
                            alert.setMessage('Please Enter Mobile Number');
                            return false;
                        }
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    SelectActionPage.prototype.UpdateSegmentation = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("Voters Segment");
        this.segmentationlist.forEach(function (l) {
            alert.addInput({
                type: "radio",
                label: l.label,
                value: l.segmentation
            });
        });
        alert.addButton({
            text: "Cancel",
            role: "cancel"
        });
        alert.addButton({
            text: "Submit",
            handler: function (data) {
                if (data) {
                    _this.setLocation();
                    _this.loading = _this.loadingCtrl.create({
                        content: ""
                    });
                    _this.loading.present();
                    _this.myCitizenDatabase
                        .postSegmentation(_this.citizenId, data)
                        .then(function (res) {
                        _this.loading.dismissAll();
                        _this.presentToast("Segmentation Updated Successfully");
                        localStorage.setItem("unsynched_data", "true");
                        _this.localdataSync.checkDataTosync();
                    })
                        .catch(function (err) {
                        console.log("err", err.error);
                        _this.loading.dismissAll();
                        _this.presentToast("Failed to Save");
                    });
                }
                else {
                    _this.presentToast("Invalid input");
                }
            }
        });
        alert.present();
    };
    SelectActionPage.prototype.presentParty = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("Select Party");
        this.partylist.forEach(function (l) {
            alert.addInput({
                type: "radio",
                label: l.name,
                value: l.code
            });
        });
        alert.addButton({
            text: "Cancel",
            role: "cancel"
        });
        alert.addButton({
            text: "Submit",
            handler: function (data) {
                if (data) {
                    _this.setLocation();
                    _this.loading = _this.loadingCtrl.create({
                        content: ""
                    });
                    _this.loading.present();
                    _this.myCitizenDatabase
                        .postPartys(_this.citizenId, data)
                        .then(function (res) {
                        _this.loading.dismissAll();
                        _this.presentToast("Party Preference Updated Successfully");
                        localStorage.setItem("unsynched_data", "true");
                        _this.localdataSync.checkDataTosync();
                    })
                        .catch(function (err) {
                        console.log("err", err.error);
                        _this.loading.dismissAll();
                        _this.presentToast("Failed to Save");
                    });
                }
                else {
                    _this.presentToast("Invalid input");
                }
            }
        });
        alert.present();
    };
    SelectActionPage.prototype.UpdateStatus = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("Voters Status");
        this.statuslist.forEach(function (l) {
            alert.addInput({
                type: "radio",
                label: l.name,
                value: l.value
            });
        });
        alert.addButton({
            text: "Cancel",
            role: "cancel"
        });
        alert.addButton({
            text: "Submit",
            handler: function (data) {
                if (data) {
                    _this.loading = _this.loadingCtrl.create({
                        content: ""
                    });
                    _this.loading.present();
                    _this.myCitizenDatabase.postStatus(_this.citizenId, data)
                        .then(function (res) {
                        _this.loading.dismissAll();
                        _this.presentToast("Status Updated Successfully");
                        localStorage.setItem("unsynched_data", "true");
                        _this.localdataSync.checkDataTosync();
                    })
                        .catch(function (err) {
                        console.log("err", err.error);
                        _this.loading.dismissAll();
                        _this.presentToast("Failed to Save");
                    });
                }
                else {
                    _this.presentToast("Invalid input");
                }
            }
        });
        alert.present();
    };
    SelectActionPage.prototype.postMarkasVoted = function () {
        var _this = this;
        if (this.voted == true) {
            var alert_1 = this.alertCtrl.create({
                title: "Voted",
                message: "Volunteer already mark as voted",
                buttons: ["Ok"],
                enableBackdropDismiss: false
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "Mark as Voted",
                message: "Are you sure to mark as voted?",
                buttons: [
                    {
                        text: "No",
                        role: "cancel",
                        handler: function () {
                            console.log("Cancel clicked");
                        }
                    },
                    {
                        text: "Yes",
                        handler: function () {
                            _this.setLocation();
                            //this point you should have the proper "number" value
                            _this.loading = _this.loadingCtrl.create({
                                content: ""
                            });
                            _this.loading.present();
                            "";
                            _this.myCitizenDatabase
                                .postCitizenVoted(_this.citizenId, "true")
                                .then(function (res) {
                                _this.loading.dismissAll();
                                _this.presentToast("Segmentation Updated Successfully");
                                localStorage.setItem("unsynched_data", "true");
                                _this.localdataSync.checkDataTosync();
                            })
                                .catch(function (err) {
                                console.log("err", err.error);
                                _this.loading.dismissAll();
                                _this.presentToast("Failed to Save");
                            });
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            alert_2.present();
        }
    };
    SelectActionPage.prototype.shareFun = function () {
        // Booth name: ${boothName}
        var body = "VOTER DETAILS\n====================\nVoter Id: " + this.item.voter_id + "\nFirst Name: " + this.item.first_name + "\nFamily Name: " + this.item.family_name + "\nGender: " + this.item.gender + "\nAge: " + this.item.age + "\nSerial Number: " + this.item.srno + "\nBooth Number: " + this.item.booth_no + "\nPolling Booth: " + this.boothName + "\n====================\nPlease carry with Voter ID\n\"Vote for Bright Future\"";
        this.socialSharing
            .shareViaWhatsApp(body, this.imageUrl)
            .then(function (sucess) {
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SelectActionPage.prototype.listBTDevice = function () {
        var _this = this;
        this.printProvider.searchBt().then(function (datalist) {
            //1. Open printer select modal
            var abc = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__printer_list_modal_printer_list_modal__["a" /* PrinterListModalPage */], {
                data: datalist
            });
            //2. Printer selected, save into this.selectedPrinter
            abc.onDidDismiss(function (data) {
                if (data) {
                    _this.selectedPrinter = data;
                    var loading_1 = _this.loadingCtrl.create({
                        content: "Connecting to printer..."
                    });
                    loading_1.present();
                    setTimeout(function () {
                        loading_1.dismiss();
                        _this.testConnectPrinter();
                    }, 3000);
                }
            });
            abc.present();
        }, function (err) {
            console.log("ERROR", err);
            var mno = _this.alertCtrl.create({
                title: "ERROR 1" + err,
                buttons: ["Dismiss"]
            });
            mno.present();
        });
    };
    SelectActionPage.prototype.testConnectPrinter = function () {
        var _this = this;
        var id = this.selectedPrinter.id;
        if (id == null || id == "" || id == undefined) {
            var mno = this.alertCtrl.create({
                title: "No Printer Selected",
                buttons: ["Dismiss"]
            });
            mno.present();
        }
        else {
            var foo_1 = this.printProvider.connectBT(id).subscribe(function (data) {
                _this.printer(foo_1);
            }, function (err) {
                var mno = _this.alertCtrl.create({
                    title: "ERROR 2" + err,
                    buttons: ["Dismiss"]
                });
                mno.present();
            });
        }
    };
    SelectActionPage.prototype.printer = function (foo) {
        var id = this.selectedPrinter.id;
        var body = "VOTER DETAILS\n====================\nVoter Id: " + this.item.voter_id + "\nFirst Name: " + this.item.first_name + "\nFamily Name: " + this.item.family_name + "\nGender: " + this.item.gender + "\nAge: " + this.item.age + "\nSerial Number: " + this.item.srno + "\nBooth Number: " + this.item.booth_no + "\nPolling Booth: " + this.boothName + "\n====================\nPlease carry with Voter ID\n\"Vote for Bright Future\"\n\n\n\n\n\n\n\n\n";
        if (id == null || id == "" || id == undefined) {
            //nothing happens, you can put an alert here saying no printer selected
            var mno = this.alertCtrl.create({
                title: "No Printer Selected",
                buttons: ["Dismiss"],
                enableBackdropDismiss: false
            });
            mno.present();
        }
        else {
            this.printProvider.testPrint(foo, body, this.item.voter_id);
        }
    };
    SelectActionPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: "bottom",
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    SelectActionPage.prototype.gotoNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__notifications_notifications__["a" /* NotificationsPage */]);
    };
    SelectActionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "select-action",template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/select-action/select-action.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n        <div id="ex4" float-right>\n            <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf=\'localdataSync.anyChange\'\n                data-count="!">\n                <ion-icon class="refresh-icon" name="md-sync"></ion-icon>\n            </span>\n            <ion-icon class="refresh-icon1" name="md-sync" *ngIf=\'!localdataSync.anyChange\'></ion-icon>\n        </div>\n        <ion-buttons end style="display: flex !important;">\n            <button ion-button (click)="gotoNotification()">\n                <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <div class="buttons">\n        <h2 class="head">{{\'Select Action\' | translate}}</h2>\n    </div>\n    <div *ngFor=\'let action of actionList\'>\n        <ion-card (click)="actionFun(action.action)">\n            <ion-card-content class="card_content_padding" style="padding: 0px;">\n                <ion-row>\n                    <ion-col class="dept">\n                        {{action.label}}\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/select-action/select-action.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_12__providers_print__["a" /* PrintProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__providers_localdatasync_service__["a" /* LocaldataSync */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_6__providers_citizen__["a" /* MyCitizenDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_8__providers_checknetwork__["a" /* MyNetwork */]])
    ], SelectActionPage);
    return SelectActionPage;
}());

//# sourceMappingURL=select-action.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_survey_question__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_survey_answers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_citizen__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_localdatasync_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SurveyQuestionPage = (function () {
    function SurveyQuestionPage(navCtrl, loadingCtrl, navParams, commonService, translate, modalCtrl, events, toastCtrl, MyNetwork, mySurveyQuestionDatabase, network, mySurveyAnswerDatabase, localdataSync, myCitizenDatabase) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.MyNetwork = MyNetwork;
        this.mySurveyQuestionDatabase = mySurveyQuestionDatabase;
        this.network = network;
        this.mySurveyAnswerDatabase = mySurveyAnswerDatabase;
        this.localdataSync = localdataSync;
        this.myCitizenDatabase = myCitizenDatabase;
        this.questionlist = [];
        this.citizenInfo = [];
        this.imageUrl = "";
        this.getAllText();
        this.translate.use(localStorage.getItem('language'));
        this.item = this.navParams.get('item');
        this.citizenId = this.item.id;
        this.wardNo = localStorage.getItem('wardNo');
        this.wardId = localStorage.getItem('wardId');
        this.volunteerId = localStorage.getItem('volunteerId');
        this.showSurveyQuestions();
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
        this.citizenInfo = this.navParams.get('item');
    }
    SurveyQuestionPage.prototype.ionViewDidLoad = function () {
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    SurveyQuestionPage.prototype.checkNetworkConnection = function () {
        this.MyNetwork.checkNetworkConnection();
    };
    SurveyQuestionPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SurveyQuestionPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    SurveyQuestionPage.prototype.showSurveyQuestions = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '',
        });
        this.loading.present().then(function () {
            _this.mySurveyQuestionDatabase.getSurveyQuestions().then(function (res) {
                _this.loading.dismissAll();
                if (res.length > 0) {
                    _this.questionlist = JSON.parse(res[0].question);
                    _this.noRecords = _this.questionlist.length;
                }
            });
        }).catch(function (e) {
            _this.loading.dismissAll();
            console.log('Something went wrong in State');
        });
    };
    SurveyQuestionPage.prototype.postAnswer = function () {
        var _this = this;
        var postData = [];
        var data = {};
        var child = {};
        for (var i = 0; i < this.questionlist.length; i++) {
            data = {};
            child = {};
            data['citizen'] = { id: this.citizenId };
            data['volunteer'] = { id: this.volunteerId };
            data['surveyQuestion'] = { id: this.questionlist[i].id };
            data['modifiedDate'] = new Date().getTime();
            if (this.questionlist[i].childQuestion) {
                child['citizen'] = { id: this.citizenId };
                child['volunteer'] = { id: this.volunteerId };
                child['surveyQuestion'] = { id: this.questionlist[i].childQuestion.id };
                child['modifiedDate'] = new Date().getTime();
                if (this.questionlist[i].childQuestion.type == 'Multi Choice') {
                    var ans = '';
                    for (var j = 0; j < this.questionlist[i].childQuestion.value.length; j++) {
                        ans = ans + this.questionlist[i].childQuestion.value[j];
                        if (this.questionlist[i].childQuestion.value.length - 1 != j) {
                            ans = ans + ',';
                        }
                    }
                    child['answer'] = ans;
                }
                else {
                    child['answer'] = this.questionlist[i].childQuestion.value;
                }
                postData.push(child);
            }
            if (this.questionlist[i].type == 'Multi Choice') {
                var ans = '';
                for (var j_1 = 0; j_1 < this.questionlist[i].value.length; j_1++) {
                    ans = ans + this.questionlist[i].value[j_1];
                    if (this.questionlist[i].value.length - 1 != j_1) {
                        ans = ans + ',';
                    }
                }
                data['answer'] = ans;
            }
            else {
                data['answer'] = this.questionlist[i].value;
            }
            postData.push(data);
        }
        this.loading = this.loadingCtrl.create({
            content: '',
        });
        this.loading.present().then(function () {
            _this.mySurveyAnswerDatabase.addSurveyAnswer(postData).then(function (res) {
                _this.myCitizenDatabase.postStatus(_this.citizenId, 'responded').then(function () {
                    _this.loading.dismissAll();
                    _this.presentToast("Updated successfully");
                    localStorage.setItem('unsynched_data', 'true');
                    _this.localdataSync.checkDataTosync();
                    _this.navCtrl.pop();
                }).catch(function (e) {
                    console.log(e);
                    _this.loading.dismissAll();
                    _this.presentToast("Updated successfully");
                    localStorage.setItem('unsynched_data', 'true');
                    _this.localdataSync.checkDataTosync();
                    _this.navCtrl.pop();
                });
            }).catch(function (err) {
                console.log("err", err.error);
                _this.loading.dismissAll();
                _this.presentToast("internal server error");
            });
        });
    };
    SurveyQuestionPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            duration: 3000
        });
        toast.present();
    };
    SurveyQuestionPage.prototype.gotoNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
    };
    SurveyQuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'survey-question',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/survey-question/survey-question.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n        <div id="ex4" float-right>\n            <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf=\'localdataSync.anyChange\' data-count="!">\n                <ion-icon class="refresh-icon" name="md-sync"></ion-icon>\n            </span>\n            <ion-icon class="refresh-icon1" name="md-sync"  *ngIf=\'!localdataSync.anyChange\'></ion-icon>\n        </div>\n        <ion-buttons end style="display: flex !important;">\n            <button ion-button (click)="gotoNotification()">\n                <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <form class="login-form auth-form">\n        <div *ngFor="let item of questionlist; let i = index;">\n            <ion-row *ngIf="item.type == \'Input\'">\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked class="textLabel">Q.{{i+1}}. {{item.question}}</ion-label>\n                        <ion-input type="text" name="answer{{i}}" [(ngModel)]="item.value" [required]= "item.mandatory"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <div *ngIf="item.type == \'Radio\'">\n                <ion-item>\n                    <ion-label stacked class="textLabel">Q.{{i+1}}. {{item.question}}</ion-label>\n                    <ion-select class="selectfrom" interface="popover" name="answer{{i}}" [required]= "item.mandatory" [(ngModel)]="item.value">\n                        <ion-option *ngFor="let opt of item.options; let i = index;"  value="{{opt}}">{{opt}}</ion-option>\n                    </ion-select>\n                </ion-item>\n            </div>\n\n            <div *ngIf="item.type == \'Multi Choice\'">\n                <ion-item>\n                    <ion-label stacked class="textLabel">Q.{{i+1}}. {{item.question}}</ion-label>\n                    <ion-select multiple="true" class="selectfrom" interface="popover" name="answer{{i}}" [required]= "item.mandatory" [(ngModel)]="item.value">\n                        <ion-option *ngFor="let opt of item.options; let i = index;" value="{{opt}}">{{opt}}</ion-option>\n                    </ion-select>\n                </ion-item>\n            </div>\n            <!-- Child Question -->\n            <div *ngIf="item.childQuestion && (item.value.toLowerCase() == \'yes\'.toLowerCase())">\n                <ion-row *ngIf="item.childQuestion.type == \'Input\'">\n                    <ion-col>\n                        <ion-item>\n                            <ion-label stacked class="textLabel">{{item.childQuestion.question}}</ion-label>\n                            <ion-input type="text" name="answer{{j}}" [(ngModel)]="item.childQuestion.value"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <div *ngIf="item.childQuestion.type == \'Radio\'">\n                    <ion-item>\n                        <ion-label stacked class="textLabel">{{item.childQuestion.question}}</ion-label>\n                        <ion-select class="selectfrom" interface="popover" name="answer{{j}}" [(ngModel)]="item.childQuestion.value">\n                            <ion-option *ngFor="let opt of item.childQuestion.options; let j = index;" value="{{opt}}">{{opt}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </div>\n\n                <div *ngIf="item.childQuestion.type == \'Multi Choice\'">\n                    <ion-item>\n                        <ion-label stacked class="textLabel">{{item.childQuestion.question}}</ion-label>\n                        <ion-select multiple="true" class="selectfrom" interface="popover" name="answer{{j}}"\n                            [(ngModel)]="item.childQuestion.value">\n                            <ion-option *ngFor="let opt of item.childQuestion.options; let j = index;" value="{{opt}}">{{opt}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </div>\n            </div>\n        </div>\n\n        <ion-row *ngIf="noRecords > 0">\n            <ion-col col-6>\n                <button ion-button block class="auth-action-button login-button" (click)="postAnswer()" type="submit">{{\'Submit\'\n                    | translate}}</button>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button block class="auth-action-button login-button" color="secondary" (click)="back()">{{\'Cancel\'\n                    | translate}}</button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="space" *ngIf="noRecords == 0">\n            <ion-col class="schedule-data1 shadow">\n                <div class="data-item">\n                    <div class="title1">{{\'No questions found\' | translate}}</div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/survey-question/survey-question.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10__providers_checknetwork__["a" /* MyNetwork */],
            __WEBPACK_IMPORTED_MODULE_6__providers_survey_question__["a" /* MySurveyQuestionDatabase */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_7__providers_survey_answers__["a" /* MySurveyAnswerDatabase */],
            __WEBPACK_IMPORTED_MODULE_11__providers_localdatasync_service__["a" /* LocaldataSync */], __WEBPACK_IMPORTED_MODULE_8__providers_citizen__["a" /* MyCitizenDatabase */]])
    ], SurveyQuestionPage);
    return SurveyQuestionPage;
}());

//# sourceMappingURL=survey-question.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterListModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrinterListModalPage = (function () {
    function PrinterListModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.printerList = [];
    }
    PrinterListModalPage.prototype.ionViewDidLoad = function () {
        this.printerList = this.navParams.get('data');
        console.log("printerList", this.printerList);
    };
    PrinterListModalPage.prototype.select = function (data) {
        this.viewCtrl.dismiss(data);
    };
    PrinterListModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-printer-list-modal',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/printer-list-modal/printer-list-modal.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button icon-only (click)="viewCtrl.dismiss()" class="my-style-for-modal">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <h3>&nbsp;&nbsp;&nbsp;&nbsp;Select Printer From List</h3>\n    <ion-list>\n        <ion-item *ngFor="let item of printerList" (tap)="select(item)">\n            {{item.name}} {{item.id}}\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/printer-list-modal/printer-list-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], PrinterListModalPage);
    return PrinterListModalPage;
}());

//# sourceMappingURL=printer-list-modal.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrintProvider = (function () {
    function PrintProvider(btSerial, alertCtrl, geolocation, loadingCtrl, commonService) {
        this.btSerial = btSerial;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.commonService = commonService;
    }
    PrintProvider.prototype.searchBt = function () {
        console.log("this.btSerial.list", this.btSerial.list());
        return this.btSerial.list();
    };
    PrintProvider.prototype.connectBT = function (address) {
        return this.btSerial.connect(address);
    };
    PrintProvider.prototype.testPrint = function (foo, body, voter_id) {
        var _this = this;
        var printData = body;
        //let xyz = this.connectBT(address).subscribe(data => {
        this.btSerial.write(printData).then(function (dataz) {
            console.log("WRITE SUCCESS", dataz);
            _this.setLocation(voter_id, true);
            var mno = _this.alertCtrl.create({
                title: "Print SUCCESS!",
                buttons: ['Dismiss']
            });
            mno.present();
            foo.unsubscribe();
        }, function (errx) {
            console.log("WRITE FAILED", errx);
            var mno = _this.alertCtrl.create({
                title: "ERROR WRITE FAILED" + errx,
                buttons: ['Dismiss']
            });
            mno.present();
        });
        /*}, err => {
          console.log("CONNECTION ERROR", err);
          let mno = this.alertCtrl.create({
            title: "ERROR " + err,
            buttons: ['Dismiss']
          });
          mno.present();
        });*/
    };
    PrintProvider.prototype.setLocation = function (voter_id, printed) {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.geolocation.getCurrentPosition().then(function (pos) {
                _this.latitude = pos.coords.latitude;
                _this.longitude = pos.coords.longitude;
                var data = {};
                data["longitude"] = _this.longitude;
                data["latitude"] = _this.latitude;
                data["voterId"] = voter_id;
                data["volunteerMobile"] = localStorage.getItem("mobile");
                data["printed"] = printed;
                _this.commonService.updateCitizenVolunteerDetail(data).subscribe(function (data) {
                    console.log("data======", data);
                }, function (err) {
                    console.log('err', err);
                });
            });
        });
    };
    PrintProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_service__["a" /* CommonService */]])
    ], PrintProvider);
    return PrintProvider;
}());

//# sourceMappingURL=print.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_survey_question__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_survey_answers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_citizen__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_localdatasync_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OtherInformationPage = (function () {
    function OtherInformationPage(navCtrl, loadingCtrl, navParams, commonService, translate, modalCtrl, events, toastCtrl, MyNetwork, mySurveyQuestionDatabase, network, mySurveyAnswerDatabase, localdataSync, myCitizenDatabase) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.MyNetwork = MyNetwork;
        this.mySurveyQuestionDatabase = mySurveyQuestionDatabase;
        this.network = network;
        this.mySurveyAnswerDatabase = mySurveyAnswerDatabase;
        this.localdataSync = localdataSync;
        this.myCitizenDatabase = myCitizenDatabase;
        this.questionlist = [];
        this.citizenInfo = [];
        this.imageUrl = "";
        this.getAllText();
        this.translate.use(localStorage.getItem('language'));
        this.item = this.navParams.get('item');
        this.citizenId = this.item.id;
        this.wardNo = localStorage.getItem('wardNo');
        this.wardId = localStorage.getItem('wardId');
        this.volunteerId = localStorage.getItem('volunteerId');
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
        this.citizenInfo = this.navParams.get('item');
        this.getVoterOtherInfo();
    }
    OtherInformationPage.prototype.ionViewDidLoad = function () {
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    OtherInformationPage.prototype.checkNetworkConnection = function () {
        this.MyNetwork.checkNetworkConnection();
    };
    OtherInformationPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    OtherInformationPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    OtherInformationPage.prototype.getVoterOtherInfo = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '',
        });
        this.loading.present();
        this.commonService.getVoterOtherInfo(this.citizenId).subscribe(function (res) {
            _this.complaints = res.data;
            _this.noRecords = _this.complaints.length;
            _this.loading.dismissAll();
        }, function (err) {
            console.log("err", err);
            _this.loading.dismissAll();
        });
    };
    OtherInformationPage.prototype.showSurveyQuestions = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '',
        });
        this.loading.present().then(function () {
            _this.mySurveyQuestionDatabase.getSurveyQuestions().then(function (res) {
                _this.loading.dismissAll();
                if (res.length > 0) {
                    _this.questionlist = JSON.parse(res[0].question);
                    _this.noRecords = _this.questionlist.length;
                }
            });
        }).catch(function (e) {
            _this.loading.dismissAll();
            console.log('Something went wrong in State');
        });
    };
    OtherInformationPage.prototype.postAnswer = function () {
        var _this = this;
        var postData = [];
        var data = {};
        var child = {};
        for (var i = 0; i < this.questionlist.length; i++) {
            data = {};
            child = {};
            data['citizen'] = { id: this.citizenId };
            data['volunteer'] = { id: this.volunteerId };
            data['surveyQuestion'] = { id: this.questionlist[i].id };
            data['modifiedDate'] = new Date().getTime();
            if (this.questionlist[i].childQuestion) {
                child['citizen'] = { id: this.citizenId };
                child['volunteer'] = { id: this.volunteerId };
                child['surveyQuestion'] = { id: this.questionlist[i].childQuestion.id };
                child['modifiedDate'] = new Date().getTime();
                if (this.questionlist[i].childQuestion.type == 'Multi Choice') {
                    var ans = '';
                    for (var j = 0; j < this.questionlist[i].childQuestion.value.length; j++) {
                        ans = ans + this.questionlist[i].childQuestion.value[j];
                        if (this.questionlist[i].childQuestion.value.length - 1 != j) {
                            ans = ans + ',';
                        }
                    }
                    child['answer'] = ans;
                }
                else {
                    child['answer'] = this.questionlist[i].childQuestion.value;
                }
                postData.push(child);
            }
            if (this.questionlist[i].type == 'Multi Choice') {
                var ans = '';
                for (var j_1 = 0; j_1 < this.questionlist[i].value.length; j_1++) {
                    ans = ans + this.questionlist[i].value[j_1];
                    if (this.questionlist[i].value.length - 1 != j_1) {
                        ans = ans + ',';
                    }
                }
                data['answer'] = ans;
            }
            else {
                data['answer'] = this.questionlist[i].value;
            }
            postData.push(data);
        }
        this.loading = this.loadingCtrl.create({
            content: '',
        });
        this.loading.present().then(function () {
            _this.mySurveyAnswerDatabase.addSurveyAnswer(postData).then(function (res) {
                _this.myCitizenDatabase.postStatus(_this.citizenId, 'responded').then(function () {
                    _this.loading.dismissAll();
                    _this.presentToast("Updated successfully");
                    localStorage.setItem('unsynched_data', 'true');
                    _this.localdataSync.checkDataTosync();
                    _this.navCtrl.pop();
                }).catch(function (e) {
                    console.log(e);
                    _this.loading.dismissAll();
                    _this.presentToast("Updated successfully");
                    localStorage.setItem('unsynched_data', 'true');
                    _this.localdataSync.checkDataTosync();
                    _this.navCtrl.pop();
                });
            }).catch(function (err) {
                console.log("err", err.error);
                _this.loading.dismissAll();
                _this.presentToast("internal server error");
            });
        });
    };
    OtherInformationPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            duration: 3000
        });
        toast.present();
    };
    OtherInformationPage.prototype.gotoNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
    };
    OtherInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'other-information',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/other-information/other-information.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n        <div id="ex4" float-right>\n            <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf=\'localdataSync.anyChange\' data-count="!">\n                <ion-icon class="refresh-icon" name="md-sync"></ion-icon>\n            </span>\n            <ion-icon class="refresh-icon1" name="md-sync"  *ngIf=\'!localdataSync.anyChange\'></ion-icon>\n        </div>\n        <ion-buttons end style="display: flex !important;">\n            <button ion-button (click)="gotoNotification()">\n                <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <h2 class="head">{{\'Other Information\' | translate}}</h2>\n    <ng-container *ngIf="noRecords != 0">\n    <ion-row class="space">\n        <ion-col class="schedule-data1 shadow">\n            <div class="data-item" *ngIf="complaints!=null && complaints!=undefined">            \n                <div class="title">{{\'Voter Id\' | translate}}: {{complaints.voterId}}</div>\n                <div>{{\'Health Card Number\' | translate}}: {{complaints.cust1 | translate}}</div>\n                <div>{{\'Donation\' | translate}}: {{complaints.cust2 | translate}}</div>\n                <div>{{\'Health Insurance\' | translate}}: {{complaints.cust3 | translate}}</div>\n                <div>{{\'Other Insurance\' | translate}}: {{complaints.cust4 | translate}}</div>\n                <div>{{\'Service\' | translate}}: {{complaints.cust5 | translate}}</div>\n                <div>{{\'Financial\' | translate}}: {{complaints.cust6 | translate}}</div>\n                <div>{{\'Other Service\' | translate}}: {{complaints.cust7 | translate}}</div>\n                <div>{{\'Security\' | translate}}: {{complaints.cust8 | translate}}</div>\n                <div>{{\'Trust Donation\' | translate}}: {{complaints.cust9 | translate}}</div>\n                <div>{{\'Other\' | translate}}: {{complaints.cust10 | translate}}</div>\n            </div>\n        </ion-col>\n    </ion-row>\n</ng-container>\n    <ion-row class="space" *ngIf="noRecords == 0">\n            <ion-col class="schedule-data1 shadow">\n                <div class="data-item">            \n                    <div class="title1">{{\'No records found\' | translate}}</div>\n                </div>\n            </ion-col>\n        </ion-row>\n</ion-content>\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/other-information/other-information.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_10__providers_checknetwork__["a" /* MyNetwork */],
            __WEBPACK_IMPORTED_MODULE_6__providers_survey_question__["a" /* MySurveyQuestionDatabase */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_7__providers_survey_answers__["a" /* MySurveyAnswerDatabase */],
            __WEBPACK_IMPORTED_MODULE_11__providers_localdatasync_service__["a" /* LocaldataSync */], __WEBPACK_IMPORTED_MODULE_8__providers_citizen__["a" /* MyCitizenDatabase */]])
    ], OtherInformationPage);
    return OtherInformationPage;
}());

//# sourceMappingURL=other-information.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredComplaintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_survey_question__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_survey_answers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_citizen__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_localdatasync_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RegisteredComplaintsPage = (function () {
    function RegisteredComplaintsPage(navCtrl, loadingCtrl, navParams, commonService, translate, modalCtrl, events, toastCtrl, MyNetwork, mySurveyQuestionDatabase, network, mySurveyAnswerDatabase, localdataSync, myCitizenDatabase) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.MyNetwork = MyNetwork;
        this.mySurveyQuestionDatabase = mySurveyQuestionDatabase;
        this.network = network;
        this.mySurveyAnswerDatabase = mySurveyAnswerDatabase;
        this.localdataSync = localdataSync;
        this.myCitizenDatabase = myCitizenDatabase;
        this.questionlist = [];
        this.citizenInfo = [];
        this.imageUrl = "";
        this.getAllText();
        this.translate.use(localStorage.getItem('language'));
        this.item = this.navParams.get('item');
        this.citizenId = this.item.id;
        this.wardNo = localStorage.getItem('wardNo');
        this.wardId = localStorage.getItem('wardId');
        this.volunteerId = localStorage.getItem('volunteerId');
        this.citizenInfo = this.navParams.get('item');
        this.getComplaints();
    }
    RegisteredComplaintsPage.prototype.ionViewDidLoad = function () {
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    RegisteredComplaintsPage.prototype.checkNetworkConnection = function () {
        this.MyNetwork.checkNetworkConnection();
    };
    RegisteredComplaintsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RegisteredComplaintsPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    RegisteredComplaintsPage.prototype.getComplaints = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '',
        });
        this.loading.present();
        this.commonService.getComplaints(this.citizenId).subscribe(function (res) {
            _this.complaints = res.data;
            _this.noRecords = _this.complaints.length;
            _this.complaintsCopy = _this.complaints;
            _this.loading.dismissAll();
        }, function (err) {
            console.log("err", err);
            _this.loading.dismissAll();
        });
    };
    RegisteredComplaintsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            duration: 3000
        });
        toast.present();
    };
    RegisteredComplaintsPage.prototype.gotoNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */]);
    };
    RegisteredComplaintsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'registered-complaints-page',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/registered-complaints-page/registered-complaints-page.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n        <div id="ex4" float-right>\n            <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf=\'localdataSync.anyChange\' data-count="!">\n                <ion-icon class="refresh-icon" name="md-sync"></ion-icon>\n            </span>\n            <ion-icon class="refresh-icon1" name="md-sync"  *ngIf=\'!localdataSync.anyChange\'></ion-icon>\n        </div>\n        <ion-buttons end style="display: flex !important;">\n            <button ion-button (click)="gotoNotification()">\n                <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <h2 class="head">{{\'Registered complaints\' | translate}}</h2>\n    <ng-container *ngIf="noRecords != 0">\n    <ion-row class="space" *ngFor="let c of complaints">\n        <ion-col class="schedule-data1 shadow">\n            <div class="data-item">            \n                <div class="title">{{\'Complaint\' | translate}}: #{{c.incidentId}}</div>\n                <div>{{\'Complaint date\' | translate}}: {{c.createdDate | date: \'dd/MM/yy\'}}</div>\n                <div>{{\'Department\' | translate}}: {{c.subDepartment.department.name}}</div>\n                <div>{{\'Sub\' | translate}}: {{c.subDepartment.name}}</div>\n                <div>{{\'Comment\' | translate}}: {{c.complaint}}</div>\n                <div>{{\'Status\' | translate}}: {{c.status | translate}}</div>\n            </div>\n        </ion-col>\n    </ion-row>\n</ng-container>\n    <ion-row class="space" *ngIf="noRecords == 0">\n            <ion-col class="schedule-data1 shadow">\n                <div class="data-item">            \n                    <div class="title1">{{\'No records found\' | translate}}</div>\n                </div>\n            </ion-col>\n        </ion-row>\n</ion-content>\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/registered-complaints-page/registered-complaints-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__providers_checknetwork__["a" /* MyNetwork */],
            __WEBPACK_IMPORTED_MODULE_5__providers_survey_question__["a" /* MySurveyQuestionDatabase */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__providers_survey_answers__["a" /* MySurveyAnswerDatabase */],
            __WEBPACK_IMPORTED_MODULE_10__providers_localdatasync_service__["a" /* LocaldataSync */], __WEBPACK_IMPORTED_MODULE_7__providers_citizen__["a" /* MyCitizenDatabase */]])
    ], RegisteredComplaintsPage);
    return RegisteredComplaintsPage;
}());

//# sourceMappingURL=registered-complaints-page.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComplaintsPage = (function () {
    function ComplaintsPage(nav, loadingCtrl, navParams, commonService, translate, modalCtrl, events, network) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.network = network;
        this.complaints = [];
        this.imageUrl = "";
        this.getAllText();
        this.translate.use(localStorage.getItem('language'));
        this.citizenId = this.navParams.get('citizenId');
        events.subscribe('notification:received', function (note) {
            console.log("note", note);
        });
    }
    ComplaintsPage.prototype.ionViewDidLoad = function () {
        this.getNotifications();
        console.log("Hello ionViewDidLoad");
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    ComplaintsPage.prototype.getNotifications = function () {
        var _this = this;
        this.commonService.getComplaints(this.citizenId).subscribe(function (res) {
            _this.complaints = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    ComplaintsPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            console.log('res', res);
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    ComplaintsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'complaints',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/complaints/complaints.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <!-- <img class="logo" src="assets/images/Smartneta/BJP_logo.svg.png"> -->\n        <img class="logo" src="{{imageUrl}}">\n    </ion-navbar>\n</ion-header>\n      \n<ion-content class="login-content auth-content">\n    <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher> -->\n    <!-- <ion-row>\n        <ion-col class="bjplogo">\n            <img class="logo1" src="{{imageUrl}}">\n        </ion-col>\n    </ion-row> -->\n    <!-- <div class="">\n        <ion-row>\n            <ion-col class="schedule-data">\n                <div class="data-item">\n                    <p class="complaint_title" *ngIf="descText!=undefined">\n                        <span>{{\'Info\' | translate}}</span><br />\n                        <span>{{\'Info1\' | translate}}</span><br />\n                        <span>{{\'Info2\' | translate}}</span>\n                        {{descText.text}}\n                    </p> \n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n    <hr>\n    <div class="ads">\n        <ion-row *ngFor="let n of news" (click)="showNews(n)">\n            <ion-col col-3 class="">\n                <img class="adImage" src=\'http://13.233.175.188:8585/open/mobile/download-image/{{n.image}}\'>\n            </ion-col>\n            <ion-col col-9 class="">\n                <ion-row class="adTitle">{{n.header}}</ion-row>\n                <ion-row class="adSite">{{n.details}}</ion-row>\n            </ion-col>\n        </ion-row>\n        <hr>\n        <ion-row>\n            <ion-col col-3 class="">\n                <img class="adImage" src="assets/images/Smartneta/upload_image.png">\n            </ion-col>\n            <ion-col col-9 class="">\n                <ion-row class="adTitle">Salary above Rs.30,000? Top credit cards for you</ion-row>\n                <ion-row class="adSite">BankBazaar</ion-row>\n            </ion-col>\n        </ion-row>\n        <hr>\n        <ion-row>\n            <ion-col col-3 class="">\n                <img class="adImage" src="assets/images/Smartneta/upload_image.png">\n            </ion-col>\n            <ion-col col-9 class="">\n                <ion-row class="adTitle">Just pay Rs 11 & avoid expensive Medical Bills</ion-row>\n                <ion-row class="adSite">Quickbima.com</ion-row>\n            </ion-col>\n        </ion-row>\n        <hr>\n        <ion-row>\n            <ion-col col-3 class="">\n                <img class="adImage" src="assets/images/Smartneta/upload_image.png">\n            </ion-col>\n            <ion-col col-9 class="">\n                <ion-row class="adTitle">Just pay Rs 11 & avoid expensive Medical Bills</ion-row>\n                <ion-row class="adSite">Quickbima.com</ion-row>\n            </ion-col>\n        </ion-row>\n    </div> -->\n</ion-content>\n\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/complaints/complaints.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], ComplaintsPage);
    return ComplaintsPage;
}());

//# sourceMappingURL=complaints.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitizenDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CitizenDetailsPage = (function () {
    function CitizenDetailsPage(nav, loadingCtrl, navParams, commonService, translate, modalCtrl, events, network) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.network = network;
        this.imageUrl = "";
        this.getAllText();
        this.translate.use(localStorage.getItem('language'));
        this.citizenId = this.navParams.get('citizenId');
    }
    CitizenDetailsPage.prototype.ionViewDidLoad = function () {
        // this.getAllNews();
        this.getdetailas();
        console.log("Hello ionViewDidLoad");
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    CitizenDetailsPage.prototype.getdetailas = function () {
        var _this = this;
        this.commonService.getCitizenData(this.citizenId).subscribe(function (res) {
            _this.citizenData = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    CitizenDetailsPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            console.log('res', res);
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    CitizenDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-citizen-details',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/citizen-details/citizen-details.html"*/'<ion-header class="login-header auth-header">\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button menuToggle>\n              <ion-icon name="menu" class="menu_icon"></ion-icon>\n          </button>\n      </ion-buttons>\n      <img class="logo" src="{{imageUrl}}">\n  </ion-navbar>\n</ion-header>\n    \n<ion-content class="login-content auth-content">\n</ion-content>\n\n<ion-footer>\n  <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/citizen-details/citizen-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], CitizenDetailsPage);
    return CitizenDetailsPage;
}());

//# sourceMappingURL=citizen-details.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_localdatasync_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactUsPage = (function () {
    function ContactUsPage(nav, loadingCtrl, navParams, translate, modalCtrl, commonService, network, MyNetwork, localdataSync) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.commonService = commonService;
        this.network = network;
        this.MyNetwork = MyNetwork;
        this.localdataSync = localdataSync;
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        this.translate.use(localStorage.getItem('language'));
        this.getAllText();
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    }
    ContactUsPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    ContactUsPage.prototype.checkNetworkConnection = function () {
        this.MyNetwork.checkNetworkConnection();
    };
    ContactUsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            if (_this.network.type == 'none') {
                _this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
            }
            else {
                _this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
            }
            _this.getAllText();
            refresher.complete();
        }, 2000);
    };
    ContactUsPage.prototype.gotoNotification = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__notifications_notifications__["a" /* NotificationsPage */]);
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contact-us',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/contact-us/contact_us.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n        <div id="ex4" float-right>\n            <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf=\'localdataSync.anyChange\' data-count="!">\n                <ion-icon class="refresh-icon" name="md-sync"></ion-icon>\n            </span>\n            <ion-icon class="refresh-icon1" name="md-sync"  *ngIf=\'!localdataSync.anyChange\'></ion-icon>\n        </div>\n        <ion-buttons end style="display: flex !important;">\n            <button ion-button (click)="gotoNotification()">\n                <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-row>\n        <ion-col class="about">\n            <h3 style="margin-bottom: 0;">{{\'about\' | translate}}</h3>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="description" *ngIf="descText != undefined">\n            {{descText.about}}\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="about">\n            <h3 style="margin: 0;">{{\'Contact\' | translate}}</h3>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="description" *ngIf="descText != undefined">\n            {{descText.address1}}<br /><br />\n            {{descText.address2}}<br /><br />\n            Phone :{{descText.contact}}\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="about">\n            <h3 style="margin: 0;">{{\'Email\' | translate}}</h3>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="description" *ngIf="descText != undefined">\n            {{descText.email}}\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="about">\n            <h3 style="margin: 0;">{{\'Website\' | translate}}</h3>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="description" *ngIf="descText != undefined">\n            <a href={{descText.website}}><b>{{descText.website}}</b></a>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col style="padding: 16px" *ngIf="descText != undefined">\n            <a href={{descText.facebookLink}} class="fa fa-facebook"></a>\n            <a href={{descText.twitterLink}} class="fa fa-twitter"></a>\n        </ion-col>\n    </ion-row>\n\n</ion-content>\n\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/contact-us/contact_us.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_5__providers_checknetwork__["a" /* MyNetwork */], __WEBPACK_IMPORTED_MODULE_6__providers_localdatasync_service__["a" /* LocaldataSync */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact_us.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMap = (function () {
    function GoogleMap(_elementRef) {
        this._elementRef = _elementRef;
        this._mapOptions = {
            zoom: 15
        };
        this.$mapReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._mapIdledOnce = false;
    }
    Object.defineProperty(GoogleMap.prototype, "options", {
        set: function (val) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val)) {
                this._mapOptions = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    GoogleMap.prototype.ngOnInit = function () {
        this.initMap();
    };
    GoogleMap.prototype.initMap = function () {
        var _this = this;
        this._el = this._elementRef.nativeElement;
        this._map = new google.maps.Map(this._el, this._mapOptions);
        // Workarround for init method: try to catch the first idel event after the map cretion (this._mapIdledOnce). The following idle events don't matter.
        var _ready_listener = this._map.addListener('idle', function () {
            console.log("mapReady - IDLE");
            if (!_this._mapIdledOnce) {
                _this.$mapReady.emit(_this._map);
                _this._mapIdledOnce = true;
                // Stop listening to event, the map is ready
                google.maps.event.removeListener(_ready_listener);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GoogleMap.prototype, "options", null);
    GoogleMap = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'google-map',
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], GoogleMap);
    return GoogleMap;
}());

//# sourceMappingURL=google-map.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMapsService = (function () {
    // There are some issues with async observers (https://gist.github.com/endash/1f961830d0c5b744598a)
    //    - That's why we need to use ngZones
    // Here's another post explaining the issue (http://stackoverflow.com/a/38100262/1116959)
    //    - Seems that google.maps API is not patched by Angular's zone
    function GoogleMapsService(zone) {
        this.zone = zone;
        this._AutocompleteService = new google.maps.places.AutocompleteService();
        this._Geocoder = new google.maps.Geocoder;
        // As we are already using a map, we don't need to pass the map element to the PlacesServices (https://groups.google.com/forum/#!topic/google-maps-js-api-v3/QJ67k-ATuFg)
        this._PlacesService = new google.maps.places.PlacesService(document.createElement("div"));
        this._DirectionsService = new google.maps.DirectionsService;
        this._DistanceMatrixService = new google.maps.DistanceMatrixService;
    }
    // Caveat:  As we are using Observable.create don't forget a well-formed finite Observable must attempt to call
    //          either the observer’s onCompleted method exactly once or its onError method exactly once, and must not
    //          thereafter attempt to call any of the observer’s other methods.
    //    - http://reactivex.io/documentation/operators/create.html
    //    - http://stackoverflow.com/a/38376519/1116959
    // https://developers.google.com/maps/documentation/javascript/reference#AutocompletePrediction
    GoogleMapsService.prototype.getPlacePredictions = function (query) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._AutocompleteService.getPlacePredictions({ input: query }, function (places_predictions, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    _this.zone.run(function () {
                        observer.next([]);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.next(places_predictions);
                        observer.complete();
                    });
                }
            });
        });
    };
    GoogleMapsService.prototype.geocodePlace = function (placeId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._Geocoder.geocode({ 'placeId': placeId }, function (results, status) {
                if (status.toString() === 'OK') {
                    if (results[0]) {
                        _this.zone.run(function () {
                            observer.next(results[0].geometry.location);
                            observer.complete();
                        });
                    }
                    else {
                        _this.zone.run(function () {
                            observer.error(new Error("no results"));
                        });
                    }
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error"));
                    });
                }
            });
        });
    };
    // https://developers.google.com/maps/documentation/javascript/reference#PlaceResult
    GoogleMapsService.prototype.getPlacesNearby = function (location) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._PlacesService.nearbySearch({
                location: location,
                radius: 500,
                types: ['restaurant']
            }, function (results, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    _this.zone.run(function () {
                        observer.next([]);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.next(results);
                        observer.complete();
                    });
                }
            });
        });
    };
    // https://developers.google.com/maps/documentation/javascript/reference#DirectionsResult
    GoogleMapsService.prototype.getDirections = function (origin, destination) {
        var _this = this;
        var _origin = {
            location: origin
        }, _destination = {
            location: destination
        }, route_query = {
            origin: _origin,
            destination: _destination,
            travelMode: google.maps.TravelMode.WALKING
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._DirectionsService.route(route_query, function (route, status) {
                if (status.toString() === 'OK') {
                    _this.zone.run(function () {
                        // Yield a single value and complete
                        observer.next(route);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error due to " + status));
                    });
                }
            });
        });
    };
    GoogleMapsService.prototype.getDistanceMatrix = function (origin, destination) {
        var _this = this;
        var _origin = {
            location: origin
        }, _destination = {
            location: destination
        }, distance_query = {
            origins: [_origin],
            destinations: [_destination],
            travelMode: google.maps.TravelMode.WALKING,
            unitSystem: google.maps.UnitSystem.METRIC
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._DistanceMatrixService.getDistanceMatrix(distance_query, function (distance, status) {
                if (status.toString() === 'OK') {
                    _this.zone.run(function () {
                        // Yield a single value and complete
                        observer.next(distance);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error due to " + status));
                    });
                }
            });
        });
    };
    GoogleMapsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], GoogleMapsService);
    return GoogleMapsService;
}());

//# sourceMappingURL=maps.service.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowHideInput = (function () {
    function ShowHideInput(el) {
        this.el = el;
        this.type = 'password';
    }
    ShowHideInput.prototype.changeType = function (type) {
        this.type = type;
        this.el.nativeElement.children[0].type = this.type;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])(),
        __metadata("design:type", String)
    ], ShowHideInput.prototype, "type", void 0);
    ShowHideInput = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[show-hide-input]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ShowHideInput);
    return ShowHideInput;
}());

//# sourceMappingURL=show-hide-input.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMaps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectivity_service_connectivity_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GoogleMapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  Inner HTML Error
  https://stackoverflow.com/questions/49466226/what-is-the-solution-of-erro-that-cannot-read-property-innerhtml-of-undefined
*/
var GoogleMaps = (function () {
    function GoogleMaps(connectivityService, geolocation) {
        this.connectivityService = connectivityService;
        this.geolocation = geolocation;
        this.mapInitialised = false;
        // AJ's
        // apiKey: string = "AIzaSyDs0yrw9_9JxzS175LUlyMjw9Ugyr2vT7g";
        // apiKey: string = "AIzaSyC9AONAX0_mENZwS9WtlFskMWcIFVSAXGE";
        this.apiKey = "AIzaSyB8QzRpweAqRz8NHyVUS2QhxhnS_9WPTn4";
        this.markers = [];
    }
    GoogleMaps.prototype.init = function (mapElement, pleaseConnect) {
        this.mapElement = mapElement;
        this.pleaseConnect = pleaseConnect;
        return this.loadGoogleMaps();
    };
    GoogleMaps.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded.");
                _this.disableMap();
                // if(this.connectivityService.isOnline()){
                window['mapInit'] = function () {
                    _this.initMap().then(function () {
                        _this.enableMap();
                        resolve(true);
                    });
                };
                var script = document.createElement("script");
                script.id = "googleMaps";
                if (_this.apiKey) {
                    script.src = 'http://maps.google.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit&libraries=places';
                }
                else {
                    script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                }
                document.body.appendChild(script);
                // }
            }
            else {
                // if(this.connectivityService.isOnline()){
                _this.initMap().then(function () {
                    _this.enableMap();
                    resolve(true);
                });
                // }
                // else {
                //   this.disableMap();
                //   resolve(true);
                // }
            }
            _this.addConnectivityListeners();
        });
    };
    GoogleMaps.prototype.initMap = function () {
        var _this = this;
        this.mapInitialised = true;
        return new Promise(function (resolve) {
            _this.options = {
                enableHighAccuracy: true
            };
            _this.geolocation.getCurrentPosition(_this.options).then(function (position) {
                console.log("position", position);
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.cur_lat = position.coords.latitude;
                _this.cur_lng = position.coords.longitude;
                console.log("latLng", latLng);
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                //debugger;
                _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                _this.addMarker();
                resolve(true);
            });
        });
    };
    GoogleMaps.prototype.getLatLngFromAddress = function (place) {
        var me = this;
        var geocoder = new google.maps.Geocoder();
        var latitude;
        var longitude;
        geocoder.geocode({ 'address': place }, function (results, status) {
            //this.geolocation.getCurrentPosition(this.options).then((position) => {
            if (status == google.maps.GeocoderStatus.OK) {
                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();
                console.log("latitude", latitude);
                console.log("longitude", longitude);
                me.tessetMarker(latitude, longitude);
            }
        });
        // console.log("latitude",latitude);
        // console.log("longitude",longitude);
        // }
    };
    GoogleMaps.prototype.tessetMarker = function (latitude, longitude) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
        var latLng = new google.maps.LatLng(latitude, longitude);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
        // let content = "<p>This is your current position !</p>";          
        // let infoWindow = new google.maps.InfoWindow({
        //   content: content
        // });
        // google.maps.event.addListener(marker, 'click', () => {
        //   infoWindow.open(this.map, marker);marker
        // });
    };
    GoogleMaps.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        // let content = "<p>This is your current position !</p>";          
        // let infoWindow = new google.maps.InfoWindow({
        //   content: content
        // });
        // google.maps.event.addListener(marker, 'click', () => {
        //   infoWindow.open(this.map, marker);
        // });
        this.markers.push(marker);
    };
    // createMarker(){
    //   let markeraOptions: MarkerOptions =
    // }
    GoogleMaps.prototype.disableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "block";
        }
    };
    GoogleMaps.prototype.enableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "none";
        }
    };
    GoogleMaps.prototype.addConnectivityListeners = function () {
        //this.connectivityService.watchOnline().subscribe(() => {
        var _this = this;
        setTimeout(function () {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                _this.loadGoogleMaps();
            }
            else {
                if (!_this.mapInitialised) {
                    _this.initMap();
                }
                _this.enableMap();
            }
        }, 2000);
        // });
        // this.connectivityService.watchOffline().subscribe(() => {
        //   this.disableMap();
        // });
    };
    GoogleMaps = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__connectivity_service_connectivity_service__["a" /* Connectivity */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GoogleMaps);
    return GoogleMaps;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_privacy_policy_privacy_policy__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_maps_maps__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_preload_image_preload_image__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_background_image_background_image__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_show_hide_password_show_hide_container__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_show_hide_password_show_hide_input__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_color_radio_color_radio__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_counter_input_counter_input__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_rating_rating__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_google_map_google_map__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_video_player_video_player_module__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_validators_validators_module__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_maps_maps_service__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_language_language_service__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_citizen__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_complaint__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_survey_answers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_survey_question__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_ward__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_booth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_in_app_browser__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_keyboard__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_connectivity_service_connectivity_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_google_maps_google_maps__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_push__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_android_permissions__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_otp_otp__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_complaints_complaints__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_registered_complaints_reg_complaints__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_location_select_location_select__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_complaints_news_modal_news_modal__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_contact_us_contact_us__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_dashboard_dashboard__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_search_voters_search_voters__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_search_voters_edit_search_voters_edit__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_search_voters_result_search_voters_result__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_select_action_select_action__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_search_voters_view_location_search_voters_view_location__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_add_new_voters_add_new_voters__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_survey_question_survey_question__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_sync_sync__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_sqlite__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_ionic_selectable__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_localdatasync_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_bluetooth_serial__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_print__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_printer_list_modal_printer_list_modal__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_social_sharing__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_citizen_details_citizen_details__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_other_information_other_information__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_registered_complaints_page_registered_complaints_page__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//pages





//custom components










//services










// Ionic Native Plugins









//Smartneta


























function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_preload_image_preload_image__["a" /* PreloadImage */],
                __WEBPACK_IMPORTED_MODULE_14__components_background_image_background_image__["a" /* BackgroundImage */],
                __WEBPACK_IMPORTED_MODULE_15__components_show_hide_password_show_hide_container__["a" /* ShowHideContainer */],
                __WEBPACK_IMPORTED_MODULE_16__components_show_hide_password_show_hide_input__["a" /* ShowHideInput */],
                __WEBPACK_IMPORTED_MODULE_17__components_color_radio_color_radio__["a" /* ColorRadio */],
                __WEBPACK_IMPORTED_MODULE_18__components_counter_input_counter_input__["a" /* CounterInput */],
                __WEBPACK_IMPORTED_MODULE_19__components_rating_rating__["a" /* Rating */],
                __WEBPACK_IMPORTED_MODULE_20__components_google_map_google_map__["a" /* GoogleMap */],
                __WEBPACK_IMPORTED_MODULE_42__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_complaints_complaints__["a" /* ComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_registered_complaints_reg_complaints__["a" /* RegComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_location_select_location_select__["a" /* LocationSelect */],
                __WEBPACK_IMPORTED_MODULE_46__pages_complaints_news_modal_news_modal__["a" /* NewsModalPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_dashboard_dashboard__["a" /* dashboardPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_search_voters_search_voters__["a" /* SearchVotersPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_search_voters_result_search_voters_result__["a" /* SearchVotersResultPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_select_action_select_action__["a" /* SelectActionPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_survey_question_survey_question__["a" /* SurveyQuestionPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_other_information_other_information__["a" /* OtherInformationPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_registered_complaints_page_registered_complaints_page__["a" /* RegisteredComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_search_voters_edit_search_voters_edit__["a" /* SearchVotersEditPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_search_voters_view_location_search_voters_view_location__["a" /* SearchVotersViewLocationPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_add_new_voters_add_new_voters__["a" /* AddNewVotersPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_sync_sync__["a" /* SyncPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_printer_list_modal_printer_list_modal__["a" /* PrinterListModalPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_citizen_details_citizen_details__["a" /* CitizenDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    pageTransition: 'ios-transition',
                    swipeBackEnabled: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_21__components_video_player_video_player_module__["a" /* VideoPlayerModule */],
                __WEBPACK_IMPORTED_MODULE_22__components_validators_validators_module__["a" /* ValidatorsModule */],
                __WEBPACK_IMPORTED_MODULE_59_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_complaints_complaints__["a" /* ComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_registered_complaints_reg_complaints__["a" /* RegComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_location_select_location_select__["a" /* LocationSelect */],
                __WEBPACK_IMPORTED_MODULE_46__pages_complaints_news_modal_news_modal__["a" /* NewsModalPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_dashboard_dashboard__["a" /* dashboardPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_search_voters_search_voters__["a" /* SearchVotersPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_search_voters_result_search_voters_result__["a" /* SearchVotersResultPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_select_action_select_action__["a" /* SelectActionPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_survey_question_survey_question__["a" /* SurveyQuestionPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_other_information_other_information__["a" /* OtherInformationPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_registered_complaints_page_registered_complaints_page__["a" /* RegisteredComplaintsPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_search_voters_edit_search_voters_edit__["a" /* SearchVotersEditPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_search_voters_view_location_search_voters_view_location__["a" /* SearchVotersViewLocationPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_add_new_voters_add_new_voters__["a" /* AddNewVotersPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_sync_sync__["a" /* SyncPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_printer_list_modal_printer_list_modal__["a" /* PrinterListModalPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_citizen_details_citizen_details__["a" /* CitizenDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__pages_maps_maps_service__["a" /* GoogleMapsService */],
                __WEBPACK_IMPORTED_MODULE_24__providers_language_language_service__["a" /* LanguageService */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_25__providers_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_citizen__["a" /* MyCitizenDatabase */],
                __WEBPACK_IMPORTED_MODULE_27__providers_complaint__["a" /* MyComplaintDatabase */],
                __WEBPACK_IMPORTED_MODULE_28__providers_survey_answers__["a" /* MySurveyAnswerDatabase */],
                __WEBPACK_IMPORTED_MODULE_29__providers_checknetwork__["a" /* MyNetwork */],
                __WEBPACK_IMPORTED_MODULE_38__providers_connectivity_service_connectivity_service__["a" /* Connectivity */],
                __WEBPACK_IMPORTED_MODULE_39__providers_google_maps_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_30__providers_survey_question__["a" /* MySurveyQuestionDatabase */],
                __WEBPACK_IMPORTED_MODULE_31__providers_ward__["a" /* WardProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_booth__["a" /* BoothProvider */],
                __WEBPACK_IMPORTED_MODULE_60__providers_localdatasync_service__["a" /* LocaldataSync */],
                __WEBPACK_IMPORTED_MODULE_61__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_62__providers_print__["a" /* PrintProvider */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_social_sharing__["a" /* SocialSharing */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCitizenDatabase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyCitizenDatabase = (function () {
    function MyCitizenDatabase(sqlite, loadingCtrl) {
        this.sqlite = sqlite;
        this.loadingCtrl = loadingCtrl;
        this.connectToDb();
    }
    MyCitizenDatabase.prototype.connectToDb = function () {
        var _this = this;
        this.sqlite
            .create({
            name: "data.db",
            location: "default"
        })
            .then(function (db) {
            _this.db = db;
            db.executeSql("create TABLE IF NOT EXISTS citizen(id BIGINT(20) PRIMARY KEY, \n                        age INT(11) NOT NULL,  \n                        house_no TEXT NULL,\n                        mobile TEXT NULL, \n                        pincode TEXT NULL, \n                        street TEXT NULL, \n                        voter_id TEXT NOT NULL, \n                        voter_segmentation TEXT NULL ,  \n                        ac_hash TEXT NULL,  \n                        address TEXT NULL, \n                        ward_no TEXT NULL, \n                        srno TEXT NULL,\n                        responded_status TEXT , \n                        voted int , \n                        latitude TEXT , \n                        longitude TEXT  , \n                        state TEXT NULL, \n                        assembly_no TEXT NULL, \n                        booth_no TEXT NULL, \n                        family_name TEXT NULL, \n                        first_name TEXT NOT NULL, \n                        party_preference TEXT,\n                        gender TEXT NOT NULL,\n                        modifiedDate DATETIME,\n                        volunteer_mobile TEXT)", [])
                .then(function (data) {
                _this.db
                    .executeSql(" CREATE INDEX Idx1 ON citizen(ward_no,booth_no)", [])
                    .then(function (data) {
                    console.log("Executed SQL for indexing");
                })
                    .catch(function (e) {
                    console.log(e);
                });
            })
                .catch(function (e) { return console.log("err while creating table", e); });
        })
            .catch(function (e) { return console.log("err creating connection", e); });
    };
    MyCitizenDatabase.prototype.deleteCitizens = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .executeSql("delete FROM citizen", [])
                .then(function (data) {
                console.log("Executed SQL");
                resolve("Executed SQL");
            })
                .catch(function (e) {
                console.log(e);
                reject("err");
            });
        });
    };
    MyCitizenDatabase.prototype.addUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var insertRows = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                insertRows.push([
                    "INSERT OR REPLACE INTO citizen (id , \n          age  ,  \n          house_no , \n          mobile  , \n          pincode  , \n          street  , \n          voter_id  , \n          voter_segmentation , \n          ac_hash , \n          address, \n          ward_no,  \n          srno,  \n          responded_status, \n          voted , \n          latitude, \n          longitude, \n          state, \n          assembly_no, \n          booth_no, \n          family_name, \n          first_name, \n          party_preference,\n          gender,modifiedDate) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?,?)",
                    [
                        item.id,
                        item.age,
                        item.houseNo,
                        item.mobile,
                        item.pincode,
                        item.street,
                        item.voterId,
                        item.voterSegmentation,
                        item.acHash,
                        item.address,
                        item.wardNo,
                        item.srNo,
                        item.respondedStatus,
                        item.voted,
                        item.latitude,
                        item.longitude,
                        item.state,
                        item.assemblyNo,
                        item.boothNo,
                        item.familyName,
                        item.firstName,
                        item.partyPreference,
                        item.gender,
                        item.modifieddate
                    ]
                ]);
            }
            _this.db
                .sqlBatch(insertRows)
                .then(function (result) {
                var time = new Date().getTime();
                localStorage.setItem("last_synch_date", time.toString());
                resolve("success");
            })
                .catch(function (e) {
                reject(e);
                console.log(e);
            });
        });
    };
    MyCitizenDatabase.prototype.getUser = function () {
        this.db
            .executeSql("SELECT * FROM citizen", [])
            .then(function (data) {
        })
            .catch(function (e) { return console.log(e); });
    };
    MyCitizenDatabase.prototype.searchVoters = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "select * from citizen C where";
            var voterId = data["voterId"];
            var boothId = data["boothId"];
            var wardNo = data["wardNo"];
            var firstName = data["firstName"];
            var familyName = data["familyName"];
            var address = data["address"];
            var respondedStatus = data["respondedStatus"];
            var srno = data["srNo"];
            var wardNotFound = false;
            if (wardNo !== null && wardNo !== "" && wardNo != "All" && wardNo != -1) {
                sql = sql + (" C.ward_no in (" + wardNo + ") and");
            }
            else {
                wardNotFound = true;
            }
            if (boothId !== null && boothId !== "" && boothId != "-1" && boothId != -1) {
                if (wardNotFound && data["searchingWard"]) {
                    sql = sql + (" C.ward_no in (" + data["searchingWard"] + ") and");
                }
                sql = sql + (" C.booth_no = '" + boothId + "' and");
            }
            if (voterId != null && voterId !== "") {
                sql = sql + " C.voter_id like '%" + voterId + "%' and";
            }
            if (srno != null && srno !== "") {
                sql = sql + " C.srno = '" + srno + "' and";
            }
            if (firstName != null && firstName !== "" &&
                (familyName != null && familyName !== "") &&
                (address != null && address !== "")) {
                sql =
                    sql +
                        " C.first_name like '" +
                        firstName +
                        "%' and C.family_name like '" +
                        familyName +
                        "%' and C.address like '%" +
                        address +
                        "%' and";
            }
            else if (firstName != null &&
                firstName !== "" &&
                familyName != null &&
                familyName !== "") {
                sql =
                    sql +
                        " C.first_name like '" +
                        firstName +
                        "%' and C.family_name like '" +
                        familyName +
                        "%' and";
            }
            else if (firstName != null &&
                firstName !== "" &&
                address != null &&
                address !== "") {
                sql =
                    sql +
                        " C.first_name like '" +
                        firstName +
                        "%' and C.address like '%" +
                        address +
                        "%' and";
            }
            else if (familyName != null &&
                familyName !== "" &&
                address != null &&
                address !== "") {
                sql =
                    sql +
                        " C.family_name like '" +
                        familyName +
                        "%' and C.address like '%" +
                        address +
                        "%' and";
            }
            else if (firstName != null && firstName !== "") {
                sql = sql + " C.first_name like '" + firstName + "%' and";
            }
            else if (familyName != null && familyName !== "") {
                sql = sql + " C.family_name like '" + familyName + "%' and";
            }
            else if (address != null && address !== "") {
                sql = sql + " C.address like '%" + address + "%' and";
            }
            if (respondedStatus != null &&
                respondedStatus !== "" &&
                respondedStatus != "not visited" &&
                respondedStatus != "none") {
                sql = sql + " C.responded_status = '" + respondedStatus + "' and";
            }
            else if (respondedStatus == "not visited") {
                sql = sql + " C.responded_status is null and";
            }
            sql = sql + " C.id is not null order by C.srno asc ";
            if (firstName && firstName.length > 0) {
                sql = sql + " , C.first_name asc";
            }
            if (familyName && familyName.length > 0) {
                sql = sql + " ,C.family_name asc";
            }
            console.log("Sql******", sql);
            _this.db
                .executeSql(sql, [])
                .then(function (res) {
                var result = [];
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        result.push(res.rows.item(i));
                    }
                }
                return resolve(result);
            })
                .catch(function (e) { return resolve(e); });
        });
    };
    MyCitizenDatabase.prototype.postLocation = function (id, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .executeSql("update citizen set longitude ='" + value.longitude + "', latitude='" + value.latitude + "', volunteer_mobile ='" + localStorage.getItem("mobile") + "', modifiedDate= '" + new Date().toISOString() + "'  where id = " + id, [])
                .then(function (data) {
                resolve("Executed SQL");
            })
                .catch(function (e) {
                console.log(e);
                reject("Err");
            });
        });
    };
    MyCitizenDatabase.prototype.postPartys = function (id, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .executeSql("update citizen set party_preference ='" + value + "', responded_status = 'responded',modifiedDate= '" + new Date().toISOString() + "' where id = " + id, [])
                .then(function (data) {
                resolve("Executed SQL");
            })
                .catch(function (e) {
                console.log(e);
                reject("Err");
            });
        });
    };
    MyCitizenDatabase.prototype.postSegmentation = function (id, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .executeSql("update citizen set voter_segmentation ='" + value + "', responded_status = 'responded',modifiedDate= '" + new Date().toISOString() + "' where id = " + id, [])
                .then(function (data) {
                resolve("Executed SQL");
            })
                .catch(function (e) {
                console.log(e);
                reject("Err");
            });
        });
    };
    MyCitizenDatabase.prototype.postCitizenVoted = function (id, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .executeSql("update citizen set voted =" + value + ",responded_status = 'responded',modifiedDate= '" + new Date().toISOString() + "' where id = " + id, [])
                .then(function (data) {
                resolve("Executed SQL");
            })
                .catch(function (e) {
                console.log(e);
                reject("Err");
            });
        });
    };
    MyCitizenDatabase.prototype.postMobile = function (id, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .executeSql("update citizen set mobile ='" + value + "',responded_status = 'responded',modifiedDate= '" + new Date().toISOString() + "' where id = " + id, [])
                .then(function (data) {
                resolve("Executed SQL");
            })
                .catch(function (e) {
                console.log(e);
                reject("Err");
            });
        });
    };
    MyCitizenDatabase.prototype.postStatus = function (id, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db
                .executeSql("update citizen set responded_status = ? , modifiedDate= '" + new Date().toISOString() + "' where id = ?;", [value, id])
                .then(function (data) {
                resolve("Executed SQL");
            })
                .catch(function (e) {
                console.log(e);
                reject("Err");
            });
        });
    };
    MyCitizenDatabase.prototype.getDataToSync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var lastsyncDate = localStorage.getItem("last_synch_date");
            lastsyncDate = new Date(Number(lastsyncDate)).toISOString();
            var sql = "SELECT id , \n      age,  \n      mobile  , \n      voter_id as voterId, \n      voter_segmentation as voterSegmentation, \n      address, \n      srno,  \n      responded_status as respondedStatus, \n      voted , \n      latitude, \n      longitude, \n      party_preference as partyPreference,\n      modifiedDate,\n      volunteer_mobile as volunteerMobile\n      FROM citizen where modifiedDate >= '" + lastsyncDate + "'";
            _this.db
                .executeSql(sql, [])
                .then(function (res) {
                var result = [];
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        result.push(res.rows.item(i));
                    }
                }
                return resolve(result);
            })
                .catch(function (e) { return resolve(e); });
        });
    };
    MyCitizenDatabase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */]])
    ], MyCitizenDatabase);
    return MyCitizenDatabase;
}());

//# sourceMappingURL=citizen.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sync_sync__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_voters_search_voters__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_ward__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_booth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_citizen__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_survey_question__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_sqlite__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_survey_answers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_localdatasync_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var MyApp = (function () {
    function MyApp(platform, menu, app, splashScreen, statusBar, translate, alertCtrl, toastCtrl, push, events, network, wardProvider, boothProvider, myCitizenDatabase, surveyQuestionDatabase, mySurveyAnswerDatabase, sqlite, localdataSync) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.app = app;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.push = push;
        this.events = events;
        this.network = network;
        this.wardProvider = wardProvider;
        this.boothProvider = boothProvider;
        this.myCitizenDatabase = myCitizenDatabase;
        this.surveyQuestionDatabase = surveyQuestionDatabase;
        this.mySurveyAnswerDatabase = mySurveyAnswerDatabase;
        this.sqlite = sqlite;
        this.localdataSync = localdataSync;
        this.textDir = "ltr";
        this.imageUrl = "";
        platform.ready().then(function () {
            if (!localStorage.getItem('language')) {
                translate.setDefaultLang('en');
                translate.use('en');
            }
            else {
                translate.setDefaultLang('en');
                translate.use(localStorage.getItem('language'));
            }
            if (_this.network.type == 'none') {
                _this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
            }
            else {
                _this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
            }
            _this.splashScreen.hide();
            _this.statusBar.styleDefault();
            if (_this.platform.is('cordova')) {
                _this.localdataSync.checkDataTosync();
                _this.boothProvider.connectToDb();
                _this.wardProvider.connectToDb();
                _this.myCitizenDatabase.connectToDb();
                _this.mySurveyAnswerDatabase.connectToDb();
                _this.initPushNotification();
                _this.surveyQuestionDatabase.connectToDb().then(function () {
                    if (localStorage.getItem('volunteerId') == null) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */];
                    }
                    else {
                        if (_this.network.type != 'none') {
                            if (!localStorage.getItem('wardNo')) {
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_sync_sync__["a" /* SyncPage */];
                            }
                            else {
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__["a" /* dashboardPage */];
                            }
                        }
                        else {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_search_voters_search_voters__["a" /* SearchVotersPage */];
                        }
                    }
                }).catch(function (e) {
                    console.error('Local database not initialized.');
                });
            }
        });
        this.platform.registerBackButtonAction(function () {
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            if (activeView.name === 'ComplaintsPage' || activeView.name === 'SearchVotersResultPage' || activeView.name === 'SelectActionPage' || activeView.name === 'NotificationsPage') {
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Exit app',
                        message: 'Are you sure?',
                        cssClass: 'exit_alert',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    _this.nav.setRoot('ComplaintsPage');
                                }
                            }, {
                                text: 'Exit app',
                                handler: function () {
                                    _this.platform.exitApp();
                                }
                            }]
                    });
                    alert_1.present();
                }
            }
        });
        this.translate.onLangChange.subscribe(function (event) {
            if (event.lang == 'ar') {
                platform.setDir('rtl', true);
            }
            else {
                platform.setDir('ltr', true);
            }
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(_this.translate.get('Home'), _this.translate.get('Search Voters'), _this.translate.get('Language'), _this.translate.get('ContactUs'), _this.translate.get('Sync'), _this.translate.get('Logout')).subscribe(function (data) {
                _this.pages = [
                    { title: data[0], icon: 'home', component: __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__["a" /* dashboardPage */] },
                    { title: data[1], icon: 'search', component: __WEBPACK_IMPORTED_MODULE_13__pages_search_voters_search_voters__["a" /* SearchVotersPage */] },
                    { title: data[2], icon: 'settings', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] },
                    { title: data[3], icon: 'call', component: __WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__["a" /* ContactUsPage */] },
                    { title: data[4], icon: 'refresh', component: __WEBPACK_IMPORTED_MODULE_11__pages_sync_sync__["a" /* SyncPage */] },
                    { title: data[5], icon: 'log-out', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] }
                ];
                _this.pushPages = [];
            });
        });
    }
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        console.log("Inside push notification");
        this.push.hasPermission().then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We don\'t have permission to send push notifications');
            }
        });
        // to initialize push notifications
        var options = {
            android: {
                // senderID: '986571927369',
                senderID: '629040521479',
                sound: 'true',
                vibrate: 'true',
                icon: 'note'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'true'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            console.log("this.notificationData", notification);
            _this.notificationData = notification.additionalData.data;
            console.log("this.nav.getActive()", _this.nav.getActive());
            console.log("this.notificationData", _this.notificationData);
            if (notification.additionalData.foreground == false) {
                console.log("In False");
            }
            if (notification.additionalData.foreground == true) {
                console.log("In True");
                var alert_2 = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.message,
                    buttons: [{
                            text: 'Ok',
                            role: 'cancel'
                        }]
                });
                alert_2.present();
            }
            if (notification.additionalData.foreground == false) {
                // if(this.notificationData.type=="individual"){
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_notifications_notifications__["a" /* NotificationsPage */]);
                // }
            }
        });
        console.log('...................................');
        // debugger
        pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered', registration);
            localStorage.setItem('deviceId', registration.registrationId);
        });
        pushObject.on('error').subscribe(function (error) {
            return console.error('Error with Push plugin', error);
        });
        console.log('...................................');
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout',
            message: 'All the local data will be lost. Are you sure you want to logout? ',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.sqlite.deleteDatabase({
                            name: 'data.db',
                        }).then(function () {
                        }).catch(function (e) { return console.log(e); });
                        localStorage.clear();
                        _this.menu.close();
                        _this.nav.setRoot('SettingsPage');
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.icon == 'log-out') {
            var alert_3 = this.alertCtrl.create({
                title: 'Logout',
                message: 'All the local data will be lost. Are you sure you want to logout? ',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            _this.sqlite.deleteDatabase({
                                name: 'data.db',
                            }).then(function () {
                            }).catch(function (e) { return console.log(e); });
                            localStorage.clear();
                            _this.menu.close();
                            _this.nav.setRoot(page.component);
                        }
                    }
                ]
            });
            alert_3.present();
        }
        else {
            this.menu.close();
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.pushPage = function (page) {
        this.menu.close();
        this.app.getRootNav().push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="true">\n  <ion-content class="menu-content">\n  <div class="menu_logo">\n    <!-- <img class="menu_img" src="assets/images/Smartneta/BJP_logo.svg.png"> -->\n    <img class="menu_img" src="{{imageUrl}}">\n  </div>\n    <ion-list class="menu-list">\n      <button ion-item detail-none *ngFor="let page of pages" (click)="openPage(page)">\n        <ion-icon *ngIf="page.icon" name="{{page.icon}}" item-left></ion-icon>\n        {{page.title}}\n      </button>\n      <button ion-item detail-none *ngFor="let page of pushPages" (click)="pushPage(page)">\n        <ion-icon *ngIf="page.icon" name="{{page.icon}}" item-left></ion-icon>\n        {{page.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_14__providers_ward__["a" /* WardProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_booth__["a" /* BoothProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_citizen__["a" /* MyCitizenDatabase */],
            __WEBPACK_IMPORTED_MODULE_17__providers_survey_question__["a" /* MySurveyQuestionDatabase */],
            __WEBPACK_IMPORTED_MODULE_19__providers_survey_answers__["a" /* MySurveyAnswerDatabase */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_20__providers_localdatasync_service__["a" /* LocaldataSync */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySurveyAnswerDatabase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MySurveyAnswerDatabase = (function () {
    function MySurveyAnswerDatabase(sqlite) {
        this.sqlite = sqlite;
        this.connectToDb();
    }
    MySurveyAnswerDatabase.prototype.connectToDb = function () {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        }).then(function (db) {
            _this.db = db;
            db.executeSql('create TABLE IF NOT EXISTS survey_answers(answer TEXT)', [])
                .then(function () { return console.log('Executed SQL'); }).catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    MySurveyAnswerDatabase.prototype.addSurveyAnswer = function (data) {
        var _this = this;
        return new Promise(function (resolve, rej) {
            var insertRows = [];
            if (data.length > 0) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    insertRows.push(["INSERT INTO survey_answers (answer) VALUES (?)", [JSON.stringify(item)]]);
                }
                _this.db.sqlBatch(insertRows).then(function (result) {
                    resolve(result);
                }).catch(function (e) { return console.log(e); });
            }
            else {
                console.log('no survey answers');
                resolve('Nodata');
            }
        });
    };
    MySurveyAnswerDatabase.prototype.getDataToSync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM survey_answers", [])
                .then(function (res) {
                var result = [];
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        var ans = JSON.parse(res.rows.item(i).answer);
                        result.push(ans);
                    }
                }
                return resolve(result);
            }).catch(function (e) { return resolve(e); });
        });
    };
    MySurveyAnswerDatabase.prototype.deleteAnswers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("delete FROM survey_answers", [])
                .then(function (res) {
                return resolve('deleted');
            }).catch(function (e) { return resolve(e); });
        });
    };
    MySurveyAnswerDatabase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], MySurveyAnswerDatabase);
    return MySurveyAnswerDatabase;
}());

//# sourceMappingURL=survey_answers.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoothProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoothProvider = (function () {
    function BoothProvider(sqlite) {
        this.sqlite = sqlite;
    }
    BoothProvider.prototype.connectToDb = function () {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        }).then(function (db) {
            _this.boothdb = db;
            db.executeSql("create TABLE IF NOT EXISTS booth (id BIGINT(20) PRIMARY KEY,name TEXT NULL DEFAULT NULL,no TEXT NOT NULL,ward_id TEXT NOT NULL, ward_no TEXT NOT NULL, is_synced TEXT NOT NULL )", [])
                .then(function () { return console.log('Executed SQL'); }).catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    BoothProvider.prototype.addBooth = function (data) {
        var _this = this;
        var query = "DELETE FROM booth";
        this.boothdb.executeSql(query, [])
            .then(function (res) {
            ;
        }).catch(function (e) { return console.log(e); });
        return new Promise(function (resolve, reject) {
            var insertRows = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                insertRows.push(["INSERT OR REPLACE INTO booth (id , name, no,ward_id, ward_no,is_synced) VALUES (?, ?, ?,?,?,?)",
                    [item.id, item.name, item.no, !item.ward ? null : item.ward.id, !item.ward ? null : item.ward.no, 'false']
                ]);
            }
            _this.boothdb.sqlBatch(insertRows).then(function (result) {
                resolve('success');
            }).catch(function (e) {
                console.log(e);
                reject(e);
            });
        });
    };
    BoothProvider.prototype.updateSyncStatus = function (id) {
        var updateRow = "update booth set is_synced = 'true' where no in ('" + id + "')";
        this.boothdb.executeSql(updateRow, []).then(function (result) {
        }).catch(function (e) { return console.log(e); });
    };
    BoothProvider.prototype.getAllBooths = function (wardNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = [];
            var sql = '';
            if (wardNo == '-1' || wardNo == 'All') {
                sql = 'select * from booth';
            }
            else {
                sql = "select * from booth where ward_no in (" + wardNo + ");";
            }
            _this.boothdb.executeSql(sql, []).then(function (res) {
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        result.push(res.rows.item(i));
                    }
                }
                return resolve(result);
            }).catch(function (e) { return reject(e); });
        });
    };
    BoothProvider.prototype.getBoothNo = function (wardNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var result = [];
            var sql = '';
            if (wardNo == '-1') {
                sql = "select no from booth where is_synced = 'false'";
            }
            else {
                sql = "select no from booth where ward_no =" + wardNo + "  and is_synced = 'false'";
            }
            _this.boothdb.executeSql(sql, []).then(function (res) {
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        result.push(res.rows.item(i).no);
                    }
                }
                return resolve(result);
            }).catch(function (e) { return reject(e); });
        });
    };
    BoothProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], BoothProvider);
    return BoothProvider;
}());

//# sourceMappingURL=booth.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySurveyQuestionDatabase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MySurveyQuestionDatabase = (function () {
    function MySurveyQuestionDatabase(sqlite) {
        this.sqlite = sqlite;
    }
    MySurveyQuestionDatabase.prototype.connectToDb = function () {
        var _this = this;
        return new Promise(function (resolve, rej) {
            _this.sqlite.create({
                name: 'data.db',
                location: 'default'
            }).then(function (db) {
                _this.db = db;
                db.executeSql("create TABLE IF NOT EXISTS survey_question(id BIGINT(20) NOT NULL,question TEXT)", [])
                    .then(function (dara) {
                    resolve('Executed');
                }).catch(function (e) {
                    console.log(e);
                    rej(e);
                });
            })
                .catch(function (e) { console.log(e); rej(e); });
        });
    };
    MySurveyQuestionDatabase.prototype.addSurvey = function (data) {
        var _this = this;
        console.log("addSurvey");
        return new Promise(function (resolve, rej) {
            var sql = "delete from survey_question";
            _this.db.executeSql(sql, []).then(function (deleted) {
                var insertRows = "INSERT INTO survey_question (id ,question) VALUES (?, ?)";
                if (data.length > 0) {
                    _this.db.executeSql(insertRows, [1, JSON.stringify(data)]).then(function (result) {
                        resolve(result);
                    }).catch(function (e) { console.log(e); rej(e); });
                }
                else {
                    resolve('Nodata');
                }
            }).catch(function (e) { console.log(e); rej(e); });
        });
    };
    MySurveyQuestionDatabase.prototype.getSurveyQuestions = function () {
        var _this = this;
        return new Promise(function (resolve, rej) {
            var sql = "select * from survey_question";
            _this.db.executeSql(sql, []).then(function (res) {
                var result = [];
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        result.push(res.rows.item(i));
                    }
                }
                return resolve(result);
            }).catch(function (e) { console.log(e); rej(e); });
        });
    };
    MySurveyQuestionDatabase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], MySurveyQuestionDatabase);
    return MySurveyQuestionDatabase;
}());

//# sourceMappingURL=survey_question.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WardProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WardProvider = (function () {
    function WardProvider(sqlite) {
        this.sqlite = sqlite;
    }
    WardProvider.prototype.connectToDb = function () {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        }).then(function (db) {
            _this.warddb = db;
            db.executeSql("create TABLE IF NOT EXISTS ward (id BIGINT(20) PRIMARY KEY,name TEXT NULL DEFAULT NULL,no TEXT NOT NULL)", [])
                .then(function () { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    WardProvider.prototype.addWards = function (data) {
        var _this = this;
        var query = "DELETE FROM ward";
        this.warddb.executeSql(query, [])
            .then(function (res) {
        }).catch(function (e) { return console.log(e); });
        return new Promise(function (resolve, reject) {
            //////
            var insertRows = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                insertRows.push(["INSERT OR REPLACE INTO ward (id , name, no) VALUES (?, ?, ?)",
                    [item.id, item.name, item.no]
                ]);
            }
            _this.warddb.sqlBatch(insertRows).then(function (result) {
                resolve('success');
            }).catch(function (e) {
                console.log(e);
                reject(e);
            });
        });
    };
    WardProvider.prototype.getAllWards = function () {
        var _this = this;
        console.log("Enter getAllWards");
        return new Promise(function (resolve, reject) {
            var sql = 'select * from ward';
            _this.warddb.executeSql(sql, []).then(function (res) {
                var result = [];
                var arrLen = res.rows.length;
                if (arrLen > 0) {
                    for (var i = 0; i < arrLen; i++) {
                        result.push(res.rows.item(i));
                    }
                }
                return resolve(result);
            }).catch(function (e) {
                console.warn(e);
                reject(e);
            });
        });
    };
    WardProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], WardProvider);
    return WardProvider;
}());

//# sourceMappingURL=ward.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyPage = (function () {
    function PrivacyPolicyPage(view) {
        this.view = view;
    }
    PrivacyPolicyPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    PrivacyPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'privacy-policy-page',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/privacy-policy/privacy-policy.html"*/'<ion-header class="privacy-header legal-header">\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span showWhen="ios">{{\'CANCEL\' | translate}}</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      {{\'PRIVACY_POLICY\' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="privacy-content legal-content">\n  <p>{{\'LAST_MODIFIED\' | translate }}: Nov 14, 2016</p>\n  <h4 class="legal-title">{{\'WELCOME_TO\' | translate}} ion2FullApp!</h4>\n  <p>Thanks for using our products and services (“Services”). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n  <h4 class="legal-title">{{\'USING_OUR_SERVICES\' | translate}}</h4>\n  <p>You must follow any policies made available to you within the Services.</p>\n  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n  <h4 class="legal-title">{{\'ABOUT_THIS_TERMS\' | translate}}</h4>\n  <p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page. We’ll post notice of modified additional terms in the applicable Service. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should discontinue your use of that Service.</p>\n</ion-content>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/privacy-policy/privacy-policy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_google_map_google_map__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maps_service__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__maps_model__ = __webpack_require__(720);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MapsPage = (function () {
    function MapsPage(nav, loadingCtrl, toastCtrl, GoogleMapsService, geolocation, keyboard) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.GoogleMapsService = GoogleMapsService;
        this.geolocation = geolocation;
        this.keyboard = keyboard;
        this.map_model = new __WEBPACK_IMPORTED_MODULE_7__maps_model__["a" /* MapsModel */]();
    }
    MapsPage.prototype.ngOnInit = function () {
        var _this = this;
        var _loading = this.loadingCtrl.create();
        _loading.present();
        this._GoogleMap.$mapReady.subscribe(function (map) {
            _this.map_model.init(map);
            _loading.dismiss();
        });
    };
    MapsPage.prototype.searchPlacesPredictions = function (query) {
        var env = this;
        if (query !== "") {
            env.GoogleMapsService.getPlacePredictions(query).subscribe(function (places_predictions) {
                env.map_model.search_places_predictions = places_predictions;
            }, function (e) {
                console.log('onError: %s', e);
            }, function () {
                console.log('onCompleted');
            });
        }
        else {
            env.map_model.search_places_predictions = [];
        }
    };
    MapsPage.prototype.setOrigin = function (location) {
        var env = this;
        // Clean map
        env.map_model.cleanMap();
        // Set the origin for later directions
        env.map_model.directions_origin.location = location;
        env.map_model.addPlaceToMap(location, '#00e9d5');
        // With this result we should find restaurants (*places) arround this location and then show them in the map
        // Now we are able to search *restaurants near this location
        env.GoogleMapsService.getPlacesNearby(location).subscribe(function (nearby_places) {
            // Create a location bound to center the map based on the results
            var bound = new google.maps.LatLngBounds();
            for (var i = 0; i < nearby_places.length; i++) {
                bound.extend(nearby_places[i].geometry.location);
                env.map_model.addNearbyPlace(nearby_places[i]);
            }
            // Select first place to give a hint to the user about how this works
            env.choosePlace(env.map_model.nearby_places[0]);
            // To fit map with places
            env.map_model.map.fitBounds(bound);
        }, function (e) {
            console.log('onError: %s', e);
        }, function () {
            console.log('onCompleted');
        });
    };
    MapsPage.prototype.selectSearchResult = function (place) {
        var env = this;
        env.map_model.search_query = place.description;
        env.map_model.search_places_predictions = [];
        // We need to get the location from this place. Let's geocode this place!
        env.GoogleMapsService.geocodePlace(place.place_id).subscribe(function (place_location) {
            env.setOrigin(place_location);
        }, function (e) {
            console.log('onError: %s', e);
        }, function () {
            console.log('onCompleted');
        });
    };
    MapsPage.prototype.clearSearch = function () {
        var env = this;
        this.keyboard.close();
        // Clean map
        env.map_model.cleanMap();
    };
    MapsPage.prototype.geolocateMe = function () {
        var env = this, _loading = env.loadingCtrl.create();
        _loading.present();
        this.geolocation.getCurrentPosition().then(function (position) {
            var current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            env.map_model.search_query = position.coords.latitude.toFixed(2) + ", " + position.coords.longitude.toFixed(2);
            env.setOrigin(current_location);
            env.map_model.using_geolocation = true;
            _loading.dismiss();
        }).catch(function (error) {
            console.log('Error getting location', error);
            _loading.dismiss();
        });
    };
    MapsPage.prototype.choosePlace = function (place) {
        var _this = this;
        var env = this;
        // Check if the place is not already selected
        if (!place.selected) {
            // De-select previous places
            env.map_model.deselectPlaces();
            // Select current place
            place.select();
            // Get both route directions and distance between the two locations
            var directions_observable = env.GoogleMapsService
                .getDirections(env.map_model.directions_origin.location, place.location), distance_observable = env.GoogleMapsService
                .getDistanceMatrix(env.map_model.directions_origin.location, place.location);
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(directions_observable, distance_observable).subscribe(function (data) {
                var directions = data[0], distance = data[1].rows[0].elements[0].distance.text, duration = data[1].rows[0].elements[0].duration.text;
                env.map_model.directions_display.setDirections(directions);
                if (env.toast) {
                    env.toast.dismiss();
                }
                env.toast = _this.toastCtrl.create({
                    message: 'That\'s ' + distance + ' away and will take ' + duration,
                    duration: 2000
                });
                env.toast.present();
            }, function (e) {
                console.log('onError: %s', e);
            }, function () {
                console.log('onCompleted');
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__components_google_map_google_map__["a" /* GoogleMap */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_google_map_google_map__["a" /* GoogleMap */])
    ], MapsPage.prototype, "_GoogleMap", void 0);
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'maps-page',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/maps/maps.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'GOOGLE_MAPS\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row no-padding class="map-row">\n    <ion-col no-padding class="map-col">\n      <div class="search-container">\n        <!-- <ion-toolbar class="search-toolbar transparent-background"> -->\n        <ion-toolbar class="search-toolbar">\n          <ion-buttons start>\n            <button ion-button icon-only (click)="geolocateMe()" class="geolocation-button" [ngClass]="{\'using-geolocation\': map_model.using_geolocation}">\n              <ion-icon name="locate"></ion-icon>\n            </button>\n          </ion-buttons>\n          <ion-searchbar class="search-places-bar" placeholder="Search places near location" [(ngModel)]="map_model.search_query" (ionInput)="searchPlacesPredictions(map_model.search_query)" (ionClear)="clearSearch()"></ion-searchbar>\n        </ion-toolbar>\n        <ion-list [hidden]="map_model.search_places_predictions.length == 0" class="search-options-list">\n          <ion-item *ngFor="let place of map_model.search_places_predictions" tappable (click)="selectSearchResult(place)">\n            {{ place.description }}\n          </ion-item>\n        </ion-list>\n      </div>\n      <div class="map-container">\n        <google-map [options]="map_model.map_options"></google-map>\n      </div>\n      <ion-scroll [hidden]="map_model.nearby_places.length == 0" scrollX="true" class="nearby-places-container">\n        <ion-row class="nearby-places-row">\n          <ion-col width-64 class="place-item-outer" *ngFor="let place of map_model.nearby_places" [ngClass]="{\'selected-place\': place.selected}" (click)="choosePlace(place)">\n            <ion-card class="place-card">\n              <background-image class="place-image-heading" [src]="place.details.image">\n                <ion-row class="heading-row">\n                  <ion-col no-padding width-100>\n                    <h2 class="place-title">{{ place.details.name }}</h2>\n                  </ion-col>\n                </ion-row>\n              </background-image>\n              <div class="place-details-container">\n                <ion-row class="details-row">\n                  <ion-col no-padding width-50>\n                    <span class="opening-hours" [ngClass]="{\'opened\': (place.details && place.details.opening_hours && place.details.opening_hours.open_now), \'closed\': !(place.details && place.details.opening_hours && place.details.opening_hours.open_now)}">\n                      {{ (place.details && place.details.opening_hours && place.details.opening_hours.open_now) ? \'OPENED\' : \'CLOSED\' }}\n                    </span>\n                  </ion-col>\n                  <ion-col no-padding width-50>\n                    <div class="place-rating">\n                      <ion-item class="rating-item">\n                        <rating [(ngModel)]="place.details.rating" max="5" read-only="true"></rating>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <ion-list class="details-list" no-lines>\n                  <ion-item class="place-location">\n                    <ion-avatar item-left>\n                      <ion-icon name="pin"></ion-icon>\n                    </ion-avatar>\n                    <span class="location-text">{{ place.details.vicinity }}</span>\n                  </ion-item>\n                </ion-list>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-scroll>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/maps/maps.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__maps_service__["a" /* GoogleMapsService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsModel; });
/* unused harmony export MapPlace */
var MapsModel = (function () {
    function MapsModel() {
        this.map_options = {
            center: { lat: 40.785091, lng: -73.968285 },
            zoom: 13,
            disableDefaultUI: true
        };
        this.map_places = [];
        this.search_query = '';
        this.search_places_predictions = [];
        this.nearby_places = [];
        this.directions_origin = new MapPlace();
        this.using_geolocation = false;
    }
    // https://developers.google.com/maps/documentation/javascript/reference#Map
    MapsModel.prototype.init = function (map) {
        this.map = map;
        // https://developers.google.com/maps/documentation/javascript/reference#DirectionsRenderer
        this.directions_display = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true,
            preserveViewport: true
        });
    };
    MapsModel.prototype.cleanMap = function () {
        // Empty nearby places array
        this.nearby_places = [];
        // To clear previous directions
        // this.directions_display.setDirections({routes: []});
        // To remove all previous markers from the map
        this.map_places.forEach(function (place) {
            place.marker.setMap(null);
        });
        // Empty markers array
        this.map_places = [];
        this.using_geolocation = false;
    };
    MapsModel.prototype.addPlaceToMap = function (location, color) {
        if (color === void 0) { color = '#333333'; }
        var _map_place = new MapPlace();
        _map_place.location = location;
        _map_place.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: MapPlace.createIcon(color)
        });
        this.map_places.push(_map_place);
        return _map_place;
    };
    MapsModel.prototype.addNearbyPlace = function (place_result) {
        var _map_place = this.addPlaceToMap(place_result.geometry.location, '#666666');
        // This is an extra attribute for nearby places only
        _map_place.details = place_result;
        var getRandom = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        // Add a random image
        _map_place.details["image"] = "./assets/images/maps/place-" + getRandom(1, 9) + ".jpg";
        this.nearby_places.push(_map_place);
    };
    MapsModel.prototype.deselectPlaces = function () {
        this.nearby_places.forEach(function (place) {
            place.deselect();
        });
    };
    return MapsModel;
}());

var MapPlace = (function () {
    function MapPlace() {
        this.selected = false;
    }
    // https://developers.google.com/maps/documentation/javascript/reference#Symbol
    MapPlace.createIcon = function (color) {
        var _icon = {
            path: "M144 400c80 0 144 -60 144 -134c0 -104 -144 -282 -144 -282s-144 178 -144 282c0 74 64 134 144 134zM144 209c26 0 47 21 47 47s-21 47 -47 47s-47 -21 -47 -47s21 -47 47 -47z",
            fillColor: color,
            fillOpacity: .6,
            anchor: new google.maps.Point(0, 0),
            strokeWeight: 0,
            scale: 0.08,
            rotation: 180
        };
        return _icon;
    };
    MapPlace.prototype.setIcon = function (color) {
        this.marker.setIcon(MapPlace.createIcon(color));
    };
    MapPlace.prototype.deselect = function () {
        this.selected = false;
        this.setIcon('#666666');
    };
    MapPlace.prototype.select = function () {
        this.selected = true;
        this.setIcon('#ae75e7');
    };
    return MapPlace;
}());

//# sourceMappingURL=maps.model.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloadImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloadImage = (function () {
    function PreloadImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._img = new Image();
    }
    Object.defineProperty(PreloadImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImage.prototype, "ratio", {
        set: function (ratio) {
            this._ratio = ratio || null;
        },
        enumerable: true,
        configurable: true
    });
    PreloadImage.prototype.ngOnChanges = function (changes) {
        var ratio_height = (this._ratio.h / this._ratio.w * 100) + "%";
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'padding-bottom', ratio_height);
        this._update();
        // console.log("CHANGES preload-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    PreloadImage.prototype._update = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.alt)) {
            this._img.alt = this.alt;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.title)) {
            this._img.title = this.title;
        }
        this._img.addEventListener('load', function () {
            _this._elementRef.nativeElement.appendChild(_this._img);
            _this._loaded(true);
        });
        this._img.src = this._src;
        this._loaded(false);
    };
    PreloadImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PreloadImage.prototype, "alt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PreloadImage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PreloadImage.prototype, "src", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PreloadImage.prototype, "ratio", null);
    PreloadImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'preload-image',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/components/preload-image/preload-image.html"*/'<ion-spinner name="bubbles"></ion-spinner>\n<ng-content></ng-content>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/components/preload-image/preload-image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], PreloadImage);
    return PreloadImage;
}());

//# sourceMappingURL=preload-image.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundImage = (function () {
    function BackgroundImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
    }
    Object.defineProperty(BackgroundImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    BackgroundImage.prototype.ngOnChanges = function (changes) {
        this._update();
        // console.log("CHANGES background-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    BackgroundImage.prototype._update = function () {
        var _this = this;
        var img = new Image();
        img.addEventListener('load', function () {
            _this._elementRef.nativeElement.style.backgroundImage = 'url(' + _this._src + ')';
            _this._loaded(true);
        });
        img.src = this._src;
        this._loaded(false);
    };
    BackgroundImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BackgroundImage.prototype, "class", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BackgroundImage.prototype, "src", null);
    BackgroundImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'background-image',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/components/background-image/background-image.html"*/'<span class="bg-overlay"></span>\n<ion-spinner name="bubbles"></ion-spinner>\n<ng-content></ng-content>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/components/background-image/background-image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], BackgroundImage);
    return BackgroundImage;
}());

//# sourceMappingURL=background-image.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_hide_input__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowHideContainer = (function () {
    function ShowHideContainer() {
        this.show = false;
    }
    ShowHideContainer.prototype.toggleShow = function () {
        this.show = !this.show;
        if (this.show) {
            this.input.changeType("text");
        }
        else {
            this.input.changeType("password");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */])
    ], ShowHideContainer.prototype, "input", void 0);
    ShowHideContainer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'show-hide-container',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/components/show-hide-password/show-hide-password.html"*/'<ng-content></ng-content>\n<a class="type-toggle" (click)="toggleShow()">\n	<ion-icon class="show-option" [hidden]="show" name="eye"></ion-icon>\n	<ion-icon class="hide-option" [hidden]="!show" name="eye-off"></ion-icon>\n</a>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/components/show-hide-password/show-hide-password.html"*/,
            host: {
                'class': 'show-hide-password'
            }
        }),
        __metadata("design:paramtypes", [])
    ], ShowHideContainer);
    return ShowHideContainer;
}());

//# sourceMappingURL=show-hide-container.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorRadio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorRadio = (function () {
    function ColorRadio(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ColorRadio.prototype.setColor = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
        this.renderer.setElementStyle(this.el.nativeElement, 'borderColor', color);
    };
    ColorRadio.prototype.ngOnInit = function () {
        console.log(this.color);
        this.setColor(this.color);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('color-radio'),
        __metadata("design:type", String)
    ], ColorRadio.prototype, "color", void 0);
    ColorRadio = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[color-radio]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ColorRadio);
    return ColorRadio;
}());

//# sourceMappingURL=color-radio.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export counterRangeValidator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () { };
function counterRangeValidator(maxValue, minValue) {
    return function (c) {
        var err = {
            rangeError: {
                given: c.value,
                max: maxValue || 10,
                min: minValue || 0
            }
        };
        return (c.value > +maxValue || c.value < +minValue) ? err : null;
    };
}
var CounterInput = (function () {
    function CounterInput() {
        this.propagateChange = noop;
        this.validateFn = noop;
        this._counterValue = 0;
    }
    CounterInput_1 = CounterInput;
    Object.defineProperty(CounterInput.prototype, "counterValue", {
        get: function () {
            return this._counterValue;
        },
        set: function (val) {
            this._counterValue = val;
            this.propagateChange(val);
        },
        enumerable: true,
        configurable: true
    });
    CounterInput.prototype.ngOnChanges = function (inputs) {
        if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = counterRangeValidator(this.counterRangeMax, this.counterRangeMin);
        }
    };
    CounterInput.prototype.writeValue = function (value) {
        if (value) {
            this.counterValue = value;
        }
    };
    CounterInput.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CounterInput.prototype.registerOnTouched = function () { };
    CounterInput.prototype.increase = function () {
        this.counterValue++;
    };
    CounterInput.prototype.decrease = function () {
        this.counterValue--;
    };
    CounterInput.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('counterValue'),
        __metadata("design:type", Object)
    ], CounterInput.prototype, "_counterValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('max'),
        __metadata("design:type", Object)
    ], CounterInput.prototype, "counterRangeMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('min'),
        __metadata("design:type", Object)
    ], CounterInput.prototype, "counterRangeMin", void 0);
    CounterInput = CounterInput_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'counter-input',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/components/counter-input/counter-input.html"*/'<button ion-button icon-only class="counter-icon" (click)="decrease()">\n  <ion-icon name="remove"></ion-icon>\n</button>\n<span class="counter-inner">{{counterValue}}</span>\n<button ion-button icon-only class="counter-icon" (click)="increase()">\n  <ion-icon name="add"></ion-icon>\n</button>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/components/counter-input/counter-input.html"*/,
            host: {
                'class': 'counter-input'
            },
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CounterInput_1; }), multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CounterInput_1; }), multi: true }
            ]
        })
    ], CounterInput);
    return CounterInput;
    var CounterInput_1;
}());

//# sourceMappingURL=counter-input.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () { };
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Rating; }),
    multi: true
};
var Rating = (function () {
    function Rating() {
        this.max = 5;
        this.readOnly = false;
        this.propagateChange = noop;
    }
    Rating.prototype.ngOnInit = function () {
        var states = [];
        for (var i = 0; i < this.max; i++) {
            if (this.innerValue > i && this.innerValue < i + 1) {
                states[i] = 2;
            }
            else if (this.innerValue > i) {
                states[i] = 1;
            }
            else {
                states[i] = 0;
            }
        }
        this.range = states;
    };
    Object.defineProperty(Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.propagateChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Rating.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    Rating.prototype.registerOnTouched = function () { };
    Rating.prototype.rate = function (amount) {
        if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
            this.value = amount;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Rating.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('read-only'),
        __metadata("design:type", Object)
    ], Rating.prototype, "readOnly", void 0);
    Rating = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rating',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/components/rating/rating.html"*/'<button class="rating-icon" ion-button icon-only round *ngFor="let r of range; let i = index" (click)="rate(i + 1)">\n	<ion-icon [name]="value === undefined ? (r === 1 ? \'star\' : (r === 2 ? \'star-half\' : \'star-outline\')) : (value > i ? (value < i+1 ? \'star-half\' : \'star\') : \'star-outline\')"></ion-icon>\n</button>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/components/rating/rating.html"*/,
            providers: [RATING_CONTROL_VALUE_ACCESSOR]
        })
    ], Rating);
    return Rating;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Video stuff
// import { VgCoreModule } from 'videogular2/core';
// import { VgControlsModule } from 'videogular2/controls';
// import { VgOverlayPlayModule } from 'videogular2/overlay-play';
// import { VgBufferingModule } from 'videogular2/buffering';
var VideoPlayerModule = (function () {
    function VideoPlayerModule() {
    }
    VideoPlayerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: []
        })
    ], VideoPlayerModule);
    return VideoPlayerModule;
}());

//# sourceMappingURL=video-player.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ValidatorsModule = (function () {
    function ValidatorsModule() {
    }
    ValidatorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__["TextMaskModule"]
            ]
        })
    ], ValidatorsModule);
    return ValidatorsModule;
}());

//# sourceMappingURL=validators.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LanguageService = (function () {
    function LanguageService() {
        this.languages = new Array();
        this.languages.push({ name: "English", code: "en" }, { name: "Spanish", code: "es" }, { name: "Arabic", code: "ar" });
    }
    LanguageService.prototype.getLanguages = function () {
        return this.languages;
    };
    LanguageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LanguageService);
    return LanguageService;
}());

//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegComplaintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegComplaintsPage = (function () {
    function RegComplaintsPage(nav, loadingCtrl, commonService, navParams, translate) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.commonService = commonService;
        this.navParams = navParams;
        this.translate = translate;
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        this.status = this.translate.instant('All');
        this.cList = [];
        this.translate.use(localStorage.getItem('language'));
        this.citizenId = localStorage.getItem('citizenId');
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.getComplaints();
        this.getAllText();
    }
    RegComplaintsPage.prototype.getComplaints = function () {
        var _this = this;
        this.loading.present();
        this.commonService.getComplaints(this.citizenId).subscribe(function (res) {
            _this.complaints = res.data;
            _this.noRecords = _this.complaints.length;
            _this.complaintsCopy = _this.complaints;
            _this.loading.dismiss();
        }, function (err) {
            console.log("err", err);
            _this.loading.dismiss();
        });
    };
    RegComplaintsPage.prototype.onChange = function () {
        this.loading = this.loadingCtrl.create({
            content: "Loading...",
        });
        this.loading.present();
        for (var i = 0; i < this.complaintsCopy.length; i++) {
            if (this.status == this.translate.instant('All')) {
                this.complaints = this.complaintsCopy;
                this.cList = this.complaints;
            }
            else if (this.complaintsCopy[i].status != null) {
                if (this.status == this.translate.instant(this.complaintsCopy[i].status)) {
                    this.cList.push(this.complaintsCopy[i]);
                }
            }
        }
        this.complaints = this.cList;
        this.noRecords = this.complaints.length;
        this.cList = [];
        this.loading.dismiss();
    };
    RegComplaintsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
            _this.getAllText();
            _this.commonService.getComplaints(_this.citizenId).subscribe(function (res) {
                _this.complaints = res.data;
                _this.noRecords = _this.complaints.length;
                _this.complaintsCopy = _this.complaints;
                for (var i = 0; i < _this.complaintsCopy.length; i++) {
                    if (_this.status == _this.translate.instant('All')) {
                        _this.complaints = _this.complaintsCopy;
                        _this.cList = _this.complaints;
                    }
                    else if (_this.complaintsCopy[i].status != null) {
                        if (_this.status == _this.translate.instant(_this.complaintsCopy[i].status)) {
                            _this.cList.push(_this.complaintsCopy[i]);
                        }
                    }
                }
                _this.complaints = _this.cList;
                _this.noRecords = _this.complaints.length;
                _this.cList = [];
            }, function (err) {
                console.log("err", err);
            });
            refresher.complete();
        }, 2000);
    };
    RegComplaintsPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    RegComplaintsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'reg-complaints',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/registered_complaints/reg_complaints.html"*/'<ion-header class="login-header auth-header">\n        <ion-navbar>\n            <img class="logo" src="{{imageUrl}}">>\n            <button ion-button menuToggle>\n                <ion-icon class="menu_icon" name="menu"></ion-icon>\n            </button>\n        </ion-navbar>\n        <ion-row>\n            <ion-col col-5></ion-col>\n            <ion-col class="activity" col-7>\n                <ion-item class="items">\n                    <ion-select class="selectfrom" interface="popover" [(ngModel)]="status" (ionChange)="onChange()">\n                            <ion-option [value]="All" selected>{{\'All\' | translate}}</ion-option>\n                            <ion-option [value]="Assigned">{{\'Assigned\' | translate}}</ion-option>\n                            <ion-option [value]="Unassigned">{{\'Unassigned\' | translate}}</ion-option>\n                            <ion-option [value]="Inprogress">{{\'Inprogress\' | translate}}</ion-option>\n                            <ion-option [value]="Resolved">{{\'Resolved\' | translate}}</ion-option>\n                            <ion-option [value]="Ignored">{{\'Ignored\' | translate}}</ion-option>\n                    </ion-select>      \n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n    </ion-header>\n    \n    <ion-content class="login-content auth-content">\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n        <div class="buttons">\n            <h2 class="head">{{\'Registered complaints\' | translate}}</h2>\n            <ng-container *ngIf="noRecords != 0">\n            <ion-row class="space" *ngFor="let c of complaints">\n                <ion-col class="schedule-data1 shadow">\n                    <div class="data-item">            \n                        <div class="title">{{\'Complaint\' | translate}}:#{{c.incidentId}}</div>\n                        <div>{{\'Complaint date\' | translate}}:{{c.createdDate | date: \'dd/MM/yy\'}}</div>\n                        <div>{{\'Department\' | translate}}:{{c.subDepartment.department.name}}</div>\n                        <div>{{\'Sub\' | translate}}:{{c.subDepartment.name}}</div>\n                        <div>{{\'Comment\' | translate}}:{{c.complaint}}</div>\n                        <div>{{\'Status\' | translate}}:{{c.status | translate}}</div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ng-container>\n            <ion-row class="space" *ngIf="noRecords == 0">\n                    <ion-col class="schedule-data1 shadow">\n                        <div class="data-item">            \n                            <div class="title1">{{\'No records found\' | translate}}</div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n        </div>\n    </ion-content>\n\n    <ion-footer>\n        <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u class="privacy">Privacy Policy</u></a></p>\n    </ion-footer>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/registered_complaints/reg_complaints.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], RegComplaintsPage);
    return RegComplaintsPage;
}());

//# sourceMappingURL=reg_complaints.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_google_maps_google_maps__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connectivity_service_connectivity_service__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationSelect = (function () {
    function LocationSelect(navCtrl, connectivityService, zone, maps, platform, geolocation, viewCtrl) {
        this.navCtrl = navCtrl;
        this.connectivityService = connectivityService;
        this.zone = zone;
        this.maps = maps;
        this.platform = platform;
        this.geolocation = geolocation;
        this.viewCtrl = viewCtrl;
        this.query = '';
        this.places = [];
        this.searchDisabled = true;
        this.saveDisabled = false;
    }
    LocationSelect.prototype.ionViewDidLoad = function () {
        var _this = this;
        // debugger
        this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(function () {
            _this.autocompleteService = new google.maps.places.AutocompleteService();
            _this.placesService = new google.maps.places.PlacesService(_this.maps.map);
            _this.searchDisabled = false;
        });
    };
    LocationSelect.prototype.selectPlace = function (place) {
        var _this = this;
        this.query = place.description;
        this.places = [];
        var location = {
            lat: null,
            lng: null,
            name: place.name
        };
        this.placesService.getDetails({ placeId: place.place_id }, function (details) {
            _this.zone.run(function () {
                location.name = details.name;
                location.lat = details.geometry.location.lat();
                location.lng = details.geometry.location.lng();
                _this.maps.map.setCenter({ lat: location.lat, lng: location.lng });
                _this.location = location;
            });
            _this.maps.tessetMarker(location.lat, location.lng);
        });
    };
    LocationSelect.prototype.search = function (query) {
        console.log("query", query);
        this.maps.getLatLngFromAddress(query);
    };
    LocationSelect.prototype.searchPlace = function () {
        var _this = this;
        if (this.query.length > 0 && !this.searchDisabled) {
            var config = {
                types: ['geocode'],
                input: this.query
            };
            this.autocompleteService.getPlacePredictions(config, function (predictions, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                    _this.places = [];
                    predictions.forEach(function (prediction) {
                        _this.places.push(prediction);
                    });
                }
            });
        }
        else {
            this.places = [];
        }
    };
    LocationSelect.prototype.save = function () {
        if (this.location != undefined) {
            this.viewCtrl.dismiss(this.location);
        }
        else {
            this.location = {
                lat: this.maps.cur_lat,
                lng: this.maps.cur_lng,
            };
            this.viewCtrl.dismiss(this.location);
        }
    };
    LocationSelect.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], LocationSelect.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('pleaseConnect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], LocationSelect.prototype, "pleaseConnect", void 0);
    LocationSelect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-location-select',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/location-select/location-select.html"*/'\n\n<ion-header>\n  <ion-navbar color="primary">\n      <ion-buttons left>\n          <button ion-button (click)="close()">{{\'Cancel\' | translate}}</button>\n      </ion-buttons>\n      <ion-buttons right>\n          <button [disabled]="saveDisabled" ion-button (click)="save()">{{\'Save\' | translate}}</button>\n      </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar>\n      <ion-searchbar [(ngModel)]="query" (ionInput)="searchPlace()"></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-list>\n      <ion-item *ngFor="let place of places" (touchstart)="selectPlace(place)">{{place.description}}</ion-item>\n  </ion-list>\n\n</ion-header>\n\n<ion-content>\n\n  <div #pleaseConnect id="please-connect">\n      <p>{{\'Please connect to the Internet\' | translate}}</p>\n  </div>\n\n  <div #map id="map">\n      <ion-spinner></ion-spinner>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/location-select/location-select.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_connectivity_service_connectivity_service__["a" /* Connectivity */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3__providers_google_maps_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* ViewController */]])
    ], LocationSelect);
    return LocationSelect;
}());

//# sourceMappingURL=location-select.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsModalPage = (function () {
    function NewsModalPage(nav, loadingCtrl, navParams, commonService, translate, viewCtrl) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.translate = translate;
        this.viewCtrl = viewCtrl;
        this.translate.use(localStorage.getItem('language'));
        this.news = this.navParams.get('news');
        console.log("this.news", this.news);
    }
    NewsModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'news-modal',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/complaints/news-modal/news_modal.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n            <ion-buttons left>\n            <button ion-button (click)="dismiss()">\n                <ion-icon name="arrow-back" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <!-- <img class="logo" src="assets/images/Smartneta/BJP_logo.svg.png"> -->\n        <img class="logo" src="http://13.233.175.188:8585/open/mobile/logo.jpg">\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n        <ion-col class="news_header">{{news.header}}</ion-col>\n    </ion-row>\n    <ion-row style="height: 34%">\n        <ion-col class="news_image">\n            <img class="news_photo" src="http://13.233.175.188:8585/open/mobile/download-image/{{news.image}}">\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col class="news_desc">\n            <p>\n                {{news.details}}\n            </p>\n        </ion-col>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/complaints/news-modal/news_modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], NewsModalPage);
    return NewsModalPage;
}());

//# sourceMappingURL=news_modal.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyComplaintDatabase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyComplaintDatabase = (function () {
    function MyComplaintDatabase(sqlite) {
        this.sqlite = sqlite;
        this.connectToDb();
    }
    MyComplaintDatabase.prototype.connectToDb = function () {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (db) {
            _this.db = db;
            db.executeSql("create TABLE IF NOT EXISTS complaints(\n                      complaint TEXT NOT NULL,\n                      compliantSource TEXT NOT NULL,\n                      stateAssembly TEXT NOT NULL,\n                      voterId TEXT NOT NULL,\n                      citizen TEXT)", [])
                .then(function () { return console.log('Executed SQL'); }).catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    MyComplaintDatabase.prototype.addUser = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var insertRows = [];
            insertRows.push([
                "INSERT INTO complaints(complaint , compliantSource , stateAssembly,voterId ) VALUES (?, ?, ?, ?)",
                [item.complaint, item.compliantSource, JSON.stringify(item.stateAssembly), item.voterId]
            ]);
            _this.db.sqlBatch(insertRows).then(function (result) {
                resolve('success');
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    MyComplaintDatabase.prototype.upateUser = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var insertRows = [];
            insertRows.push([
                "INSERT INTO complaints(complaint , compliantSource , stateAssembly,voterId ,citizen) VALUES (?, ?, ?, ?,?)",
                [item.complaint, item.compliantSource, JSON.stringify(item.stateAssembly), item.citizen.voter_id, JSON.stringify(item.citizen)]
            ]);
            _this.db.sqlBatch(insertRows).then(function (result) {
                resolve('success');
            }).catch(function (e) {
                reject(e);
            });
        });
    };
    MyComplaintDatabase.prototype.getDataToSync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("SELECT * FROM complaints", [])
                .then(function (res) {
                var result = [];
                if (res.rows.length > 0) {
                    for (var i = 0; i < res.rows.length; i++) {
                        res.rows.item(i)['stateAssembly'] = JSON.parse(res.rows.item(i).stateAssembly);
                        if (res.rows.item(i)['citizen'] != null) {
                            res.rows.item(i)['citizen'] = JSON.parse(res.rows.item(i).citizen);
                        }
                        result.push(res.rows.item(i));
                    }
                }
                return resolve(result);
            }).catch(function (e) { return resolve(e); });
        });
    };
    MyComplaintDatabase.prototype.deleteComplaints = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.executeSql("delete FROM complaints", [])
                .then(function (res) {
                return resolve('deleted');
            }).catch(function (e) { return resolve(e); });
        });
    };
    MyComplaintDatabase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], MyComplaintDatabase);
    return MyComplaintDatabase;
}());

//# sourceMappingURL=complaint.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_checknetwork__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ward__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_booth__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_survey_question__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_localdatasync_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__settings_settings__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var dashboardPage = (function () {
    function dashboardPage(nav, loadingCtrl, navParams, toastCtrl, alertCtrl, commonService, translate, modalCtrl, wardProvider, boothProvider, events, network, localdataSync, MyNetwork, mySurveyQuestionDatabase) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.wardProvider = wardProvider;
        this.boothProvider = boothProvider;
        this.events = events;
        this.network = network;
        this.localdataSync = localdataSync;
        this.MyNetwork = MyNetwork;
        this.mySurveyQuestionDatabase = mySurveyQuestionDatabase;
        this.boothId = -1;
        this.searchWard = '';
        this.current_date = new Date();
        this.isPrefered = false;
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        this.getAllText();
        this.goToLoginPage();
        this.translate.use(localStorage.getItem('language'));
        this.constituencyId = localStorage.getItem('constituencyId');
        this.stateName = localStorage.getItem('stateName');
        this.assemblyNo = localStorage.getItem('assemblyNo');
        this.stateId = localStorage.getItem('stateId');
        this.wardId = localStorage.getItem('wardId');
        this.wardNo = localStorage.getItem('wardNo');
        this.last_synch_date = localStorage.getItem('last_synch_date');
        this.mobileNo = localStorage.getItem('mobile');
        if (this.wardNo == '-1') {
            this.isPrefered = false;
            this.ward = '-1';
            this.showWard();
        }
        else {
            this.isPrefered = true;
            this.ward = this.wardNo;
            this.showWard();
        }
    }
    dashboardPage.prototype.ionViewDidLoad = function () {
        this.getAllSurvey();
        if (this.network.type == 'none') {
            this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png';
        }
        else {
            this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
        }
    };
    dashboardPage.prototype.showWard = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Data...'
        });
        loading.present();
        this.wardProvider.getAllWards().then(function (data) {
            loading.dismissAll();
            _this.wardList = data;
            var obj = {
                no: "All",
                id: -1
            };
            _this.wardList.unshift(obj);
            if (localStorage.getItem('wardNo') == '-1') {
                _this.searchWard = '-1';
                _this.wardList.forEach(function (element, index) {
                    if (JSON.parse(localStorage.getItem('wardNo')) == element.no) {
                        _this.ward = _this.wardList[index];
                    }
                });
                _this.ward = _this.wardList[0];
                _this.showBooth();
            }
            else {
                _this.searchWard = localStorage.getItem('wardNo');
                _this.showBooth();
            }
        }).catch(function (err) {
            console.log(err);
            loading.dismissAll();
        });
    };
    dashboardPage.prototype.showBooth = function () {
        var _this = this;
        this.boothList = [];
        this.boothId = -1;
        this.selectedBooth = {};
        this.showDashboardData();
        this.boothProvider.getAllBooths(this.searchWard).then(function (data) {
            _this.boothList = data;
            var obj = {
                no: "None",
                id: -1
            };
            _this.boothList.unshift(obj);
            // this.showDashboardData();  
        }).catch(function (err) {
            console.log(err);
        });
    };
    dashboardPage.prototype.portChange = function (event) {
        this.boothId = event.value.id;
        this.showDashboardData();
    };
    dashboardPage.prototype.wardChange = function (event) {
        this.wardId = event.value.id;
        this.searchWard = event.value.no;
        this.showBooth();
    };
    dashboardPage.prototype.checkNetworkConnection = function () {
        var _this = this;
        this.MyNetwork.checkNetworkConnection();
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.showDashboardData();
        }, 5000);
    };
    dashboardPage.prototype.showDashboardData = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.commonService.getDashboardData(this.constituencyId, this.wardId, this.boothId).subscribe(function (res) {
            _this.voters = res.voters;
            _this.houses = res.houses;
            _this.status = res.status;
            loading.dismissAll();
            _this.commonService.getActionSettings(_this.stateId).subscribe(function (res) {
                loading.dismissAll();
                localStorage.setItem('actions', JSON.stringify(res.volunteerActions));
                localStorage.setItem('segmentations', JSON.stringify(res.segmentations));
            }, function (err) {
                console.log("err", err);
                loading.dismissAll();
            });
        }, function (err) {
            console.log("err", err);
            loading.dismissAll();
        });
    };
    dashboardPage.prototype.getAllText = function () {
        var _this = this;
        this.commonService.getData().subscribe(function (res) {
            _this.descText = res.data;
        }, function (err) {
            console.log("err", err);
        });
    };
    dashboardPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            dismissOnPageChange: true,
            duration: 3000
        });
        toast.present();
    };
    dashboardPage.prototype.getAllSurvey = function () {
        var _this = this;
        console.log("enter getAllSurvey");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.commonService.getSurveyQuestions(this.stateId, this.wardId).subscribe(function (res) {
            loading.dismissAll();
            _this.mySurveyQuestionDatabase.addSurvey(res.data).then(function () {
                loading.dismissAll();
            }).catch(function (e) {
            });
        }, function (err) {
            console.log("err", err);
            loading.dismissAll();
        });
    };
    dashboardPage.prototype.gotoNotification = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__notifications_notifications__["a" /* NotificationsPage */]);
    };
    dashboardPage.prototype.goToLoginPage = function () {
        var _this = this;
        console.log("mobile", localStorage.getItem('mobile'));
        this.commonService.goToLoginPage(localStorage.getItem('mobile')).subscribe(function (res) {
            console.log("Res go To Login Page", res);
            if (res.data) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Session Expired',
                    message: res.Message,
                    cssClass: 'exit_alert',
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                localStorage.clear();
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__settings_settings__["a" /* SettingsPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        }, function (err) {
            // this.loading.dismissAll();
        });
    };
    dashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',template:/*ion-inline-start:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/dashboard/dashboard.html"*/'<ion-header class="login-header auth-header">\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" class="menu_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n        <img class="logo" src="{{imageUrl}}">\n        <div id="ex4" float-right>\n            <span class="p1 fa-stack fa-2x has-badge" (click)="checkNetworkConnection()" *ngIf=\'localdataSync.anyChange\'\n                data-count="!">\n                <ion-icon class="refresh-icon" name="md-sync"></ion-icon>\n            </span>\n            <ion-icon class="refresh-icon1" name="md-sync" *ngIf=\'!localdataSync.anyChange\'></ion-icon>\n        </div>\n        <ion-buttons end style="display: flex !important;">\n            <button ion-button (click)="gotoNotification()">\n                <ion-icon name="ios-notifications" class="bell_icon"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n    <ion-item *ngIf="isPrefered">\n        <ion-label stacked class="textLabel">{{\'Ward Number\' | translate}}</ion-label>\n        <ion-input type="text" [disabled]=\'isPrefered\' [value]="ward"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!isPrefered">\n        <ion-label stacked class="textLabel">{{\'Ward Number\' | translate}} <span class="cla-imp">*</span></ion-label>\n        <ionic-selectable item-content [ngModelOptions]="{standalone: true}" [(ngModel)]="ward" [items]="wardList"\n            itemValueField="id" itemTextField="no" [canSearch]="true" (onChange)="wardChange($event)">\n            <ng-template ionicSelectableValueTemplate let-port="value">\n                {{port.no}}\n            </ng-template>\n        </ionic-selectable>\n    </ion-item>\n    <ion-item>\n        <ion-label stacked class="textLabel">{{\'Booth Number\' | translate}} <span class="cla-imp">*</span></ion-label>\n        <ionic-selectable item-content  [(ngModel)]="selectedBooth"  [items]="boothList" itemValueField="id" itemTextField="no" [canSearch]="true"\n            (onChange)="portChange($event)">\n            <ng-template ionicSelectableValueTemplate let-port="value">\n                {{port.no}}\n            </ng-template>\n        </ionic-selectable>\n    </ion-item>\n    <ion-row *ngIf="voters" class="space">\n        <ion-col class="schedule-data1 shadow">\n            <div class="data-item">\n                <div class="title">{{\'Voters\' | translate}}</div>\n                <div>{{\'Total\' | translate}}: {{voters.total}}</div>\n                <div>{{\'Responded\' | translate}}: {{voters.status.responded}}</div>\n                <div>{{\'Not at Home\' | translate}}: {{voters.status.notAtHome}}</div>\n                <div>{{\'Call Back\' | translate}}: {{voters.status.callBack}}</div>\n                <div>{{\'Refused\' | translate}}: {{voters.status.refused}}</div>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="houses" class="space">\n        <ion-col class="schedule-data1 shadow">\n            <div class="data-item">\n                <div class="title">{{\'Houses\' | translate}}</div>\n                <div>{{\'Total\' | translate}}: {{houses.total}}</div>\n                <div>{{\'Responded\' | translate}}: {{houses.status.responded}}</div>\n                <div>{{\'Not at Home\' | translate}}: {{houses.status.notAtHome}}</div>\n                <div>{{\'Call Back\' | translate}}: {{houses.status.callBack}}</div>\n                <div>{{\'Refused\' | translate}}: {{houses.status.refused}}</div>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-content>\n<ion-footer>\n    <p class="footer" *ngIf="descText!=undefined">&copy;{{descText.footer}} <a href="http://smartneta.com/privacy-policy/"><u\n                class="privacy">Privacy Policy</u></a></p>\n</ion-footer>\n'/*ion-inline-end:"/home/oem/dev/workspace/smartneta-volunteer/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ward__["a" /* WardProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_booth__["a" /* BoothProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_9__providers_localdatasync_service__["a" /* LocaldataSync */],
            __WEBPACK_IMPORTED_MODULE_3__providers_checknetwork__["a" /* MyNetwork */], __WEBPACK_IMPORTED_MODULE_8__providers_survey_question__["a" /* MySurveyQuestionDatabase */]])
    ], dashboardPage);
    return dashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

},[387]);
//# sourceMappingURL=main.js.map