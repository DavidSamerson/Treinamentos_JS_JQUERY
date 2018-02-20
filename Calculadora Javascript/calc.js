function botao( num ){

    var salvo = document.form.result.value;
    document.form.result.value = salvo + num;

}

function reset(){

    document.calc.visor.value = "";

}

function calcule(){

    //Pegar o valor da variavel
    var salvo = document.body.result.value;

    //Fazer o cálculo EVAL
    var resultado = eval(salvo);

    //Pegar o resultado e colocar no visor
    document.body.result.value = resultado;

}