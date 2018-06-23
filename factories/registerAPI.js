geniusApp.factory('registerAPI', function($http) {

        let _findPatron = function() {
            // console.log(patronCode);
            return $http({
                method  : 'GET',
                url     : 'https://geniusparty.com.br/api/patrons/1234',
                // data    : $.param({findPatron: 'findPatron', patronCode: patronCode  }),
                headers :  {'Content-Type' :'application/x-www-form-urlencoded'},
                async   : false          
            });
        };

        let _setPassword = function(password) {
            console.log(password);
            return $http({
                method  : 'POST',
                url     : 'api/login.php',
                data    : $.param({setPassword: 'setPassword', password: password  }),
                headers : {'Content-Type' :'application/x-www-form-urlencoded'},
                async   : false   
                        
            });
        };

    return{

        findPatron    : _findPatron,
        setPassword   : _setPassword
    };

    
});

