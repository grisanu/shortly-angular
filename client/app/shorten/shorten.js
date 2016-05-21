angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function (d) {
    // console.log(typeof d, d);
    var obj = {url: d};
    return Links.addOne(obj);
  };
});
