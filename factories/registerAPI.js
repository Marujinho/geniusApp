geniusApp.factory('registerAPI', function($http) {

        let _findPatron = function(patronCode) {
            return $http({
                method  : 'POST',
                url     : 'api/login.php',
                data    : $.param({getPatronFromDatabase : 'getPatronFromDatabase', patronCode: patronCode}),
                async   : false           
            });
        };

    return{

        findPatron: _findPatron
    };

    
});