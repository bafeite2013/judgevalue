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

judgeApp.factory("buffett", ['$resource', function($resource) {
  return $resource('/judge/buffett.json');
}]);

judgeApp.controller("LineDiagramController", ["$scope", "$http", "buffett", function ($scope, $http, buffett) {
  $scope.init = function(stock_id, name, columns, replace_id) {
    buffett.query({id: stock_id}, function(indices) {
      var year_array = [];
      var series_array = [];
      var key, index, num, counter;
      for (key in columns) {
        series_array.push({id: key, name: columns[key], data: []});
      }

      for (index = 0; index < indices.length; index += 1) {
        year_array[index] = indices[index].year;
        counter = 0;
        for (key in columns) {
          num = Number(indices[index][key]);
          series_array[counter].data.push(isNaN(num)?null:num);
          counter += 1;
        }
      }

      var options = {
        chart: { type: 'line' },
        title: { text: name },
        xAxis: {
          categories: year_array,
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
        series: series_array
      };

      $(replace_id).highcharts(options);
    });
  };

}]);
