<?php

$result = '5';   

/**/ 
if(isset($_POST['getPatronFromDatabase'])) {

    
    $patronCode = $_POST['patronCode'];

    if($patronCode == '1111'){
        $result = '10';

    }
    
    echo json_encode($result);

}else{
    echo json_encode($result);
}

?>
