import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagersService } from '../managers.service';

@Component({
  selector: 'app-managers-show',
  templateUrl: './managers-show.component.html',
  styleUrls: ['./managers-show.component.css']
})
export class ManagersShowComponent implements OnInit {

	oneManager;

  constructor(
  		private route : ActivatedRoute,
  		private managersService: ManagersService
  	) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.managersService.getOneManager(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneManager = response.json();
  		})
  	})
  }
}
