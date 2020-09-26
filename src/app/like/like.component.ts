import { Component, Input } from '@angular/core';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.sass']
})
export class LikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  fasHeart = fasHeart;

  onClick(): void {
    this.isActive = !this.isActive;
    this.isActive ? ++this.likesCount : --this.likesCount;
    console.log(this.isActive);
  }
}
