import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exer.constantes';



@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent  {

  deveExibir = true;
  
  /*


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
  }];*/
  
  PREFIXO_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images'
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  
  
  
}

