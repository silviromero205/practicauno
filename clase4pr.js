/*A partir del siguiente array, sumarlos y mostrar ese valor en pantalla:
[10,20,55,321321,312,4043,4341,0,312321,1]
Mostrar en pantalla el promedio del siguiente listado de numeros:
[2,5,22,43124,32321,12,321312,10,1]
A partir del siguiente listado de usuarios mostrar en pantalla la cantidad de personas que amuenten la mayoría de edad y las que no:
[
    { name: 'juana', age: 12 },
    { name: 'jhonny', age: 22 },
    { name: 'luis', age: 51 },
    { name: 'claudia', age: 33 },    
]
*/
//Ejercicio 1
/*let array = [10,20,55,321321,312,4043,4341,0,312321,1]
let i=0
let suma=0
for(i=0; i<array.length; i++){
    suma += array[i]
}
console.log ("La suma de los elementos del array es: " , suma)*/

//Ejercicio 2
/*let array = [2,5,22,43124,32321,12,321312,10,1]
let i=0
let suma=0
let prom=0
for(i=0; i<array.length; i++){
    suma=suma + array[i]
}
prom= suma/array.length
console.log ("El promedio de los elementos del array es: " ,prom )*/

//Ejercicio 3
let persona = [
    { name: 'juana', age: 12 },
    { name: 'jhonny', age: 22 },
    { name: 'luis', age: 51 },
    { name: 'claudia', age: 33 },    
]
let variableA= persona.filter(function(elemento){
    return elemento.age >= 18;
});
console.log("Los mayores a 18 son: ", variableA.length)

let variableB= persona.filter(function(elemento){
    return elemento.age < 18;
});
console.log("Los menores a 18 son: ", variableB.length)
