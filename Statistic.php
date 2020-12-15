<!DOCTYPE html>
<?php
include("conexaoBanco.php");
include("tarefasControl.php");

if(isset($_POST['comfirm'])){
    $code= $_GET['usuario'];
    $nome = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $data = filter_input(INPUT_POST, 'date', FILTER_SANITIZE_STRING);
    $hora = filter_input(INPUT_POST, 'time', FILTER_SANITIZE_STRING);
    
    $editar = "UPDATE tarefa SET
        nome = '$nome',
        data = '$data',
        horario = '$hora'
        WHERE codigo = '$code'";
    
    $conect = $conexao ->query($editar) or die($conexao->error);
    if($conect){
        echo "
            <script>
                alert('dado alterado com sucesso');
                location.href='Statistic.php';
            </script>
        ";
    }else {
        echo "
        <script>
            alert('não foi possivel deletar a tarefa');
            location.href='Statistic.php';
        </script>";
        }
    }
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Status</title>
        <link rel="stylesheet" href="CSS/css2.css">
        <link rel="stylesheet" href="CSS/Style.css">
    </head>
    <body background="Images/inicio.jpg">
        <?php

        if(isset($_GET['p'])){
            $pagina = $_GET['p'].".php";
            if(is_file("$pagina"))
                include("$pagina");
            else
                echo "<script>alert('pagina não foi encontrada');</script>";
        } else 
            
        ?>

        <div class="fonts" >
            <h2>Status Geral</h2>


            <h3>Tarefas Para Fazer</h3>
            <table action="/tarefasControl.php">
                <tr>
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Horario</th>
                </tr>
                <?php while($dado =$con ->fetch_array()){ ?>
                <tr >
                    <td> <?php echo $dado["nome"]; ?></td>
                    <td> <?php echo $dado["data"]; ?> </td> 
                    <td> <?php echo $dado["horario"]; ?> </td>  
                    <td><a  href="Statistic.php?p=editarTarefa&tar=<?php echo $dado['codigo']; ?>">Editar</a></td>  
                    <td><a href="javascript: if(confirm('quer mesmo deletar <?php echo $dado["nome"]; ?>'))
                    location.href='Statistic.php?p=deletarTarefa&tar=<?php echo $dado['codigo']; ?>';">Remover</a></td>  
                </tr> 
                <?php } ?>         
            </table >
            <h3><a href="Index.php">Inicio</a></h3>
        </div>

    <script src="JS/Controller.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    </body>
</html>
