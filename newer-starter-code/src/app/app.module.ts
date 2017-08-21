import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ArtistsRoutingModule} from './artists/artist-routing.module';
import { ManagersRoutingModule } from './managers/manager-routing.module';
import { ArtistsModule } from './artists/artists.module';
import { ManagersModule } from './managers/managers.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SongsComponent } from './songs/src/app/songs/songs/songs.component';
import { SongsNewComponent } from './songs/src/app/songs-new/songs-new.component';
import { SongsEditComponent } from './songs/src/app/songs-edit/songs-edit.component';
import { SongIndexComponent } from './songs/src/app/song-index/song-index.component';
import { SongsDeleteComponent } from './songs/src/app/songs-delete/songs-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SongsComponent,
    SongsNewComponent,
    SongsEditComponent,
    SongIndexComponent,
    SongsDeleteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    AppRoutingModule,
    ArtistsRoutingModule,
    ArtistsModule,
    ManagersRoutingModule,
    ManagersModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
