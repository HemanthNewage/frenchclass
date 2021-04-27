import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { DelfA1Component } from './components/courses/delf-a1/delf-a1.component';
import { DelfA2Component } from './components/courses/delf-a2/delf-a2.component';
import { DelfB1Component } from './components/courses/delf-b1/delf-b1.component';
import { DelfB2Component } from './components/courses/delf-b2/delf-b2.component';
import { TcfComponent } from './components/courses/tcf/tcf.component';
import { TefComponent } from './components/courses/tef/tef.component';
import { DalfComponent } from './components/courses/dalf/dalf.component';
import { DalfC2Component } from './components/courses/dalf-c2/dalf-c2.component';

const routes: Routes = [{
  path: '', component: MainpageComponent
},
{
  path: 'delf-a1-exam', component: DelfA1Component
},
{
  path: 'delf-a2-exam', component: DelfA2Component
},
{
  path: 'delf-b1-exam', component: DelfB1Component
},
{
  path: 'delf-b2-exam', component: DelfB2Component
}
  ,
{
  path: 'tcf-exam', component: TcfComponent
}
  ,
{
  path: 'tef-exam', component: TefComponent
}
  ,
{
  path: 'dalf-c1-exam', component: DalfComponent
}
  ,
{
  path: 'dalf-c2-exam', component: DalfC2Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
