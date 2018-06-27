import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public contactTabEnabled: boolean;
  public contactData: any;
  public sendSMS = [];
  
  constructor(public dataService: DataService, private _route: ActivatedRoute,
     private router: Router
    , public toastr: ToastsManager, public httpService: HttpService,
     vcr: ViewContainerRef, private httpClient: HttpClient) {

    this.contactTabEnabled = true;
    this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() {
    this.contactData = this.dataService.getContactData();
    console.log(JSON.stringify(this.contactData));
    console.log(this.httpService.getSendSMS());
    this.sendSMS = JSON.parse(this.httpService.getSendSMS());
    this.sendSMS.reverse();
  }

  enableContactTab = () => {

    if (!this.contactTabEnabled) {
      this.contactTabEnabled = true;
    }
  }

  disableContactTab = () => {

    if (this.contactTabEnabled) {
      this.contactTabEnabled = false;
    }
  }

  redirectToContactInfo = (val: any) => {
    setTimeout(() => {
      this.router.navigate(['/contactinfo', val.id]);
    },
      2000);
  }


}
