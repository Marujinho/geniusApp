geniusApp.controller('loginController', function($scope, $state, $compile, registerAPI) {

    $scope.loginData = {};   
    $scope.patronData = {};

    //GRAVA SENHA NO BANCO
    if($scope.loginData){    
        $scope.patronLogin = function(patronData){
            
            $scope.patronData.patronEmail = $scope.email;
            $scope.patronData.patronPass = $scope.pass;
            console.log('patronData se refere à  '+patronData);
            console.log($scope.patronData);
            //TRAS PATRON DA TABELA
            registerAPI.login($scope.patronData).then(function(data, status){
                
                setTimeout(() => {
                    localStorage.setItem('patronId', data.data.id);
                    localStorage.setItem('patronName', data.data.name);
                    localStorage.setItem('patronAge', data.data.age);
                }, 1500);

                setTimeout(() => {
                    $state.go('giphy');
                }, 1500);
                
            });
        }
    }
    
});