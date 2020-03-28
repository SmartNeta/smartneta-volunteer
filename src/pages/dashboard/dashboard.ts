import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, ModalController, Events, ToastController, AlertController } from 'ionic-angular';
import { CommonService } from '../../providers/common.service';
import { MyNetwork } from '../../providers/checknetwork';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network';
import { WardProvider } from '../../providers/ward';
import { BoothProvider } from '../../providers/booth';
import { IonicSelectableComponent } from 'ionic-selectable';
import { FormGroup } from '@angular/forms';
import { MySurveyQuestionDatabase } from '../../providers/survey_question';
import { LocaldataSync } from '../../providers/localdatasync.service'
import { NotificationsPage } from '../notifications/notifications';
import { SettingsPage } from '../settings/settings';
import { ResolvedStaticSymbol } from '@angular/compiler';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class dashboardPage {
  form: FormGroup;
  loading: any;
  wardId: any;
  wardNo: any;
  wardname: any;
  boothId = -1;
  ward: any
  wardList: any;
  searchWard = '';
  boothList: any;
  stateId: any;
  current_date = new Date();
  constituencyId: any;
  stateName: any;
  assemblyNo: any;
  descText: any;
  isPrefered = false;
  imageUrl: string = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
  voters: any;
  houses: any;
  status: any;
  last_synch_date: any;
  currentDate: any;
  selectedBooth: any;
  mobileNo: any;
  constructor(public nav: NavController, public loadingCtrl: LoadingController,
    public navParams: NavParams, public toastCtrl: ToastController,
    private alertCtrl: AlertController, public commonService: CommonService,
    public translate: TranslateService, public modalCtrl: ModalController,
    public wardProvider: WardProvider, public boothProvider: BoothProvider,
    public events: Events, private network: Network, public localdataSync: LocaldataSync,
    public MyNetwork: MyNetwork, public mySurveyQuestionDatabase: MySurveyQuestionDatabase) {
    this.getAllText();
    this.goToLoginPage();
    this.translate.use(localStorage.getItem('language'));
    this.constituencyId = localStorage.getItem('constituencyId');
    this.stateName = localStorage.getItem('stateName');
    this.assemblyNo = localStorage.getItem('assemblyNo');
    this.stateId = localStorage.getItem('stateId');
    this.wardId = localStorage.getItem('wardId');
    this.wardNo = localStorage.getItem('wardNo');
    this.last_synch_date = localStorage.getItem('last_synch_date');
    this.mobileNo = localStorage.getItem('mobile');
    if (this.wardNo == '-1') {
      this.isPrefered = false;
      this.ward = '-1';
      this.showWard();
    } else {
      this.isPrefered = true;
      this.ward = this.wardNo;
      this.showWard();
    }    
  }

  ionViewDidLoad() {
    this.getAllSurvey();
    if (this.network.type == 'none') {
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    } else {
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }

    
  }

  showWard() {
    let loading = this.loadingCtrl.create({
      content: 'Loading Data...'
    });
    loading.present();
    this.wardProvider.getAllWards().then((data) => {
      loading.dismissAll();
      this.wardList = data;
      let obj = {
        no: "All",
        id: -1
      };
      this.wardList.unshift(obj);
      if (localStorage.getItem('wardNo') == '-1') {
        this.searchWard = '-1';
        this.wardList.forEach((element, index) => {
          if (JSON.parse(localStorage.getItem('wardNo')) == element.no) {
            this.ward = this.wardList[index];
          }
        });
        this.ward = this.wardList[0];
        this.showBooth();    
      }else{
        this.searchWard = localStorage.getItem('wardNo');
        this.showBooth();
      }          
    }).catch((err) => {
      console.log(err);
      loading.dismissAll();
    })
  }

  showBooth() {
    this.boothList = [];
    this.boothId = -1;
    this.selectedBooth = {};
    this.showDashboardData();
    this.boothProvider.getAllBooths(this.searchWard).then((data) => {
      this.boothList = data;
      let obj = {
        no: "None",
        id: -1
      };
      this.boothList.unshift(obj);
      // this.showDashboardData();  
    }).catch((err) => {
      console.log(err);
    })
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.boothId = event.value.id;
    this.showDashboardData();
  }

  wardChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.wardId= event.value.id;
    this.searchWard = event.value.no;
    this.showBooth();
  }

  checkNetworkConnection() {
    this.MyNetwork.checkNetworkConnection();
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.showDashboardData();
    }, 5000);
  }

  showDashboardData() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.commonService.getDashboardData(this.constituencyId, this.wardId, this.boothId).subscribe(res => {
      this.voters = res.voters;
      this.houses = res.houses;
      this.status = res.status;
      loading.dismissAll();
      this.commonService.getActionSettings(this.stateId).subscribe(res => {
        loading.dismissAll();
        localStorage.setItem('actions', JSON.stringify(res.volunteerActions));
        localStorage.setItem('segmentations', JSON.stringify(res.segmentations));
      }, err => {
        console.log("err", err)
        loading.dismissAll();
      });
    }, err => {
      console.log("err", err);
      loading.dismissAll();
    });
  }


  getAllText() {
    this.commonService.getData().subscribe(res => {
      this.descText = res.data;
    }, err => {
      console.log("err", err);
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
  
  getAllSurvey() {
    console.log("enter getAllSurvey");
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.commonService.getSurveyQuestions(this.stateId, this.wardId).subscribe(res => {
      loading.dismissAll();
      this.mySurveyQuestionDatabase.addSurvey(res.data).then(() => {
      loading.dismissAll();
      }).catch(e => {
      })
    }, err => {
      console.log("err", err)
      loading.dismissAll();
    });
  }

  gotoNotification(){
    this.nav.push(NotificationsPage)
  }

  goToLoginPage() {
    console.log("mobile",  localStorage.getItem('mobile'));
    this.commonService.goToLoginPage(localStorage.getItem('mobile')).subscribe(res => {
      console.log("Res go To Login Page", res);
      if (res.data) {
        let alert = this.alertCtrl.create({
          title: 'Session Expired',
          message: res.Message,
          cssClass: 'exit_alert',
          enableBackdropDismiss: false,
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                localStorage.clear();
                this.nav.setRoot(SettingsPage);
              }
            }
          ]
        });
        alert.present();   
      }
    }, err => {
      // this.loading.dismissAll();
    });
  }
}