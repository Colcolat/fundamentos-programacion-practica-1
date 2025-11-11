// FUNDAMENTOS DE PROGRAMACIÃ“N - PRÃCTICA
// Nombre del estudiante: _________________
// Fecha: _________________

// ============================================
// SECCIÃ“N 1: VARIABLES Y TIPOS DE DATOS (10 puntos)
// ============================================

/**
 * Ejercicio 1.1: Declarar variables (2 puntos)
 * Crea tres variables con tu informaciÃ³n personal
 * @returns {Object} - Objeto con nombre, edad y carrera
 */
function miInformacion() {
  // TODO: Declara las variables nombre, edad y carrera
  // Ejemplo: const nombre = "Juan";
  
  const nombre = "Juan José Zapata Buenfil";
  const edad = 20;
  const carrera = "TSU en software";
  
  return { nombre, edad, carrera };
}

/**
 * Ejercicio 1.2: Operaciones aritmÃ©ticas bÃ¡sicas (3 puntos)
 * @param {number} a - Primer nÃºmero
 * @param {number} b - Segundo nÃºmero
 * @returns {Object} - Objeto con suma, resta, multiplicaciÃ³n y divisiÃ³n
 */
function operacionesBasicas(a, b) {
  // TODO: Calcula suma, resta, multiplicaciÃ³n y divisiÃ³n de a y b
  
  const suma = a + b;
  const resta = a - b;
  const multiplicacion = a * b;
  const division = a / b;
  
  return { suma, resta, multiplicacion, division };
}

/**
 * Ejercicio 1.3: Ãrea de un rectÃ¡ngulo (2 puntos)
 * @param {10} base - Base del rectÃ¡ngulo
 * @param {5} altura - Altura del rectÃ¡ngulo
 * @returns {50} - Ãrea del rectÃ¡ngulo
 */
function areaRectangulo(base, altura) {
  // TODO: Calcula y retorna el Ã¡rea (base * altura)
    const area = base * altura;
  return area;
}

/**
 * Ejercicio 1.4: ConversiÃ³n de temperatura (3 puntos)
 * Convierte grados Celsius a Fahrenheit
 * FÃ³rmula: F = C * 9/5 + 32
 * @param {0} celsius - Temperatura en Celsius
 * @returns {32} - Temperatura en Fahrenheit
 */
function celsiusAFahrenheit(celsius) {
  return celsius * 9/5 + 32; 
}
// ============================================
// SECCIÃ“N 2: CONDICIONALES (15 puntos)
// ============================================

/**
 * Ejercicio 2.1: NÃºmero par o impar (3 puntos)
 * @param {4} numero - NÃºmero a evaluar
 * @returns {"par"} - "par" o "impar"
 */
function parOImpar(numero) {
  // TODO: Usa el operador % (mÃ³dulo) para determinar si es par o impar
  // Pista: Un nÃºmero es par si numero % 2 === 0
    if (numero % 2 === 0){

      return "par";
    } else return "impar";
}

/**
 * Ejercicio 2.2: CalificaciÃ³n (4 puntos)
 * @param {10} nota - Nota del 0 al 100
 * @returns {"Aprobado"} - "Aprobado" si nota >= 60, "Reprobado" si no
 */
function evaluarNota(nota) {
  // TODO: Implementa la lÃ³gica con if/else
    if (nota >= 60){
      return "Aprobado";
    } else {return "Reprobado";}
}

/**
 * Ejercicio 2.3: El mayor de tres nÃºmeros (4 puntos)
 * @param {10} a - Primer nÃºmero
 * @param {3} b - Segundo nÃºmero
 * @param {6} c - Tercer nÃºmero
 * @returns {10} - El nÃºmero mayor
 */
function mayorDeTres(a, b, c) {
  // TODO: Encuentra y retorna el mayor de los tres nÃºmeros
  return Math.max(a, b, c);
}

/**
 * Ejercicio 2.4: ClasificaciÃ³n de edad (4 puntos)
 * @param {34} edad - Edad de la persona
 * @returns {"adulto"} - "menor" (0-17), "adulto" (18-64), "mayor" (65+)
 */
function clasificarEdad(edad) {
  // TODO: Implementa la clasificaciÃ³n con if/else if/else
    if (edad <= 17){
      return "menor";
    } else if (edad < 65) {
        return "adulto";
      } else {
        return "mayor";
      }
}

// ============================================
// SECCIÃ“N 3: FUNCIONES Y BUCLES (20 puntos)
// ============================================

