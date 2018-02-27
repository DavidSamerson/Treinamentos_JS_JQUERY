
var poltronas = [false, true, false, true, true, true, false, true, false];

function carregarProgramas(){

    var imagens = getElementByTagName("img");

    for (var i = 0; i < imagens.length; i++){

        imagens[i].src = "poltrona_disponivel.png";

    }
}
