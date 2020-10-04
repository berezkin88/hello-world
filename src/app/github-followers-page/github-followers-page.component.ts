import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers-page',
  templateUrl: './github-followers-page.component.html',
  styleUrls: ['./github-followers-page.component.sass']
})
export class GithubFollowersPageComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: FollowersService) { }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        return this.service.getAll();
      })
    )
    .subscribe(followers => {
      this.followers = followers;
    });
  }
}
