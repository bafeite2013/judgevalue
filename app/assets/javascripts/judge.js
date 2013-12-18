/*
# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#$('ul#buffett-index-tab a').click(function (e) {
#  e.preventDefault()
#  $(this).tab('show')
#})
*/

var judgeApp = angular.module("judgeApp", []);

/*
judgeApp.controller("EarningsPerShareController", function ($scope, $http) {
  $scope.hello = "hello, world";
});

*/
judgeApp.controller("EarningsPerShareController", function ($scope, $http) {
  var chart1;
  var options={
    chart: {
      type: 'line'
    },
    title: {
      text: '净利润历史变化图'
    },
    xAxis: {
      categories: ['2004/03','2005/03', '2006/03', '2007/03', '2008/03', '2009/03','2010/03','2011/03','2012/03','2013/03'],
      lineWidth: 2

    },
    yAxis: {
      title:{
        enabled:false
      },
      lineWidth: 2
    },
    tooltip: {
      formatter: function() {

        var s = '<b>'+ this.x +'</b>';
        $.each(this.points, function(i, point) {
          s += '<br/>'+ point.series.name +': '+
            point.y ;
        });
        return s;
      },
      shared: true
    },
    exporting: {
      enabled:false
    },
    credits:{
      text: 'judgvalue.com',
      href:'http://judgvalue.com'
    },
    series: [{
      id:'tenYear',
      name: '回帰10年',
      data: []
    }, {
      id:'EPS',
      name: 'EPS',
      data: []
    }
            ]
  };
  $('#chartDiv_Eps').highcharts(options);
  chart1= $('#chartDiv_Eps').highcharts();
  chart1.get('tenYear').setData([4312, 5389, 6465, 7541, 8618,9694,10771,11847,12923,14000]);//Array();
  chart1.get('EPS').setData([4109,5389,10500,9547,4684,2971,12439,11487,14002,15460]);//Array();

});
