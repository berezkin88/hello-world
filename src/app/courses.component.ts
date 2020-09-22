import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'courses',
  template: `
  <fa-icon [icon]="isActive ? fasStar : farStar" (click)="onClick();"></fa-icon>
  `
})
export class CoursesComponent {
  isActive = false;
  fasStar = fasStar;
  farStar = farStar;
  
  onClick() {
    this.isActive = !this.isActive;
    console.log("Changed");
  }
}
