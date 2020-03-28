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
  selector: 'other-information',
  templateUrl: 'other-information.html'
})
export class OtherInformationPage {
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

    this.form = new FormGroup({
      firstname: new FormControl('', Validators.required)
    });
    this.citizenInfo = this.navParams.get('item'); 
    this.getVoterOtherInfo();
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

  getVoterOtherInfo(){
    this.loading = this.loadingCtrl.create({
      content: '',
    });
    this.loading.present();
    this.commonService.getVoterOtherInfo(this.citizenId).subscribe(res=>{
      this.complaints = res.data;
      this.noRecords = this.complaints.length;
      this.loading.dismissAll();
    },err=>{
      console.log("err",err)
      this.loading.dismissAll();
    });
  }

  showSurveyQuestions() {
    this.loading = this.loadingCtrl.create({
      content: '',
    });
    this.loading.present().then(() => {
      this.mySurveyQuestionDatabase.getSurveyQuestions().then((res:any) => {
        this.loading.dismissAll();
        if(res.length > 0){
          this.questionlist = JSON.parse(res[0].question);
          this.noRecords = this.questionlist.length;
        }
      });     
    }).catch(e => {
      this.loading.dismissAll();
      console.log('Something went wrong in State');
    
    });
  }

  postAnswer(){
    let postData = [];

    let data = {};
    let child = {};
    
    for(var i=0; i<this.questionlist.length; i++){
      data = {};
      child = {};
      data['citizen'] = {id:this.citizenId};
      data['volunteer'] = {id:this.volunteerId};
      data['surveyQuestion'] = {id:this.questionlist[i].id};
      data['modifiedDate']=  new Date().getTime();

      if(this.questionlist[i].childQuestion){
        child['citizen'] = {id:this.citizenId};
        child['volunteer'] = {id:this.volunteerId};
        child['surveyQuestion'] = {id:this.questionlist[i].childQuestion.id};
        child['modifiedDate']=  new Date().getTime();
        if(this.questionlist[i].childQuestion.type == 'Multi Choice'){
          let ans = '';
         for(var j=0;j<this.questionlist[i].childQuestion.value.length;j++){
          ans = ans + this.questionlist[i].childQuestion.value[j];
          if(this.questionlist[i].childQuestion.value.length-1 != j){
            ans = ans + ',';  
          }
         }
         child['answer'] = ans; 
        }else{
          child['answer'] = this.questionlist[i].childQuestion.value;
        }
        postData.push(child);
      }
      
      if(this.questionlist[i].type == 'Multi Choice'){
        let ans = '';
       for(let j=0; j < this.questionlist[i].value.length; j++){
        ans = ans + this.questionlist[i].value[j];
        if(this.questionlist[i].value.length-1 != j){
          ans = ans + ',';  
        }
       }
       data['answer'] = ans; 
      }else{
        data['answer'] = this.questionlist[i].value;
      }
      postData.push(data);
    }
    
    this.loading = this.loadingCtrl.create({
      content: '',
    });
    this.loading.present().then(()=>{
      this.mySurveyAnswerDatabase.addSurveyAnswer(postData).then((res) => {
        this.myCitizenDatabase.postStatus(this.citizenId,'responded').then(()=>{
          this.loading.dismissAll();
          this.presentToast("Updated successfully");
          localStorage.setItem('unsynched_data','true');
          this.localdataSync.checkDataTosync()
          this.navCtrl.pop();
        }).catch(e=>{
          console.log(e);
          this.loading.dismissAll();
          this.presentToast("Updated successfully");
          localStorage.setItem('unsynched_data','true');
          this.localdataSync.checkDataTosync();
          this.navCtrl.pop();
        })
        
      }).catch(err=>{
        console.log("err",err.error)
        this.loading.dismissAll();
        this.presentToast("internal server error");
      });
    })
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