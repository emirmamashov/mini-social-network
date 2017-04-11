import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//models
import { AlbumPhoto } from '../../../models/album-photo';

//services
import { AlbumService } from '../../../services/album.service';
import { PagerService } from '../../../services/pager.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
  providers: [ AlbumService, PagerService ]
})
export class AlbumPhotosComponent implements OnInit {
  albumPhotos: Array<AlbumPhoto> = new Array<AlbumPhoto>();
  pager: any = {};
  pagedItems: Array<AlbumPhoto> = new Array<AlbumPhoto>();
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private pagerService: PagerService
  ) {
      this.route.params.subscribe(
        param => {
          console.log(param['id']);
          this.getPhotos(param['id']);
        },
        err => {
          console.log(err);
        }
      );
   }

  ngOnInit() {
  }

  getPhotos(albumId: number): void {
    if (!albumId) return console.log('albumId is null');

    this.albumService.getAlbumPhotos(albumId).subscribe(
      (albumPhotos: Array<AlbumPhoto>) => {
        if (albumPhotos) {
          this.albumPhotos = albumPhotos;
          this.setPage(1);
          console.log(albumPhotos);
        }
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

        this.pager = this.pagerService.getPager(this.albumPhotos.length, page);

        this.pagedItems = this.albumPhotos.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
