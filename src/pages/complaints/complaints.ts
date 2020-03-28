import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, ModalController, Events } from 'ionic-angular';
import { CommonService } from '../../providers/common.service';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network'
@Component({
  selector: 'complaints',
  templateUrl: 'complaints.html'
})
export class ComplaintsPage {
  lang: any;
  citizenId: any;
  totalCount: number;
  complaints: Array<any> = []
  stateId: any;
  news: any;
  descText: any;
  imageUrl: string = "";
  constructor(public nav: NavController, public loadingCtrl: LoadingController,
    public navParams: NavParams, public commonService: CommonService,
    public translate: TranslateService, public modalCtrl: ModalController,
    public events: Events, public network: Network) {
    this.getAllText();
    this.translate.use(localStorage.getItem('language'));
    this.citizenId = this.navParams.get('citizenId');
    events.subscribe('notification:received', (note) => {
      console.log("note", note);
    });
  }

  ionViewDidLoad() {
    this.getNotifications();
    console.log("Hello ionViewDidLoad");
    if (this.network.type == 'none') {
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    } else {
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }
  }
  getNotifications() {
    this.commonService.getComplaints(this.citizenId).subscribe(res => {
      this.complaints = res.data;
    }, err => {
      console.log("err", err)
    });
  }

  getAllText() {
    this.commonService.getData().subscribe(res => {
      console.log('res', res);
      this.descText = res.data;
    }, err => {
      console.log("err", err)
    });
  }
}