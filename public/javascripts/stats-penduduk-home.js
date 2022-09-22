Highcharts.chart('penduduk-home', {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Grafik Penduduk'
    },
    subtitle: {
      text: 'Source: ' +
        '<a href="/data"' +
        'target="_blank">Data penduduk oetete</a>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    },
    series: [{
      type: 'pie',
      name: '',
      data: [
        ['Laki-Laki', 23],
        ['Perempuan', 18],
      ]
    }]
  });


