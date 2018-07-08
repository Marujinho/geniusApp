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
      console.log($scope.event);
    });


});