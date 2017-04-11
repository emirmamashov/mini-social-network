import { AlbumPhoto } from './album-photo';

export class Album {
    id: number;
    userId: number;
    title: string;
    photos: Array<AlbumPhoto>
}