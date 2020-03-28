import { ComplaintsPage } from './../pages/complaints/complaints';
import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, MenuController, Nav, App, ToastController, Events } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Observable } from 'rxjs/Observable';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { SettingsPage } from '../pages/settings/settings';
import { Network } from '@ionic-native/network';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LoginPage } from '../pages/login/login';
import { RegComplaintsPage } from '../pages/registered_complaints/reg_complaints'
import { ContactUsPage } from '../pages/contact-us/contact_us';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SyncPage } from '../pages/sync/sync';
import { dashboardPage } from '../pages/dashboard/dashboard';
import { SearchVotersPage } from '../pages/search-voters/search-voters';
import { WardProvider } from '../providers/ward';
import { BoothProvider } from '../providers/booth';
import { MyCitizenDatabase } from '../providers/citizen';
import { MySurveyQuestionDatabase } from '../providers/survey_question';
import { SelectActionPage } from '../pages/select-action/select-action';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { MySurveyAnswerDatabase } from '../providers/survey_answers';
import { LocaldataSync } from '../providers/localdatasync.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  textDir: string = "ltr";
  imageUrl: string = "";
  notificationData: any;
  pages: Array<{ title: any, icon: string, component: any }>;
  pushPages: Array<{ title: any, icon: string, component: any }>;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public app: App,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public translate: TranslateService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public push: Push,
    public events: Events,
    private network: Network,
    public wardProvider: WardProvider,
    public boothProvider: BoothProvider,
    public myCitizenDatabase: MyCitizenDatabase,
    public surveyQuestionDatabase: MySurveyQuestionDatabase,
    public mySurveyAnswerDatabase: MySurveyAnswerDatabase,
    public sqlite: SQLite,
    public localdataSync: LocaldataSync
  ) {

    platform.ready().then(() => {
      if (!localStorage.getItem('language')) {
        translate.setDefaultLang('en');
        translate.use('en');
      } else {
        translate.setDefaultLang('en');
        translate.use(localStorage.getItem('language'));
      }
      if (this.network.type == 'none') {
        this.imageUrl = 'assets/images/Smartneta/smart_neta_logo.png'
      } else {
        this.imageUrl = "http://13.233.175.188:8585/open/mobile/logo.jpg?" + new Date();
      }
      this.splashScreen.hide();
      this.statusBar.styleDefault();
      if (this.platform.is('cordova')) {
        this.localdataSync.checkDataTosync()
        this.boothProvider.connectToDb();
        this.wardProvider.connectToDb();
        this.myCitizenDatabase.connectToDb();
        this.mySurveyAnswerDatabase.connectToDb();
        this.initPushNotification();
        this.surveyQuestionDatabase.connectToDb().then(() => {
          if (localStorage.getItem('volunteerId') == null) {
            this.rootPage = SettingsPage;
          } else {
            if (this.network.type != 'none') {
              if (!localStorage.getItem('wardNo')) {
                this.rootPage = SyncPage;
              } else {
                this.rootPage = dashboardPage;
              }
            } else {
              this.rootPage = SearchVotersPage
            }
          }
        }).catch(e => {
          console.error('Local database not initialized.')
        });
      }
    });


    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();

      if (activeView.name === 'ComplaintsPage' || activeView.name === 'SearchVotersResultPage' || activeView.name === 'SelectActionPage'  || activeView.name === 'NotificationsPage') {
        if (nav.canGoBack()) {
          nav.pop();
        } else {
          const alert = this.alertCtrl.create({
            title: 'Exit app',
            message: 'Are you sure?',
            cssClass: 'exit_alert',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                this.nav.setRoot('ComplaintsPage');
              }
            }, {
              text: 'Exit app',
              handler: () => {
                this.platform.exitApp();
              }
            }]
          });
          alert.present();
        }
      }
    });



    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        platform.setDir('rtl', true);
      }
      else {
        platform.setDir('ltr', true);
      }
      Observable.forkJoin(
        this.translate.get('Home'),
        this.translate.get('Search Voters'),
        this.translate.get('Language'),
        this.translate.get('ContactUs'),
        this.translate.get('Sync'),
        this.translate.get('Logout')
      ).subscribe(data => {
        this.pages = [

          { title: data[0], icon: 'home', component: dashboardPage },
          { title: data[1], icon: 'search', component: SearchVotersPage },
          { title: data[2], icon: 'settings', component: SettingsPage },
          { title: data[3], icon: 'call', component: ContactUsPage },
          { title: data[4], icon: 'refresh', component: SyncPage },
          { title: data[5], icon: 'log-out', component: SettingsPage }
        ];

        this.pushPages = [
         
        ];
      });
    });

  }


  initPushNotification() {
    console.log("Inside push notification");
    this.push.hasPermission().then((res: any) => {
      if (res.isEnabled) {
        console.log('We have permission to send push notifications');
      }
      else {
        console.log('We don\'t have permission to send push notifications');
      }
    });

    // to initialize push notifications
    const options: PushOptions = {
      android: {
        // senderID: '986571927369',
        senderID: '629040521479',
        sound: 'true',
        vibrate: 'true',
        icon: 'note'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => {
      console.log("this.notificationData", notification);
      this.notificationData = notification.additionalData.data;
      console.log("this.nav.getActive()", this.nav.getActive());
      console.log("this.notificationData", this.notificationData);
      if (notification.additionalData.foreground == false) {
        console.log("In False");
      }
      if (notification.additionalData.foreground == true) {
        console.log("In True");
        let alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.message,
          buttons: [{
            text: 'Ok',
            role: 'cancel'
          }]
        });
        alert.present();
      }
      if (notification.additionalData.foreground == false) {
        // if(this.notificationData.type=="individual"){
        this.nav.push(NotificationsPage);
        // }
      }
    });
    console.log('...................................');
    // debugger
    pushObject.on('registration').subscribe((registration: any) => {
      console.log('Device registered', registration);
      localStorage.setItem('deviceId', registration.registrationId);
    });
    pushObject.on('error').subscribe(error =>
      console.error('Error with Push plugin', error));
    console.log('...................................');
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'All the local data will be lost. Are you sure you want to logout? ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.sqlite.deleteDatabase({
              name: 'data.db',
            }).then(() => {
            }).catch(e => console.log(e));
            localStorage.clear();
            this.menu.close();
            this.nav.setRoot('SettingsPage');
          }
        }
      ]
    });
    alert.present();
  }

  openPage(page) {
    if (page.icon == 'log-out') {
      let alert = this.alertCtrl.create({
        title: 'Logout',
        message: 'All the local data will be lost. Are you sure you want to logout? ',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'Ok',
            handler: () => {
              this.sqlite.deleteDatabase({
                name: 'data.db',
              }).then(() => {
              }).catch(e => console.log(e));
              localStorage.clear();
              this.menu.close();
              this.nav.setRoot(page.component);
            }
          }
        ]
      });
      alert.present();
    } else {
      this.menu.close();
      this.nav.setRoot(page.component);
    }
  }

  pushPage(page) {
    this.menu.close();
    this.app.getRootNav().push(page.component);
  }

}
