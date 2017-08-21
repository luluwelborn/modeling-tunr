import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagersComponent } from './managers.component';
import { ManagerIndexComponent } from './manager-index/manager-index.component';
import { ManagersEditComponent } from './managers-edit/managers-edit.component';
import { ManagersNewComponent } from './managers-new/managers-new.component';
import { ManagersShowComponent } from './managers-show/managers-show.component';


const aboutRoutes: Routes = [
    {
        path: 'managers',
        component: ManagersComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: ManagerIndexComponent
            },
            {
                path: 'new',
                component: ManagersNewComponent
            },
            {
                path: 'edit/:id',
                component: ManagersEditComponent
            },
            {
                path: ':id',
                component: ManagersShowComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ManagersRoutingModule { }