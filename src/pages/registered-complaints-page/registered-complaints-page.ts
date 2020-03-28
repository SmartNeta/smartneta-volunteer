import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController, LoadingController, NavParams,ToastController, ModalController,Events } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { CommonService } from '../../providers/common.service';
import { TranslateService } from '@ngx-translate/core';
import { MySurveyQuestionDatabase } from '../../providers/survey_question'
import { MySurveyAnswerDatabase } from '../../providers/survey_answers'
import { MyCitizenDatabase} from '../../providers/citizen'
import { Network} from '@ionic-native/network';
import { MyNetwork } from '../../providers/checknetwork';
import { LocaldataSync} from '../../providers/localdatasync.service';

@Component({
  selector: 'registered-complaints-page',
  templateUrl: 'registered-complaints-page.html'
})
export class RegisteredComplaintsPage {
  form: FormGroup;
  loading: any;
  answer: any;
  item:any;
  wardNo:any;
  wardId:any;
  volunteerId:any;
  citizenId:any;
  questionlist = [];
  
  citizenInfo = [];
  noRecords:number;
  complaints:any;
  complaintsCopy:any;

  descText:any;
  imageUrl:string="";

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams,
    public commonService:CommonService,public translate: TranslateService,public modalCtrl: ModalController,
    public events: Events, public toastCtrl: ToastController,public MyNetwork:MyNetwork,
     public mySurveyQuestionDatabase: MySurveyQuestionDatabase, public network : Network,
    public mySurveyAnswerDatabase: MySurveyAnswerDatabase,
    public localdataSync:LocaldataSync, public myCitizenDatabase: MyCitizenDatabase) {
     
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

  ionViewDidLoad() {
    if(this.network.type == 'none'){
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    }else{
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    } 
  }

  checkNetworkConnection() {
    this.MyNetwork.checkNetworkConnection();
  }

  back(){
    this.navCtrl.pop();
  }

  getAllText(){
    this.commonService.getData().subscribe(res=>{
      this.descText = res.data;
    },err=>{
      console.log("err",err)
    });
  }

  getComplaints(){
    this.loading = this.loadingCtrl.create({
      content: '',
    });
    this.loading.present();
    this.commonService.getComplaints(this.citizenId).subscribe(res=>{
    
      this.complaints = res.data;
      this.noRecords = this.complaints.length;
      this.complaintsCopy = this.complaints;
      this.loading.dismissAll();
    },err=>{
      console.log("err",err)
      this.loading.dismissAll();
    });
  }

   presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }
  gotoNotification(){
    this.navCtrl.push(NotificationsPage)
  }
}