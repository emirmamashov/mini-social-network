import { Component, OnInit } from '@angular/core';

//models
import { Album } from '../../../models/album';
import { AlbumPhoto } from '../../../models/album-photo';

//services
import { AlbumService } from '../../../services/album.service';
import { PagerService } from '../../../services/pager.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [ AlbumService, PagerService ]
})
export class AlbumComponent implements OnInit {
  albums: Array<Album> = new Array<Album>();
  pager: any = {};
  pagedItems: Array<Album> = new Array<Album>();

  constructor(
    private albumService: AlbumService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getMyAlbums().subscribe(
      (albums: Array<Album>) => {
        if (albums) {
          this.albums = albums;
          this.setPage(1);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  getPhotos(album: Album): void {
    if (!album || !album.id) return console.log('albumId is null');

    this.albumService.getAlbumPhotos(album.id).subscribe(
      (albumPhotos: Array<AlbumPhoto>) => {
        if (albumPhotos) {
          album.photos = albumPhotos;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  delete(albumId: number): void {
    if (!albumId) return console.log('albumId is null');

    this.albumService.delete(albumId).subscribe(
      response => {
        this.albums = this.albums.filter(x=>x.id !=albumId);
        this.pagedItems = this.pagedItems.filter(x=>x.id !=albumId);
      },
      err => {
        console.log(err);
      }
    );
  }

  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        this.pager = this.pagerService.getPager(this.albums.length, page);

        this.pagedItems = this.albums.slice(this.pager.startIndex, this.pager.endIndex + 1);

        this.pagedItems.forEach((album) => {
          album.photos = new Array<AlbumPhoto>();
          this.getPhotos(album);
        });
    }
}
