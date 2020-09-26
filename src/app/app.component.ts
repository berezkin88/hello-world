import { Component } from '@angular/core';
import { ActiveChangeEventArgs } from './courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  post = {
    title: 'Title',
    isActive: true
  };

  onActiveChange(eventArgs: ActiveChangeEventArgs): void {
    console.log('Active Changed: ', eventArgs);
  }
}
