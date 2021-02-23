import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  @Input() blue: String;
  @Input() carro: String;

  @Output() clickado = new EventEmitter();


  dinheiro = 10;




  imageURL="https://static1.purebreak.com.br/articles/7/37/16/7/@/179652-filme-shrek-5-longa-so-deve-chegar-as-diapo-2.jpg"
  initialValue = 'Valor inicial';
  isDisabled = true;

  accessibilityText='esse texto é para melhor leitura';
  
  ValorDoInput= '';
  
  constructor() { 
    setTimeout(() =>{
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  }

  onClick($event){
    console.log('clicouuuuuuu', $event)
  }

  digitouAlgo($event){
    this.ValorDoInput = $event.target.value
    console.log('Alguém digitou algo aqui', $event)
  }

  passouOMouse($event){
    console.log('alguém passou o mouse aqui')
  }

  clicouNiMim($event){
    console.log('informação vai para o pai')

    this.clickado.emit($event)
  }
}
