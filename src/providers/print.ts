import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Geolocation } from "@ionic-native/geolocation";
import { CommonService } from '../providers/common.service';

@Injectable()
export class PrintProvider {
  loading: any;
  latitude: any;
  longitude: any;

  constructor(private btSerial: BluetoothSerial, private alertCtrl: AlertController,
    private geolocation: Geolocation, public loadingCtrl: LoadingController,
    public commonService: CommonService) { }

  searchBt() {
    console.log("this.btSerial.list", this.btSerial.list());
    return this.btSerial.list();
  }

  connectBT(address) {
    return this.btSerial.connect(address);
  }

  testPrint(foo, body, voter_id) {
    let printData = body;
    //let xyz = this.connectBT(address).subscribe(data => {
    this.btSerial.write(printData).then(dataz => {
      console.log("WRITE SUCCESS", dataz);
      this.setLocation(voter_id, true);
      let mno = this.alertCtrl.create({
        title: "Print SUCCESS!",
        buttons: ['Dismiss']
      });
      mno.present();
      foo.unsubscribe();
    }, errx => {
      console.log("WRITE FAILED", errx);
      let mno = this.alertCtrl.create({
        title: "ERROR WRITE FAILED" + errx,
        buttons: ['Dismiss']
      });
      mno.present();
    });
    /*}, err => {
      console.log("CONNECTION ERROR", err);
      let mno = this.alertCtrl.create({
        title: "ERROR " + err,
        buttons: ['Dismiss']
      });
      mno.present();
    });*/
  }

  setLocation(voter_id, printed) {
    this.geolocation.getCurrentPosition().then(resp => {
      this.geolocation.getCurrentPosition().then(pos => {

        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;

        let data = {};
        data["longitude"] = this.longitude;
        data["latitude"] = this.latitude;
        data["voterId"] = voter_id;
        data["volunteerMobile"] = localStorage.getItem("mobile");
        data["printed"] = printed;

        this.commonService.updateCitizenVolunteerDetail(data).subscribe(data => {
         console.log("data======", data);
        }, err => {
          console.log('err', err);
        });
      });
    });
  }
}
