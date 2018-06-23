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

        let _setPassword = function(patronData) {
           
           
            return $http({
                method  : 'GET',
                url     : 'https://geniusparty.com.br/api/patrons/pass/' + patronData.pId + '/' + patronData.pPass,
                // data    : $.param({code: '1', pass: '11111'  }),
                headers : {'Content-Type' :'application/x-www-form-urlencoded'},
                async   : false   
                        
            });
        };

        // let _saveUser = function(user) {
        //     user.login = $rootScope.global.idUser;
        //     user.password = $rootScope.global.password;
        //     return $http({
        //         method: 'POST',
        //         url: $rootScope.global.link + '/user/save',
        //         data: user
        //     });
        // };

    return{

        findPatron    : _findPatron,
        setPassword   : _setPassword
    };

    
});

