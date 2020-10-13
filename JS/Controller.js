function createField(){
    var field = '<form>'+
                '<label>nome</label><br>' +
                '<input type="text" id="nome-N"><br><br>'+
                '<label>dia</label><br>' + 
                '<input type="date" id="date-D"><br><br>'+
                '<label>Horario</label><br>'+
                '<input type="time" id="time-T"><br><br>'+
                '<input type="submit"  onclick="addStatistic()" id="meu-Submit" value="Adicionar">'+
                '</form>';

    document.getElementById("setActivite").innerHTML = field;
}


function addStatistic(){
    var name = document.getElementById("nome-N").value;
    var date = document.getElementById("date-D").value;
    var hour = document.getElementById("time-T").value;

    var state = '<div>'+
    '<h2>nome: '+name+'</h2>' +
    '<h2>dia: '+date+'</h2>' + 
    '<h2>Horario: '+hour+'</h2>'+
    '</div>';

    document.getElementById("setActivite").innerHTML = state;
}