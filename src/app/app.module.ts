import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BindingComponent } from './share/componentes/binding/binding.component';
import { ContadorComponent } from './share/componentes/contador/contador.component';
import { DiretivasComponent } from './share/componentes/diretivas/diretivas.component';
import { ExercicioNgClassComponent } from './share/componentes/exercicio-ng-class/exercicio-ng-class.component';
import { ExerciciosPipesComponent } from './share/componentes/exercicios-pipes/exercicios-pipes.component';
import { FooterComponent } from './share/componentes/footer/footer.component';
import { HeaderComponent } from './share/componentes/header/header.component';
import { LoginComponent } from './login/login.component';
import { ExtratoComponent } from './extrato/extrato.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    BindingComponent,
    ContadorComponent,
    DiretivasComponent,
    ExercicioNgClassComponent,
    ExerciciosPipesComponent,
    LoginComponent,
    ExtratoComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{
    provide:  LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }





