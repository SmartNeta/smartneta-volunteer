import { Component } from "@angular/core";
import { NavController, LoadingController, AlertController, ToastController, NavParams, ModalController, Events } from "ionic-angular";
import { CommonService } from "../../providers/common.service";
import { TranslateService } from "@ngx-translate/core";
import { SurveyQuestionPage } from "../survey-question/survey-question";
import { Geolocation } from "@ionic-native/geolocation";
import { MyCitizenDatabase } from "../../providers/citizen";
import { Network } from "@ionic-native/network";
import { MyNetwork } from "../../providers/checknetwork";
import { LocaldataSync } from "../../providers/localdatasync.service";
import { SocialSharing } from "@ionic-native/social-sharing";
import { PrinterListModalPage } from "../printer-list-modal/printer-list-modal";
import { PrintProvider } from "../../providers/print";
import { NotificationsPage } from "../notifications/notifications";
import { OtherInformationPage } from "../other-information/other-information";
import { RegisteredComplaintsPage } from "../registered-complaints-page/registered-complaints-page";

@Component({
  selector: "select-action",
  templateUrl: "select-action.html"
})
export class SelectActionPage {
  loading: any;
  lang: any;
  item: any;
  boothName: any;
  partylist = [];
  wardNo: any;
  citizenId: any;
  latitude: any;
  longitude: any;
  voted: any;
  language: any;
  public text: string = "hello";
  selectedPrinter: any = [];
  public online: any
  actionList: Array<any> = [
    { action: "mobile", label: "Mobile #" },
    { action: "segmentation", label: "A+/A/B/C" },
    { action: "partypreference", label: "Party Preference" },
    { action: "survey", label: "Survey" },
    { action: "markasVoted", label: "Mark as Voted" },
    { action: "print", label: "Print" },
    { action: "share", label: "Share" },
    { action: "status", label: "Update Status" },
    { action: "otherInformation", label: "Other Information" },
    { action: "registeredComplaints", label: "Register complaints" }
  ];
  statuslist: Array<any> = [
    { name: "Not at Home", value: "not at home" },
    { name: "Call Back", value: "call back" },
    { name: "Refused", value: "refused" }
  ];

  segmentationlist: Array<any> = [
    { label: "A+", segmentation: "A+" },
    { label: "A", segmentation: "A" },
    { label: "B", segmentation: "B" },
    { label: "C", segmentation: "C" }
  ];

  sharelist: Array<any> = [
    { name: "SMS", value: "sms" },
    { name: "Whatsapp", value: "whatsapp" }
  ];

