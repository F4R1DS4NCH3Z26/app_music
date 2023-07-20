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
  currentsong: any;
  newTime: any;
  albums: any;
  song = {
    name: '',
    playing: false,
    preview_url: '',
  };
  constructor(
    private musicService: MusicService,
    private modalController: ModalController
  ) {}

  ionViewDidEnter() {

    //Obteniendo los artistas
    this.musicService.getArtists().then((listArtists) => {
      this.artists = listArtists;
      console.log(this.artists);
    });

    //Obteniendo los artistas locales
    this.localartists = this.musicService.getArtistsFromJson();
    console.log(this.localartists.artists);

    this.musicService.getAlbums().then(listAlbums => {
      this.albums = listAlbums;
    })
  }

  async showAlbumSongs(album: any) {
    const songs = await this.musicService.getArtistsTracks(album.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs,
        data_name: album.name,
      },
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.song = dataReturned.data;
    });
    return await modal.present();
  }
  
  async showSongs(artist:any){
    //console.log(artist);
    const songs = await this.musicService.getArtistsTracks(artist.id);
    //console.log(songs);
    const modal = await this.modalController.create(
      {
        component: SongsModalPage,
        componentProps: {
          songs: songs,
          data_name: artist.name
        }
      }
    );
    modal.onDidDismiss().then( dataReturned => {
      this.song = dataReturned.data;
    });
    return await modal.present();
  }

  play() {
    this.currentsong = new Audio(this.song.preview_url);
    this.currentsong.play();
    this.currentsong.addEventListener('timeupdate', () => {
      this.newTime =
        (1 / this.currentsong.duration) * this.currentsong.currentTime;
    });
    this.song.playing = true;
  }

  pause() {
    this.currentsong.pause();
    this.song.playing = false;
  }

  parseTime(time = '0.00') {
    if (time) {
      const parTime = parseInt(time.toString().split(',')[0], 10);
      let minutes = Math.floor(parTime / 60).toString();
      if (minutes.length == 1) {
        minutes = '0' + minutes;
      }
      let seconds = (parTime % 60).toString();
      if (seconds.length == 1) {
        seconds = '0' + seconds;
      }
      return minutes + ':' + seconds;
    } else {
      return "0:00"
    }
  }
}
