var num = 0;
if(document.title != "Minha Aplicação"){
    window.onload = ShowStatistic;  
}
function CreateField(){
    var field = '<form>'+
                '<h2>nome</h2><br>' +
                '<input type="text" id="nome-N"><br><br>'+
                '<h2>dia</h2><br>' + 
                '<input type="date" id="date-D"><br><br>'+
                '<h2>Horario</h2><br>'+
                '<input type="time" id="time-T"><br><br>'+
                '<button class="button" onclick="AddStatistic()" id="meu-Submit" >Adicionar </button>'+
                '</form>';

    document.getElementById("setActivite").innerHTML = field;
}


function AddStatistic(){
    var name = document.getElementById("nome-N");
    var date = document.getElementById("date-D");
    var hour = document.getElementById("time-T");
    var docum = document.title;
    var tasks;

    num = localStorage.length;
 /*   if(localStorage.length >0){
        for(var s = 0; s <= localStorage.length; s++){
            var nomeTarefa = JSON.parse(localStorage.getItem('dadosTarefa'+s+''));
            tasks[s] =nomeTarefa;
            if(nomeTarefa == null){
                num = s;
            }else{
                
        }
    }
}*/

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
    var states = '';


    if(tarefas != null){
        for(var j = 0; j <= localStorage.length; j++){
            var tarefa = JSON.parse(localStorage.getItem(localStorage.key(j)));
            if(tarefa == null){
                continue;
            }
            var state = '<div class="tar">'+
            '<h1>'+tarefa.documD+'<h1>'+
            '<h2>nome: '+tarefa.nomeN+'</h2>' +
            '<h2>dia: '+tarefa.dataD+'</h2>' + 
            '<h2>Horario: '+tarefa.horaH+'</h2>'+
            '<button class="button" onclick="RemoveAction(this.id)"  id="'+localStorage.key(j)+'">Remover Tarefa</button>'+
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
        if (states <= 0){
            var state = 'Nenhuma tarefa Cadastrada';
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