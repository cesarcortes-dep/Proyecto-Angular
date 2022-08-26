import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css'],
})
export class ComponenteBComponent implements OnInit, OnDestroy {
  id!: number;
  nombre!: string;
  curso!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);
      this.id = parseInt(parametros.get('id') || '0');
      this.nombre = parametros.get('nombre') || '';
      this.curso = parametros.get('curso') || '';
    });
  }

  ngOnDestroy(): void {
    console.log('Estoy cambiando de componenete');
   
  }
}
