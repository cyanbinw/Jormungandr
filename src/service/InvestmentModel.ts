import * as echarts from "echarts";
import moment from "moment";

export default class InvestmentModel {
  //Home 展示投资数据
  public showInvestmentHistogram(response: any) {
    let InvestmentHistogramElem: HTMLElement;
    const InvestmentHistogramTemp = document.getElementById("InvestmentHistogram");
    if (InvestmentHistogramTemp) {
      InvestmentHistogramElem = InvestmentHistogramTemp;
    } else {
      return;
    }
    var InvestmentHistogram = echarts.init(InvestmentHistogramTemp);

    InvestmentHistogram.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{b}",
      },
      dataset: {
        source: response.data.NetWorth,
      },
      xAxis: { type: "category" },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        {
          type: "bar",
          label: {
            show: true,
            position: "top",
          },
        },
      ],
    });
  }

  public showInvestmentPieChart(response: any) {
    let InvestmentPieChartElem: HTMLElement;
    const InvestmentPieChartTemp = document.getElementById("InvestmentPieChart");
    if (InvestmentPieChartTemp) {
      InvestmentPieChartElem = InvestmentPieChartTemp;
    } else {
      return;
    }
    var InvestmentPieChart = echarts.init(InvestmentPieChartTemp);
    InvestmentPieChart.setOption({
      color: ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6699FF', '#ff6666', '#3cb371', '#b8860b', '#30e0e0'],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        top: "3%",
        left: "center",
        textStyle: {
          color: '#c7bbc6'
        },
      },
      series: [
        {
          name: "份额",
          type: "pie",
          selectedMode: "single",
          radius: [0, "30%"],
          label: {
            show: false,
            position: "center",
          },
          data: response.data.Share,
        },
        {
          name: "投资金额",
          type: "pie",
          radius: ["45%", "60%"],
          data: response.data.Account,
          labelLine: {
            length: 30,
          },
          label: {
            formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
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

  public showInvestmentLineChart(response: any, name: string, index: any) {
    const accountDate: string[] = []
    const accountValue: number[] = []
    const netWorthDate: string[] = []
    const netWorthValue: number[] = []
    response.forEach(c => {
      accountDate.push(moment(c.date).format("yyyy-MM-DD"))
      accountValue.push(c.account)
      netWorthDate.push(moment(c.date).format("yyyy-MM-DD"))
      netWorthValue.push(c.netWorth)
    });
    let InvestmentAcountChartElem: HTMLElement;
    const InvestmentAcountChartTemp = document.getElementById("InvestmentAcount" + index);
    if (InvestmentAcountChartTemp) {
      InvestmentAcountChartElem = InvestmentAcountChartTemp;
    } else {
      return;
    }
    var InvestmentAcountChart = echarts.init(InvestmentAcountChartTemp);
    InvestmentAcountChart.setOption({
      title: {
        text: name + " - 资金",
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
        data: accountDate
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: accountValue,
        type: 'line'
      }]
    });

    let InvestmentNetWorthChartElem: HTMLElement;
    const InvestmentNetWorthChartTemp = document.getElementById("InvestmentNetWorth" + index);
    if (InvestmentNetWorthChartTemp) {
      InvestmentNetWorthChartElem = InvestmentNetWorthChartTemp;
    } else {
      return;
    }
    var InvestmentNetWorthChart = echarts.init(InvestmentNetWorthChartTemp);
    InvestmentNetWorthChart.setOption({
      title: {
        text: name + " - 净值",
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
        data: netWorthDate
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: netWorthValue,
        type: 'line'
      }]
    });
  }
}

