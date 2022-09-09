Highcharts.chart('umkm-home', {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Grafik UMKM'
    },
    subtitle: {
      text: 'Source: ' +
        '<a href="/data"' +
        'target="_blank">Data UMKM Oetete</a>'
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
        ['Usaha Kecil', 18],
        ['Usaha Menengah', 23],
        ['Usaha Mikro', 18],
      ]
    }]
  });