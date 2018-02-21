function botao( num ){

    var salvo = document.form.result.value;
    document.form.result.value = salvo + num;

}

function reset(){

    document.form.result.value = "";

}

function calcule(){

    //Pegar o valor da variavel
    var salvo = document.form.result.value;

    //Fazer o cálculo EVAL
    var resultado = eval(salvo);

    //Pegar o resultado e colocar no visor
    document.form.result.value = resultado;

}