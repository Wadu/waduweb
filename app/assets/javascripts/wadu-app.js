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

  app.controller('eventsController', function(Event){

    this.events = Event.query();

    this.editMode = false;

    this.findEvent = function(id){
      this.event = Event.get({ id: id });
    };

    this.event = {};

    this.addEvent = function(){
      Event.save(this.event);
      this.events.push(this.event);
      this.event = {};
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
      this.events = Event.query();
    };
  });

})();