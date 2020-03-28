import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, ModalController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../providers/common.service';
import { Network } from '@ionic-native/network';
import { MyNetwork } from '../../providers/checknetwork';
import { LocaldataSync } from '../../providers/localdatasync.service';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  selector: 'contact-us',
  templateUrl: 'contact_us.html'
})
export class ContactUsPage {
  descText: any;
  imageUrl: string = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
  constructor(public nav: NavController, public loadingCtrl: LoadingController,
    public navParams: NavParams, public translate: TranslateService,
    public modalCtrl: ModalController, public commonService: CommonService,
    public network: Network, private MyNetwork: MyNetwork, public localdataSync: LocaldataSync, ) {
    this.translate.use(localStorage.getItem('language'));
    this.getAllText();
    if (this.network.type == 'none') {
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    } else {
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }
  }

  getAllText() {
    this.commonService.getData().subscribe(res => {
      this.descText = res.data;
    }, err => {
      console.log("err", err)
    });
  }
  checkNetworkConnection() {
    this.MyNetwork.checkNetworkConnection();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      if (this.network.type == 'none') {
        this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
      } else {
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
      }
      this.getAllText();
      refresher.complete();
    }, 2000);
  }
  gotoNotification() {
    this.nav.push(NotificationsPage)
  }
}