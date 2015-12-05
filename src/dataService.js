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

ccApi.factory('countrySearch', [ '$http', '$q', function ($http, $q) { 

  var service = {}

  service.search = function(code) {
    var deferred = $q.defer();
    $http.get("http://api.geonames.org/searchJSON?username=mcm0027&style=LONG&maxRows=1&country=" + code)
      .success(function(data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  }
  return service;
}]);

ccApi.factory('countryInfo', [ '$http', '$q', function ($http, $q) { 

  var service = {}

  service.search = function(code) {
    var deferred = $q.defer();
    $http.get("http://api.geonames.org/countryInfoJSON?username=mcm0027&country=" + code)
      .success(function(data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  }
  return service;
}]);

ccApi.factory('neighborCountries', [ '$http', '$q', function ($http, $q) { 

  var service = {}

  service.search = function(code) {
    var deferred = $q.defer();
    $http.get("http://api.geonames.org/neighboursJSON?username=mcm0027&country=" + code)
      .success(function(data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  }
  return service;
}]);

