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

    var dados = JSON.parse(localStorage.getItem("dadosTarefa"));

    if(dados == null){
        localStorage.setItem("dadosTarefa", "[]");
        dados = [];
    }

    var dadosT = {
        nomeN :name.value,
        dataD : date.value,
        horaH : hour.value
    }

    dados.push(dadosT);

    localStorage.setItem("dadosTarefa", JSON.stringify(dados));

    //ShowStatistic();
}

function ShowStatistic(){
    var jsonTarefa = localStorage.getItem('dadosTarefa');
    var tarefa = JSON.parse(jsonTarefa);

    var state = '<div>'+
    '<h2>nome: '+tarefa.nomeN+'</h2>' +
    '<h2>dia: '+tarefa.dataD+'</h2>' + 
    '<h2>Horario: '+tarefa.horaH+'</h2>'+
    '</div>';

    document.getElementById("setActivite").innerHTML = state;
}