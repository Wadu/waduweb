(function(){
  var app = angular.module('waduApp', []);

  app.config(function($httpProvider) {
    var authToken;
    authToken = $("meta[name=\"csrf-token\"]").attr("content");
    return $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
  });

  app.controller('eventsController', function(){
    this.events = events;
    this.event = {};
    this.addEvent = function(){
      this.events.push(this.event);
      this.event = {};
    };
  });

  var events = [
    {
      title: 'Evento 1',
      description: 'este es un evento de ejemplo'
    },
    {
      title: 'Evento 2',
      description: 'estamos probando que funciona angular'
    }
  ];
})();