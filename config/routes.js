geniusApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/index');

    $stateProvider.state('invites', {
            url: '/invites',
            templateUrl: '/views/invites.html',
            controller: 'inviteController'
        });

});