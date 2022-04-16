console.clear();

const re1 = new RegExp("abc");
const re2 = /abc/;

console.log(re1.test("abc")); //->true
console.log(re1.test("abcde")); //->true
console.log(re1.test("xxxabcxx")); //->true
console.log(re1.test("abda")); //->false
console.log(re1.test("abds")); //->false
console.log(re2.test("abc")); //->true
console.log(re2.test("abd")); //->false

console.log("0-9*****************************************");

console.log(/[0123456789]/.test("septiembre 2021")); //->true
console.log(/[0-9]/.test("septiembre 2021")); //->true

console.log("3345*****************************************");

console.log(/[3345]/.test("septiembre 2021")); //->true

console.log("d*****************************************");

console.log(/\d/.test("septiembre 2021")); //->true \d es lo mismo que 0-9 d=cualquier caracter dígito

console.log("w*****************************************");

console.log(/\w/.test("septiembre")); //->true cualquier caracter alfanumérico
console.log(/\w/.test("1234")); //->true cualquier caracter alfanumérico

console.log("s*****************************************");

console.log(/\s/.test(" ")); //->true cualquier caracter espacio en blanco(espacio, tabulacion, nueva linea o similar)

console.log("S****************************************");

console.log(/\S/.test(" ")); //->false cualquier caracter espacio en blanco(espacio, tabulacion, nueva linea o similar)
console.log(/\S/.test("_")); //->true cualquier caracter espacio en blanco(espacio, tabulacion, nueva linea o similar)

console.log("D*****************************************");

console.log(/\D/.test("2021")); //->false cualquier caracter que no sea digito
console.log(/\D/.test("hola")); //->true cualquier caracter que no sea digito

console.log("W*****************************************");

console.log(/\W/.test("1234")); //->false cualquier caracter no alfanumérico
console.log(/\W/.test(".-,.")); //->true cualquier caracter no alfanumérico

console.log("fechaHora*****************************************");
//con lo básico de expresiones regulares hasta ahora podríamos validar un patrón para fecha y hora
//pero se vería horrible. Este tipo de expresiones se pueden mejorar pero por ahora la definiré con lo
//aprendido hasta este punto.
let patronFechaHora = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(patronFechaHora.test("23-09-2021 17:09")); //->true
console.log(patronFechaHora.test("23-sep-2021 17:09")); //->false

console.log("d.*****************************************");

console.log(/[\d.]/.test("2.2")); //->true, cualquier dígito o punto

console.log("*****************************************");

let noBInario = /[^0-9]/; //-> que no exista un dígito entre el cero y nueve
console.log(noBInario.test("123")); //-> false
console.log(noBInario.test("sdf")); //-> true

console.log("*****************************************");

console.log(/'\d'/.test("'12'")); //-> false, el patrón debe coincidir con tener comillas simple '' y dentro un solo dígito
//El signo + despues de d(dígito) indica que el caracter que lo antecede puede aparecer 1 o más veces
console.log(/'\d+'/.test("'12'")); //-> true, el patrón deben coincidir con tener comillas simple '' y dentro puede tener más de un dígito.

console.log("*****************************************");
console.log(/'\d*'/.test("''")); //-> true, el asterisco indica que el caracter que lo antecede (en este caso d de dígito) puede aparecer cero o más veces

console.log("*****************************************");
//Un signo de interrogación hace que alguna parte del patrón sea opcional, es decir, estar presente cero o más veces
let reusar = /reh?usar/;
console.log(reusar.test("rehusar")); //-> true
console.log(reusar.test("reusar")); //-> true

console.log("*****************************************");
//indicar que un patrón ocurra un numero preciso de veces
// {4} despues de un elemento, indica que este debe ocurrir excatamente 4 veces
// {2,4} despues de un elemento, indica que este debe ocurrir al menos 2 veces y maximo 4
// {5,} nada despues de la coma indica en este caso que el caracter puede ocurrir 5 veces o más
let fechaHora2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(fechaHora2.test("24-9-2021 9:35")); // ->true

console.log("*****************************************");
//EL signo + aplica solo para la sgunda letra o de boo y hoo, entonces puede estar presente 1 o más veces desde la segunda letra
//El último signo + aplica para el la totalidad del grupo
//y la letra i al final indica que las letras puedan ser minúsculas o mayúsculas
let patronAgrupado = /boo+(hoo+)+/i;
console.log(patronAgrupado.test("bOOHo")); //-> flase
console.log(patronAgrupado.test("bOoHoohooohoooo")); //-> true

console.log("exec*****************************************");
// el metodo exec a diferencia de test, retorna null si no encuentra una coincidencia del partron, y en caso contrario
//retorna un objeto con informacion sobre la coincidencia
let coincidencia = /\d+/;
console.log(coincidencia.exec("uno dos 100")); // -> retorna 100 que es la coincidencia
console.log(coincidencia.exec("uno dos 100").index); // -> retorna el indice en donde comienza la coincidencia

//los valores de tipo string tienen un metodo match que se comporta de forma similar a exec
console.log("uno dos 100".match(/\d+/));

console.log("*****************************************");
const textoCitado = /'([^']*)'/;
console.log(textoCitado.exec("ella dijo 'hola'"));

console.log("*****************************************");
function obtenerFecha(string) {
  let [, dia, mes, agno] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(agno, mes - 1, dia);
}

console.log(obtenerFecha("24-9-2021"));

console.log("replace y regex*****************************************");

console.log("Borobudur".replace(/[ou]/, "a")); //-> Reemplaza la primera coincidencia con patrón regex
console.log("Borobudur".replace(/[ou]/g, "a")); //-> Reemplaza todas las coincidencias con patrón regex

console.log("Likov,Barbara\nMcCarthy,John\nWadler,Philip");
console.log(
  "Likov,Barbara\nMcCarthy,John\nWadler,Philip".replace(/(\w+),(\w+)/g, "$2 $1")
); //-> el patrón reemplaza el orden de los string para mostar primero el nombre y luego el apellido
//Los $1 y $2 se refieren a los grupos entre paréntesis del patrón, se puede usar hasta $9
//Tambien podemos pasar una funcion como segndo argumento a replace, y esta se llamara pasando cada grupo
//del patrón como argumento de la funcion y su retorno se insertara en el nuevo string.
let frase = "la cia y el fbi";
console.log(frase.replace(/\b(fbi|cia)\b/g, (str) => str.toUpperCase()));

console.log("replace y regex*****************************************");
