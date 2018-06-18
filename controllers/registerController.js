geniusApp.controller('registerController', function($scope, $rootScope, $state, $compile, $timeout, $stateParams, registerAPI, $http) {
    

    // if((localStorage.getItem('patronId') == "" || localStorage.getItem('patronId') == null)&&(localStorage.getItem('firstAccess') == 1) ){
    //     $state.go('welcome');
    // }


    $scope.patronCode = {};
    $scope.password = {};

    //ENCONTRA O PATRON 
    if($scope.patronCode) {
        $scope.getPatron = function(){    
            //TRAS PATRON DA TABELA
            registerAPI.findPatron().then(function(data, status){

               console.log(data);
                // localStorage.setItem('patronId', JSON.stringify(data.data.id));
                // localStorage.setItem('patronName', JSON.stringify(data.data.nome));
                // localStorage.setItem('patronAge', JSON.stringify(data.data.idade));
            
                //  //GRAVA OS DADOS DO PATRON NO ROOT
                // $rootScope.patronData.id = localStorage.getItem('patronId');
                // $rootScope.patronData.name = localStorage.getItem('patronName');
                // $rootScope.patronData.age = localStorage.getItem('patronAge');

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
               
                //$state.go('newPassword');
                
                
            });
        }
}

    
   

});


 