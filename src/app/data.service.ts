import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  contactData =[
    {
      "id": "5b33a88607018d6b890e8e5e",
      "name": "Bridgette Tucker",
      "email": "bridgettetucker@zerbina.com",
      "phone": 9969667348
    },
    {
      "id": "5b33a886d666b28c8d834a1a",
      "name": "Bartlett Beard",
      "email": "bartlettbeard@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a88663e2e974975d31a2",
      "name": "Jewel Jarvis",
      "email": "jeweljarvis@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a8863d6a1dface3e0ef2",
      "name": "Heath Moon",
      "email": "heathmoon@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a8866b6f1c72275768de",
      "name": "Robin Miles",
      "email": "robinmiles@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a886ee4f08e192c4e5f4",
      "name": "Alvarez Roberts",
      "email": "alvarezroberts@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a886a33c81fbbb15fa95",
      "name": "Browning Battle",
      "email": "browningbattle@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a8868a1efac14a743a0d",
      "name": "Woods Dillon",
      "email": "woodsdillon@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a88648edddb06fed9bc2",
      "name": "Tamra Pierce",
      "email": "tamrapierce@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a886b5caf339418929c6",
      "name": "Hansen Mckay",
      "email": "hansenmckay@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a886880724dcafe346e6",
      "name": "Rhea Kennedy",
      "email": "rheakennedy@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a886a5eceec3aedaf208",
      "name": "Sondra Ramirez",
      "email": "sondraramirez@zerbina.com",
      "phone": 9971792703
    },
    {
      "id": "5b33a886fe5a25c5b7a43b05",
      "name": "Larsen Blanchard",
      "email": "larsenblanchard@zerbina.com",
      "phone": 9971792703
    }
  ]

  constructor() { 
    console.log("data service is called");
  }

  getContactData = () =>{
    return this.contactData;
  }
}
