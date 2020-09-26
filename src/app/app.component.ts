import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 11
  };
}
