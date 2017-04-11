import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

//pages
import { HomeComponent } from "./pages/home/home.component";
import { PostComponent } from "./pages/posts/post/post.component";
import { AlbumComponent } from "./pages/albums/album/album.component";
import { AlbumPhotosComponent } from "./pages/albums/album-photos/album-photos.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'post',
        component: PostComponent
    },
    {
        path: 'album',
        component: AlbumComponent
    },
    {
        path: 'album/:id',
        component: AlbumPhotosComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}