import { Component, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';
import * as moment from 'moment';

import { chartData } from './data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  public chartData: any[] = [];

  public toolTipPosition = 'below';
  public size =[750, 400] as [number, number];
  public chartColor = {
    domain: ['blue'],
  } as Color;

  ngOnInit() {
    Object.assign(this, { chartData: chartData });
  }

  public getCustomToolTipName(model: any) {
    console.log(model);
    return (
      model[0].value +
      '   .   ' +
      moment(model[0].name).format('ddd') +
      ' , ' +
      moment(model[0].name).format('MM/DD')
    );
  }

  public getCustomToolTipNameForSingleAxies(model: any) {
    console.log(model);
    return (
      model.value +
      '   .   ' +
      moment(model.name).format('ddd') +
      ' , ' +
      moment(model.name).format('MM/DD')
    );
  }

  public dateTickFormatting(val: any) {
    if (val instanceof Date) {
      return moment(val).format('MM/DD');
    }
    return '';
  }
}
