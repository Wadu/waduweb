(function(){
  var app = angular.module('waduApp', []);

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