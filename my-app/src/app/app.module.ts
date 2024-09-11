import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ngmodule is used in formsmodule library
import { AppRoutingModule, routingComponents } from './app-routing.module'; // this is required to be imported to do routing
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { StrucDirectivesComponent } from './struc-directives/struc-directives.component';
import { ComponentInteractionsComponent } from './component-interactions/component-interactions.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpfunctioningService } from './httpfunctioning.service';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { RequestInterceptor } from './request.interceptor';
import { HeadersInterceptor } from './headers.interceptor';
import { ConvertPipe } from './convert.pipe';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    StrucDirectivesComponent,
    ComponentInteractionsComponent,
    PipesComponent,
    ServicesComponent,
    EmployeeDetailComponent,
    // DepartmentListComponent, no need to declare them now 
    // EmployeeListComponent,
    routingComponents,
    PageNotFoundComponent,
    DeptDetailComponent,
    HeaderComponent,
    ContainerComponent,
    ConvertPipe,
    ClassDirective,
    TimesDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmployeeService,HttpfunctioningService,{
    provide: HTTP_INTERCEPTORS, // is an injection token that Angular uses to locate the array of HTTP interceptor classes, it indicates that we are providing a value for 'HTTP_INTERCEPTORS' injection token
    useClass: RequestInterceptor,
    multi:true // allows to define multiple interceptors in the application
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi:true
  }], // registering the service in the app.module
  bootstrap: [AppComponent],
})
export class AppModule {}
