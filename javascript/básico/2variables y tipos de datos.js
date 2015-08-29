/*
Como en la mayoría de los lenguajes, JavaScript tiene variables.

Estas comienzan se declaran con la palabra var seguido del nombre de la variables

Es importante que el nombre que le pongas a tu variable no coincida con esta lista de palabras reservadas usadas por el lenguaje http://www.w3schools.com/js/js_reserved.asp

En JS el tipado es dinámico, con esto nos referimos a que la variable se definira el tipo de dato de acuerdo al valor asignado

Los tipos de datos en JavaScript son:

Boolean
Null
Undefined
Number
String
Object -> Array, Date (heredan de Object)


*/

//Declarando variable booleana
var booleana = true;

//Variable nula
var nula = null;

//Variabla indefinida
var indefinida;

//Variable númerica
var entera = 10, flotante = 10.05;//Puedes declarar multiples variables usando ,

//Variable tipo string
var cadena = "hola";

//Para crear una variable que almacene un objeto podemos hacer lo siguiente
var objeto1 = {};
var objeto2 = new Object();//Esta forma no se recomienda porque consume mas tiempo de ejecución

//Con los arreglos para lo mismo
var arreglo1 = [];
var arreglo2 = new Array();

//La fecha difiere
var fecha = new Date();

