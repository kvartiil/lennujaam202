import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graaf12',
  templateUrl: './graaf12.component.html',
  styleUrls: [ './graaf12.component.scss' ]
})
export class Graaf12Component implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;


  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

   

    this.options = {
      legend: {orient: 'horizontal',
      right: 66,
      top: 'bottom'},
      color: ['#005AA3', '#004277', '#00213C'],
     
     tooltip: {

       //formatter: params => {
       //    return '<div style="width:300px; height: 400px">working j</div>';
       //  },
       //formatter: 'Sinu {a} onb {b} onc {c} ettevõtetest',
       // confine: true
       trigger: 'item',
       confine: true,
      // formatter: function(params, callback) {
      //  return  "Sinu maakonnas " + params.value + "vaattta" + params.value[1] + "veel" + params.value[0] + "nimeke" + params.seriesName + "lsdjk aldkj aldkdfj aldfjk ldkj asdlfjk aldfj dlfkj aldfkj aldfj as";
      //  }, 
       //trigger: 'axis',
       // axisPointer: {
       //   type: 'shadow'

       // }


       formatter: function(params) {
        return "<div style='width:50%; height: 100px; word-break: break-word;'><span>" +"Võrdlusalus: " + params.value[0]+ "</span><br><span>"  + "Sinu maakonnas on " + params.value[1] + " %, " + "</span><br><span>" + "tegevusvaldkonnas " + params.value[2] + " % ja" + "</span><br><span>" + "suurusgrupis " +params.value[3] + " % ettevõtetest " + "</span><br><span>" + "sinust nõrgemas seisus." +"</span></div>"
      }

      //formatter: function(params) {
      //  return "<div class='tooltip-key'><span>" + "Sinu maakonnas on " + params.value[1] + " %, " + "tegevusvaldkonnas " + params.value[2] +"</span></div>"
     // }

       //formatter: params => {
       //    return '<div style="width:300px; height: 400px">working<span>" + params.value[1] + {a} "</span></div>';
        //}, 

    
//      },
      
      //tooltip: {formatter: 'Sinu {a} on {c}% ettevõtetest'},
     // tooltip: {formatter: 'Sinu {a} on , {b}, {c}, {d} and {e}'},
      //tooltip: {
      //  formatter: function(params, callback) {
      //    return  "Sinu {a} "  + params.seriesName + " on " + params.data.value + "lsdfjs" + params.value + "veel" + params.value[0] + "nimeke" + params.seriesName;
      //  }
      //formatter: function(params, callback) {
      //  return  "my text {a}, value: " + params.value + "vaattta" + params.value[1] + "veel" + params.value[0] + "nimeke" + params.seriesName;
      //}
      // wrap https://github.com/apache/echarts/issues/16699
           
      },

      
      title: {
        text: 'Mitu % ettevõtetest on nõrgemas seisus',
        left: 'center'
      },
      dataset: {
        source: [
          ['indikaator', 'maakonnas', 'tegevusvaldkonnas', 'suurusgrupis'],
          ['efektiivsus', 43.3, 85.8, 93.7],
          ['maksevõime', 83.1, 73.4, 55.1],
          ['finantsvõimendus', 86.4, 65.2, 82.5],
          ['tasuvus', 72.4, 53.9, 39.1],
          ['tööjõu tootlikkus', 23, 45, 22]
        ]
      },
      xAxis: { type: 'category',
      axisLabel: { interval: 0, rotate: 0 } },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      
    };
    }
}

