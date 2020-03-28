import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController, LoadingController, NavParams, ToastController, ModalController, Events } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { CommonService } from '../../providers/common.service';
import { TranslateService } from '@ngx-translate/core';
import { BoothProvider } from '../../providers/booth'
import { Network } from '@ionic-native/network'
import { MyComplaintDatabase } from '../../providers/complaint'
import { MyNetwork } from '../../providers/checknetwork';
import { LocaldataSync} from '../../providers/localdatasync.service'

@Component({
  selector: 'add-new-voters',
  templateUrl: 'add-new-voters.html'
})
export class AddNewVotersPage {
  form: FormGroup;
  loading: any;
  item: any;
  bootlist = [];
  wardNo: any;
  stateId: any;
  descText: any;
  imageUrl: string = "";

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public navParams: NavParams, public commonService: CommonService,
    public translate: TranslateService, public modalCtrl: ModalController,
    public events: Events, public toastCtrl: ToastController,
    public boothProvider: BoothProvider,
    public myComplaintDatabase: MyComplaintDatabase, 
    public network: Network,public MyNetwork:MyNetwork,
    public localdataSync: LocaldataSync) {
    if (this.network.type == 'none') {
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    } else {
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }
    this.getAllText();
    this.translate.use(localStorage.getItem('language'));
    this.stateId = localStorage.getItem('stateId');
    this.wardNo = localStorage.getItem('wardNo');
    this.showBooth();

    this.form = new FormGroup({
      voterid: new FormControl('', Validators.required),
      familyname: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      pollingstation: new FormControl(''),
      address: new FormControl('')

    });

  }

  ionViewDidLoad() {
    this.myComplaintDatabase.connectToDb();
    if (this.network.type == 'none') {
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    } else {
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }
  }


  back() {
    this.navCtrl.pop();
  }

  checkNetworkConnection() {
    this.MyNetwork.checkNetworkConnection();
  }

  getAllText() {
    this.commonService.getData().subscribe(res => {
      this.descText = res.data;
    }, err => {
      console.log("err", err)
    });
  }

  showBooth() {
    this.loading = this.loadingCtrl.create({
      content: '',
    });
    this.loading.present();
    this.boothProvider.getAllBooths(this.wardNo).then((data: any) => {
      this.bootlist = data;
      this.loading.dismissAll();
    }).catch((err) => {
      console.log(err)
      this.loading.dismissAll();
    })
  }

  addNewVoters() {
    let data = {};
    data['complaint'] = `voterId:${this.form.value.voterid};
    family:${this.form.value.familyname};
    firstName:${this.form.value.firstname};
    gender:${this.form.value.gender};
    age:${this.form.value.age};
    pollingstation:${this.form.value.pollingstation};
    address:${this.form.value.address};`;
    data['name'] = "create voter";
    data['compliantSource'] = "Volunteer";
    data['stateAssembly'] = { id: this.stateId };
    data['voterId'] = this.form.value.voterid;
    this.loading = this.loadingCtrl.create({
      content: '',
    });
    this.loading.present();
    this.myComplaintDatabase.addUser(data).then((res) => {
      this.loading.dismissAll();
      this.presentToast("Add successfully");
      localStorage.setItem('unsynched_data','true');
      this.localdataSync.checkDataTosync()
      this.navCtrl.pop();
    }).catch((err: any) => {
      this.loading.dismissAll();
    });

  }
  gotoNotification(){
    this.navCtrl.push(NotificationsPage)
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