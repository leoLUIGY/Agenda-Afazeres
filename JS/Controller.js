var num;

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

    let dados = JSON.parse(localStorage.getItem("dadosTarefa"));

    if(dados == null){
        localStorage.setItem("dadosTarefa", "[]");
        dados = [];
    }

    var dadosT = {
        documD: docum,
        nomeN :name.value,
        dataD : date.value,
        horaH : hour.value
    }

    dados.push(dadosT);

    localStorage.setItem("dadosTarefa", JSON.stringify(dados));
}

function ShowStatistic(){
    var tarefa = JSON.parse(localStorage.getItem('dadosTarefa'));
    var states = '';
    
    if(tarefa != null){
        num = 0;
        tarefa.forEach(tf => {
            var state = '<div>'+
            '<h1>'+tf.documD+'<h1>'+
            '<h2>nome: '+tf.nomeN+'</h2>' +
            '<h2>dia: '+tf.dataD+'</h2>' + 
            '<h2>Horario: '+tf.horaH+'</h2>'+
            '<input type="submit" onclick="RemoveAction()"  id="'+num+'" value="Remover tarefa">'+
            '<br><br>'+
            '</div>';

        num++;
        var localTemp = document.title; 
        if(document.title == "Status"){
            states += state;  
        }
        else if(localTemp== tf.documD){
            states += state;    
        }
        
    });
        document.getElementById("setActivite").innerHTML = states;
    }
    else{
        var state = 'Nenhuma tarefa Cadastrada';
        document.getElementById("setActivite").innerHTML = state;
    }
}

function RemoveAction(){
    alert("tentando remover");
  //  var tarefa = JSON.parse(localStorage.getItem('dadosTarefa'));
  //  localStorage.removeItem(tarefa[num.value]);
}