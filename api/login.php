<?php



/**/ 
if(isset($_POST['getPatronFromDatabase'])) {

    $result = '5';    
    $patronCode = $_POST['patronCode'];

    if($patronCode == '1111'){
        $result = '10';

    }
    
    echo json_encode($result);

}else{
    echo json_encode();
}

?>
