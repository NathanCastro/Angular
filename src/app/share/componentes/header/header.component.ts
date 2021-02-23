import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit, AfterViewInit{
  @Input() time: String 

  
  title = "Meu primeiro componente"
  constructor() {
    console.log('construtor')
   }

  ngOnChanges(){
    console.log('ngOnChange')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }

}
