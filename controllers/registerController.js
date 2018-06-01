geniusApp.controller('registerController', function($scope, $state, $compile, $timeout, $stateParams, registerAPI, $http) {
    
   
    $scope.teste = '';
    $scope.patronCode = {};
    
    if($scope.patronCode) {
    

    $scope.getPatron = function(patronCode){    
        //TRAS PATRON DA TABELA
        registerAPI.findPatron().then(function(data, status){

            $scope.resultado = data;
            
            
        });
    }
}   

});


 