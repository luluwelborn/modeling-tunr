import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SongsService {

	baseUrl = 'http://localhost:3000';

	getAllSongs() {
		return this.http.get(`${this.baseUrl}/api/songs`);
	}

	getOneSong(songId) {
		console.log(songId);
		return this.http.get(`${this.baseUrl}/api/managers/${songId}`);
	}

	deleteSong(song) {
		console.log(song.id);
		return this.http.delete(`${this.baseUrl}/api/managers/${song.id}`);
	}

	saveSong(newSong) {
		console.log(newSong);
		return this.http.post(`${this.baseUrl}/api/managers/`, newSong);
	}

	updateSong(updatedSong) {
		return this.http.put(`${this.baseUrl}/api/managers/${updatedSong.id}`, updatedSong);
	}

  constructor(private http: Http) { }

}