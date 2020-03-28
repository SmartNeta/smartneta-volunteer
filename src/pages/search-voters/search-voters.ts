import { Component } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import {
  NavController,
  LoadingController,
  NavParams,
  ToastController,
  ModalController,
  Events
} from "ionic-angular";
import { MyCitizenDatabase } from "../../providers/citizen";
import { WardProvider } from "../../providers/ward";
import { BoothProvider } from "../../providers/booth";
import { CommonService } from "../../providers/common.service";
import { TranslateService } from "@ngx-translate/core";
import { IonicSelectableComponent } from "ionic-selectable";
import { SearchVotersResultPage } from "../search-voters-result/search-voters-result";
import { Geolocation } from "@ionic-native/geolocation";
import { Network } from "@ionic-native/network";
import { MyNetwork } from "../../providers/checknetwork";
import { LocaldataSync } from "../../providers/localdatasync.service";
import { NotificationsPage } from "../notifications/notifications";

@Component({
  selector: "search-voters",
  templateUrl: "search-voters.html"
})
export class SearchVotersPage {
  form: FormGroup;
  loading: any;
  searchlist = [];
  boothList: any;
  wardList: any;
  position = {};
  ward: any;
  booth: any;
  wardNo: any;
  boothId = "";
  data = [];
  isValidSearchForm: any = false;
  searchWard = "";
  searchWardId: any;
  descText: any;
  isPrefered = false;
  selectedBooth:any;
  imageUrl: string =
    "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public commonService: CommonService,
    public translate: TranslateService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public events: Events,
    public MyCitizenDatabase: MyCitizenDatabase,
    public wardProvider: WardProvider,
    public localdataSync: LocaldataSync,
    public boothProvider: BoothProvider,
    public network: Network,
    private geolocation: Geolocation,
    public MyNetwork: MyNetwork
  ) {
    this.getAllText();
    this.translate.use(localStorage.getItem("language"));
    this.wardNo = localStorage.getItem("wardNo");
    if (this.wardNo == "-1") {
      this.isPrefered = false;
      this.ward = "-1";
    } else {
      this.isPrefered = true;
      this.ward = this.wardNo;
    }

    this.showWard();
    this.form = new FormGroup({
      voterId: new FormControl("", [Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      status: new FormControl(""),
      familyname: new FormControl("", [Validators.pattern(/^[a-zA-Z ]*$/)]),
      firstname: new FormControl("", [Validators.pattern(/^[a-zA-Z ]*$/)]),
      address: new FormControl(""),
      booth: new FormControl(""),
      distance: new FormControl(""),
      respondedStatus: new FormControl(""),
      srno: new FormControl("", [Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    });
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.form.controls["respondedStatus"].setValue("none");
    }, 0);
    if (this.network.type == "none") {
      this.imageUrl = "assets/images/Smartneta/smart_neta_logo.png";
    } else {
      this.imageUrl =
        "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
    }
    this.geolocation.getCurrentPosition().then(pos => {
     
      this.position["latitude"] = pos.coords.latitude;
      this.position["longitude"] = pos.coords.longitude;
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

  checkNetworkConnection() {
    this.MyNetwork.checkNetworkConnection();
  }

  showWard() {
    this.wardProvider
      .getAllWards()
      .then(data => {
        this.wardList = data;
        let obj = {
          no: "All",
          id: -1
        };
        this.wardList.unshift(obj);
        if (localStorage.getItem("wardNo") == "-1") {
          this.searchWard = "-1";
          this.searchWardId = "";
          // this.ward = this.wardList[0];
          
        } else {
          this.wardList.forEach((element, index) => {
            if (JSON.parse(localStorage.getItem("wardNo")) == element.no) {
              this.ward = this.wardList[index];
            }
          });
          this.searchWard = localStorage.getItem("wardNo");
          this.searchWardId = localStorage.getItem("wardId");
        }
        this.showBooth();
      })
      .catch(err => {
        console.log(err);
      });
  }

  portChange(event: { component: IonicSelectableComponent; value: any }) {
    this.boothId = event.value.no;
    this.validateInput();
  }

  wardChange(event: { component: IonicSelectableComponent; value: any }) {
    this.searchWard = event.value.no;
    this.searchWardId = event.value.id;
    this.showBooth();
  }

  showBooth() {
    this.boothList = [];
    this.boothId = null;
    this.selectedBooth = null;
    this.boothProvider
      .getAllBooths(this.searchWard)
      .then(data => {
        this.boothList = data;
         let obj = {
          no: "None",
          id: -1
        };
        this.boothList.unshift(obj);
      })
      .catch(err => {
        console.log(err);
      });
  }

  postSearch() {
    let data = {};
    data["voterId"] = this.form.value.voterId;
    data["wardNo"] = this.searchWard;
    data["wardId"] = this.searchWardId;
    data["boothId"] = this.boothId && this.boothId == "None" ? "-1" : this.boothId;
    data["firstName"] = this.form.value.firstname;
    data["familyName"] = this.form.value.familyname;
    data["address"] = this.form.value.address;
    data["respondedStatus"] = this.form.value.respondedStatus == "none" ? "" : this.form.value.respondedStatus;
    data["srNo"] = this.form.value.srno;
    data["searchingWard"] = this.form.value.booth ? this.form.value.booth.ward_no : null;
    data["assemblyId"] = localStorage.getItem('constituencyId');
    data["stateName"] = localStorage.getItem('stateName');
    data["searchingBoothId"] = this.form.value.booth ? this.form.value.booth.id : null;    
    this.loading = this.loadingCtrl.create({
      content: ""
    });
    this.loading.present();
    
    if (this.form.value.distance && this.form.value.distance.length > 0) {
      data["distance"] = this.form.value.distance;
      data["latitude"] = this.position["latitude"];
      data["longitude"] = this.position["longitude"];
      console.log("distance search ", data);
      this.commonService.searchVoters(data).subscribe(
        (res: any) => {
          this.searchlist = [];
          this.loading.dismissAll();
          res.data.forEach(element => {
            this.searchlist.push(element);
          });
          this.navCtrl.push(SearchVotersResultPage, {
            searchlist: this.searchlist,
            boothName: this.form.value.booth.name
          });
        },
        (err: any) => {
          this.loading.dismissAll();
        }
      );
    } else {
      this.MyCitizenDatabase.searchVoters(data)
        .then((res: any) => {
          this.searchlist = [];
          res.forEach(element => {
            this.searchlist.push(element);
          });
          let boothName = this.form.value.booth && this.form.value.booth.name ? this.form.value.booth.name : "";
          this.navCtrl.push(SearchVotersResultPage, {
            searchlist: this.searchlist,
            boothName: boothName
          });
          this.loading.dismissAll();
        })
        .catch(err => {
          console.log(err);
          this.loading.dismissAll();
        });
    }
  }

  validateInput() {
    console.log("Enter validateInput")
    this.isValidSearchForm = false;
    let boothId = this.boothId && this.boothId == "None" ? "-1" : this.boothId;
    this.form.value.firstname = this.form.value.firstname.trim().replace(/[^a-zA-Z ]/g, "");
    this.form.value.familyname = this.form.value.familyname.trim().replace(/[^a-zA-Z ]/g, "");
    this.form.value.voterId = this.form.value.voterId.trim().replace(/[^a-zA-Z0-9]/g, "");
    this.form.value.srno = this.form.value.srno.trim().replace(/[^0-9]/g, "");
    this.form.value.respondedStatus = this.form.value.respondedStatus && this.form.value.respondedStatus == "none" ? "" : this.form.value.respondedStatus;
    if (this.searchWard) {
      if ((boothId !== null && boothId !== "" && boothId != "-1") ||
        (this.form.value.distance && this.form.value.distance.length > 0)||
        (this.form.value.voterId && this.form.value.voterId.length > 2) ||
        (this.form.value.srno && this.form.value.srno.length > 0) ||
        (this.form.value.firstname && this.form.value.firstname.length > 2) ||
        (this.form.value.familyname && this.form.value.familyname.length > 2) ||
        (this.form.value.address && this.form.value.address.length > 2) ||
        (this.form.value.respondedStatus && this.form.value.respondedStatus.length > 0)
      ) {
        this.isValidSearchForm = true;
      } else {
        this.isValidSearchForm = false;
      }
    } 
    // else {
    //   this.isValidSearchForm = false;
    // }
  }
  gotoNotification() {
    this.navCtrl.push(NotificationsPage);
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
}
