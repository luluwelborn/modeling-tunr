import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songs-edit',
  templateUrl: './songs-edit.component.html',
  styleUrls: ['./songs-edit.component.css']
})

export class SongsEditComponent implements OnInit {

	updatedSong = <any>{};

  constructor(
  		private route : ActivatedRoute,
  		private songsService : SongsService
  	) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.songsService.getOneSong(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.updatedSong = response.json();
  		})
  	})
  }

  updateSong(updatedSong) {
  	console.log("UPDATING SONG...");
  	this.songsService.updateSong(updatedSong)
  	.subscribe(response => {
  		console.log(response.json());
  		let song = response.json();
  		window.location.href="/songs" + song.id;
  	})
  }

}