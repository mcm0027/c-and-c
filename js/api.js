var ccApi = angular.module("ccApi", ['ngRoute']);


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
    controller: 'searchController'
  });
});


        
  ccApi.controller('listController', ['$http', '$scope', '$q', '$location', '$log', function($http, $scope, $q, $location, $log) {

    var getCountries = function() {
      
      var url = "http://api.geonames.org/countryInfoJSON?username=mcm0027";

      $http({
        url: url,
        cache: true

      })
      .then(function(result) {
        $scope.results = result.data.geonames;
        return $scope.results;
        console.log($scope.results);
      })

    };
  
    getCountries();
  }]);

  ccApi.controller('searchController', ['$http', '$scope', '$routeParams', '$log', function($http, $scope, $routeParams, $log) {


      var searchCountries = function() {
      
        $scope.country = $routeParams.country;
        $scope.code = $routeParams.code;
        
        $log.info($scope.country)
                                        

        var url = "http://api.geonames.org/countryInfoJSON?username=mcm0027";
        var request = {
          country: $scope.code
        };

        $http({
          url: url,
          params: request,
          cache: true

        })
        .then(function(result) {
         console.log(result.data.geonames[0]);
          $scope.results = result.data.geonames[0];
          return $scope.results;
          console.log($scope.results);
        })

      };

      searchCountries();


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
