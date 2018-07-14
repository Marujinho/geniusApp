geniusApp.controller('consumptionController', function($scope, $state, $compile, tabAPI) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');
    $scope.patronId = localStorage.getItem('patronId');
    
    tabAPI.getTabs($scope.patronId).then(function(data, status){
        
    //   console.log(data.data);

      $scope.event = data.data.event;
      $scope.tabs = data.data;
      var eventBeginning = $scope.event.starts_at.split(' ');
      $scope.eventStartsDate = eventBeginning[0];
      $scope.eventStartsTime = eventBeginning[1];

      var eventFinish = $scope.event.finishes_at.split(' ');
      $scope.eventEndsDate = eventFinish[0];
      $scope.eventEndsTime = eventFinish[1];  


      console.log($scope.event);
    });


});