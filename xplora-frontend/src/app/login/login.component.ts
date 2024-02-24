/* import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { loginDetails } from '../interface/login.interface';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,FormsModule, ReactiveFormsModule,RouterLink, CommonModule, LoginComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder, public apiConnect:AuthService, private router:Router){

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]

    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted successfully');

      this.apiConnect.loginUser(
        this.loginForm.value.email,
        this.loginForm.value.password
      ).subscribe(response=>{
        console.log(response);
        console.log('happy')

        //isAdmin  also part of response const isAdmin = response.isAdmin
        const errors = response.error

    })

    // this.loginForm.reset();

     //isAdmin  also part of response
     const isAdmin = response.isAdmin
     const errors = response.error

    if(isAdmin){
      //admin only 1 person set in db
     this.router.navigate(['/admin']);
     this.loginForm.reset();
   }

   else{
     this.router.navigate(['/users']);
   }
 })

 // this.loginForm.reset();

 }

 else {
   console.log('Form has errors');

 }
}
    

    else {
      console.log('Form has errors');

    }
}

}
 */


import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { loginDetails } from '../interface/login.interface';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, FormsModule, ReactiveFormsModule, CommonModule, LoginComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public apiConnect: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted successfully');

      this.apiConnect.loginUser(
        this.loginForm.value.email,
        this.loginForm.value.password
      ).subscribe(response => {
        console.log(response);
        console.log('happy');

        // isAdmin also part of response const isAdmin = response.isAdmin
     

        // isAdmin also part of response
        const isAdmin = response.isAdmin;
        const errors = response.error;

        if (isAdmin) {
          // admin only 1 person set in db
          this.router.navigate(['/admin']);
          this.loginForm.reset();
        } else {
          this.router.navigate(['/admin']);
        }
      });

      // this.loginForm.reset();

    } else {
      console.log('Form has errors');
    }
  }
}
