let geniusApp = angular.module('geniusApp', ['ui.router', 'ngMask']);

geniusApp.run(function($rootScope){

    if(localStorage.getItem('firstAccess') != 1 || localStorage.getItem('firstAccess') == null ){
        localStorage.setItem('firstAccess', 1);
    }    


    $rootScope.patronData = {};
    if(localStorage.getItem('patronId')){
        $rootScope.patronData.id = localStorage.getItem('patronId');
        $rootScope.patronData.name = localStorage.getItem('patronName');
        $rootScope.patronData.age = localStorage.getItem('patronAge');
        
    }

});