import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Seja Bem vindo';
  
  melao = "oiii!!"
  garrafa = "Volkswagem"

  

    
  constructor(){    
  }

  eventoRecebido($event){
    console.log('AppComponent: Evento recebido', $event)
  }

  ngOnInit(){
    setTimeout(() => {
      this.title = 'olá novinhas'
    },3000)
  }
  
  
}
