<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Projetos</title>
        <link rel="stylesheet" href="CSS/css2.css">
        <link rel="stylesheet" href="CSS/Style.css">
    </head>
    <body background="Images/projects.png">
        <div class="fonts">
            <h2 >Projetos</h2>
            <h3>Projetos atuais</h3>
            <button class="button" id="esconder" onclick="CreateField()">Adicionar Projeto</button><br>
            
            <form id="esconderForm" method="POST" action="controller.php">
                    <table>
                            <tr>
                                <th>Nome</th>
                                <th>Data</th>
                                <th>Horario</th>
                            <tr>
                                   
                            <tr>
                                <td><input type="text" name="name" id="nome-N"></td>
                                <td><input type="date" name="date" id="date-D"></td>
                                <td><input type="time" name="time" id="time-T"></td>
                            </tr>          
                    </table>
                    <input type="submit" value="Enviar">
                <!--<button class="button" onclick="AddStatistic()" id="meu-Submit" >Adicionar </button>-->
            </form>
            
            <table  id="setActivite" >
          
            </table >
            <h3><a href="Index.php">Inicio</a></h3>
        </div>

       <script src="JS/Controller.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        
    </body>
</html>