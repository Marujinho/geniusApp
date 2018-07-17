geniusApp.controller('buyController', function($scope,$stateParams, $state, $compile, eventAPI, purchaseAPI) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');
    $scope.id = localStorage.getItem('patronId');
    $scope.eventId = $stateParams.eventId; //getting fooVal

    $scope.ticketData = {};
    $('.collapsible').collapsible();

    eventAPI.eventDetails($scope.eventId).then(function(data, status){

        $scope.event = data.data;
        console.log(data);
    });

    $scope.buyTicket = function(oneParam){
        console.log(oneParam);

        $scope.ticketData.pId = localStorage.getItem('patronId');
        $scope.ticketData.ticketId = oneParam;

        purchaseAPI.buyTicket($scope.ticketData).then(function(data, status){

            swal({
                position: 'center',
                type: 'success',
                title: 'Seu ingresso foi comprado com sucesso! Sua entrada ja está liberada',
                showConfirmButton: false,
                timer: 3000
              })
            alert('Seu ingresso foi comprado com sucesso! Sua entrada ja está liberada');
            $state.go('profile');
            
        });
    }
    
    
   

});