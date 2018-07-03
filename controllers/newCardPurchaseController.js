
geniusApp.controller('newCardPurchaseController', function($scope,$stateParams, $state, $compile, eventAPI, purchaseAPI) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');

    $scope.patronData = {};


    $('select').formSelect();


    $scope.buyTicket = function(twoParams){
        
        $scope.patronData.pId = localStorage.getItem('patronId');
        $scope.patronData.eventId = $scope.eventId;

        purchaseAPI.buyTicket($scope.patronData).then(function(data, status){



        });


    }



});