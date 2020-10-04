import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowersPageComponent } from './github-followers-page.component';

describe('GithubFollowersPageComponent', () => {
  let component: GithubFollowersPageComponent;
  let fixture: ComponentFixture<GithubFollowersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubFollowersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
