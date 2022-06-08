/*Estructuras de Datos – Arreglos
Ejercicio – Suma Elementos Arreglo
• Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario*/
let dimension: number = Number(prompt(" ingrese dimension"));
let arreglo: number[] = new Array(dimension);
let suma = 0;
let i = 0;
for (i = 0; i < arreglo.length; i++) {
  arreglo[i] = Number(prompt(" ingrese numeros"));
  suma = suma + arreglo[i];

  console.log(" elementos a sumar:" + arreglo[i]);
}

console.log(" la suma de los elementos del arrreglo " + "", "es:" + "", suma);
