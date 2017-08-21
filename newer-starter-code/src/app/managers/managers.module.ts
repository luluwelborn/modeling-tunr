import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ManagerIndexComponent } from './manager-index/manager-index.component';
import { ManagersComponent } from './managers.component';
import { ManagersService } from './managers.service';
import { ManagersEditComponent } from './managers-edit/managers-edit.component';
import { ManagersNewComponent } from './managers-new/managers-new.component';
import { ManagersShowComponent } from './managers-show/managers-show.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ManagersComponent, ManagerIndexComponent, ManagersEditComponent, ManagersNewComponent, ManagersShowComponent],
  providers: [ManagersService]
})
export class ManagersModule { }
