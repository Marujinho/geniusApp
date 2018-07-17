geniusApp.controller('giftsController', function($scope, $state, $compile) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');
    
    $scope.acceptGift = function(){
        swal({
            position: 'center',
            type: 'success',
            title: 'Ingresso aceito. Ele ja esta na sua carteira',
            showConfirmButton: false,
            timer: 3000
          })
    }

    $scope.refuseGift = function(){

        swal({
            title: 'Certeza?',
            text: "Ao recusar esse convite você nao poderá mais recuperá-lo depois",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Não quero mesmo, obrigado!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
            swal(
                'Ok',
                'Voce discartou o presente!'  
            )
            }
        })
    }
});