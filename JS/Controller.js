var num = 0;
if(document.title != "Minha Aplicação"){
    //window.onload = ShowStatistic;  
    if(document.title != "Status" ){
        document.getElementById("esconderForm").style.display= 'none';
    }
    //if(document.title == "Status"){
    //    document.getElementById("esconderFormStatistic").style.display= 'none';
    //}
}



function CreateField(){
    document.getElementById("esconder").style.display= 'none';
    document.getElementById("esconderForm").style.display= 'inline';
}

function EditarTar(){
    document.getElementById("esconderFormStatistic").style.display= 'inline';
}
function EnviarEdit(){
    document.getElementById("esconderFormStatistic").style.display= 'none';
    window.location.reload();
}


function AddStatistic(){
    document.getElementById("esconder").style.display= 'inline';
    document.getElementById("esconderForm").style.display= 'none';

    window.location.reload();
}