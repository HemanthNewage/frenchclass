import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { DelfA1Component } from './components/courses/delf-a1/delf-a1.component';

const routes: Routes = [{
  path:'',component:MainpageComponent
},
{
  path:'delf-a1-exam',component:DelfA1Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
