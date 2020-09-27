import { Component, Input } from '@angular/core';
import { faChevronUp as chevronUp, faChevronDown as chevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.sass']
})
export class ZippyComponent {
  @Input('title') title: string;
  isClicked: boolean;
  chevronUp = chevronUp;
  chevronDown = chevronDown;

  onClick(): void {
    this.isClicked = !this.isClicked;
    console.log('Clicked ', this.isClicked);
  }
}
