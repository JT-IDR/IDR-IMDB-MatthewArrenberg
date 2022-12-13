import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTvShowsComponent } from './top-tv-shows.component';

describe('TopTvShowsComponent', () => {
  let component: TopTvShowsComponent;
  let fixture: ComponentFixture<TopTvShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTvShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
