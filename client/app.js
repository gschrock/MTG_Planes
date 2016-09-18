var app = angular.module('app', ['ngMaterial']);

app.controller('planesCtrl', function($scope, $http, GetPlanes){
  
  $scope.getAll = function() {
    GetPlanes.getAll()
      .then(function (data) {
        // planes data
        $scope.data = data;
        
        var shuffled = []
        while ($scope.data.length) {
        var index = Math.round(Math.random() * ($scope.data.length - 1));
        shuffled.push($scope.data[index]);
        $scope.data.splice(index, 1);
      }
        $scope.data = shuffled;
        console.log($scope.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  
  $scope.getAll();  
  

})

app.factory('GetPlanes', function ($http) {
  // Your code here
  console.log('GETTING Plane data')
  var getAll = function(){
    return $http({
      method: 'GET',
      url: '/data/planes.json'
    }).then(function (resp) {
        return resp.data;
      });
  };
  
  return {
    getAll: getAll
  };
});
