import { Component, OnInit, Input, Output , EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
@Input()  porcentaje = 50;
// tslint:disable-next-line:no-inferrable-types
@Input() leyenda: string = 'Leyenda';
@ViewChild('txtprogress') txtprogress: ElementRef;

@Output() cambioValor: EventEmitter<number>  = new EventEmitter();
  constructor() {
   }

  ngOnInit() {

  }
  cambiarValor( valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {

      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtprogress.nativeElement.focus();
   }


   onChanges(newValue: number) {
     // tslint:disable-next-line:prefer-const
     if (newValue >= 100) {
      this.porcentaje = 100;

     } else if (newValue <= 0 ) {
      this.porcentaje = 0;

     } else {
   this.porcentaje = newValue;
   }
   console.log(this.porcentaje);
    this.txtprogress.nativeElement.value = this.porcentaje;
   this.cambioValor.emit(this.porcentaje);
   this.txtprogress.nativeElement.focus();
  }


}
 