// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { SongComponent } from './songs.component';
// import { SongIndexComponent } from './song-index/song-index.component';
// import { SongsEditComponent } from './songs-edit/songs-edit.component';
// import { SongsNewComponent } from './songs-new/songs-new.component';
// import { SongsShowComponent } from './songs-show/songs-show.component';


// const aboutRoutes: Routes = [
//     {
//         path: 'managers',
//         component: ManagersComponent,
//         children: [ //create the sub sections (children) for this route
//             {
//                 path: '',
//                 component: ManagerIndexComponent
//             },
//             {
//                 path: 'new',
//                 component: ManagersNewComponent
//             },
//             {
//                 path: 'edit/:id',
//                 component: ManagersEditComponent
//             },
//             {
//                 path: ':id',
//                 component: ManagersShowComponent
//             }
//         ]
//     }
// ];

// @NgModule({
//     imports: [
//         RouterModule.forChild(aboutRoutes)
//     ],
//     exports: [
//         RouterModule
//     ]
// })
// export class ManagersRoutingModule { }