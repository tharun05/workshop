import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {EditComponent} from './profile/edit/edit.component';
import {ViewComponent} from './profile/view/view.component';
import {UsersListComponent} from './users/users-list/users-list.component'
import {UsersProfileComponent} from './users/users-profile/users-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
    {
        path: 'profile-edit',
        component: EditComponent
    },
    {
        path: 'profile',
        component: ViewComponent
    },
    {
        path: 'user-profile',
        component: UsersProfileComponent
    },
    {
        path: 'user-list',
        component:UsersListComponent
    }
]

@NgModule({
    imports: [RouterModule,

        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatCardModule,
        CommonModule
    ],
    exports: [

    ],
    declarations: [
        EditComponent,
        ViewComponent,
        UsersListComponent,
        UsersProfileComponent

    ],
    providers: [

    ]
})
export class WorkshopModule {

}

