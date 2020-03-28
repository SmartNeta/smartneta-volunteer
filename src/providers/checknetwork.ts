import { Injectable } from "@angular/core";
import { Network } from '@ionic-native/network';
import { LoadingController, ToastController, AlertController } from 'ionic-angular';
import { LocaldataSync } from './localdatasync.service';
@Injectable()
export class MyNetwork {

  public online = true;

  constructor(private network: Network,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private localdataSync: LocaldataSync) {
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.presentToast('You are now offline!!!')
      this.online = false;
    });

    let connectSubscription = this.network.onConnect().subscribe(() => {
      this.presentToast('You are now online!!!')
      this.online = true;
    });
  }

  checkNetworkConnection() {
    if (this.network.type == "none") {
      this.presentToast('No Internet Connection');
    } else if (this.network.type == "2g") {
      let alert = this.alertCtrl.create({
        title: 'warning',
        message: 'Slow Internet Connection',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {;
            }
          },
          {
            text: 'Ok',
            handler: () => {
              this.localdataSync.syncComplaints().then(res => {
              }).catch(e => {
                console.log(e);
              })
            }
          }
        ]
      });
      alert.present();
    } else {
      this.localdataSync.syncComplaints().then(res => {
      }).catch(e => {
        console.log(e);
      })
      this.localdataSync.syncSurveyAns().then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e);
      })
      this.localdataSync.syncCitizen().then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e);
      })
    }
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