import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams,ModalController,Events } from 'ionic-angular';
import { CommonService } from '../../providers/common.service';
import { TranslateService } from '@ngx-translate/core';
import {Network} from '@ionic-native/network'

@Component({
  selector: 'search-voters-view-location',
  templateUrl: 'search-voters-view-location.html'
})
export class SearchVotersViewLocationPage {
  item : any;
  srno : any;
  SearchNearBy = [];
  noRecords:number;
  descText:any;
  imageUrl:string="";
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams,
    public commonService:CommonService,public translate: TranslateService,
    public modalCtrl: ModalController,public events: Events,public network:Network) {
      this.getAllText();
      this.translate.use(localStorage.getItem('language'));    
    this.item = this.navParams.get('item');
    this.srno = this.item.srno;
  }   

  ionViewDidLoad() {
    if(this.network.type == 'none'){
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    }else{
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    } 
  }

  getAllText(){
    this.commonService.getData().subscribe(res=>{
      this.descText = res.data;
    },err=>{
      console.log("err",err)
    });
  }

  showSearchNearBy(){
    this.commonService.getSearchNearByVoters(this.srno).subscribe(res=>{
      this.SearchNearBy = res.data;
      this.noRecords = this.SearchNearBy.length;
    },err=>{
      console.log("err",err)
    });
  }

}