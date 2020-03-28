import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams, ModalController, Events, ToastController, AlertController } from 'ionic-angular';
import { CommonService } from '../../providers/common.service';
import { MyNetwork } from '../../providers/checknetwork';
import { MyCitizenDatabase } from '../../providers/citizen';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network';
import { IonicSelectableComponent } from 'ionic-selectable';
import { WardProvider } from '../../providers/ward';
import { BoothProvider } from '../../providers/booth';
import { dashboardPage } from '../dashboard/dashboard';
import { LocaldataSync } from '../../providers/localdatasync.service';
import { forkJoin } from "rxjs/observable/forkJoin";
import { NotificationsPage } from '../notifications/notifications';
class wardlist {
  public id: number;
  public name: string;
}
import { from } from 'rxjs/observable/from';
@Component({
  selector: 'sync',
  templateUrl: 'sync.html'
})
export class SyncPage implements OnInit {
  wardlist: any;
  ward: wardlist;
  loading: any;
  wardId: any;
  loading1: any;
  wardNo: any;
  wardDefault: any;
  wardname: any;
  x = 0;
  y = 0
  z = 0;
  localWardList = []
  syncingstatus = '';
  enableSpinner: boolean = false;
  current_date = new Date();
  constituencyId: any;
  isSyncing = false;
  selectedWard = false;
  stateName: any;
  stateId: any;
  assemblyNo: any;
  descText: any;
  imageUrl: string = "";
  voters: any;
  houses: any;
  status: any;
  last_synch_date: any;
  currentDate: any;

  constructor(public nav: NavController, public loadingCtrl: LoadingController,
    public navParams: NavParams, public toastCtrl: ToastController,
    private alertCtrl: AlertController, public commonService: CommonService,
    public translate: TranslateService, public modalCtrl: ModalController,
    public events: Events, private network: Network, public MyNetwork: MyNetwork,
    public MyCitizenDatabase: MyCitizenDatabase, public wardProvider: WardProvider,
    public boothProvider: BoothProvider, public localdataSync: LocaldataSync) {
    if (this.network.type == 'none') {
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    } else {
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }
  }

