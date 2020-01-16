import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularYandexMapsModule } from 'angular8-yandex-maps';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RateComponent } from './components/rate/rate.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rate', component: RateComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RateComponent,
    EmployeesComponent,
    AboutusComponent,
  ],
  imports: [
    AngularYandexMapsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
