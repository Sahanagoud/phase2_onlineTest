import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-test-saha';
  isVisible:boolean = true;

  email1:any;

  user = { email: '', password: '' };
  isValid = true;

  constructor(private ds:DataService, private router:Router){}

  onSubmit(){
    console.log(this.user);
    this.ds.checkLogin(this.user).subscribe({
      next:data=>{
        if(data){
          //alert("Login successfull");
          //sessionStorage.setItem("user",this.user.email);
          if(this.user.password==="admin1234"){
              alert("Login Successful\nWelcome Admin");
              this.router.navigate(['/add-q']);
          }
          
      }},
      error:err=>{
        if(err){
          alert("Login unsucessfull\nOnly Admin can access this page");
          this.user = {email:'',password:''};
          this.router.navigate(['/login']);

        };
      }

    })
  }



}
