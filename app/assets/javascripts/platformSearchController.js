trainPlatformSearch.controller('trainPlatformSearchController', ['Search', function(Search) {

  var self = this;

  self.doSearch = function() {
    Search.query(self.depart, self.finish)
      .then(function(responce) {
        self.trainsResult = responce.data.trainServices;
      });
  };

}]);
