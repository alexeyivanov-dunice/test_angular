import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';

import { PostService } from './post/post.service';
import { Post } from './post/post.model';
import { DialogComponent } from './dialog/dialog.component';

const POLL_TIME: number = 10 * 1000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('myModal') myModal: ElementRef;

  posts: Post[] = [];
  timeoutId: number = null;

  constructor(
    private postService: PostService,
    public dialog: MatDialog,
  ) {
    this.getPosts = this.getPosts.bind(this);
  }

  private startPolling(): void {
    this.timeoutId = window.setTimeout(this.getPosts, POLL_TIME);
  }

  private stopPolling(): void {
    window.clearTimeout(this.timeoutId);
  }

  public ngOnInit() {
    this.startPolling();
  }

  public ngOnDestroy() {
    this.stopPolling();
  }

  public getPosts(): void {
    this.postService
      .getPosts()
      .subscribe((posts: any) => {
        this.posts = posts.hits;
        this.timeoutId = window.setTimeout(this.getPosts, POLL_TIME);
      });
  }

  public openDialog(post: Post): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      data: JSON.stringify(post),
    });
  }
}



