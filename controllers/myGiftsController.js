geniusApp.controller('myGiftsController', function($scope, $state, $compile, registerAPI) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }
    
    $scope.name = localStorage.getItem('patronName');
    $scope.id = localStorage.getItem('patronId');
    
    $scope.refuseGift = function(){

        swal({
            title: 'Certeza?',
            text: "Ao jogar esse convite fora você nao poderá mais recuperá-lo depois",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Não quero mais, obrigado!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                swal({
                    title: 'Ok, Voce descartou o presente',
                }).then(function(){
                    $('#card1').addClass('hinge data');
                }).then(function(){
                    setTimeout(function(){ $('#card1').hide(); }, 2000);
                })      
            }
        })
    }




});