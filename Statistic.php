<!DOCTYPE html>
<?php
include("tarefasControl.php");
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Status</title>
        <link rel="stylesheet" href="CSS/css2.css">
        <link rel="stylesheet" href="CSS/Style.css">
    </head>
    <body background="Images/inicio.jpg">
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
                <tr action="deletarTarefa.php" method="POST">
                    <td> <?php echo $dado["nome"]; ?></td>
                    <td> <?php echo $dado["data"]; ?> </td> 
                    <td> <?php echo $dado["horario"]; ?> </td>  

                    <td><button class="button" name="tar" value=<?php echo $dado['codigo']; ?>>Remover Tarefa</button></td>;  
                </tr> 
                <?php } ?>         
            </table >
            <h3><a href="Index.php">Inicio</a></h3>
        </div>

    <script src="JS/Controller.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    </body>
</html>