import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from './academics/academics.component';
import { AdmissionsComponent } from './admissions/admissions.component';

export const routes: Routes = [
    { path:'', component:HomeComponent },
    { path:'about', component:AboutComponent },
    { path:'academics', component:AcademicsComponent},
    { path:'admissions', component:AdmissionsComponent},
];
