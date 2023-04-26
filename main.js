// 1. Crear una función que reciba un texto y retorne el mismo texto con la primera letra de cada palabra en mayúscula
// ej: capitalizar('este es un texto de ejemplo') => Este Es Un Texto De Ejemplo
console.log('*****EJERCICIO 1*****');
const text = 'aqui hay un texto de ejemplo';

const capitalizar = (texto) => {

    const words = texto.split(" ");
    const resultadoMap = words.map((el) => {
        const primeraLetra = el[0].toUpperCase();
        const resto = el.slice(1);
        return primeraLetra + resto;
    })
    const resultadoFinal = resultadoMap.join(" ");
    return resultadoFinal;
};

console.log(capitalizar(text));
console.log('');


// 2. Crear una funcion que reciba un texto como parametro y determine si una palabra o sentencia corresponde a un palíndromo
// ej: palindromo('hola') => false
// ej: palindromo('luz azul') => true
console.log('*****EJERCICIO 2*****');
const palabra = 'luz azul';
const palabra2 = 'radar';
const palabra3 = 'raul';

const palindromo = (texto) => {
    const textoSinEspacio = texto.replace(" ", "");
    const textoVolteado = textoSinEspacio.toLowerCase().split("").reverse().join("");
    console.log(textoVolteado);
    if (textoSinEspacio == textoVolteado) {
        console.log("Es un Palindromo");
        return true
    } else {
        console.log("No es un Palindromo");
        return false
    }

};

console.log(palindromo(palabra));
console.log(palindromo(palabra2));
console.log(palindromo(palabra3));
console.log('');



// 3. Dado el siguiente array:
// let nombres = ['jorge', 'sofía', 'mónica', 'pedro', 'esteban', 'julieta']
// crear una función que permita agregar nuevos nombres solamente en caso de que no se encuentre en el array
console.log('*****EJERCICIO 3*****');

const nombres = ['jorge', 'sofía', 'mónica', 'pedro', 'esteban', 'julieta'];

const agregar = () => {
    let nuevo = prompt("Ingresar Nombre");
    if (!nombres.includes(nuevo)) {
        nombres.push(nuevo);
    }
    document.write(nombres);
    return nombres;
};

agregar('juanito');
console.log(nombres)
console.log('');



// 4. Dado el siguiente array de números, determinar en una misma función  moda (el valor que más se repite), media (el promedio) y mediana (valor central una vez ordenados los datos)
// let numeros = [5, 8, 6, 2, 10, 15, 20, 9, 5, 2, 4, 5, 8]
console.log('*****EJERCICIO 4*****');

const numeros = [5, 8, 6, 2, 10, 15, 20, 9, 5, 2, 4, 5, 8];

const m3 = () => {

};

console.log(m3(numeros));
console.log('');



// 5. Crear una función que determine si un número es primo
// esPrimo(3) -> true
// esPrimo(4) -> false
console.log('*****EJERCICIO 5*****');

const esPrimo = () => {
};

console.log(esPrimo(2));
console.log('');


// 6. Crear una función que permita invertir los elementos de un array (no se puede usar REVERSE)
console.log('*****EJERCICIO 6*****');

const elementos = ['juanito', 'pedro', 'camila', 'maría'];
const nuevosElementos = [];

const reverse = (texto) => {
    var indice = elementos.length - 1;

    for (let i = 0; i < elementos.length; i++) {
        indice = indice - 1;
        console.log(elementos[indice]);
        elementos.push(elementos[indice]);
    }

    // nuevosElementos.push(elementos[3]);
    // nuevosElementos.push(elementos[2]);
    // nuevosElementos.push(elementos[1]);
    // nuevosElementos.push(elementos[0]);

};

console.log(elementos)
console.log(reverse(elementos));
console.log('');


// 7. Crear una función que retorne el número más pequeño de un array
// 

console.log('*****EJERCICIO 7*****');
const numbers = [423, 543543, 7, 7, 5, 6, 8, 6654, 54543, 34];

const getMin = (numbers) => {
    var minimo = numbers.sort(function (a, b) {
        return a - b;
    });
    return minimo[0];

};

console.log(getMin(numbers));
console.log('');
