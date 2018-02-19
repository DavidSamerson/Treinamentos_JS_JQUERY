var paises = new Array ("Brasil", "China", "Rússia", "India");

alert(paises.length);  // mostra a quantidade de elementos do meu array.
alert(paises.indexOf("Brasil")); // informa o índice onde Brasil se encontra.
alert(paises.lastIndexOf("India")); // informa a ultima ocorrência do elemento especificado.

//Ordenação 

alert(paises.reverse()); // inverte a ordem do array;
alert(paises.sort());    // Ajusta em ordem alfabética;

//Cortes e emendas

alert(países.join(";")); // separa todos os itens com o elemento especificado (Brasil ; India ; China ; Rússia)
alert(paises.concat("EUA", "Argentina")); //concatenação de novas strings
alert(paises.slice(2,2));
alert(paises.splice(2,2,"Removido", "Removido"));

// FILAS FIFO

var filas = new Array ("A","B","C","D","E","F");

alert( filas.push("G") ); // Adiciona um novo elemento
alert( filas.shift() ); //Exclui o primeiro elemento da fila
alert( filas.pop()); //Remove o ultimo elemento da fila
alert( filas.unshift("G") ); //Adiciona o elemento especificado no inicio da fila.
