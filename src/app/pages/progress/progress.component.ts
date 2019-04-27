import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
porcentaje = 10;
progreso1 = 20;
progreso2 = 21;
  constructor() { }

  ngOnInit() {
  }

actualizar(event: number) {
  console.log('event',  event);
}
}