  descText: any;
  imageUrl: string =
    "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public commonService: CommonService,
    public translate: TranslateService,
    public modalCtrl: ModalController,
    public events: Events,
    public printProvider: PrintProvider,
    private alertCtrl: AlertController,
    private geolocation: Geolocation,
    public localdataSync: LocaldataSync,
    private socialSharing: SocialSharing,
    private myCitizenDatabase: MyCitizenDatabase,
    public network: Network,
    public MyNetwork: MyNetwork
  ) {
    this.getAllText();
    this.translate.use(localStorage.getItem("language"));
    if (localStorage.getItem("actions")) {
      this.actionList = [];
      this.actionList = JSON.parse(localStorage.getItem("actions"));
    }
    if (localStorage.getItem("segmentations")) {
      this.segmentationlist = [];
      this.segmentationlist = JSON.parse(localStorage.getItem("segmentations"));
    }

    this.language = localStorage.getItem("language");
    this.item = this.navParams.get("item");
    this.boothName = this.navParams.get("boothName");
    this.citizenId = this.item.id;
    this.wardNo = localStorage.getItem("wardNo");
    this.voted = this.item.voted;
    if (this.voted == true) {
      this.text = "Voted";
    } else {
      this.text = "Mark as Voted";
    }
    this.showPartys();
    this.online = this.MyNetwork.online;

  }

  ionViewDidLoad() {
    this.setLocation();
    if (this.network.type == "none") {
      this.imageUrl = "assets/images/Smartneta/smart_neta_logo.png";
    } else {
      this.imageUrl =
        "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }
  }
  checkNetworkConnection() {
    this.MyNetwork.checkNetworkConnection();
  }

  actionFun(value) {
    switch (value) {
      case "mobile":
        this.presentMobile();
        break;
      case "segmentation":
        this.UpdateSegmentation();
        break;
      case "partypreference":
        this.presentParty();
        break;
      case "survey":
        this.ShowSurveyQuestionPage();
        break;
      case "markasVoted":
        this.postMarkasVoted();
        break;
      case "print":
        this.listBTDevice();
        break;
      case "share":
        this.openShareOptions();
        break;
      case "status":
        this.UpdateStatus();
        break;
      case "otherInformation":
        this.getOtherInformation();
        break;
      case "registeredComplaints":
        this.getRegisterComplaints();
        break;
    }
  }

  getOtherInformation() {
    if (this.MyNetwork.online == true) {
      this.navCtrl.push(OtherInformationPage, { item: this.item });
    } else {
      this.presentToast('You are now offline!!!')
    }

  }

  getRegisterComplaints() {
    if (this.MyNetwork.online == true) {
      this.navCtrl.push(RegisteredComplaintsPage, { item: this.item });
    } else {
      this.presentToast('You are now offline!!!')
    }
  }

  openShareOptions() {
    const alert = this.alertCtrl.create();
    alert.setTitle("Share");
    this.sharelist.forEach(l => {
      alert.addInput({
        type: "radio",
        label: l.name,
        value: l.value
      });
    });

    alert.addButton({
      text: "Cancel",
      role: "cancel"
    });

    alert.addButton({
      text: "Ok",
      handler: data => {
        if (data) {
          if (data == "sms") {
            this.shareByMobile();
          } else {
            this.shareFun();
          }
        } else {
          this.presentToast("Invalid input");
        }
      }
    });
    alert.present();
  }

  shareByMobile() {
    let alert = this.alertCtrl.create({
      title: "Send SMS",
      inputs: [
        {
          name: "MobileNo",
          placeholder: "Mobile no.",
          type: "tel"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
          }
        },
        {
          text: "Share",
          handler: data => {
            if (data.MobileNo != "") {
              if (data.MobileNo.length >= 10) {
                this.setLocation();
                this.loading = this.loadingCtrl.create({
                  content: ""
                });
                this.loading.present();
                this.commonService
                  .shareUsingMobile(this.citizenId, data.MobileNo)
                  .subscribe(
                    res => {
                      this.loading.dismissAll();
                      this.presentToast("SMS Sent Successfully");
                    },
                    err => {
                      console.log("err", err.error);
                      this.loading.dismissAll();
                      this.presentToast("Failed to Save");
                    });
              } else {
                this.presentToast("Please Enter minimum 10 Digit Number");
              }
            } else {
              this.presentToast("Please Enter Mobile Number");
            }
          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }

  setLocation() {
    this.geolocation.getCurrentPosition().then(resp => {
      this.geolocation.getCurrentPosition().then(pos => {

        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;

        let data = {};
        data["longitude"] = this.longitude;
        data["latitude"] = this.latitude;
        this.loading = this.loadingCtrl.create({
          content: ""
        });
        this.loading.present();
        this.myCitizenDatabase
          .postLocation(this.citizenId, data)
          .then(res => {
            this.loading.dismissAll();
          })
          .catch(err => {
            console.log("err", err);
            this.loading.dismissAll();
            this.presentToast("Failed to set Location");
          });
      });

      const watch = this.geolocation.watchPosition().subscribe(pos => {

      });
      watch.unsubscribe();
    });
  }

  getAllText() {
    this.commonService.getData().subscribe(
      res => {
        this.descText = res.data;
      },
      err => {
        console.log("err", err);
      }
    );
  }


  ShowSurveyQuestionPage() {
    this.navCtrl.push(SurveyQuestionPage, { item: this.item });
  }

  showPartys() {
    this.partylist = JSON.parse(localStorage.getItem("electionParty"));
  }

  presentMobile() {
    let alert = this.alertCtrl.create({
      title: "Update Mobile",
      inputs: [
        {
          name: "MobileNo",
          placeholder: "Mobile no.",
          type: "tel"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Submit",
          handler: data => {
            if (data.MobileNo != "") {
              if (data.MobileNo.length >= 10) {
              this.setLocation();
              this.loading = this.loadingCtrl.create({
                content: ""
              });
              this.loading.present();
              this.myCitizenDatabase
                .postMobile(this.citizenId, data.MobileNo)
                .then(res => {
                  this.loading.dismissAll();
                  this.presentToast("Mobile Number Updated Successfully");
                  localStorage.setItem("unsynched_data", "true");
                  this.localdataSync.checkDataTosync();
                })
                .catch(err => {
                  console.log("err", err.error);
                  this.loading.dismissAll();
                  this.presentToast("Failed to Save");
                });
              } else {
                // this.presentToast("Please Enter Minimum 10 Digit Number");
                alert.setMessage('Please Enter Minimum 10 Digit Number');
                return false;
              }
            } else {
              alert.setMessage('Please Enter Mobile Number');
              return false;
            }
          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }

  UpdateSegmentation() {
    const alert = this.alertCtrl.create();
    alert.setTitle("Voters Segment");
    this.segmentationlist.forEach(l => {
      alert.addInput({
        type: "radio",
        label: l.label,
        value: l.segmentation
      });
    });

    alert.addButton({
      text: "Cancel",
      role: "cancel"
    });

    alert.addButton({
      text: "Submit",
      handler: data => {
        if (data) {
          this.setLocation();
          this.loading = this.loadingCtrl.create({
            content: ""
          });
          this.loading.present();
          this.myCitizenDatabase
            .postSegmentation(this.citizenId, data)
            .then(res => {
              this.loading.dismissAll();
              this.presentToast("Segmentation Updated Successfully");
              localStorage.setItem("unsynched_data", "true");
              this.localdataSync.checkDataTosync();
            })
            .catch(err => {
              console.log("err", err.error);
              this.loading.dismissAll();
              this.presentToast("Failed to Save");
            });
        } else {
          this.presentToast("Invalid input");
        }
      }
    });
    alert.present();
  }

  presentParty() {
    const alert = this.alertCtrl.create();
    alert.setTitle("Select Party");
    this.partylist.forEach(l => {
      alert.addInput({
        type: "radio",
        label: l.name,
        value: l.code
      });
    });

    alert.addButton({
      text: "Cancel",
      role: "cancel"
    });

    alert.addButton({
      text: "Submit",
      handler: data => {
        if (data) {
          this.setLocation();
          this.loading = this.loadingCtrl.create({
            content: ""
          });
          this.loading.present();
          this.myCitizenDatabase
            .postPartys(this.citizenId, data)
            .then(res => {
              this.loading.dismissAll();
              this.presentToast("Party Preference Updated Successfully");
              localStorage.setItem("unsynched_data", "true");
              this.localdataSync.checkDataTosync();
            })
            .catch(err => {
              console.log("err", err.error);
              this.loading.dismissAll();
              this.presentToast("Failed to Save");
            });
        } else {
          this.presentToast("Invalid input");
        }
      }
    });
    alert.present();
  }

  UpdateStatus() {
    const alert = this.alertCtrl.create();
    alert.setTitle("Voters Status");
    this.statuslist.forEach(l => {
      alert.addInput({
        type: "radio",
        label: l.name,
        value: l.value
      });
    });

    alert.addButton({
      text: "Cancel",
      role: "cancel"
    });

    alert.addButton({
      text: "Submit",
      handler: data => {
        if (data) {
          this.loading = this.loadingCtrl.create({
            content: ""
          });
          this.loading.present();
          this.myCitizenDatabase.postStatus(this.citizenId, data)
            .then(res => {
              this.loading.dismissAll();

              this.presentToast("Status Updated Successfully");
              localStorage.setItem("unsynched_data", "true");
              this.localdataSync.checkDataTosync();
            })
            .catch(err => {
              console.log("err", err.error);
              this.loading.dismissAll();
              this.presentToast("Failed to Save");
            });
        } else {
          this.presentToast("Invalid input");
        }
      }
    });
    alert.present();
  }

  postMarkasVoted() {
    if (this.voted == true) {
      let alert = this.alertCtrl.create({
        title: "Voted",
        message: "Volunteer already mark as voted",
        buttons: ["Ok"],
        enableBackdropDismiss: false
      });
      alert.present();
    } else {
      let alert = this.alertCtrl.create({
        title: "Mark as Voted",
        message: "Are you sure to mark as voted?",
        buttons: [
          {
            text: "No",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          },
          {
            text: "Yes",
            handler: () => {
              this.setLocation();
              //this point you should have the proper "number" value
              this.loading = this.loadingCtrl.create({
                content: ""
              });
              this.loading.present();
              "";
              this.myCitizenDatabase
                .postCitizenVoted(this.citizenId, "true")
                .then(res => {
                  this.loading.dismissAll();
                  this.presentToast("Segmentation Updated Successfully");
                  localStorage.setItem("unsynched_data", "true");
                  this.localdataSync.checkDataTosync();
                })
                .catch(err => {
                  console.log("err", err.error);
                  this.loading.dismissAll();
                  this.presentToast("Failed to Save");
                });
            }
          }
        ],
        enableBackdropDismiss: false
      });
      alert.present();
    }
  }

  shareFun() {
    // Booth name: ${boothName}
    let body = `VOTER DETAILS\n====================\nVoter Id: ${
      this.item.voter_id
      }\nFirst Name: ${this.item.first_name}\nFamily Name: ${
      this.item.family_name
      }\nGender: ${this.item.gender}\nAge: ${this.item.age}\nSerial Number: ${
      this.item.srno
      }\nBooth Number: ${this.item.booth_no}\nPolling Booth: ${
      this.boothName
      }\n====================\nPlease carry with Voter ID\n"Vote for Bright Future"`;
    this.socialSharing
      .shareViaWhatsApp(body, this.imageUrl)
      .then(sucess => {
      })
      .catch(err => {
        console.log(err);
      });
  }

  listBTDevice() {
    this.printProvider.searchBt().then(
      datalist => {
        //1. Open printer select modal
        let abc = this.modalCtrl.create(PrinterListModalPage, {
          data: datalist
        });
        //2. Printer selected, save into this.selectedPrinter
        abc.onDidDismiss(data => {
          if (data) {
            this.selectedPrinter = data;
            let loading = this.loadingCtrl.create({
              content: "Connecting to printer..."
            });
            loading.present();
            setTimeout(() => {
              loading.dismiss();
              this.testConnectPrinter();
            }, 3000);
          }
        });
        abc.present();
      },
      err => {
        console.log("ERROR", err);
        let mno = this.alertCtrl.create({
          title: "ERROR 1" + err,
          buttons: ["Dismiss"]
        });
        mno.present();
      }
    );
  }

  testConnectPrinter() {
    var id = this.selectedPrinter.id;
    if (id == null || id == "" || id == undefined) {
      let mno = this.alertCtrl.create({
        title: "No Printer Selected",
        buttons: ["Dismiss"]
      });
      mno.present();
    } else {
      let foo = this.printProvider.connectBT(id).subscribe(
        data => {
          this.printer(foo);
        },
        err => {
          let mno = this.alertCtrl.create({
            title: "ERROR 2" + err,
            buttons: ["Dismiss"]
          });
          mno.present();
        }
      );
    }
  }

  printer(foo) {
    var id = this.selectedPrinter.id;
    let body = `VOTER DETAILS\n====================\nVoter Id: ${
      this.item.voter_id
      }\nFirst Name: ${this.item.first_name}\nFamily Name: ${
      this.item.family_name
      }\nGender: ${this.item.gender}\nAge: ${this.item.age}\nSerial Number: ${
      this.item.srno
      }\nBooth Number: ${this.item.booth_no}\nPolling Booth: ${
      this.boothName
      }\n====================\nPlease carry with Voter ID\n"Vote for Bright Future"\n\n\n\n\n\n\n\n\n`;
    if (id == null || id == "" || id == undefined) {
      //nothing happens, you can put an alert here saying no printer selected
      let mno = this.alertCtrl.create({
        title: "No Printer Selected",
        buttons: ["Dismiss"],
        enableBackdropDismiss: false
      });
      mno.present();
    } else {
      this.printProvider.testPrint(foo, body, this.item.voter_id);


    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      position: "bottom",
      dismissOnPageChange: true,
      duration: 3000
    });
    toast.present();
  }
  gotoNotification() {
    this.navCtrl.push(NotificationsPage);
  }
}
