import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
// this file is for routing 

const routes: Routes = [
  {path:'',redirectTo:'/department-list', pathMatch:'full'},
  // pathmatch has ,prefix,suffix options so you can then set it accordingly, it depends on the path set so if there is route default is department  
  // {path:'',component:DepartmentListComponent},
  //this is default route like home page by default the dpearmtnet list will eb displayed 
  {path:'department-list', component:DepartmentListComponent},
  {path:'department-list/:id', component:DeptDetailComponent},
  {path:'employees', component:EmployeeListComponent},
  {path:'**',component:PageNotFoundComponent}
  // the wildcard route should always be the last in the router navigation because the router tries to match the path from the DOM so if wildcard is first it will be displayed first 
];
// configure the routes here, each route is nothing but an object, which containes a poth contained in the URL and the component to be rendered when we navigate to that corresponding part.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// create an array of all routing components and export them
export const routingComponents =[DepartmentListComponent,EmployeeListComponent]
