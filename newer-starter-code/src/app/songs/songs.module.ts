import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SongIndexComponent } from './song-index/song-index.component';
import { SongsComponent } from './songs.component';
import { SongsService } from './songs.service';
import { SongsEditComponent } from './songs-edit/songs-edit.component';
import { SongsNewComponent } from './songs-new/songs-new.component';
import { SongsShowComponent } from './songs-show/songs-show.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [SongsComponent, SongIndexComponent, SongsEditComponent, SongsNewComponent, SongsShowComponent],
  providers: [SongsService]
})
export class ManagersModule { }
