import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent  {

  deveExibir = true;

  trocarValor(){
    this.deveExibir= !this.deveExibir;
  }

  soma(numero1, numero2){
    return (numero1 + numero2);
  }

  listaFrutas = [
    'Maçã',
    'banana',
    'melão',
    'goiaba'
  ]

  listaCarros = [{
    nome:'gol',
    cor:'amarelo',
  }, {
    nome:'onix',
    cor:'vermelho',
  },{
    nome:'uno',
    cor:'azul',
  }, {
    nome:'fusca',
    cor:'preto',
  },{
    nome:'F1',
    cor:'cinza'
  }];

  
}
