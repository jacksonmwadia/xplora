// import { Component } from '@angular/core';
// import { Router, RouterLink } from '@angular/router';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { FooterComponent } from '../footer/footer.component';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-registration',
//   standalone: true,
//   imports: [RouterLink, NavbarComponent,FooterComponent, ReactiveFormsModule, CommonModule ],
//   templateUrl: './registration.component.html',
//   styleUrl: './registration.component.css'
// })
// export class RegistrationComponent {

//   signUpForm!: FormGroup;
//   successMessage: string = '';
//   showSuccessMessage:boolean = false;

//   constructor(private fb:FormBuilder, public apiConnect:AuthService,  private router: Router){

//     this.signUpForm = this.fb.group({
//       name: ['', [Validators.required]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9]+$')]],
//       nationalId: ['', [Validators.required]],
//       phoneNumber: ['', [Validators.required]],
//       dateOfBirth: ['', [Validators.required]],
//       occupation: ['', [Validators.required]],
//       location: ['', [Validators.required]],
//       gender: ['', [Validators.required]],
//     });
//   }

//   onSubmit() {

//       if (this.signUpForm.valid) {
//         // Call the signUpUser method from the ApiConnectionService
//         this.apiConnect.signUpUser(
//           this.si.value.name,
//           this.signUpForm.value.email,
//           this.signUpForm.value.password
//           this.signUpForm.value.phoneNumber
//           this.signUpForm.value. dateOfBirth
//           this.signUpForm.value.gender
//           this.signUpForm.value.nationality
//           this.signUpForm.value.occupation

//         ).subscribe(response => {
//           console.log(response);


//         });

//         this.successMessage = 'Signup successful';
//         this.showSuccessMessage = true;

//         this.signUpForm.reset();


//           setTimeout(() => {
//               this.showSuccessMessage = false;
//               this.router.navigate(['auth/login']);
//           }, 2000);



//     }
//      else {
//       this.signUpForm.markAllAsTouched();
//     }
//   }
// }
 

// /* import { CommonModule } from '@angular/common';
// import { Component} from '@angular/core';
// import { ReactiveFormsModule,  FormGroup, Validators,FormBuilder } from '@angular/forms';

// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';


// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [ ],
//   templateUrl: './registration.component.html',
//   styleUrl: './registration.component.css'
// })

// export class SignupComponent {

// }
//  */


//     // onSubmit(form: FormGroup) {
//     // console.log('UserName', form.value.userName);
//     // console.log('email', form.value.email);
//     // console.log('password', form.value.password);
//   // }

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  signUpForm!: FormGroup;
  successMessage: string = '';
  showSuccessMessage: boolean = false;
  constructor(private fb: FormBuilder, public apiConnect: AuthService, private router: Router, private http:HttpClient) {


    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],  
      phoneNumber: ['', [Validators.required]],
      nationalId: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      location: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

onSubmit() {
  console.log(`called`);
  

    if (this.signUpForm.valid) {
      // Call the signUpUser method from the ApiConnectionService
      this.apiConnect.signUpUser(
        this.signUpForm.value.name,
        this.signUpForm.value.email,
        this.signUpForm.value.phoneNumber,
        this.signUpForm.value.nationalId,
        this.signUpForm.value.gender,
        this.signUpForm.value.occupation,
        this.signUpForm.value.nationality,
        this.signUpForm.value.location,
        this.signUpForm.value.dateOfBirth,
        this.signUpForm.value.password
      ).subscribe(response => {
        console.log(response);
      });

      this.successMessage = 'Signup successful';
      this.showSuccessMessage = true;

      this.signUpForm.reset();

      setTimeout(() => {
        this.showSuccessMessage = false;
        this.router.navigate(['login']);
      }, 2000);

    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
}
