geniusApp.factory('registerAPI', function($http) {

        let _findPatron = function(code) {
            // console.log(patronCode);
            return $http({
                method  : 'GET',
                url     : 'https://geniusparty.com.br/api/patrons/' + code,
                // data    : $.param({findPatron: 'findPatron', patronCode: patronCode  }),
                headers :  {'Content-Type' :'application/x-www-form-urlencoded'},
                async   : false          
            });
        };

        let _setPassword = function(password) {
            return $http({
                method  : 'PUT',
                url     : 'https://geniusparty.com.br/api/patrons/' + password,
                //data    : $.param({setPassword: 'setPassword', password: password  }),
                headers : {'Content-Type' :'application/x-www-form-urlencoded'},
                async   : false   
                        
            });
        };

    return{

        findPatron    : _findPatron,
        setPassword   : _setPassword
    };

    
});

