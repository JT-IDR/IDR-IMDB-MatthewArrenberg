import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TopTvShowsComponent } from './top-tv-shows/top-tv-shows.component';


const appRoutes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'top-tv-shows', component: TopTvShowsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    TopTvShowsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
