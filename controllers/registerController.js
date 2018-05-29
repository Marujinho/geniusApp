geniusApp.controller('registerController', function($scope, $state, $compile) {

   
    $('.registerButton').keyup(function(){
        if($(this).val().length==$(this).attr("maxlength")){
            $(this).next().focus();
        }
    });       

});