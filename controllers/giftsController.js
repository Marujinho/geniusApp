geniusApp.controller('giftsController', function($scope, $state, $compile) {

    if(localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null){
        $state.go('notLogged');
    }

    $scope.name = localStorage.getItem('patronName');

    //ACEITAR PRESENTE
    $scope.acceptGift = function(){
        swal({
            position: 'center',
            type: 'success',
            title: 'Ingresso aceito. Ele ja esta na sua carteira',
            showConfirmButton: false,
            timer: 3000
          }).then(function(){
              $('#card1').addClass('animated bounceOut');
          })
    }

    //ABRIR PRESENTE
    $scope.open = function(){
    
        swal({
            title: 'PAREBÉNS! Voce ganhou um VIP!!!',
            animation: false,
            customClass: 'animated tada'
        }).then(function(){
            $('#gift1').addClass('bounceOut');
            setTimeout(function(){ $('#gift1').hide(); }, 700);      
        }).then(function(){
            $('#card1').removeClass('hideIt');
            setTimeout(function(){ $('#card1').addClass('animated tada'); }, 500);   
            
        })

    }



    //NEGAR PRESENTE
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