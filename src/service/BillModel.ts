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

  public showBillPieChart(response: any) {
    let BillPieChartElem: HTMLElement;
    const BillPieChartTemp = document.getElementById("BillPieChart");
    if (BillPieChartTemp) {
      BillPieChartElem = BillPieChartTemp;
    } else {
      return;
    }
    var BillPieChart = echarts.init(BillPieChartTemp);
    BillPieChart.clear();
    BillPieChart.setOption({
      color: ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6699FF', '#ff6666', '#3cb371', '#b8860b', '#30e0e0'],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        top:"6%",
        left: "center",
        textStyle: {
          color: '#c7bbc6'
        },
      },
      series: [
        {
          name: "金额",
          type: "pie",
          radius: ["45%", "60%"],
          data: response,
          top:"15%",
          labelLine: {
            length: 30,
          },
          label: {
            formatter: "  {b|{b}：}{c}  {per|{d}%}  ",
            backgroundColor: "#F6F8FC",
            borderColor: "#8C8D8E",
            borderWidth: 1,
            borderRadius: 4,
  
            rich: {
              a: {
                color: "#6E7079",
                lineHeight: 22,
                align: "center",
              },
              hr: {
                borderColor: "#8C8D8E",
                width: "100%",
                borderWidth: 1,
                height: 0,
              },
              b: {
                color: "#4C5058",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 33,
              },
              per: {
                color: "#fff",
                backgroundColor: "#4C5058",
                padding: [3, 4],
                borderRadius: 4,
              },
            },
          },
        },
      ],
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
