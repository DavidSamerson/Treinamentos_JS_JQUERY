var nome = "Ricardo";
alert(nome);
alert(typeof(nome));
alert(nome.length);

////////////////////////////////////////////
//Boolean

var b = new Boolean (true);
var b = new Boolean (0);
var b = new Boolean (null);
var b = new Boolean (NaN);
// todas são falses

alert(b);
alert(typeof(b));

/////////////////////////////////////////
//Number

var s =  new Number(120.90);
var s =  new Number("120.90");

alert(Number.NaN);
alert(Number.MAX_VALUE);
alert(Number.MIN_VALUE);
alert(Number.NEGATIVE_INFINITY);
alert(Number.POSITIVE_INFINITY);

alert (s.toPrecision());// notação cientifica caso o numero citado seja menor que o numero de casas.
alert(s.toExponential()); // notação cientifica obrigatoriamente baseado no numero de casas.
alert(s.toFixed()); // numero de casas depois da virgula.


/////////////////////////////////////////////////////
//String

var X = new String("Text Dentro de aspas");
alert("x");

document.write(x);// método que escreve no documento html.