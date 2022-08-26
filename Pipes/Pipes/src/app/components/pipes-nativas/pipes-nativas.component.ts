import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-nativas',
  templateUrl: './pipes-nativas.component.html',
  styleUrls: ['./pipes-nativas.component.css']
})
export class PipesNativasComponent implements OnInit {
//aqui van las variables 
datos: any = { //objeto json
  fecha: new Date(),
  texto: 'Texto de prueba',
  monto: 1095.6,
  porcentaje:0.15
}
  constructor() { }

  ngOnInit(): void {
  }

}
