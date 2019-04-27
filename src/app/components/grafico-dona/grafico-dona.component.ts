import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('ChartLabels') public doughnutChartLabels: string[] = [];
  // tslint:disable-next-line:no-input-rename
  @Input('ChartData') public doughnutChartData: number[] =  [];
   // tslint:disable-next-line:no-input-rename
   @Input('ChartType') public doughnutChartType = '';
  constructor() { }

  ngOnInit() {
  }

}
