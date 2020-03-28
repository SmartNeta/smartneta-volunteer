import { Injectable } from "@angular/core";
import { CommonService } from './common.service'
import { MyCitizenDatabase } from './citizen'
import { MyComplaintDatabase } from './complaint';
import { MySurveyAnswerDatabase } from './survey_answers';
import { LoadingController, ToastController } from 'ionic-angular';

@Injectable()
export class LocaldataSync {
    last_synch_date: any;
    unsynched_data: any;
    assemblyNo: any;
    wardNo: any;
    stateName: any;
    constituencyId: any;
    loading: any;
    anyChange = false;
    syncSatusCitizen = false;
    syncSatusAnswer = false;
    syncSatusComplaints = false;

    constructor(public myCitizenDatabase: MyCitizenDatabase,
        public myComplaintDatabase: MyComplaintDatabase,
        public mySurveyAnswerDatabase: MySurveyAnswerDatabase,
        public commonService: CommonService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    }

    checkDataTosync() {
        if (localStorage.getItem('unsynched_data') == 'true') {
            this.anyChange = true;
        }else{
            this.anyChange = false;
        }
    }
    checkStatus() {
        if (this.syncSatusAnswer && this.syncCitizen && this.syncComplaints) {
            localStorage.setItem('unsynched_data', null)
            this.checkDataTosync()
        }
    }
    syncCitizen() {
        this.stateName = localStorage.getItem('stateName');
        this.wardNo = localStorage.getItem('wardNo');
        this.assemblyNo = localStorage.getItem('assemblyNo');
        this.unsynched_data = localStorage.getItem('unsynched_data');
        this.last_synch_date = localStorage.getItem('last_synch_date');
        return new Promise((resolve, reject) => {
            this.loading = this.loadingCtrl.create({
                content: "Citizen Syncing...",
            });
            this.loading.present().then(() => {
                this.myCitizenDatabase.getDataToSync().then((res) => {
                    this.commonService.getCitizens(this.stateName, this.assemblyNo, this.wardNo, this.last_synch_date, -1, res).subscribe(res => {
                        this.myCitizenDatabase.addUser(res).then((response) => {
                            this.loading.dismissAll();
                            this.presentToast("Citizen Synced");
                            this.syncSatusCitizen = true;
                            this.checkStatus();
                            resolve(response)
                        }).catch(e => {
                            resolve(e)
                            this.loading.dismissAll();
                            this.presentToast("Citizen Syning failed");
                            resolve(e);
                        })
                    }, err => {
                        this.loading.dismissAll();
                        this.presentToast("Citizen Syning failed");
                        resolve(err);
                    });
                }).catch(ex => {
                    this.loading.dismissAll();
                    this.presentToast("Citizen Syning failed");
                    resolve(ex);
                })
            })
        });
    }

    syncComplaints() {
        this.stateName = localStorage.getItem('stateName');
        this.wardNo = localStorage.getItem('wardNo');
        this.assemblyNo = localStorage.getItem('assemblyNo');
        this.unsynched_data = localStorage.getItem('unsynched_data');
        this.last_synch_date = localStorage.getItem('last_synch_date');
        return new Promise((resolve, reject) => {
            this.loading = this.loadingCtrl.create({
                content: "Complaints Syncing...",
            });
            this.loading.present().then(() => {
                this.myComplaintDatabase.getDataToSync().then((data) => {
                    this.commonService.AddNewVoter(data).subscribe((res) => {
                        if (res.message == "success") {
                            this.myComplaintDatabase.deleteComplaints().then((data) => {
                                this.presentToast("Complaints Synced");
                                this.loading.dismissAll();
                                console.log("Enter");
                                this.syncSatusComplaints = false;
                                this.checkStatus();
                                resolve(res);
                            }).catch(e => {
                                this.loading.dismissAll();
                                this.presentToast("Complaints Syning failed");
                                resolve(e);
                            })
                        } else {
                            this.loading.dismissAll();
                            this.presentToast("Complaints Syning failed");
                            resolve('not synced');
                        }
                    }, err => {
                        this.loading.dismissAll();
                        this.presentToast("Complaints Syning failed");
                        resolve(err);
                    });
                }).catch(ex => {
                    this.loading.dismissAll();
                    this.presentToast("Complaints Syning failed");
                    resolve(ex);
                })
            })

        });
    }

    syncSurveyAns() {
        this.stateName = localStorage.getItem('stateName');
        this.wardNo = localStorage.getItem('wardNo');
        this.assemblyNo = localStorage.getItem('assemblyNo');
        this.unsynched_data = localStorage.getItem('unsynched_data');
        this.last_synch_date = localStorage.getItem('last_synch_date');
        return new Promise((resolve, reject) => {
            this.loading = this.loadingCtrl.create({
                content: "Survey Answer Syncing...",
            });
            this.loading.present().then(() => {
                this.mySurveyAnswerDatabase.getDataToSync().then((data) => {
                    this.commonService.postsurvey(data).subscribe((res) => {
                        if (res.message == "success") {
                            this.mySurveyAnswerDatabase.deleteAnswers().then((data) => {
                                this.loading.dismissAll();
                                this.presentToast("Survey Answer Synced");
                                this.syncSatusAnswer = true;
                                this.checkStatus();
                                resolve(res);
                            }).catch(e => {
                                this.loading.dismissAll();
                                this.presentToast("Survey Answer Syning failed");
                                resolve(e);
                            })
                        } else {
                            this.loading.dismissAll();
                            this.presentToast("Survey Answer Syning failed");
                            resolve('not synced');
                        }
                    }, err => {
                        console.log("err", err.error)
                        resolve(err);
                        this.loading.dismissAll();
                        this.presentToast("Survey Answer Syning failed");
                    });
                }).catch(ex => {
                    this.loading.dismissAll();
                    this.presentToast("Survey Answer Syning failed");
                    resolve(ex);
                })
            });
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