import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formularioContacto!: FormGroup;

  constructor(
    private fb:FormBuilder
    ) {
    this.formularioContacto = fb.group({
        nombre: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        mensaje: new FormControl('', [Validators.required]),
      });
  }

  ngOnInit(): void {}
  enviarContacto() {
    console.log(this.formularioContacto);
  }
}
