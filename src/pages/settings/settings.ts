import { Component } from '@angular/core';
import { NavController, LoadingController, MenuController, AlertController, ModalController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../providers/common.service';
import { Network } from '@ionic-native/network';
import { MyNetwork } from '../../providers/checknetwork';
import { LocaldataSync } from '../../providers/localdatasync.service';
import { LoginPage } from '../login/login';
import { NotificationsPage } from '../notifications/notifications'

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  lang: any;
  isLoggedin: any;
  descText: any;
  imageUrl: string = "";
  selectedPrinter: any = [];
  hideOption = false;

  constructor(public nav: NavController, public loadingCtrl: LoadingController,
    public translate: TranslateService, public commonService: CommonService,
    public network: Network, public MyNetwork: MyNetwork, public alertCtrl: AlertController,
    public toastCtrl: ToastController, private modalCtrl: ModalController,
    public localdataSync: LocaldataSync, public menu: MenuController) {
    if (!localStorage.getItem('volunteerId')) {
      this.isLoggedin = false;
      localStorage.removeItem("language");
    } else {
      this.isLoggedin = true;
    }
    if (localStorage.getItem("language") != undefined) {
      this.translate.use(localStorage.getItem("language"));
      this.lang = localStorage.getItem("language");
    } else {
      this.lang = "none";
    }
    if (this.network.type == 'none') {
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    } else {
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }
    this.getAllText();
  }
  ionViewDidEnter() {
    if (!localStorage.getItem('volunteerId')) {
      this.menu.swipeEnable(false);
    }
  }
  checkNetworkConnection() {
    this.MyNetwork.checkNetworkConnection();
  }

  switchLanguage() {
    if (this.lang != 'none') {
      localStorage.setItem('language', this.lang);
      this.translate.use(this.lang);
      if (!localStorage.getItem('volunteerId')) {
        this.nav.setRoot(LoginPage);
      }
    } else {
      this.presentToast('Select language')
    }
  }

  getAllText() {
    this.commonService.getData().subscribe(res => {
      this.descText = res.data;
    }, err => {
      console.log("err", err)
    });
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

  changeOption() {
    this.hideOption = true;
  }
  gotoNotification() {
    this.nav.push(NotificationsPage);
  }
}