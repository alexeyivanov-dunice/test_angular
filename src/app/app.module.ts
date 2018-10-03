import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostService} from './post/post.service';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    NoopAnimationsModule,
  ],
  entryComponents: [DialogComponent],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule { }
