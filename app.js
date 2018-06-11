let geniusApp = angular.module('geniusApp', ['ui.router', 'ngMask']);

geniusApp.run(function($rootScope){

    $rootScope.patronData = {};
    if(localStorage.getItem('patronId')){
        $rootScope.patronData.id = localStorage.getItem('patronId');
        $rootScope.patronData.name = localStorage.getItem('patronName');
        $rootScope.patronData.age = localStorage.getItem('patronAge');
        
    }

});