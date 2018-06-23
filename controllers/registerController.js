geniusApp.controller('registerController', function($scope, $rootScope, $state, $compile, $timeout, $stateParams, registerAPI, $http) {
    

    $scope.patronCode = {};
    $scope.password = {};   
    $scope.patronData = {};
   

    //ENCONTRA O PATRON 
    if($scope.patronCode) {
        $scope.getPatron = function(code){    
            //TRAS PATRON DA TABELA
            registerAPI.findPatron($scope.code).then(function(data, status){
                
                $rootScope.thePatron = {};
               console.log(data.data.patron.name);
            
                localStorage.setItem('patronId', data.data.patron.id); 
                $rootScope.thePatron.name = data.data.patron.name;

                $state.go('newPassword');
                       
            });
        }
    }
    
    //GRAVA SENHA NO BANCO
    if($scope.password){    
        $scope.setNewPassword = function(pass){
            
            $scope.patronData.pId = localStorage.getItem('patronId');
            $scope.patronData.pPass = $scope.pass;

            console.log($scope.patronData);
            //TRAS PATRON DA TABELA
            registerAPI.setPassword($scope.patronData).then(function(data, status){

                $scope.passwordResult = data;
                console.log('id '+data.data.id);

                localStorage.setItem('patronId', data.data.id);
                localStorage.setItem('patronName', data.data.name);
                localStorage.setItem('patronAge', data.data.born_at);

                $rootScope.thePatron.id = localStorage.getItem('patronId');
                $rootScope.thePatron.name = localStorage.getItem('patronName');
                $rootScope.thePatron.age = localStorage.getItem('patronAge');

                $state.go('giphy');
                
            });
        }
}

    
   

});


 