geniusApp.controller('searchEventsController', function($scope, $state, $compile, eventAPI) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');

   
    eventAPI.getEvents().then(function(data, status){
     
        $scope.events = data.data;
        console.log($scope.events);

        // var eventBeginning = $scope.event.starts_at.split(' ');
        // $scope.eventStartsDate = eventBeginning[0];
        // $scope.eventStartsTime = eventBeginning[1];
  
        // var eventFinish = $scope.event.finishes_at.split(' ');
        // $scope.eventEndsDate = eventFinish[0];
        // $scope.eventEndsTime = eventFinish[1];
               
    });



});