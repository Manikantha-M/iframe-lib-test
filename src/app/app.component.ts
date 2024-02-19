import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  appLanguage = 'en';
  // srcURL = 'http://localhost:4300/motor-insurance/individual-products';
  srcURL = 'https://b2c-sit.alrajhitakaful.com/web/motor-insurance/individual-products';

  inputData = {
    isLoggedIn:true,
    customerType:1,
    appLanguage:'en',
    additionalData:{},
    eventType:"INPUT"
};
guestAppLangChange(event:any){
  console.log(event, 'change in guest language')
}

getGuestWindowData(event:any){
  console.log(event, 'received output')
}
}


