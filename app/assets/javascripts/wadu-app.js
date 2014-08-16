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
    this.showPanel = false;

    this.events = Event.query();

    this.editMode = false;

    this.findEvent = function(id){
      this.event = Event.get({ id: id });
    };

    this.event = {};

    this.addEvent = function(){
      this.event.direction = angular.element('#direction').val();
      this.event.lat = angular.element('#lat').val();
      this.event.lng = angular.element('#lng').val();
      Event.save(this.event);
      this.event = {};
      this.events = Event.query();
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

})();