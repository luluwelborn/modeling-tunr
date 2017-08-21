import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-songs-new',
  templateUrl: './songs-new.component.html',
  styleUrls: ['./songs-new.component.css']
})
export class SongsNewComponent implements OnInit {

	newSong = <any>{};

  constructor(
  		private songsService : SongsService 
  	) { }

  ngOnInit() {
  }

  saveSong(newSong){
  	console.log("saving song");
  	console.log(newSong);
  	this.songsService.saveSong(newSong)
  		.subscribe(response => {
  			console.log(response.json());
  			let song = response.json();
  			window.location.href="/songs/" + song.id;
  		})
  }
}
