import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { SetpasswordComponent } from '../auth/setpassword/setpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'signin',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'setpassword',
        component: SetpasswordComponent
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
        LoginComponent,
        RegisterComponent,
        SetpasswordComponent

    ],
    providers: [

    ]
})
export class AuthModule {

}

