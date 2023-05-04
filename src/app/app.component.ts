import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'opex';

  signUpUsers: any[] = [];
  signUpObject: any = {
    userName: '',
    email: '',
    passWord: '',
  };

  loginUpObject: any = {
    userName: '',
    passWord: '',
  };


}
