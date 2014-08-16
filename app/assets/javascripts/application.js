//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-resource
//= require wadu-app
//= require maps-app
//= require jquery.geocomplete.min
//= require facebook
//= require geocomplete
//= require home

$(function() {
  initialize_map();
  initialize_geocomplete();
});

$(document).on('page:load', function() {
  return $('[ng-app]').each(function() {
    var module;
    module = $(this).attr('ng-app');
    return angular.bootstrap(this, [module]);
  });
});