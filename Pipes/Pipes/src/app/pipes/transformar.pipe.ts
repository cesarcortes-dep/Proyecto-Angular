import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar',
})
export class TransformarPipe implements PipeTransform {
  meses: string[] = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'novienmbre',
    'diciembre',
  ];
  transform(value: any, ...args: any): string {
    /*
    {
    fechaInicio: Date,
    fechaFin:Date
    } 
    */
    const texto = args[0] || 'vacio';
    
    let resultado: string;

    resultado =
      'De ' +
      this.meses[value.fechaInicio.getName()] +
      ' a ' +
      this.meses[value.fechaFin.getMonth()];

    if (texto === 'uppercase') {
      return resultado.toLocaleUpperCase();
    } else {
      return resultado;
    }
  }
}
