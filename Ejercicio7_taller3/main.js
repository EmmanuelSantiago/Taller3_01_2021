//7.	Dados dos números enteros positivos N y D, se dice que D es un divisor de N si el resto de dividir N entre D es 0.
// Se dice que un número N es perfecto si la suma de sus divisores (excluido el propio N) es N.
// Por ejemplo 28 es perfecto, pues sus divisores (excluido elv28) son: 1, 2, 4, 7 y 14 y su suma es 1+2+4+7+14=28.
// Hacer un organigrama que dado un número N nos diga si es o no perfecto.

let n = parseInt(prompt('Ingrese un numero entero positivo: '));
let d = parseInt(prompt('Ingrese otro numero entero positivo: '));
let suma = 0;

if ( n%d == 0){
    for (let divisores = 1; divisores < n; divisores++){
        if (n%divisores == 0){
            suma = suma + divisores;
            console.log(`Divisor: ${divisores}`);
        }
    }
    if (suma == n){
        console.log(`La suma de sus divisores menos el mismo da ${suma} y es un numero perfecto`)
    } else{
        console.log(`La suma de sus divisores menos el mismo da ${suma} y el numero ${n} no es perfecto`)
    }
    
}else {
    console.log(`Los numeros ${n} y ${d} no cumplen la condicion de numero perfecto, su residuo es ${n%d}`)
}

