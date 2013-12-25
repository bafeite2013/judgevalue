/*
# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#$('ul#buffett-index-tab a').click(function (e) {
#  e.preventDefault()
#  $(this).tab('show')
#})
*/

var judgeApp = angular.module("judgeApp", ['ngResource']);

judgeApp.factory("buffettIndices", ['$resource', function($resource) {
  return $resource('/judge/buffett.json?id=:stock_id',
                  {stock_id: '@id'});
}]);

judgeApp.controller("EarningsPerShareController", function ($scope, $http) {
  $scope.init = function(stock_id) {
    $scope.stock_id = stock_id;

    var options={
      chart: { type: 'line' },
      title: { text: '每股净利润历史变化图' },
      xAxis: {
        categories: [],
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
            s += '<br/>'+ point.series.name +': '+point.y;
          });
          return s;
        }, shared: true
      },
      exporting: {
        enabled:false
      },
      credits:{
        text: 'judgvalue.com',
        href:'http://judgvalue.com'
      },
      series: [
        {
          id:'earnings_per_share',
          name: 'Earnings Per Share',
          data: []
        }
      ]
    };


    $http.get("/judge/earnings_per_share.json?id="+$scope.stock_id).success(
      function(data, status, headers, config) {
        var year_array = [];
        var data_array = [];
        for (var index in data) {
          year_array[index] = data[index].year;
          data_array[index] = Number(data[index].earnings_per_share);
        }
        options.xAxis.categories=year_array;
        $('#chart-earnings-per-share').highcharts(options);
        var chart = $('#chart-earnings-per-share').highcharts();
        chart.get('earnings_per_share').setData(data_array);
      }
    );




  };

});

judgeApp.controller("NetAssetsPerShareController", function ($scope, $http) {
  $scope.init = function(stock_id) {
    $scope.stock_id = stock_id;

    var options={
      chart: { type: 'line' },
      title: { text: '每股净资产历史变化图' },
      xAxis: {
        categories: [],
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
            s += '<br/>'+ point.series.name +': '+point.y;
          });
          return s;
        }, shared: true
      },
      exporting: {
        enabled:false
      },
      credits:{
        text: 'judgvalue.com',
        href:'http://judgvalue.com'
      },
      series: [
        {
          id:'net_assets_per_share',
          name: 'Net Assets Per Share',
          data: []
        }
      ]
    };

    $http.get("/judge/net_assets_per_share.json?id="+$scope.stock_id).success(
      function(data, status, headers, config) {
        var year_array = [];
        var data_array = [];
        for (var index in data) {
          year_array[index] = data[index].year;
          data_array[index] = Number(data[index].net_assets_per_share);
        }
        options.xAxis.categories=year_array;
        $('#chart-net-assets-per-share').highcharts(options);
        var chart = $('#chart-net-assets-per-share').highcharts();
        chart.get('net_assets_per_share').setData(data_array);
      }
    );

  };

});

judgeApp.controller("ReturnOnEquityController", function ($scope, $http) {
  $scope.init = function(stock_id) {
    $scope.stock_id = stock_id;

    var options={
      chart: { type: 'line' },
      title: { text: '净资产收益率历史变化图' },
      xAxis: {
        categories: [],
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
            s += '<br/>'+ point.series.name +': '+point.y;
          });
          return s;
        }, shared: true
      },
      exporting: {
        enabled:false
      },
      credits:{
        text: 'judgvalue.com',
        href:'http://judgvalue.com'
      },
      series: [
        {
          id:'return_on_equity',
          name: 'Return On Equity',
          data: []
        }
      ]
    };

    $http.get("/judge/return_on_equity.json?id="+$scope.stock_id).success(
      function(data, status, headers, config) {
        var year_array = [];
        var data_array = [];
        for (var index in data) {
          year_array[index] = data[index].year;
          data_array[index] = Number(data[index].return_on_equity);
        }
        options.xAxis.categories=year_array;
        $('#chart-return-on-equity').highcharts(options);
        var chart = $('#chart-return-on-equity').highcharts();
        chart.get('return_on_equity').setData(data_array);
      }
    );

  };

});
