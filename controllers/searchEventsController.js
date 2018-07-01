geniusApp.controller('searchEventsController', function($scope, $state, $compile, eventAPI) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');

   
    eventAPI.getEvents().then(function(data, status){
     
        $scope.events = data.data;
        console.log(data);
               
    });



});