  ngOnInit() {
    this.getAllText();
    this.translate.use(localStorage.getItem('language'));
    if (!localStorage.getItem('wardNo')) {
      this.wardNo = '-1';
      this.wardId = '-1';
      localStorage.setItem('wardNo', '-1');
      localStorage.setItem('wardId', '-1');
    } else {
      this.wardId = localStorage.getItem('wardId');
      this.wardNo = localStorage.getItem('wardNo');
    }

    this.constituencyId = localStorage.getItem('constituencyId');
    this.stateName = localStorage.getItem('stateName');
    this.stateId = localStorage.getItem('stateId');
    this.assemblyNo = localStorage.getItem('assemblyNo');
    this.last_synch_date = localStorage.getItem('last_synch_date');
    this.getWardBooth();
  }
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.selectedWard = true;
    this.wardDefault = event;
  }

  ionViewDidLoad() {
    if (this.network.type == 'none') {
      this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
    } else {
      this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }
  }

  checkNetworkConnection() {
    this.MyCitizenDatabase.getUser();
    this.MyNetwork.checkNetworkConnection();
  }

  sync() {
    if (localStorage.getItem('last_synch_date') == '-1') {
      this.syncData();
    } else if (this.selectedWard) {
      if (this.wardDefault.value.no == localStorage.getItem('wardNo') || (localStorage.getItem('wardId') == '-1' && this.wardDefault.value.no == 'All')) {
        this.syncData();
      } else {
        let alert = this.alertCtrl.create({
          title: 'Sync',
          message: 'All the previous data will be lost. Are you sure you want to sync? ',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');

              }
            },
            {
              text: 'Ok',
              handler: () => {
                this.syncData1();
              }
            }
          ]
        });
        alert.present();
      }
    } else {
      this.syncData();
    }
  }

  syncData1() {
    this.localWardList = []
    this.enableSpinner = true;
    this.isSyncing = true;
    if (this.selectedWard) {
      this.selectedWard = false;
      if (this.wardDefault.value.no == 'All') {
        this.wardNo = '-1';
        localStorage.setItem('wardId', '-1');
      } else {
        this.wardNo = this.wardDefault.value.no
        localStorage.setItem('wardId', this.wardDefault.value.id);
        this.wardId = this.wardDefault.value.id
      }
    }
    localStorage.setItem('wardNo', this.wardNo);
    localStorage.setItem('last_synch_date', '-1');

    this.MyCitizenDatabase.deleteCitizens().then(() => {
      this.showPartys().then(() => {
        if (this.wardNo == '-1') {
          this.wardProvider.getAllWards().then((wardRes: any) => {
            let calls = [];
            this.localWardList = wardRes;
            this.y = wardRes.length;
            if (wardRes.length > 0) {
              for (let index = 0; index < wardRes.length; index++) {
                const call = this.commonService.getCitizens(this.stateName, this.assemblyNo, wardRes[index].no, -1, -1, [])
                calls.push(call);
                this.x++;
                this.syncingstatus = 'inprogress';
              }
              forkJoin(calls).subscribe(results => {
                this.z = results.length;
                if (results.length > 0) {
                  let finalResult = []
                  for (let index = 0; index < results.length; index++) {
                    this.addAllCitizens(results[index]).then(() => {
                    })
                  }
                  this.syncingstatus = 'completed';
                  setTimeout(() => {
                    this.enableSpinner = false;
                    this.nav.setRoot(dashboardPage);
                  }, 3000);
                }
                // }
              });
            }
          }).catch(e => {
          })
        } else {
          this.y = 1;
          const call = this.commonService.getCitizens(this.stateName, this.assemblyNo, this.wardNo, -1, -1, [])
          this.x = 1;
          forkJoin([call]).subscribe(results => {
            this.z = 1;
            if (results.length > 0) {
              this.addAllCitizens(results[0]).then(() => {
                this.syncingstatus = 'completed';
                setTimeout(() => {
                  this.enableSpinner = false;
                  this.nav.setRoot(dashboardPage);
                }, 3000);
              })
            }
          });
        }
      })
    }).catch(e => {
    })
  }

  syncData() {
    this.isSyncing = true;
    this.enableSpinner = true;
    this.localWardList = [];
    if (this.selectedWard) {
      this.selectedWard = false;
      if (this.wardDefault.value.no == 'All') {
        this.wardNo = '-1';
        localStorage.setItem('wardId', '-1');
      } else {
        this.wardNo = this.wardDefault.value.no
        localStorage.setItem('wardId', this.wardDefault.value.id);
      }
    }
    localStorage.setItem('wardNo', this.wardNo);
    localStorage.setItem('last_synch_date', '-1');

    this.showPartys().then(() => {
      if (this.wardNo == '-1') {
        this.wardProvider.getAllWards().then((wardRes: any) => {
          this.localWardList = wardRes;
          let calls = [];
          this.y = wardRes.length;
          if (wardRes.length > 0) {
            for (let index = 0; index < wardRes.length; index++) {
              const call = this.commonService.getCitizens(this.stateName, this.assemblyNo, wardRes[index].no, this.last_synch_date, -1, [])
              calls.push(call);
              this.x++;
              this.syncingstatus = 'inprogress';
            }
            forkJoin(calls).subscribe(results => {
              this.z = results.length;
              if (results.length > 0) {
                let finalResult = []
                for (let index = 0; index < results.length; index++) {
                  this.addAllCitizens(results[index]).then(() => {
                  })
                }
                this.syncingstatus = 'completed';
                setTimeout(() => {
                  this.enableSpinner = false;
                  this.nav.setRoot(dashboardPage);
                }, 3000);
              }
            });
          }
        }).catch(e => {
          console.warn("err", e)
        })
      } else {
        this.y = 1;
        const call = this.commonService.getCitizens(this.stateName, this.assemblyNo, this.wardNo, this.last_synch_date, -1, [])
        this.x = 1;
        forkJoin([call]).subscribe(results => {
          this.z = 1;
          this.addAllCitizens(results[0]).then(() => {
            setTimeout(() => {
              this.enableSpinner = false;
              this.nav.setRoot(dashboardPage);
            }, 3000);
          })
        });
      }
    })
  }

  getAllText() {
    this.commonService.getData().subscribe(res => {
      this.descText = res.data;
    }, err => {
      console.warn("err", err)
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

  addAllCitizens(res) {
    return new Promise((resolve, reject) => {
      this.MyCitizenDatabase.addUser(res).then((response) => {
        resolve(response)
      }).catch(e => {
        resolve(e)
      })
    })
  }

  getWardBooth() {
    this.loading = this.loadingCtrl.create({
      content: `Fetching data....`
    });
    this.commonService.getWards(this.constituencyId).subscribe(res => {
      if (res.wards.length > 0) {
        this.wardProvider.addWards(res.wards).then(() => {
          this.loading.dismiss();
        })
        this.wardlist = res.wards;
        let obj = {
          no: "All",
          id: -1
        };
        this.wardlist.unshift(obj);
        if (localStorage.getItem('wardNo') == '-1') {
          this.ward = this.wardlist[0];
        } else {
          this.wardlist.forEach((element, index) => {
            if (JSON.parse(localStorage.getItem('wardNo')) == element.no) {
              this.ward = this.wardlist[index];
            }
          });
        }
      }
      this.loading = this.loadingCtrl.create({
        content: `Saving data...`
      });
      if (res.booths.length > 0) {
        this.boothProvider.addBooth(res.booths).then(() => {
          this.loading.dismiss();
        })
      }
    }, err => {
      console.log("err", err)
      this.loading.dismiss();
    });
  }

  showPartys() {
    return new Promise((resolve, reject) => {
      this.commonService.getPartys(this.constituencyId, this.wardId).subscribe((res) => {
        localStorage.setItem('electionParty', JSON.stringify(res.Data));
        resolve(true);
      }, error => {
        resolve(true);
      }, () => {
      });
    })
  }
  gotoNotification() {
    this.nav.push(NotificationsPage);
  }
}