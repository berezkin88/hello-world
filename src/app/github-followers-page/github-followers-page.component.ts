import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers-page',
  templateUrl: './github-followers-page.component.html',
  styleUrls: ['./github-followers-page.component.sass']
})
export class GithubFollowersPageComponent implements OnInit {
  followers: any;

  constructor(private service: FollowersService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(response => {
        this.followers = response;
      });
  }

}
