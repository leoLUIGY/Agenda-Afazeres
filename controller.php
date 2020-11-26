<?php
include_once("conexaoBanco.php");

$nome = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$data = filter_input(INPUT_POST, 'date', FILTER_SANITIZE_STRING);
$hora = filter_input(INPUT_POST, 'time', FILTER_SANITIZE_STRING);

$result = "INSERT INTO tarefa (nome, data, horario) VALUES('$nome', '$data', '$hora')";
$result_tarefa = mysqli_query($conexao,$result);

if(mysqli_insert_id($conexao)){
    //header("Location: /HTML/Statistic.html");
} else {
    //header("Location: /HTML/Index.html");
}

mysqli_close($conexao);
?>