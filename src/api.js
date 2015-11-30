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
    controller: 'searchController'
  });
});

  ccApi.controller('listController', ['$scope', 'getCountries', function($scope, getCountries) {
    
    getCountries.search().then(passCountries);

    function passCountries(data) {
      $scope.response = data.geonames;
      console.log($scope.response);
    }
  }]);

ccApi.controller('searchController', ['$scope', '$routeParams', 'countrySearch', 'countryInfo', 'neighborCountries', function($scope, $routeParams, countrySearch, countryInfo, neighborCountries) {
  
  $scope.country = $routeParams.country;
  $scope.code = $routeParams.code;

  countrySearch.search($scope.code).then(passCountry);

  function passCountry(data) {
    $scope.results = data.geonames[0];
  }

  countryInfo.search($scope.code).then(passCountryInfo);

  function passCountryInfo(data) {
    console.log(data.geonames[0]);
    $scope.infoResults = data.geonames[0];
    console.log($scope.infoResults);
  }
  
  neighborCountries.search($scope.code).then(passNeighbors);
  
  function passNeighbors(data) {
    console.log(data.geonames);
    $scope.resultsNeighbor = data.geonames;
    console.log($scope.resultsNeighbor);
  }
  
}]);
