import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { HttpService } from './http.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactInfoComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,
    ToastModule.forRoot(),BrowserAnimationsModule,
    RouterModule.forRoot([
      
      {path:'home',component:HomeComponent},
      {path:'contactinfo/:userId',component:ContactInfoComponent},
      {path:'composemessage/:userId',component:ComposeMessageComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      { path: '*', component: HomeComponent },
      { path: '**', component: HomeComponent }
      ])
 
  ],
  providers: [DataService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
