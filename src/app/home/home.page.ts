import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongsModalPage } from '../songs-modal/songs-modal.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  artists: any;
  localartists: any;
  song = {
    name: ''
  }
  constructor(
    private musicService: MusicService,
    private modalController: ModalController
  ) {}

  ionViewDidEnter() {
    this.musicService.getArtists().then((listArtists) => {
      this.artists = listArtists;
      console.log(this.artists);
    });

    this.localartists = this.musicService.getArtistsFromJson();
    console.log(this.localartists.artists);
  }

  async showSongs(artist: any) {
    // console.log(artist);
    const songs = await this.musicService.getArtistsTracks(artist.id);
    // console.log(songs);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs,
        artist: artist.name,
      },
    });
    modal.onDidDismiss().then(dataReturned => {
      this.song = dataReturned.data;
    });
    return await modal.present();
  }
}
