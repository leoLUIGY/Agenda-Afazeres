function createField(){
    var field = '<form>'+
                '<label>nome</label><br>' +
                '<input type="text"><br><br>'+
                '<label>dia</label><br>' + 
                '<input type="date"><br><br>'+
                '<label>Horario</label><br>'+
                '<input type="time"><br><br>'+
                '<input type="submit"  value="Adicionar">'+
                '</form>';

    document.getElementById("setActivite").innerHTML = field;

}