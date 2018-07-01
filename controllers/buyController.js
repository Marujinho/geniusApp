geniusApp.controller('buyController', function($scope,$stateParams, $state, $compile, eventAPI) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');

    $scope.eventId = $stateParams.eventId; //getting fooVal

    eventAPI.eventDetails($scope.eventId).then(function(data, status){
     
        $scope.event = data.data;
        console.log(data);

    });

    $('.collapsible').collapsible(); 
    $scope.al = function(){
        alert('oi');
    }

});