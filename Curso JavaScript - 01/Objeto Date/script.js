
var Data = new Date(); // Data atual..
var diaDoMes = Data.getDate(); // Dia do Mês..
var diaDaSemana = Data.getDay(); // Dia da Semana..

var dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]; 
var diaDaSemanaAtual = dias[Data.getDay()]; // retorna o dia da semana em string baseado no array

Data.getFullYeah(); // Anos

Data.getHours();