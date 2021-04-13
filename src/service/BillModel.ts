import * as echarts from "echarts";
import moment from "moment"
import { stringifyQuery } from "vue-router";

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