/**
 * Ejercicio 3.1: Factorial (5 puntos)
 * Calcula el factorial de un nÃºmero (n! = n * (n-1) * (n-2) * ... * 1)
 * Ejemplo: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * @param {5} n - NÃºmero entero positivo
 * @returns {120} - Factorial de n
 */
function factorial(n) {
    let fac = 1;
  // TODO: Implementa usando un bucle for
    for (i = n ; i >= 2 ; i--){
      fac = fac * i;
    }
  return fac;
}

/**
 * Ejercicio 3.2: Suma de nÃºmeros del 1 al n (4 puntos)
 * @param {5} n - NÃºmero lÃ­mite
 * @returns {15} - Suma de 1 + 2 + 3 + ... + n
 */
function sumaHastaN(n) {
  let suma = 0;
  for (let i = 1; i <= n ; i++){
    suma = suma + i;
  }
  return suma;
  // TODO: Usa un bucle para sumar todos los nÃºmeros desde 1 hasta n
}

/**
 * Ejercicio 3.3: Tabla de multiplicar (5 puntos)
 * @param {3} numero - NÃºmero para generar su tabla
 * @returns {3, 6, 9, 12, 15, 18, 21, 24, 27, 30} - Array con los resultados de numero x 1 hasta numero x 10
 * Ejemplo: tablaMultiplicar(3) debe retornar [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
 */
function tablaMultiplicar(numero) {
  let x = 1;
  const tabla = [];
  for (i=1; i <= 10; i++){
    x = numero * i;
    tabla[i-1] = x;
  }
  return tabla;
}

/**
 * Ejercicio 3.4: NÃºmeros pares hasta n (6 puntos)
 * @param {10} n - NÃºmero lÃ­mite
 * @returns {2, 4, 6, 8, 10} - Array con todos los nÃºmeros pares desde 2 hasta n
 * Ejemplo: numerosPares(10) debe retornar [2, 4, 6, 8, 10]
 */
function numerosPares(n) {
  // TODO: Crea un array con todos los nÃºmeros pares hasta n
  const pares = [];
  for (let i=2; i <= n; i++){
    if(i % 2 === 0){
      pares.push(i);
    }
  }
  return pares;
}

// ============================================
// SECCIÃ“N 4: ARRAYS (25 puntos)
// ============================================

/**
 * Ejercicio 4.1: Suma de elementos de un array (4 puntos)
 * @param {sumaArray<1, 2, 3, 4, 5>} numeros - Array de nÃºmeros
 * @returns {number} - Suma de todos los elementos
 */
function sumaArray(numeros) {
  // TODO: Suma todos los elementos del array
  let suma = 0;
    for (let i = 0; i < numeros.length; i++){
      suma += numeros[i];
    }
  return suma;
}

/**
 * Ejercicio 4.2: Promedio de un array (5 puntos)
 * @param {numerosArray<1, 5, 3, 9, 2>} numeros - Array de nÃºmeros
 * @returns {9} - Promedio de los nÃºmeros
 */
function promedioArray(numeros) {
  // TODO: Calcula el promedio (suma total / cantidad de elementos)
  if (numeros.length === 0){
    return 0;
  }

  let suma = 0;
  for (let i = 0; i < numeros.length; i++){
    suma = suma + numeros[i];
  }
  return suma / numeros.length;

  
}

/**
 * Ejercicio 4.3: Encontrar el mÃ¡ximo (6 puntos)
 * @param {Array<1, 2, 3, 4, 5>} numeros - Array de nÃºmeros
 * @returns {5} - El nÃºmero mÃ¡s grande del array
 */
function encontrarMaximo(numeros) {
  // TODO: Encuentra y retorna el nÃºmero mÃ¡s grande
  // Pista: Puedes usar Math.max(...numeros) o hacerlo con un bucle
  let Maximo = Math.max(...numeros)
  return Maximo;
}

/**
 * Ejercicio 4.4: Filtrar nÃºmeros mayores a un valor (5 puntos)
 * @param {Array<1,2,3,4,5,6,7,8,9,10>} numeros - Array de nÃºmeros
 * @param {5} limite - Valor lÃ­mite
 * @returns {Array<6,7,8,9,10>} - Nuevo array solo con nÃºmeros mayores al lÃ­mite
 * Ejemplo: filtrarMayores([1, 5, 3, 8, 2], 4) debe retornar [5, 8]
 */
function filtrarMayores(numeros, limite) {
  // TODO: Crea un nuevo array con solo los nÃºmeros mayores al lÃ­mite
  const mayores = [];
  for (let i = 0; i < numeros.length; i++){
      let x = numeros[i];
      if (x > limite){
        mayores.push(x);
      }
  }
  return mayores;
}

