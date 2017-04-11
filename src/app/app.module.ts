import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

//services
import { HandleErrorService } from './services/handle.error';
import { LocalStorageModule, LocalStorageService } from "angular-2-local-storage";
import { MyLocalStorageService } from "./services/localStorage.service";

//pages
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/posts/post/post.component';
import { AuthorAboutComponent } from './components/author-about/author-about.component';
import { AlbumComponent } from './pages/albums/album/album.component';
import { AlbumPhotosComponent } from './pages/albums/album-photos/album-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    AuthorAboutComponent,
    AlbumComponent,
    AlbumPhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
      prefix: 'app-root',
      storageType: 'sessionStorage'
    }),
  ],
  providers: [HandleErrorService, LocalStorageService, MyLocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
