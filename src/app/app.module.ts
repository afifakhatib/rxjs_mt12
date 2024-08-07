import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UserComponent } from './shared/components/user/user.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Consumer1Component } from './shared/components/consumer1/consumer1.component';
import { Consumer2Component } from './shared/components/consumer2/consumer2.component';
import { Consumer3Component } from './shared/components/consumer3/consumer3.component';
import { PostcardComponent } from './shared/components/posts/postcard/postcard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    PostsComponent,
    Consumer1Component,
    Consumer2Component,
    Consumer3Component,
    PostcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
