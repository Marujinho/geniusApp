geniusApp.controller('registerController', function($scope, $rootScope, $state, $compile, $timeout, $stateParams, registerAPI, $http) {
    

    // if((localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null)&&(localStorage.getItem('firstAccess') == 1) ){
    //     $state.go('welcome');
    // }


    $scope.patronCode = {};
    $scope.password = {};

    //ENCONTRA O PATRON 
    if($scope.patronCode) {
        $scope.getPatron = function(code){    
            //TRAS PATRON DA TABELA
            registerAPI.findPatron($scope.code).then(function(data, status){

               console.log(data.data);
            
                $scope.patronId = data.data.patron.id;
                $scope.patronName = data.data.patron.name;
                $scope.patronAge = data.data.patron.born_at;

                $state.go('newPassword');
                       
            });
        }
    }
    
    //GRAVA SENHA NO BANCO
    if($scope.password){    
        $scope.setNewPassword = function(password){    
            //TRAS PATRON DA TABELA
            registerAPI.setPassword($scope.pass).then(function(data, status){

                $scope.passwordResult = data;
               
                localStorage.setItem('patronId', JSON.stringify($scope.patronId));
                localStorage.setItem('patronName', JSON.stringify($scope.patronName));
                localStorage.setItem('patronAge', JSON.stringify($scope.patronAge));
                
            });
        }
}

    
   

});


 