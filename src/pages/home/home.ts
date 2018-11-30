import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  public lineChartData:Array<any> = [
    {data: [2.5, 5.9, 4.0, 6], label: 'Medelvärde'},
    {data: [1.8, 4.8, 4.6, 5.5], label: 'Ditt besvär'}
  ];

  public lineChartLabels:Array<any> = ['Studiestart', '1 Månad', '3 Månader', '6 Månader'];
  public lineChartOptions:any = { responsive: true };
  public lineChartColors:Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(72, 138, 255,0.2)',
      borderColor: 'rgba(72, 138, 255,1)',
      pointBackgroundColor: 'rgba(72, 138, 255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(72, 138, 255,0.8)'
    },
    { // KI color
      backgroundColor: 'rgba(121, 8, 74,0.2)',
      borderColor: 'rgb(121, 8, 74)',
      pointBackgroundColor: 'rgb(121, 8, 74)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(121, 8, 74,0.8)'
    }
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

}
