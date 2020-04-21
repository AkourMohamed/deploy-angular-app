import { ShowPostComponent } from './show-post/show-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
import { TestComponent } from './test/test.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    { path: 'post/:post',component:ShowPostComponent},
    { path: 'test',component: TestComponent},
    { path: 'post',component: PostsComponent},
    { path: 'contact',component: ContactFormComponent},
    { path: 'sign-up',component: SingUpComponent},
    { path: '**',component: PageNotFoundComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }