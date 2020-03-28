import { Component } from '@angular/core';
import {  NavController, NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-printer-list-modal',
  templateUrl: 'printer-list-modal.html',
})
export class PrinterListModalPage {
  printerList:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    this.printerList=this.navParams.get('data');
    console.log("printerList", this.printerList);
  }

  select(data)
  {
    this.viewCtrl.dismiss(data);
  }

}