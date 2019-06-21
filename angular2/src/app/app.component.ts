import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { ApiService } from './api.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  imgSrc = './image/Laws.jpg';
  myEmail: string='';
  isLogin: boolean = true;
  isLogout: boolean = false;
  isSignup:boolean = true;
  isActive:boolean =false;
  isActive2:boolean = false;
  user : User = {
    username : '',
    password : '',
    history  : '',
    account  : ''
  }
  constructor(
    private router :Router,
    private titleService: Title,
    private api:ApiService
  ) {  
  }

    
  ngOnInit() {
    this.titleService.setTitle('AI Laws assistant in intellectual property rights');
  }
  
  login(form: NgForm){
    this.api.Login(form)
    .subscribe((data:Response) => {
      let temp = data;
      this.isActive2 = true;
      if(temp.loginstate=='true'){
        this.user.username = temp.result.username;
        this.user.password = temp.result.password;
        this.user.account = temp.result.account;
        this.user.history = temp.result.history;
        this.isLogin = false;
        this.isLogout = true;
        localStorage.setItem('login','ok');
        this.router.navigate(['/legal-assistant']);
      }
      else{
        this.isLogin = true;
      }
    }
    
  );
  }

  logout(){
    this.router.navigate(['/']);
    localStorage.removeItem('login');
    this.isLogin = true;
    this.isLogout = false;
    this.isSignup = false;
    this.isActive = false;
    this.isActive2 = false;
   
  }

  signup(form: NgForm){
    this.api.SignUp(form)
    .subscribe((data:Response) => {
      let temp = data;
      this.isActive = true;
      if(temp.signstate=='true'){
        this.isSignup = true;
      }
      else{
        this.isSignup = false;
      }
    }
    
  );
  }


}
