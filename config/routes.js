geniusApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/giphy');

    $stateProvider.state('gifts', {
            url: '/gifts',
            templateUrl: 'views/gifts.html',
            controller: 'giftsController'
        })
        .state('consumption', {
            url: '/consumption',
            templateUrl: 'views/consumption.html',
            controller: 'consumptionController'
        })
        .state('zelt', {
            url: '/zelt',
            templateUrl: 'views/zeltCard.html',
            controller: 'zeltController'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'views/profile.html',
            controller: 'profileController'
        })
        $stateProvider.state('buy', {
            url: '/buy/:eventId',
            templateUrl: 'views/buy.html',
            controller: 'buyController'
        })
        .state('show', {
            url: '/show',
            templateUrl: 'views/show.html',
            controller: 'showController'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'views/register.html',
            controller: 'registerController'
        })
        .state('newPassword', {
            url: '/newPassword',
            templateUrl: 'views/password.html',
            controller: 'registerController'
        })
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'views/welcome.html',
            controller: 'registerController'
        })
        .state('giphy', {
            url: '/giphy',
            templateUrl: 'views/giphy.html',
            controller: 'giphyController'
        })
        .state('notLogged', {
            url: '/notLogged',
            templateUrl: 'views/notLogged.html',
            controller: 'notLoggedController'
        })
        .state('searchEvents', {
            url: '/searchEvents',
            templateUrl: 'views/searchEvents.html',
            controller: 'searchEventsController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .state('newCardPurchase', {
            url: '/newCardPurchase/:evtId',
            templateUrl: 'views/newCardPurchase.html',
            controller: 'newCardPurchaseController'
        })

});