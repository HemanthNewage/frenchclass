import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { DelfA1Component } from './components/courses/delf-a1/delf-a1.component';
import { DelfA2Component } from './components/courses/delf-a2/delf-a2.component';
import { DelfB1Component } from './components/courses/delf-b1/delf-b1.component';

const routes: Routes = [{
  path:'',component:MainpageComponent
},
{
  path:'delf-a1-exam',component:DelfA1Component
},
{
  path:'delf-a2-exam',component:DelfA2Component
},
{
  path:'delf-b1-exam',component:DelfB1Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
