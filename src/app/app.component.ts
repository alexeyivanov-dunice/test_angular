import {Component, OnInit, ElementRef, ViewChild, Inject} from '@angular/core';
import {PostService} from "../post.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myModal') myModal: ElementRef;

  posts = [];
  post = null;
  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    setInterval(this.getPosts.bind(this), 1000);
    console.log(this.posts);
  }

  openDialog(post): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '550px',
      data: JSON.stringify(post),
    });
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => {this.posts = posts.hits; console.log('query')});
  }

}

@Component({
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



