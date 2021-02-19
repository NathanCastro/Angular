import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-ng-class',
  templateUrl: './exercicio-ng-class.component.html',
  styleUrls: ['./exercicio-ng-class.component.scss']
})
export class ExercicioNgClassComponent {
  deveSer = true;

  tornarVerde(){
    this.deveSer=false;
    console.log('mudou a cor')
  }

}
