import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { FlipkartComponent } from './flipkart/flipkart.component';
import { WeatherComponent } from './weather/weather.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UserComponent } from './user/user.component';
import { SchooldetailsComponent } from './schooldetails/schooldetails.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { InputFieldComponent } from './input-field/input-field.component';


const routes: Routes = [
{path:'dashboard' ,component:DashboardComponent,children:[
    {path:'welcome',component:WelcomeComponent,canActivate:[AuthenticationGuard]}, 
    {path:'home',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'weather',component:WeatherComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'students',component:StudentsComponent},
    {path:'student-details',component:StudentDetailsComponent},
    {path:'user',component:UserComponent},
    {path:'schooldetails',component:SchooldetailsComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'login',component:LoginComponent},
    {path:'students-details/:id',component:StudentsDetailsComponent},
    {path:'sibling1',component:Sibling1Component},
    {path:'sibling2',component:Sibling2Component},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'create-students',component:CreateStudentsComponent},
    {path:'input-field',component:InputFieldComponent},

    
    
     ]},
{path:'' ,component:LoginComponent},
{path:'login' ,component:LoginComponent},
{path:'**',component:Error404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}