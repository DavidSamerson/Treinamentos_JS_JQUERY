function calcularIMC() {

  var formulario =  document.getElementById("formulario");

  var kilos = formulario.kilos.value;
  var metros = formulario.metros.value;
  var centimetros = formulario.centimetros.value;

  var altura = ((metros * 100) + parseInt(centimetros))  / 100;
  var imc = kilos / (altura * altura);

  formulario.imc.value = imc.toFixed(2);

  //alert("Kilos: " + kilos + " ,Metros: " + metros + " ,Centimetros: " + centimetros + " ,IMC:" + imc);

}