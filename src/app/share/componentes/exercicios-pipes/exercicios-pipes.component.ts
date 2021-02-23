import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios-pipes',
  templateUrl: './exercicios-pipes.component.html',
  styleUrls: ['./exercicios-pipes.component.scss']
})
export class ExerciciosPipesComponent  {

  filme = {
    titulo: 'As Crônicas de Narnia',
    estrela: 4.8763456,
    precoAluguel: 15.43,
    dataLancamento: new Date(2019, 10, 25)

  };

  compras =[{
    produto: 'lâmpadas',
    valor: 299.99,
    quantidade: 2,
    peso: 0,
    data: new Date(2021, 1, 23, 15,24),
  },{

    produto: 'farinha',
    valor: 359.99,
    quantidade: 2,
    peso: 29.6555,
    data: new Date(2021, 2, 11, 19,24),

  }];

}
