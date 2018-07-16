
geniusApp.controller('newCardPurchaseController', function($scope,$stateParams, $state, $compile, eventAPI, purchaseAPI) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');

   


    $('select').formSelect();

    $scope.patronData = {};
    $scope.buyTicket = function(oneParam){
        
        $scope.patronData.pId = localStorage.getItem('patronId');
        $scope.patronData.eventId = $scope.ticketId;

        purchaseAPI.buyTicket($scope.patronData).then(function(data, status){
            


        });


    }



});