import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, ModalController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { CommonService } from '../../providers/common.service';
import { TranslateService } from '@ngx-translate/core';
import { SearchVotersEditPage } from '../search-voters-edit/search-voters-edit';
import { SearchVotersViewLocationPage } from '../search-voters-view-location/search-voters-view-location';
import { AddNewVotersPage } from '../add-new-voters/add-new-voters';
import { SelectActionPage } from '../select-action/select-action';
import { Network } from '@ionic-native/network'
import { MyNetwork } from '../../providers/checknetwork';
import { LocaldataSync } from '../../providers/localdatasync.service'
import { ComplaintsPage } from '../complaints/complaints'
import { CitizenDetailsPage } from '../citizen-details/citizen-details'

@Component({
  selector: 'search-voters-result',
  templateUrl: 'search-voters-result.html'
})
export class SearchVotersResultPage {
  searchlist = [];
  searchlistFinal = [];
  noRecords: number;
  boothName = '';
  offset = 0;
  limit = 50;
  createUser = "true";
  updateUser = "true";
  
  descText: any;
  imageUrl: string = "";
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController, public navParams: NavParams, public localdataSync: LocaldataSync,
    public commonService: CommonService, public translate: TranslateService,
    public modalCtrl: ModalController, public network: Network, public MyNetwork: MyNetwork) {
    this.getAllText();
    this.translate.use(localStorage.getItem('language'));
    this.searchlist = this.navParams.get('searchlist');
    this.offset = 0;
    this.searchlistFinal = [];
    for (let index = 0; index < this.limit; index++) {
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

  ionViewDidLoad() {
    if (this.network.type == 'none') {
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    } else {
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }
  }

  checkNetworkConnection() {
    this.MyNetwork.checkNetworkConnection()
  }

  getAllText() {
    this.commonService.getData().subscribe(res => {
      this.descText = res.data;
    }, err => {
      console.log("err", err)
    });
  }

  searchEdit(item) {
    this.navCtrl.push(SearchVotersEditPage, { item: item });
  }

  SearchViewLocation(item) {
    this.navCtrl.push(SearchVotersViewLocationPage, { item: item });
  }

  ShowAddNewVotersPage() {
    this.navCtrl.push(AddNewVotersPage);
  }

  ShowSelectActionPage(item) {
    this.navCtrl.push(SelectActionPage, { item: item, boothName: this.boothName });
  }
  showComplaintPage(id) {
    this.navCtrl.push(ComplaintsPage, { citizenId: id });
  }
  ShowMoreDetailPage(id) {
    this.navCtrl.push(CitizenDetailsPage, { citizenId: id });
  }
  gotoNotification() {
    this.navCtrl.push(NotificationsPage);
  }
  loadMore(infiniteScroll) {
    for (let index = 0; index < this.limit; index++) {
      if (this.searchlist[this.offset]) {
        this.searchlistFinal.push(this.searchlist[this.offset]);
        this.offset = this.offset + 1;
      }
    }
    infiniteScroll.complete();
  }
}