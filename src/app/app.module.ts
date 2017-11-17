import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataTableModule } from 'angular2-datatable';

import { AppComponent } from './app.component';
import { PostService } from './shared/post.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    PostService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
