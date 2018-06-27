import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  public contactData: any;
  public routeContactId : any ;

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
  }

  redirectToComposeMessage = (val: any) => {
    setTimeout(() => {
      this.router.navigate(['/composemessage', val.id]);
    },
      2000);
  }

}
