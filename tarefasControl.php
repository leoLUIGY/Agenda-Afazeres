<?php
include("conexaoBanco.php");

$consulta = "SELECT * FROM tarefa";
$con = $conexao ->query($consulta) or die($mysqli->error);

?>