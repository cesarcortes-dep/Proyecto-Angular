import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css'],
})
export class DirectivasComponent implements OnInit {
  variable1: number = 5;
  constructor() {}

  ngOnInit(): void {}
}
