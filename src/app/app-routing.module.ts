import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';


const routes: Routes =[{
    path: '',
    component: MainComponent
},{
    path:'login',
    component:LoginComponent,
},{
    path:'extrato',
    component:ExtratoComponent,
}];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

