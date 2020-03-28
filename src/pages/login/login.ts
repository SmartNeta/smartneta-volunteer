import { Component } from "@angular/core";
import { NavController, LoadingController, ToastController, MenuController } from "ionic-angular";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { OtpPage } from "../otp/otp";
import { CommonService } from "../../providers/common.service";

@Component({
  selector: "login-page",
  templateUrl: "login.html"
})
export class LoginPage {
  statelist = [];
  constituencylist = [];
  parliamentarylist = [];
  wardlist = [];
  login: FormGroup;
  res: any;
  main_page: { component: any };
  loading: any;
  statename: any;
  imageUrl: string = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();

  constructor(
    public navCtrl: NavController,
    public commonService: CommonService,
    public menu: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {


    this.login = new FormGroup({
      state: new FormControl("", Validators.required),
      constituency: new FormControl("", Validators.required),
      parliamentary: new FormControl("", Validators.required),
      mobile: new FormControl("", Validators.required)
    });

    this.showState();
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }

  showState() {;
    this.commonService.getState().subscribe(
      res => {
        this.statelist = res.states;
      },
      error => {
        console.log('Something went wrong in State');
      }
    );
  }

  showConstituency(id) {
    this.loading = this.loadingCtrl.create({
      content: ""
    });
    this.loading.present();
    this.commonService.getConstituencys(id).subscribe(
      res => {
        this.loading.dismissAll();
        this.constituencylist = res.assemblyConstituencys;
      },
      error => {
        this.loading.dismissAll();
        console.log("Something went wrong in State");
      }
    );
  }

  showParliamentary(id) {
    this.loading = this.loadingCtrl.create({
      content: ""
    });
    this.loading.present();
    this.commonService.getParliamentary(id).subscribe(
      res => {
        this.loading.dismissAll();
        this.parliamentarylist = res.parliamentaryConstituencys;
      },
      error => {
        this.loading.dismissAll();
        console.log("Something went wrong in State");
      }
    );
  }

  doLogin() {
    let data = {};
    data["mobile"] = this.login.value.mobile;
    data["assemblyConstituencyId"] = this.login.value.constituency;
    this.loading = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loading.present();
    this.commonService.generateOTP(data).subscribe(
      resp => {
        this.res = resp;
        this.loading.dismissAll();
        if (this.res.msg == "success") {
          this.navCtrl.push(OtpPage, {
            mobile: this.login.value.mobile,
            stateId: this.login.value.state,
            constituencyId: this.login.value.constituency
          });
        } else {
          this.presentToast(this.res.msg);
        }
      },
      err => {
        this.loading.dismissAll();
        this.presentToast(err.statusText);
        console.log("err", err);
      }
    );
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      position: "bottom",
      dismissOnPageChange: true,
      duration: 3000
    });
    toast.present();
  }
}
