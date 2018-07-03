geniusApp.factory('purchaseAPI', function($http) {

    let _buyTicket = function() {
        // console.log(patronCode);
        return $http({
            method  : 'GET',
            url     : 'https://geniusparty.com.br/api/events/all',
            // data    : $.param({findPatron: 'findPatron', patronCode: patronCode  }),
            headers :  {'Content-Type' :'application/x-www-form-urlencoded'},
            async   : false          
        });
    };


return{

    buyTicket: _buyTickets
};


});

