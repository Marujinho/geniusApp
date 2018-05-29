geniusApp.factory('register', function($scope, $state, $compile) {

    let _newPatron = function() {
        return $http({
            method: 'POST',
            url: $rootScope.global.link + '/calendarRequest/getall',
        });
    };
    
});