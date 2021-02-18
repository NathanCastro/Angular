import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Seja Bem vindo';
  
  melao = "oiii!!"
  garrafa = "Volkswagem"

  

    
  constructor(){    
  }

  eventoRecebido($event){
    console.log('AppComponent: Evento recebido', $event)
  }

  
  
}
