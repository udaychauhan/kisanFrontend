import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()
export class HttpService {

  public sendSMSArray = [];
  public localSentSMSItemName = "sentsms";
  constructor(private _http: HttpClient) {
    console.log("http service was called");
    //initialising json to store sent sms
    this.intialiseSentSMSArray();
  }

  public sendSMS(userData): any {
    let baseUrl = 'https://smsapi.engineeringtgr.com/send/?Mobile=9969667348&Password=montydutta&Key=uday.f5pqdI3YoRCjtyNMg&Message=' + userData.message + '&To=' + userData.phone;
    let options = {
      withCredentials: true
    }
    let myResponse = this._http.get(baseUrl, options);
    return myResponse;
  }

  public intialiseSentSMSArray(): any {
    //if item by this name not present add one
    if (!localStorage.getItem(this.localSentSMSItemName)) {
      let arrayStringValue = JSON.stringify(this.sendSMSArray);
      localStorage.setItem(this.localSentSMSItemName, arrayStringValue);
    }
  }

  //input is json to be converted into string
  public addtoSentSMS(data): any {
    let strngJson = this.getSendSMS();
    let arrayJson = JSON.parse(strngJson);
    arrayJson.push(data);
    localStorage.setItem(this.localSentSMSItemName, JSON.stringify(arrayJson));
  }

  //return json in string format
  public getSendSMS(): any {
    return localStorage.getItem(this.localSentSMSItemName);
  }
}
