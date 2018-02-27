
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
