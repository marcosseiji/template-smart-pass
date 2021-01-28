$(function () {
  'use strict'

  var areaChartData = {
    labels: ['05/01/2021', '06/01/2021', '07/01/2021', '08/01/2021', '09/01/2021', '10/01/2021', '11/01/2021', '12/01/2021', '13/01/2021', '14/01/2021'],
    datasets: [{
      label: 'Temperatura OK',
      backgroundColor: '#148A14',
      borderColor: '#148A14',
      pointRadius: false,
      pointColor: '#148A14',
      pointStrokeColor: '#148A14',
      pointHighlightFill: '#fff',
      pointHighlightStroke: '#148A14',
      data: [36.3, 35.7, 36.5, 36.1, 35.9, 35.8, 36.2, 36.3, 35.9, 36.4]
    },
    {
      label: 'Temperatura NOK',
      backgroundColor: '#DC3545',
      borderColor: '#DC3545',
      pointRadius: false,
      pointColor: '#DC3545',
      pointStrokeColor: '##DC3545',
      pointHighlightFill: '#fff',
      pointHighlightStroke: '#DC3545',
      data: [37.1, 37.2, 37.3, 37.4, 37, 37.7, 37.8, 38.5, 38.1, 37, 37.9]
    },
    {
      label: 'Passagens',
      backgroundColor: '#6595ED',
      borderColor: '#6595ED',
      pointRadius: false,
      pointColor: '#6595ED',
      pointStrokeColor: '##6595ED',
      pointHighlightFill: '#fff',
      pointHighlightStroke: '#6595ED',
      data: [2, 14, 4, 22, 6, 0, 0, 100, 15, 83, 5]
    }]
  }

  //-------------
  // - BAR CHART -
  //-------------
  var barChartCanvas = $('#barChart').get(0).getContext('2d')
  var barChartData = $.extend(true, {}, areaChartData)
  var temp0 = areaChartData.datasets[0]
  var temp1 = areaChartData.datasets[1]
  barChartData.datasets[0] = temp1
  barChartData.datasets[1] = temp0

  var barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false
  }

  var barChart = new Chart(barChartCanvas, {
    type: 'bar',
    data: barChartData,
    options: barChartOptions
  })

  var areaChartDataHor = {
    labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    datasets: [{
      label: 'Temperatura',
      backgroundColor: 'rgba(60,141,188,0.9)',
      borderColor: 'rgba(60,141,188,0.8)',
      pointRadius: false,
      pointColor: '#3b8bba',
      pointStrokeColor: 'rgba(60,141,188,1)',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(60,141,188,1)',
      data: [36.3, 35.7, 36.5, 36.1, 35.9, 35.8, 36.2]
    },
    {
      label: 'Máscara',
      backgroundColor: 'rgba(210, 214, 222, 1)',
      borderColor: 'rgba(210, 214, 222, 1)',
      pointRadius: false,
      pointColor: 'rgba(210, 214, 222, 1)',
      pointStrokeColor: '#c1c7d1',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [0, 0, 0, 18, 5, 0, 0]
    }]
  }

  //-------------
  // - BAR CHART  Horizontal-
  //-------------
  var barChartCanvasHor = $('#barChartHor').get(0).getContext('2d')
  var barChartDataHor = $.extend(true, {}, areaChartDataHor)
  var temp0H = areaChartDataHor.datasets[0]
  var temp1H = areaChartDataHor.datasets[1]
  barChartDataHor.datasets[0] = temp1H
  barChartDataHor.datasets[1] = temp0H

  var barChartOptionsH = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false
  }

  // eslint-disable-next-line no-unused-vars
  var barChartHor = new Chart(barChartCanvasHor, {
    type: 'horizontalBar',
    data: barChartDataHor,
    options: barChartOptionsH
  })

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder: 'sort-highlight',
    connectWith: '.connectedSortable',
    handle: '.card-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex: 999999
  })
  $('.connectedSortable .card-header').css('cursor', 'move')

  // jQuery UI sortable for the todo list
  $('.todo-list').sortable({
    placeholder: 'sort-highlight',
    handle: '.handle',
    forcePlaceholderSize: true,
    zIndex: 999999
  })

  // bootstrap WYSIHTML5 - text editor
  $('.textarea').summernote()

  // $('.daterange').daterangepicker({
  //   ranges: {
  //     Today: [moment(), moment()],
  //     Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  //     'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  //     'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  //     'This Month': [moment().startOf('month'), moment().endOf('month')],
  //     'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  //   },
  //   startDate: moment().subtract(29, 'days'),
  //   endDate: moment()
  // }, function (start, end) {
  //   // eslint-disable-next-line no-alert
  //   alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
  // })

  /* jQueryKnob */
  $('.knob').knob()
})
