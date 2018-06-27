import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { DataService } from '../data.service';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {

  public contactData: any;
  public routeContactId: any;
  public contactName: any;
  public contactId: any;
  public contactPhone: any;
  public message: any;

  public apiKey = 'ad95dd12';
  public apiSecret = 'h8H6NXryFDsteW1N';

  constructor(public dataService: DataService, private _route: ActivatedRoute,
    private router: Router
    , public toastr: ToastsManager, public httpService: HttpService,
    vcr: ViewContainerRef, private httpClient: HttpClient) {

    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.contactData = this.dataService.getContactData();
    //console.log(JSON.stringify(this.contactData));
    this.routeContactId = this._route.snapshot.paramMap.get('userId');
    console.log(this.routeContactId);
    this.getUserInfo();
    //initialising message with otp value
    this.message = "Hi," + this.contactName + " your otp is : " + this.getRandomNumber();
  }

  // getting user info to display them
  getUserInfo = () => {

    for (let contact of this.contactData) {
      if (contact.id === this.routeContactId) {
        this.contactId = contact.id;
        this.contactName = contact.name;
        this.contactPhone = contact.phone;
        break;
      }
    }

  }
  // get user info end

  //method to create otp
  getRandomNumber = () => {
    let max = 999999;
    let min = 111111;

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
  }//methd to create otp end

  // will be called on button click
  sendMessage = () => {

    console.log("Message is  " + this.message);
    let data = {

      message: this.message,
      phone: this.contactPhone,//this.contactPhone,

    }


    this.httpService.sendSMS(data).subscribe(

      data => {
        let status = data.status;
        let message = data.msg;
        //if status is success
        if (status === "success") {
          this.toastr.success(message, 'Success!');
          console.log(data);
          //let token = message;
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);

        } else {
          this.toastr.error(message, 'Fail!!');
          console.log(data);
        }
        // data that will be stored in send sms json locally
        let date = new Date();
        let sendSMSData = {
          name : this.contactName,
          message: this.message,
          phone: this.contactPhone,
          date: date.getDate(),
          time: date.getHours()
        }

        this.httpService.addtoSentSMS(sendSMSData);
      },
      error => {
        console.log(JSON.stringify(error));
        this.toastr.error(JSON.stringify(error), 'Oops!');

        let date = new Date();
        let sendSMSData = {
          name : this.contactName,
          message: this.message,
          phone: this.contactPhone,
          date: date.getDate(),
          time: date.getHours()
        }

        this.httpService.addtoSentSMS(sendSMSData);

        this.toastr.info("Redirecting you to home", 'Okay!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      }
    );



  }

}
