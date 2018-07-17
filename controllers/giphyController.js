geniusApp.controller('giphyController', function($scope, $state, $compile) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');
    $scope.al = function(){
        swal({
            title: 'OI',
            animation: false,
            customClass: 'animated tada'
          });
    }
});