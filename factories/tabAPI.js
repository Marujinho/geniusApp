geniusApp.factory('tabAPI', function($http) {

    let _getTabs = function(eventData) {
        // console.log(patronCode);
        return $http({
            method  : 'GET',
            url     : 'https://geniusparty.com.br/api/tabs/patron/' + eventData,
            // data    : $.param({findPatron: 'findPatron', patronCode: patronCode  }),
            headers :  {'Content-Type' :'application/x-www-form-urlencoded'},
            async   : false          
        });
    };

return{

    getTabs: _getTabs
};


});

