geniusApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index');

    $stateProvider.state('invites', {
            url: '/invites',
            templateUrl: 'views/invites.html',
            controller: 'inviteController'
        })
        .state('consumption', {
            url: '/consumption',
            templateUrl: 'views/consumption.html',
            controller: 'consumptionController'
        })

});