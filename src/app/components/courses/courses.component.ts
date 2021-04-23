import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(url){
    this.router.navigateByUrl(`/${url}`)
    
  }
}
