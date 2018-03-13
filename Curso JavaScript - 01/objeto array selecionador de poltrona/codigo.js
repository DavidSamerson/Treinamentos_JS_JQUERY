
var poltronas = [false, true, false, true, true, true, false, true, false];

window.onload = function () { carregarPoltronas(); };

function carregarPoltronas(){

    var imagens = document.getElementsByTagName("img");

    for (var i = 0; i < imagens.length; i++){

        if(poltronas[i]) {
            imagens[i].src = "poltrona_disponivel.png";
        }
        else{
            imagens[i].src = "poltrona_indisponivel.png";
        }
    }
}

function selecionarPoltrona(){

    var imagens = document.getElementsByTagName("img");

    for(var i=0 ; i<poltronas.length ; i++){
        if(poltronas[i]){
            imagens[i].src = "poltrona_selecionada.png";

            var quer = confirm("Deseja finalizar a seleção?");

            if (quer){
                break;
            }

            imagens[i].src = "poltrona_disponivel.png";
        }
    }
}

function selecionaCasal() {

    var imagens = document.getElementsByTagName("img");

    for(var i=0 ; i<poltronas.length ; i++){

        if(poltronas[i] && poltronas[i+1]){

            imagens[i].src = "poltrona_selecionada.png";
            imagens[i + 1].src = "poltrona_selecionada.png";

            var quer = confirm("Deseja finalizar a seleção?");

            if (quer){
                break;
            } else {
                imagens[i].src = "poltrona_disponivel.png";
                imagens[i + 1].src = "poltrona_disponivel.png";
            }
        }
    }

}