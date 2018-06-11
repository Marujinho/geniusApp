<?php
require_once('../config/connect.php');

//ENCONTRA QUAL PATRON ESTA ACESSANDO O APP
if(isset($_POST['findPatron'])) {

    
    $patronCode = $_POST['patronCode'];

    //TRÁS O USUARIO REFERENTE CODIGO GERADO PELO SISTEMA   
    $rs = $conn->query("SELECT * FROM user WHERE codigo = $patronCode");
    
        while($row = $rs->fetch(PDO::FETCH_OBJ)){
        
            $result = (array) $row;
        }             

    // VERIFICA SE NAO VEIO NADA DO BANCO
    if($result===NULL){
        $result = [];
        $result['nome'] = "banana";
    }
           
    echo json_encode($result); 
}

//GRAVA A SENHA DO CARA NO BANCO
if(isset($_POST['setPassword'])) {

    $pass = $_POST['password'];
    $rs = $conn->query("UPDATE user SET senha = '".$pass."' WHERE codigo = '1234'");

}





?>