/**
 * Ejercicio 4.5: Invertir un array (5 puntos)
 * @param {1,2,3,4,5} arr - Array a invertir
 * @returns {5,4,3,2,1} - Nuevo array con los elementos en orden inverso
 * Ejemplo: invertirArray([1, 2, 3, 4]) debe retornar [4, 3, 2, 1]
 */
function invertirArray(arr) {
  // TODO: Invierte el orden de los elementos
  // Pista: Puedes usar arr.reverse() o hacerlo manualmente
  const invertido = [];
  for (let i = arr.length - 1;  i >= 0 ; i --){
      invertido.push(arr[i]);
  }
  return invertido;
}

// ============================================
// SECCIÃ“N 5: ARRAYS BIDIMENSIONALES (30 puntos)
// PreparaciÃ³n para matrices
// ============================================

/**
 * Ejercicio 5.1: Crear una matriz (6 puntos)
 * Crea una matriz de filas x columnas llena de ceros
 * @param {2} filas - NÃºmero de filas
 * @param {2} columnas - NÃºmero de columnas
 * @returns {Array<Array<number>>} - Matriz de ceros
 * Ejemplo: crearMatriz(2, 3) debe retornar [[0, 0, 0], [0, 0, 0]]
 */
function crearMatriz(filas, columnas) {
  // TODO: Crea una matriz de filas x columnas llena de ceros
  const matriz = [];
  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(0);
    }
    matriz.push(fila);
  }
  return matriz;
}

/**
 * Ejercicio 5.2: Suma de elementos de una matriz (6 puntos)
 * @param {Array<Array<number>>} matriz - Matriz de nÃºmeros
 * @returns {number} - Suma de todos los elementos
 * Ejemplo: sumaMatriz([[1, 2], [3, 4]]) debe retornar 10
 */
function sumaMatriz(matriz) {
  // TODO: Suma todos los elementos de la matriz
  // NecesitarÃ¡s dos bucles: uno para las filas y otro para las columnas
    let sumaTotal = 0;
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            sumaTotal += matriz[i][j];
        }
    }
    return sumaTotal;
}

/**
 * Ejercicio 5.3: Obtener una fila (5 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceFila - Ãndice de la fila (empezando en 0)
 * @returns {Array<number>} - La fila especificada
 * Ejemplo: obtenerFila([[1, 2], [3, 4], [5, 6]], 1) debe retornar [3, 4]
 */
function obtenerFila(matriz, indiceFila) {
  // TODO: Retorna la fila indicada

  return matriz[indiceFila];
}

/**
 * Ejercicio 5.4: Obtener una columna (7 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceColumna - Ãndice de la columna (empezando en 0)
 * @returns {Array<number>} - Array con los elementos de la columna
 * Ejemplo: obtenerColumna([[1, 2], [3, 4], [5, 6]], 0) debe retornar [1, 3, 5]
 */
function obtenerColumna(matriz, indiceColumna) {
  // TODO: Extrae todos los elementos de la columna indicada
  const columna = [];
  for (let i = 0; i < matriz.length; i++) {
    columna.push(matriz[i][indiceColumna]);
  }
  return columna;
}

/**
 * Ejercicio 5.5: Transponer una matriz (6 puntos)
 * La transpuesta intercambia filas por columnas
 * @param {Array<Array<number>>} matriz - Matriz original
 * @returns {Array<Array<number>>} - Matriz transpuesta
 * Ejemplo: transponer([[1, 2, 3], [4, 5, 6]]) debe retornar [[1, 4], [2, 5], [3, 6]]
 */
function transponer(matriz) {
  // TODO: Crea la matriz transpuesta
  const transpuesta = [];
  for (let j = 0; j < matriz[0].length; j++) {
    const nuevaFila = [];
      for (let i = 0; i < matriz.length; i++) {
        nuevaFila.push(matriz[i][j]);
      }
      transpuesta.push(nuevaFila);
    }
    
  return transpuesta;
}

// ============================================
// NO MODIFIQUES ESTA LÃNEA - NECESARIA PARA LOS TESTS
// ============================================
module.exports = {
  miInformacion,
  operacionesBasicas,
  areaRectangulo,
  celsiusAFahrenheit,
  parOImpar,
  evaluarNota,
  mayorDeTres,
  clasificarEdad,
  factorial,
  sumaHastaN,
  tablaMultiplicar,
  numerosPares,
  sumaArray,
  promedioArray,
  encontrarMaximo,
  filtrarMayores,
  invertirArray,
  crearMatriz,
  sumaMatriz,
  obtenerFila,
  obtenerColumna,
  transponer
};
