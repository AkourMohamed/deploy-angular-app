// component : 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// module : 
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// services :
import { PlayService } from './play.service';
import { ShowPostComponent } from './show-post/show-post.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    ContactFormComponent,
    SingUpComponent,
    PostsComponent,
    PageNotFoundComponent,
    ShowPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PlayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
