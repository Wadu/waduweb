(function(){
  var app = angular.module('waduApp', ['ngResource']);

  app.config(function($httpProvider) {
    var authToken;
    authToken = $("meta[name=\"csrf-token\"]").attr("content");
    return $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
  });

  app.factory('Event', function($resource){
    return $resource('/api/events/:id', { id: "@id" }, {'update': {method: 'PUT'}});
  });

  app.controller('eventsController', function(Event, $http){

    this.events = Event.query();

    this.editMode = false;

    this.findEvent = function(id){
      this.event = Event.get({ id: id });
    };

    this.event = {};

    this.addEvent = function(){
      Event.save(this.event);
      this.event = {};
      this.events = Event.query();
      //create event in google places
      // var urlAddPlace = 'https://maps.googleapis.com/maps/api/place/add/json?sensor=true&key=AIzaSyAHGP6oUn6koVvWN5IPGH3z8rHnL_jmhpU';
      // var dataAddPlace = {
      //   "location": {
      //     "lat": myPosition['k'],
      //     "lng": myPosition['B']
      //   },
      //   "accuracy": 50,
      //   "name": "Google Shoes!",
      //   "types": ["shoe_store"],
      //   "language": "en-AU"
      // };
      // $http.post(urlAddPlace, dataAddPlace);
    };

    this.editEvent = function(id){
      var event = Event.get({ id: id });
      this.event = event;
      this.editMode = true;
    };

    this.updateEvent = function(id){
      Event.update(this.event);
      this.events = Event.query();
      this.event = {};
      this.editMode = false;
    };

    this.deleteEvent = function(id){
      Event.delete({ id: id });
      document.getElementById('event_' + id).remove();
    };
  });

  app.directive('googleplace', function() {
      return {
          require: 'ngModel',
          link: function(scope, element, attrs, model) {
              var options = {
                  types: [],
                  componentRestrictions: {}
              };
              scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
   
              google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                  scope.$apply(function() {
                      model.$setViewValue(element.val());
                  });
              });
          }
      };
  });

})();