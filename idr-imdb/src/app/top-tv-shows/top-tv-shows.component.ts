import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { bufferCount, catchError, concatAll, concatMap, delay, map, merge, mergeMap, of, reduce, take, tap } from 'rxjs';

@Component({
  selector: 'app-top-tv-shows',
  templateUrl: './top-tv-shows.component.html',
  styleUrls: ['./top-tv-shows.component.css'],
})
export class TopTvShowsComponent implements OnInit {
  postsChunk: any = [];
  postSub: any;
  constructor(private postService: PostService, public http: HttpClient) { }

    ngOnInit() {
      this.postSub = this.postService.getPosts()
          .pipe(
            concatAll(), // flatten the array into individual next notifications
            concatMap(message => of(message).pipe(
              delay(500),
            )),
            mergeMap((post: any) => {
              const id = post.id.replace("/title/", "").replace("/", "")
              return this.postService.getPostsDetails(id).pipe(
                map((x: any) => (
                  {details: x, post, id}
                )),
               )
            }),
            bufferCount(5),
            tap(data => this.postsChunk.push(data))
          )
    }

    // showDetails(id: any) {
    //   const element = document.getElementById(id)
    //   if(element) {
    //     if(element.className.includes('hide')) {
    //       element.className = 'card-text-wrapper show'
    //       return
    //     } else  {
    //       element.className = 'card-text-wrapper hide'
    //     }
    //   }
    // }

}
