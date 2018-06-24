geniusApp.controller('showController', function($scope, $state, $compile) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('register');
    }

    $scope.name = localStorage.getItem('patronName');

    
});