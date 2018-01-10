

var vetor = [1,2,3,4,5,6,7,8,9,10];

/*for (var i=0; i<vetor.length;i++) {

    console.log("O numero e: " + vetor[i]);

}

vetor.forEach(num => {

    console.log("O numero do for Each e: " + num);

});*/

var regex = /[a-m]+/g;

var test = 'abcxyzmm';

var extract = test.match(regex); //pegar o valor de extract e juntar todos os match em uma string

console.log(extract); 

var juntinho = extract.join("");//junta todas que deram certo

var totalOk = juntinho.length;//conta a quantidade de palavras certas

console.log(juntinho);

console.log(totalOk);

/*
var resultado = regex.exec('abcxyzmm');

console.log(resultado);
console.log(resultado.index);
console.log(resultado.splice.length);

var resultado = regex.exec('abcxyzmm');

console.log(resultado.index);

console.log(resultado);
console.log(resultado.splice.length);

console.log(regex.lastIndex); //usar para imprimir o total de caracteres
*/


