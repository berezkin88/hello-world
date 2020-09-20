import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
  {{ course.title | summary }} <br/>
  `
})
export class CoursesComponent {
  course = {
    title: "This is the course"
  }
}
