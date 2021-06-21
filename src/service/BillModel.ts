import * as echarts from "echarts";
import moment from "moment"

export default class BillModel {

  public showBillLineChart(response: any, index: any) {
    const date: string[] = []
    const value: number[] = []
    response.forEach(c => {
      date.push(c.Date)
      value.push(c.Account)
    });
    let BillLineChartElem: HTMLElement;
    const BillLineChartTemp = document.getElementById("BillLineChart" + index);
    if (BillLineChartTemp) {
      BillLineChartElem = BillLineChartTemp;
    } else {
      return;
    }
    var BillLineChart = echarts.init(BillLineChartTemp);
    BillLineChart.setOption({
      title: {
        text: moment(response[0].Date).format("yyyy-MM"),
        textStyle: {
          color: "#6E7079",
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}",
        color: "#6E7079",
      },
      xAxis: {
        type: 'category',
        data: date
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: value,
        type: 'line'
      }]
    });
  }
}

export class BillOption {
  public billName!: string[];
  public billType!: string[];
  public accountMax!: number;
  public accountMin!: number;
  public dateMax!: Date;
  public dateMin!: Date;

  add(data: any) {
    this.billName = data.billName;
    this.billType = data.billType;
    this.accountMax = Number(data.accountMax)
    this.accountMin = Number(data.accountMin)
    this.dateMax = new Date(data.dateMax)
    this.dateMin = new Date(data.dateMin)
  }
}