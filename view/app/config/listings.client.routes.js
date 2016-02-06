// angular.module('listings').config(['$stateProvider', '$urlRouterProvider',
angular.module('WebApp').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider) {
    //Listings state providing
    $stateProvider
      .state('home', {
        url: '/',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('homepage', {
        url: '',
        templateUrl: '/app/views/home.client.view.html',
        params: {
          successMessage: null
        }
      })
      .state('services.view', {
        url: '/services',
        templateUrl: '/app/views/services.client.view.html'
      })
      .state('corporate.view', {
        url: '/corporate',
        templateUrl: '/app/views/testimonials.corporate.client.view.html'
      })
      .state('weddings.view', {
        url: '/weddings',
        templateUrl: '/app/views/testimonials.weddings.client.view.html'
      })
      .state('celebrations.view', {
        url: '/celebrations',
        templateUrl: '/app/views/testimonials.celebrations.client.view.html'
      })
      .state('reservations.view', {
        url: '/reservations',
        templateUrl: '/app/views/reservations.client.view.html'
      })
      .state('links.view', {
        url: '/links',
        templateUrl: '/app/views/links.client.view.html'
      })
      .state('aboutUs.view', {
        url: '/aboutus',
        templateUrl: '/app/views/aboutUs.client.view.html'
      })
      .state('login.view', {
        url: '/login',
        templateUrl: '/app/views/login.client.view.html'
      })
      /*
        Create a state for editing an individual listing, and another for the map view.
       */

  }
]);
