<?php
    $servidor="localhost";
    $usuario="root";
    $senha='';
    $banco="tarefas";

    $conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

    if(!$conexao){
        print "falha em conectar com banco";
    }
?>