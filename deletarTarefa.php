<?php
include("conexaoBanco.php");
if(isset($_POST['tar'])){
$thisId = $_POST['tar'];
echo ($thisId);
}

$rmv= "DELETE FROM tarefa WHERE codigo = $thisId";
$con = $conexao ->query($rmv) or die($mysqli->error);
//
?>