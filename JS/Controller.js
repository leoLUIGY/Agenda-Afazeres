var num = 0;
function CreateField(){
    var field = '<form>'+
                '<label>nome</label><br>' +
                '<input type="text" id="nome-N"><br><br>'+
                '<label>dia</label><br>' + 
                '<input type="date" id="date-D"><br><br>'+
                '<label>Horario</label><br>'+
                '<input type="time" id="time-T"><br><br>'+
                '<input type="submit"  onclick="AddStatistic()" id="meu-Submit" value="Adicionar">'+
                '</form>';

    document.getElementById("setActivite").innerHTML = field;
}


function AddStatistic(){
    var name = document.getElementById("nome-N");
    var date = document.getElementById("date-D");
    var hour = document.getElementById("time-T");
    var docum = document.title;

    num = localStorage.length;

    //let dados = JSON.parse(localStorage.getItem("dadosTarefa"));

    //if(dados == null){
     //   localStorage.setItem('dadosTarefa', "[]");
     //   dados = [];
    //
    var dadosT = {
        documD: docum,
        nomeN :name.value,
        dataD : date.value,
        horaH : hour.value,
        numN: num
    }

    //dados.push(dadosT);

    localStorage.setItem('dadosTarefa'+num+'', JSON.stringify(dadosT));
    
}

function ShowStatistic(){
    var tarefas= Object.keys(localStorage);
    var states = '';

    if(tarefas != null){
        for(var j = 0; j < localStorage.length; j++){
            var tarefa = JSON.parse(localStorage.getItem('dadosTarefa'+j+''));
            if(tarefa == null){
                j = j+1;
                continue;
            }
            var state = '<div id="eliminar">'+
            '<h1>'+tarefa.documD+'<h1>'+
            '<h2>nome: '+tarefa.nomeN+'</h2>' +
            '<h2>dia: '+tarefa.dataD+'</h2>' + 
            '<h2>Horario: '+tarefa.horaH+'</h2>'+
            '<input type="submit" onclick="RemoveAction(this.id)"  id="dadosTarefa'+j+'" value="Remover tarefa">'+
            '<br><br>'+
            '</div>';
        var localTemp = document.title; 
        if(document.title == "Status"){
            states += state;  
        }
        else if(localTemp== tarefa.documD){
            states += state;    
        }

    }
        document.getElementById("setActivite").innerHTML = states;
    }
    else{
       var state = 'Nenhuma tarefa Cadastrada';
       document.getElementById("setActivite").innerHTML = state;
    }
}

function RemoveAction(clicked_id){
    alert(clicked_id);
    //var tarefa = JSON.parse(localStorage.getItem(idTarefa));
    localStorage.removeItem(clicked_id);
}