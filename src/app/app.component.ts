import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = ['userName', 'email', 'password',];


  title = 'opex';
  user: any = {};

  signUpUsers: any[] = [];
  signUpObject: any = {
    Id: 0,
    userName: '',
    email: '',
    password: '',
  };

  loginObject: any = {
    userName: '',
    password: '',
  };

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const localData = localStorage.getItem('signUpUsers');
    if(localData !== null){
      this.signUpUsers = JSON.parse(localData);
    }
  }



  signUp(): void{
    this.signUpUsers.push(this.signUpObject);
    this.user.id = this.signUpUsers.length + 1;
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));

    this.signUpObject = {
      Id: 0,
      email: '',
      password: '',
    };

  }


  login(): void {
  const isUser = this.signUpUsers.find(user => user.userName === this.loginObject.userName && user.password === this.loginObject.passWord);
  if(isUser !== undefined){
    alert('user logged in successfully');

  }else{
    alert('Wrong credentials');
  }
  }

  delete(id: any): void {
    let i = 0;
    const newData = [];
    for( i === 0; i < this.signUpUsers.length; i++ ) {

      if (this.signUpUsers[i].id !== id){
        newData.push(this.signUpUsers[i]);
      }
    }

    localStorage.setItem('signUpUsers', JSON.stringify(newData));
  }

  update(user: any): void{
    // tslint:disable-next-line:no-debugger
   debugger;
   this.user = user;
   this.signUp();
  }
}
