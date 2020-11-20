var num = 0;
if(document.title != "Minha Aplicação"){
    window.onload = ShowStatistic;  
    if(document.title != "Status"){
        document.getElementById("esconderForm").style.display= 'none';
    }
}



function CreateField(){
    document.getElementById("esconder").style.display= 'none';
    document.getElementById("esconderForm").style.display= 'inline';
}


function AddStatistic(){
    document.getElementById("esconder").style.display= 'inline';
    document.getElementById("esconderForm").style.display= 'none';
    var name = document.getElementById("nome-N");
    var date = document.getElementById("date-D");
    var hour = document.getElementById("time-T");
    var docum = document.title;
    var tasks;

    num = localStorage.length;

    var dadosT = {
        documD: docum,
        nomeN :name.value,
        dataD : date.value,
        horaH : hour.value,
        numN: num
    }



    localStorage.setItem('dadosTarefa'+num+'', JSON.stringify(dadosT));
    window.location.reload();
}

function ShowStatistic(){
    var tarefas= Object.keys(localStorage);
    var states = '  <tr>'+
    '<th>Tarefa</th>'+
    '<th>Nome</th>'+
    '<th>Data</th>'+
    '<th>Horario</th>'+
    '</tr>';


    if(tarefas != null){
        for(var j = 0; j <= localStorage.length; j++){
            var tarefa = JSON.parse(localStorage.getItem(localStorage.key(j)));
            if(tarefa == null){
                continue;
            }

            //'<tr class="tars" id="showAlways">'+
            var state = '<tr>'+
            '<td> '+ tarefa.documD +' </td>'+
            '<td> '+ tarefa.nomeN +' </td>' +
            '<td> '+ tarefa.dataD +' </td>' + 
            '<td> '+ tarefa.horaH +' </td>'+
            '<td><button class="button" onclick="RemoveAction(this.id)"  id="'+localStorage.key(j)+'">Remover Tarefa</button></td></tr>';
          
        var localTemp = document.title; 
        if(document.title == "Status" ){
            states += state;  
        }
        else if(localTemp== tarefa.documD){
            states += state;    
        }

    }
        if (states <= 1){
            var state = '<h3>Nenhuma tarefa Cadastrada</h3>';
            document.getElementById("setActivite").innerHTML = state;
        } else{   
            document.getElementById("setActivite").innerHTML = states;
        }

    }
}

function RemoveAction(clicked_id){
    //var tarefa = JSON.parse(localStorage.getItem(idTarefa));
    localStorage.removeItem(clicked_id);
    window.location.reload();
}