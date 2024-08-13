document.addEventListener('DOMContentLoaded', () => {
  Highcharts.chart('container', {
    series: [
      {
        name: 'Browsers',
        data: window.w.series[0].data.map(({ name, y }) => ({ name, y })),
      },
    ],
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Распределение рынка браузеров, 2021',
    },
    plotOptions: {
      pie: {
        showInLegend: true,
        dataLabels: {
          enabled: false,
        },
      },
    },
    tooltip: {
      pointFormat: '<b>{point.y}%</b>',
    },
  })
})
