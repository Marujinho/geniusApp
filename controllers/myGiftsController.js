geniusApp.controller('myGiftsController', function($scope, $state, $compile, registerAPI) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }
    
    $scope.name = localStorage.getItem('patronName');
    $scope.id = localStorage.getItem('patronId');
    
    




});