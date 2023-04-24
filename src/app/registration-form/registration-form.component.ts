import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  constructor(private ds:DataService,private router:Router){}
  
  emailPattern = '^[a-zA-Z0-9._]+@[a-zA-z0-9.-]+\\.[a-z]{2,4}$';

  RegistrationForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });

  submit(){
    this.ds.createNewUser(this.RegistrationForm.value).subscribe(data=>alert("Registration Successful"));    
    console.table(this.RegistrationForm.value);
    this.router.navigate(['/login']);
  }
    get f(){
    return this.RegistrationForm.controls;
  }


}
