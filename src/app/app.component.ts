import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app-todo-PHAN';
  isSignedIn = false
  constructor(public FirebaseService :  FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user')!==null)
    this.isSignedIn =true
    else
    this.isSignedIn =false
  }
  async onSignup(email1:string, password1:string){
    await this.FirebaseService.signup(email1, password1)
    if(this.FirebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email:string, password:string){
    await this.FirebaseService.signin(email, password)
    if(this.FirebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false
  }
  
}

