import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { WeatherComponent } from './weather/weather.component';
import { PinterestComponent } from './pinterest/pinterest.component';

import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import { UserComponent } from './user/user.component';
import { SchooldetailsComponent } from './schooldetails/schooldetails.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { CapitalDirective } from './capital.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Error404Component,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    VehicleComponent,
    FlipkartComponent,
    WeatherComponent,
    PinterestComponent,
    CreateVehicleComponent,
    StudentDetailsComponent,
    StudentsComponent,
    UserComponent,
    SchooldetailsComponent,
    VehicleDetailsComponent,
    StudentsDetailsComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    CreateStudentsComponent,
    InputFieldComponent,
    CapitalDirective,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
   ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
