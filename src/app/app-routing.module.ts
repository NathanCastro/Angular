import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';


const routes: Routes =[{
    path: 'main',
    component: MainComponent
},{
    path:'login',
    component:LoginComponent,
},{
    path:'extrato',
    component:ExtratoComponent,
},{
    path:'',
    redirectTo:'main',
    pathMatch:'full',
}, {
    path:'**',
    component: NaoEncontradoComponent,
}];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

