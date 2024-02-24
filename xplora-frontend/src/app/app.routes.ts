import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

export const routes: Routes = [
    { path: 'admin', component: AdminDashboardComponent},   
    { path: '', component: HomeComponent},
    { path: 'registration', component: RegistrationComponent},
    { path: 'login', component: LoginComponent},
    { path: 'user', component: UserDashboardComponent}

];
