import { Injectable } from "@angular/core";
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  URLSearchParams
} from "@angular/http";

@Injectable()
export class CommonService {
  baseUrl: string;
  baseUrl1: string;
  constructor(private http: Http) {
    
    // this.baseUrl="http://192.168.1.56:8585/open/volunteer";  //local
    this.baseUrl = "http://13.233.175.188:8585/open/volunteer";
    this.baseUrl1 = "http://13.233.175.188:8585/open/mobile"; //server
  }

  generateOTP(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    let options_n = new RequestOptions({ headers: headers });

    return this.http
      .post(this.baseUrl + "/generateOTP", data, options_n)
      .map((res: Response) => res.json());
  }

  verifyOTP(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    let options_n = new RequestOptions({ headers: headers });
    console.log(data);

    // let urlSearchParams = new URLSearchParams();

    // console.log("InService*********",data)
    // urlSearchParams.append('voterId', data.voterId);
    // urlSearchParams.append('otp', data.otp);
    // let body = urlSearchParams.toSring()

    return this.http
      .post(this.baseUrl + "/verifyOTP", data, options_n)
      .map((res: Response) => res.json());
  }

  getState() {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    let options_n = new RequestOptions({ headers: headers });

    return this.http
      .get(this.baseUrl + "/states", options_n)
      .map((res: Response) => res.json());
  }

  getConstituencys(parliamentaryId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(
        this.baseUrl +
          "/assemblyConstituencyByParliamentoryId/" +
          parliamentaryId,
        options_n
      )
      .map((res: Response) => res.json());
  }

  getParliamentary(stateId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/parliamentaryConstituency/" + stateId, options_n)
      .map((res: Response) => res.json());
  }

  getWards(assemblyConstituencyId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(
        this.baseUrl + "/wardsAndBooths/" + assemblyConstituencyId,
        options_n
      )
      .map((res: Response) => res.json());
  }

  getDashboardData(constituencyId, wardNo, boothId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(
        this.baseUrl +
          "/dashboard/" +
          constituencyId +
          "/" +
          wardNo +
          "/" +
          boothId,
        options_n
      )
      .map((res: Response) => res.json());
  }

  searchVoters(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .post(this.baseUrl + "/search", data, options_n)
      .map((res: Response) => res.json());
  }

  getSearchNearByVoters(srno) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/searchNearBy/" + srno, options_n)
      .map((res: Response) => res.json());
  }

  getData() {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/getApplicationSettings", options_n)
      .map((res: Response) => res.json());
  }

  AddNewVoter(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .post(this.baseUrl + "/complaint", data, options_n)
      .map((res: Response) => res.json());
  }

  getBooth(wardNo) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/booths/" + wardNo, options_n)
      .map((res: Response) => res.json());
  }

  getSurveyQuestions(stateId, wardNo) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(
        this.baseUrl + "/surveyQuestions/" + stateId + "/" + wardNo,
        options_n
      )
      .map((res: Response) => res.json());
  }

  getPartys(stateId, wardNo) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/partys/" + stateId + "/" + wardNo, options_n)
      .map((res: Response) => res.json());
  }

  postPartys(voterId, partyId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(
        this.baseUrl + "/party-preference/" + voterId + "/" + partyId,
        options_n
      )
      .map((res: Response) => res.json());
  }

  postMobile(voterId, mobile) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(
        this.baseUrl + "/citizen-mobile/" + voterId + "/" + mobile,
        options_n
      )
      .map((res: Response) => res.json());
  }

  postStatus(citizenId, status) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(
        this.baseUrl + "/citizen-status/" + citizenId + "/" + status,
        options_n
      )
      .map((res: Response) => res.json());
  }

  postSegmentation(citizenId, segmentation) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(
        this.baseUrl +
          "/citizen-segmentation/" +
          citizenId +
          "/" +
          segmentation,
        options_n
      )
      .map((res: Response) => res.json());
  }

  postCitizenVoted(citizenId, voted) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(
        this.baseUrl + "/citizen-voted/" + citizenId + "/" + voted,
        options_n
      )
      .map((res: Response) => res.json());
  }

  postsurvey(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .post(this.baseUrl + "/survey", data, options_n)
      .map((res: Response) => res.json());
  }

  postLocation(citizenId, data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .post(this.baseUrl + "/setLocation/" + citizenId, data, options_n)
      .map((res: Response) => res.json());
  }

  getCitizens(state, assemblyNo, wardNo, date, boothNo, data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let parmas = new URLSearchParams();
    parmas.append("state", state);
    parmas.append("assemblyNo", assemblyNo);
    parmas.append("wardNo", wardNo);
    parmas.append("date", date);
    parmas.append("boothNos", boothNo);

    let options_n = new RequestOptions({ headers: headers, params: parmas });
    return this.http
      .post(this.baseUrl + "/citizens", data, options_n)
      .map((res: Response) => res.json());
  }

  getComplaints(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl1 + "/complaintByCitizen/" + data, options_n)
      .map((res: Response) => res.json());
  }

  getNotificationData(citizenId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/notification/" + citizenId, options_n)
      .map((res: Response) => res.json());
  }

  markAsReadNotification(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .post(this.baseUrl + "/notificationSeen", data, options_n)
      .map((res: Response) => res.json());
  }

  getDepts() {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/departnemt", options_n)
      .map((res: Response) => res.json());
  }

  getSubdepts(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/subDepartnemt/" + data, options_n)
      .map((res: Response) => res.json());
  }

  selectIncident(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    let options_n = new RequestOptions({ headers: headers });

    return this.http
      .post(this.baseUrl + "/complaint", data, options_n)
      .map((res: Response) => res.json());
  }

  uploadImage(data) {
    var headers = new Headers();
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .post(this.baseUrl + "/upload-image", data, options_n)
      .map((res: Response) => res.json());
  }

  getImage() {
    var headers = new Headers();
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/logo.jpg", options_n)
      .map((res: Response) => res.json());
  }

  getNews(id) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/news/" + id, options_n)
      .map((res: Response) => res.json());
  }

  getAllText() {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/getAdminSettings", options_n)
      .map((res: Response) => res.json());
  }

  getActionSettings(stateId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/actions/" + stateId, options_n)
      .map((res: Response) => res.json());
  }

  getCitizenData(citizenId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl1 + "/citizen/" + citizenId, options_n)
      .map((res: Response) => res.json());
  }
  getNotificationByAssembly(assemblyId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/notifications/" + assemblyId, options_n)
      .map((res: Response) => res.json());
  }

  shareUsingMobile(citizenId, mobile) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(
        this.baseUrl + "/sendSMSToCitizen/" + citizenId + "/" + mobile,
        options_n
      )
      .map((res: Response) => res.json());
  }

  getVoterOtherInfo(citizenId) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http
      .get(this.baseUrl + "/voter-other-information/" + citizenId, options_n).map((res: Response) => res.json());
  }

  updateCitizenVolunteerDetail(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    let options_n = new RequestOptions({ headers: headers });
    console.log(data)
    return this.http.post(this.baseUrl + "/updateCitizenVolunteerDetail", data, options_n).map((res: Response) => res.json());
  }

  goToLoginPage(mobileNo) {
    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options_n = new RequestOptions({ headers: headers });
    return this.http.get(this.baseUrl + "/getVolunteerStatus/" + mobileNo, options_n)
      .map((res: Response) => res.json());
  }
}
