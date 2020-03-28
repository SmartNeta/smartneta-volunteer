import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, NavParams, AlertController, LoadingController, ToastController, Platform } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms'
import { CommonService } from '../../providers/common.service';
import { ComplaintsPage } from '../complaints/complaints';
import { Network } from '@ionic-native/network';
import { dashboardPage } from '../dashboard/dashboard'
import { SyncPage } from '../sync/sync'
import { SearchVotersPage } from '../search-voters/search-voters'
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  form: FormGroup;
  loading: any;
  otp: any;
  mobile: any;
  deviceType:any;
  stateId: any;
  constituencyId: any;
  statename: any;
  allowedToCreateUser = true;
  allowedToUpdateUser = true;
  assemblyno: any;
  volunteerId: any;
  res: any;
  message: any;
  unsynched_data: any = null;
  last_synch_date: any = -1;
  imageUrl: string = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
  @ViewChild('otp1') otp1;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, public commonService: CommonService,
    public androidPermissions: AndroidPermissions, public platform: Platform,
    private network: Network, public menu: MenuController) {

    this.mobile = this.navParams.get('mobile');
    this.stateId = this.navParams.get('stateId');
    this.constituencyId = this.navParams.get('constituencyId');
    localStorage.setItem('last_synch_date', this.last_synch_date);
    localStorage.setItem('unsynched_data', this.unsynched_data);
    
    this.form = new FormGroup({
      otp: new FormControl('', Validators.required),
    });
    if (this.platform.is('ios')) {
      this.deviceType = "ios"
    }else if (this.platform.is('android')){
      this.deviceType = "android"
    }
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  
  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }


  submit() {
    let data = {};

    data['otp'] = this.form.value.otp;
    if (data['otp'].length != 4) {
      this.presentToast('Invalid OTP');
      return false;
    }
    data['mobile'] = this.mobile;
    data['assemblyConstituencyId'] = this.constituencyId;
    data['deviceId'] = localStorage.getItem('deviceId');
    data['deviceType'] =   this.deviceType;
    this.loading = this.loadingCtrl.create({
      content: "Loading...",
    });
    this.loading.present();
    this.commonService.verifyOTP(data).subscribe(data => {
      if (data.msg == 'success') {
        this.res = data;
        this.volunteerId = this.res.volunteer.id;
        this.statename = this.res.volunteer.assemblyConstituency.parliamentaryConstituency.district.stateAssembly.state;
        this.assemblyno = this.res.volunteer.assemblyConstituency.no;
        this.loading.dismissAll();
        
        localStorage.setItem('allowedToCreateUser',this.res.volunteer.assemblyConstituency.parliamentaryConstituency.district.stateAssembly.createCitizen)
        localStorage.setItem('allowedToUpdateUser',this.res.volunteer.assemblyConstituency.parliamentaryConstituency.district.stateAssembly.updateCitizen)
        localStorage.setItem('mobile', this.mobile);
        localStorage.setItem('stateId', this.stateId);
        localStorage.setItem('stateName', this.statename);
        localStorage.setItem('constituencyId', this.constituencyId);
        localStorage.setItem('assemblyNo', this.assemblyno);
        localStorage.setItem('volunteerId', this.volunteerId);
        if (localStorage.getItem('last_synch_date') === undefined) {
          localStorage.setItem('last_synch_date', this.last_synch_date);
          localStorage.setItem('unsynched_data', this.unsynched_data);
        }

        if (this.network.type) {
          if (localStorage.getItem('wardNo')) {
            this.navCtrl.setRoot(dashboardPage);
          } else {
            this.navCtrl.setRoot(SyncPage);
          }
        } else {
          this.navCtrl.setRoot(SearchVotersPage);
        }
      } else {
        this.loading.dismissAll();
        this.presentToast("Invalid OTP");
      }
    }, err => {
      console.log('err', err);
      this.loading.dismissAll();
      this.presentToast('Invalid OTP!!');
    });
  }

  ReSendOTP() {
    let data = {};
    this.loading = this.loadingCtrl.create({
      content: "Loading...",
    });
    this.loading.present();
    data['mobile'] = this.mobile;
    data['assemblyConstituencyId'] = this.constituencyId;
    this.commonService.generateOTP(data).subscribe(resp => {

      this.res = resp;
      this.loading.dismissAll();
      if (this.res.msg == 'success') {
        this.presentToast("Request for OTP initiated");
      } else {
        this.presentToast(this.res.msg);
      }
    }, err => {
      this.loading.dismissAll();
      console.log('err', err);
    });
  }


  next(el) {
    el.setFocus();
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (!inputChar) {
      return false;
    }
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      position: 'bottom',
      dismissOnPageChange: true,
      duration: 3000
    });
    toast.present();
  }
}