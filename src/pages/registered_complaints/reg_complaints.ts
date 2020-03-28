import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams,Platform } from 'ionic-angular';
import { CommonService } from '../../providers/common.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'reg-complaints',
    templateUrl: 'reg_complaints.html'
  })

  export class RegComplaintsPage {
    complaints:any;
    complaintsCopy:any;
    noRecords:number;
    loading: any;
    descText:any;
    citizenId:any;
    imageUrl:string="http://13.233.175.188:8585/open/mobile/logo.jpg?"+ new Date();
    status:any = this.translate.instant('All');
    cList : any = [];
    constructor(public nav: NavController,public loadingCtrl: LoadingController,public commonService:CommonService, public navParams: NavParams,public translate: TranslateService) {
      this.translate.use(localStorage.getItem('language'));       
      this.citizenId = localStorage.getItem('citizenId');
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      this.getComplaints();
      this.getAllText();
    }
    
    getComplaints(){
      this.loading.present();
      this.commonService.getComplaints(this.citizenId).subscribe(res=>{
        this.complaints = res.data;
        this.noRecords = this.complaints.length;
        this.complaintsCopy = this.complaints;
        this.loading.dismiss();
      },err=>{
        console.log("err",err)
        this.loading.dismiss();
      });
    }

    onChange(){
      this.loading = this.loadingCtrl.create({
        content: "Loading...",
      });
      this.loading.present();
      for(var i=0;i<this.complaintsCopy.length;i++){
        if(this.status == this.translate.instant('All')){
          this.complaints = this.complaintsCopy;
          this.cList = this.complaints
        }else
        if(this.complaintsCopy[i].status != null){
        if(this.status == this.translate.instant(this.complaintsCopy[i].status)){
          this.cList.push(this.complaintsCopy[i]);
        }
      }
      }
      this.complaints = this.cList;
      this.noRecords = this.complaints.length;
      this.cList = [];
      this.loading.dismiss();
    }

    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
  
      setTimeout(() => {
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?"+ new Date();
      
        this.getAllText();    
        this.commonService.getComplaints(this.citizenId).subscribe(res=>{
          this.complaints = res.data;
          this.noRecords = this.complaints.length;
          this.complaintsCopy = this.complaints;
          for(var i=0;i<this.complaintsCopy.length;i++){
            if(this.status == this.translate.instant('All')){
              this.complaints = this.complaintsCopy;
              this.cList = this.complaints
            }else
            if(this.complaintsCopy[i].status != null){
            if(this.status == this.translate.instant(this.complaintsCopy[i].status)){
              this.cList.push(this.complaintsCopy[i]);
            }
          }
          }
          this.complaints = this.cList;
          this.noRecords = this.complaints.length;
          this.cList = [];
        },err=>{
          console.log("err",err)
        });

        refresher.complete();
      }, 2000);
    }

    getAllText(){
      this.commonService.getData().subscribe(res=>{
        this.descText = res.data;
      },err=>{
        console.log("err",err)
      });
    }
  }