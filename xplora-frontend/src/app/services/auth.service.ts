import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginDetails } from '../interface/login.interface';
import { signUserInterface } from '../interface/signUp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<{ message: string, error: string, isAdmin: any }> {
    const userData = { email, password };
    return this.http.post<{ message: string, error: string, isAdmin: any }>('http://localhost:4100/auth/login', userData);
  }

  signUpUser(name: string, email: string, password: string, phoneNumber: string, nationality: string, dateOfBirth: Date, location: string, gender: string, nationalId: string, occupation: string): Observable<{ message: string, error: string }> {
    const userData: signUserInterface = {
      name: name,
      email: email,
      password: password,
      nationality: nationality,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
      location: location,
      gender: gender,
      nationalId: nationalId,
      occupation: occupation
    };
    return this.http.post<{ message: string, error: string }>('http://localhost:4100/users', userData)
  }

  /* loginUser(details: loginDetails) {
    return this.http.post<{ message:string, token:string, error: string }>('http://localhost:4100/auth/login', details).subscribe(res => {
      console.log(res); 
    });                         
  } */
}
