geniusApp.factory('eventAPI', function($http) {

    let _getEvents = function() {
        // console.log(patronCode);
        return $http({
            method  : 'GET',
            url     : 'https://geniusparty.com.br/api/events/all',
            // data    : $.param({findPatron: 'findPatron', patronCode: patronCode  }),
            headers :  {'Content-Type' :'application/x-www-form-urlencoded'},
            async   : false          
        });
    };

    let _eventDetails = function(eventId) {
         console.log(eventId);
        return $http({
            method  : 'GET',
            url     : 'https://geniusparty.com.br/api/events/' + eventId,
            // data    : $.param({findPatron: 'findPatron', patronCode: patronCode  }),
            headers :  {'Content-Type' :'application/x-www-form-urlencoded'},
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

    getEvents    : _getEvents,
    eventDetails : _eventDetails
   
};


});

