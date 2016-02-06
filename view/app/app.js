/* register the modules the application depends upon here*/
// angular.module('listings', []);
angular.module('WebApp', []);

/* register the application and inject all the necessary dependencies */
// var app = angular.module('directoryApp', ['ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps', 'listings']);

 var app = angular.module('FrontEnd', ['ui.router', 'ui.bootstrap', 'WebApp']);
//var app = angular.module('FrontEnd', ['ui.router', 'WebApp']);

console.log('testpoint2');

/* application configuration */
app.config(['$urlRouterProvider', '$locationProvider',
  function($urlRouterProvider, $locationProvider) {
    /* https://docs.angularjs.org/api/ng/provider/$locationProvider */
    $locationProvider.html5Mode(
    {
      enabled: true,
      requireBase: false
    });

    /* go to the '/listings' URL if an invalid route is provided */
    $urlRouterProvider.otherwise('/');
  }
]);

/* set the initial state of the application */
app.run(['$state',
  function($state) {
    $state.go('homepage');
  }
]);
