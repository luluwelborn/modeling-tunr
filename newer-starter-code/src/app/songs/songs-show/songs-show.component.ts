import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-songs-show',
  templateUrl: './songs-show.component.html',
  styleUrls: ['./songs-show.component.css']
})
export class SongsShowComponent implements OnInit {

	oneManager;

  constructor(
  		private route : ActivatedRoute,
  		private songsService: SongsService
  	) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.songsService.getOneSong(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneSong = response.json();
  		})
  	})
  }
}
