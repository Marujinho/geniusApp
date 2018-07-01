
geniusApp.controller('newCardPurchaseController', function($scope,$stateParams, $state, $compile, eventAPI) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');

    $scope.buyTicket = function(){
        alert('ticket bought');
    }


});