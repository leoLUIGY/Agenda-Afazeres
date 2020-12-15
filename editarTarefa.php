<?php
    include("conexaoBanco.php");
    $thisId = intval($_GET['tar']);
   
?>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Editar </title>
        <link rel="stylesheet" href="CSS/css2.css">
        <link rel="stylesheet" href="CSS/Style.css">
    </head>
    <body>
        <form  method="POST" action="Statistic.php?p=Statistic&usuario=<?php echo $thisId?>">
        <table>
                <tr>
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Horario</th>
                <tr>
                    
                <tr>
                    <td></td>
                    <td><input type="text" name="name" id="nome-N"></td>
                    <td><input type="date" name="date" id="date-D"></td>
                    <td><input type="time" name="time" id="time-T"></td>
                </tr>          
        </table>
        <input   type="submit" value="enviar" name="comfirm">
       
        <!--<button class="button" onclick="AddStatistic()" id="meu-Submit" >Adicionar </button>-->
        </form>
    </body>
</html>

    