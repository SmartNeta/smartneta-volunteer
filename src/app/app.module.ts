import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';


//pages
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { MapsPage } from '../pages/maps/maps';

//custom components
import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
import { Rating } from '../components/rating/rating';
import { GoogleMap } from '../components/google-map/google-map';
import { VideoPlayerModule } from '../components/video-player/video-player.module';
import { ValidatorsModule } from '../components/validators/validators.module';

//services
import { GoogleMapsService } from '../pages/maps/maps.service';
import { LanguageService } from '../providers/language/language.service';
import { CommonService } from '../providers/common.service';
import { MyCitizenDatabase } from '../providers/citizen';
import { MyComplaintDatabase } from '../providers/complaint';
import { MySurveyAnswerDatabase } from '../providers/survey_answers';
import { MyNetwork } from '../providers/checknetwork';
import { MySurveyQuestionDatabase } from '../providers/survey_question';
import { WardProvider } from '../providers/ward';
import { BoothProvider } from '../providers/booth';
// Ionic Native Plugins
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { Connectivity } from '../providers/connectivity-service/connectivity-service';
import { GoogleMaps } from '../providers/google-maps/google-maps';
import { Push } from '@ionic-native/push';
import { AndroidPermissions } from '@ionic-native/android-permissions';
//Smartneta
import { OtpPage } from '../pages/otp/otp';
import { ComplaintsPage } from '../pages/complaints/complaints';
import { RegComplaintsPage } from '../pages/registered_complaints/reg_complaints';
import { LocationSelect } from '../pages/location-select/location-select';
import { NewsModalPage } from '../pages/complaints/news-modal/news_modal';
import { ContactUsPage } from '../pages/contact-us/contact_us';
import { dashboardPage } from '../pages/dashboard/dashboard';
import { SearchVotersPage } from '../pages/search-voters/search-voters';
import { SearchVotersEditPage } from '../pages/search-voters-edit/search-voters-edit';
import { SearchVotersResultPage } from '../pages/search-voters-result/search-voters-result';
import { SelectActionPage } from '../pages/select-action/select-action';
import { SearchVotersViewLocationPage } from '../pages/search-voters-view-location/search-voters-view-location';
import { AddNewVotersPage } from '../pages/add-new-voters/add-new-voters';
import { SurveyQuestionPage } from '../pages/survey-question/survey-question';
import { SyncPage } from '../pages/sync/sync';
import { SQLite } from '@ionic-native/sqlite';
import { Network } from '@ionic-native/network';
import { IonicSelectableModule } from 'ionic-selectable';
import { LocaldataSync } from '../providers/localdatasync.service';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { PrintProvider } from '../providers/print';
import { PrinterListModalPage } from '../pages/printer-list-modal/printer-list-modal'
import { SocialSharing } from '@ionic-native/social-sharing';
import { CitizenDetailsPage} from '../pages/citizen-details/citizen-details'
import { OtherInformationPage } from "../pages/other-information/other-information";
import { RegisteredComplaintsPage } from "../pages/registered-complaints-page/registered-complaints-page";
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    NotificationsPage,
    SettingsPage,
    PrivacyPolicyPage,
    MapsPage,
    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    Rating,
    GoogleMap,
    OtpPage,
    ComplaintsPage,
    RegComplaintsPage,
    LocationSelect,
    NewsModalPage,
    ContactUsPage,
    dashboardPage,
    SearchVotersPage,
    SearchVotersResultPage,
    SelectActionPage,
    SurveyQuestionPage,
    OtherInformationPage,
    RegisteredComplaintsPage,
    SearchVotersEditPage,
    SearchVotersViewLocationPage,
    AddNewVotersPage,
    SyncPage,
    PrinterListModalPage,
    CitizenDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      pageTransition: 'ios-transition',
      swipeBackEnabled: false
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    VideoPlayerModule,
    ValidatorsModule,
    IonicSelectableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NotificationsPage,
    SettingsPage,
    PrivacyPolicyPage,
    MapsPage,
    OtpPage,
    ComplaintsPage,
    RegComplaintsPage,
    LocationSelect,
    NewsModalPage,
    ContactUsPage,
    dashboardPage,
    SearchVotersPage,
    SearchVotersResultPage,
    SelectActionPage,
    SurveyQuestionPage,
    OtherInformationPage,
    RegisteredComplaintsPage,
    SearchVotersEditPage,
    SearchVotersViewLocationPage,
    AddNewVotersPage,
    SyncPage,
    PrinterListModalPage,
    CitizenDetailsPage
  ],
  providers: [
    GoogleMapsService,
    LanguageService,
    SplashScreen,
    StatusBar,
    InAppBrowser,
    Keyboard,
    Geolocation,
    CommonService,
    MyCitizenDatabase,
    MyComplaintDatabase,
    MySurveyAnswerDatabase,
    MyNetwork,
    Connectivity,
    GoogleMaps,
    Network,
    Push,
    AndroidPermissions,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SQLite,
    MySurveyQuestionDatabase,
    WardProvider,
    BoothProvider,
    LocaldataSync,
    BluetoothSerial,
    PrintProvider,
    SocialSharing
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
