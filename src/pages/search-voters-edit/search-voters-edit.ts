import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController, LoadingController, ToastController, NavParams, ModalController, Events } from 'ionic-angular';
import { CommonService } from '../../providers/common.service';
import { TranslateService } from '@ngx-translate/core';
 import { Network } from '@ionic-native/network';
import {MyComplaintDatabase} from '../../providers/complaint'
import {LocaldataSync} from '../../providers/localdatasync.service';

@Component({
  selector: 'search-voters-edit',
  templateUrl: 'search-voters-edit.html'
})
export class SearchVotersEditPage {
  form: FormGroup;
  loading: any;
  item: any;
  stateId:any;
  descText:any;
  imageUrl: string = "";
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams,
    public commonService: CommonService, public translate: TranslateService,
     public modalCtrl: ModalController, public events: Events, public localdataSync: LocaldataSync,
     public network:Network, public toastCtrl: ToastController, public myComplaintDatabase: MyComplaintDatabase) {
    this.getAllText();
    this.translate.use(localStorage.getItem('language'));

    this.stateId = localStorage.getItem('stateId');
   
    this.form = new FormGroup({
      voterId: new FormControl(''),
      familyname: new FormControl(''),
      firstname: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl(''),
      pollingstation: new FormControl(''),
      address: new FormControl('')

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

  ionViewDidLoad() {
    this.myComplaintDatabase.connectToDb();
    if(this.network.type == 'none'){
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    }else{
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    } 
  }


  back() {
    this.navCtrl.pop();
  }

  getAllText(){
    this.commonService.getData().subscribe(res=>{
      this.descText = res.data;
    },err=>{
      console.log("err",err)
    });
  }

  EditSearchVoters() {
    let data = {};    
    data['complaint'] = `family:${this.form.value.familyname};
    firstName:${this.form.value.firstname};
    gender:${this.form.value.gender};
    age:${this.form.value.age};
    pollingstation:${this.form.value.pollingstation};
    address:${this.form.value.address};`;
    data['name'] = "update voter";
    data['compliantSource'] = "Volunteer";
    data['stateAssembly'] = {id:this.stateId};
    data['citizen'] = this.item;
    this.loading = this.loadingCtrl.create({
      content: '',
    });
    this.loading.present();
    this.myComplaintDatabase.upateUser(data).then((res) => {
        this.loading.dismissAll();        
        localStorage.setItem('unsynched_data','true');
        this.localdataSync.checkDataTosync()
        this.presentToast("Updated successfully");
        this.navCtrl.pop();
    }).catch((err:any)=>{
      this.loading.dismissAll();
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
}