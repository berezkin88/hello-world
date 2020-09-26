import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'courses',
  template: `
  <fa-icon [icon]="isActive ? fasStar : farStar" (click)="onClick();"></fa-icon>
  `,
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent {
  @Input('is-active') isActive: boolean;
  @Output('change') click = new EventEmitter();
  fasStar = fasStar;
  farStar = farStar;

  onClick(): void {
    this.isActive = !this.isActive;
    this.click.emit({ newValue: this.isActive });
    console.log('Changed');
  }
}

export interface ActiveChangeEventArgs {
  newValue: boolean;
}