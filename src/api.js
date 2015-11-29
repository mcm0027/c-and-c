var ccApi = angular.module("ccApi", ['ngRoute', 'ngAnimate']);


//this sets the links and locations for all of the different views

ccApi.config(function ($routeProvider) {
  
  $routeProvider
  
  .when('/', {
    templateUrl: 'pages/home.html',
  })
  
  .when ('/countries', {
    templateUrl: 'pages/countries.html',
    controller: 'listController'
  })
  
  .when ('/countries/:country/:code', {
    templateUrl: 'pages/country.html',
  //  controller: 'searchController'
  });
});

ccApi.factory('getCountries', [ '$http', '$q', function ($http, $q) { 

  var service = {}
  
  service.search = function() {
    var deferred = $q.defer();
    $http.get("http://api.geonames.org/countryInfoJSON?username=mcm0027")
      .success(function(data) {
        deferred.resolve(data);
      });
    return deferred.promise;
  }
  return service;
}]);
  
  
  /*
  function getCountries() {
    return $http({
      url: "http://api.geonames.org/countryInfoJSON?username=mcm0027",
      cache: true

    })

    .then(function(result) {
          return result;
    })};
    
  }]);
*/
        
  ccApi.controller('listController', ['$scope', '$http', function($scope, $http) {

    $scope.getCountries = function() {
      return $http({
        url: "http://api.geonames.org/countryInfoJSON?username=mcm0027",
        cache: true

      })

        .then(function(result) {
        $scope.response = result.data.geonames;
        console.log($scope.response);
      })}();

  }]);
  /*
  ccApi.controller('searchController', ['$http', '$scope', '$routeParams', '$log', function($http, $scope, $routeParams, $log) {

    
      $scope.searchCountries = function() {
  
        var code = "AE";
        var country = "United Arab Emirates";
        
        $scope.country = $routeParams.country || country;
        $scope.code = $routeParams.code || code;
        
        console.log($scope.code);
                                        

        var url = "http://api.geonames.org/searchJSON?username=mcm0027&style=LONG&maxRows=1&country=" + $scope.code;


        $http({
          url: url

        })
        .then(function(result) {
         console.log(result.data.geonames[0]);
          $scope.results = result.data.geonames[0];
          console.log($scope.results);          
          return $scope.results;
          console.log($scope.results);
        })

      }();

    
    var getCountryInfo = function() {
      
      $scope.code = $routeParams.code;
      
      var url = "http://api.geonames.org/countryInfoJSON?username=mcm0027";
      
      var request = {
          country: $scope.code
        };
      $http({
        url: url,
        cache: true,
        params: request

      })
      .then(function(result) {
        console.log(result.data.geonames[0])
        $scope.infoResults = result.data.geonames[0];
        return $scope.infoResults;
        console.log($scope.infoResults);
      })

    };
  
    getCountryInfo();
  


      var neighborCountries = function() {
        $scope.code = $routeParams.code;


        var url = "http://api.geonames.org/neighboursJSON?username=mcm0027";
        var request = {
          country: $scope.code
        };

        $http({
          url: url,
          params: request

        })
        .then(function(result) {
         console.log(result.data.geonames);
          $scope.resultsNeighbor = result.data.geonames;
          return $scope.resultsNeighbor;
          console.log($scope.resultsNeighbor);
        })

      };

      neighborCountries();
    
   }]);
*/