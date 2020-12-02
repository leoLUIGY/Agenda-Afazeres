<?php
include("conexaoBanco.php");

$thisId = intval($_GET['tar']);

$rmv= "DELETE FROM tarefa WHERE codigo = '$thisId'";
$con = $conexao ->query($rmv) or die($mysqli->error);
if($con)
    echo "
    <script>
        location.href='Statistic.php';
    </script>";
 else 
    echo "
    <script>
        alert('não foi possivel deletar a tarefa');
        location.href='Statistic.php';
    </script>";
?>
