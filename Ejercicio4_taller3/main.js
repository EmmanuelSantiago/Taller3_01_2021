let a = parseInt(prompt('Ingrese el primer numero:'));
let b = parseInt(prompt('Ingrese el segundo numero:'));
let c = parseInt(prompt('Ingrese el tercer numero:'));

if ( a > b && a > c){
    console.log(`El numero ${a} es el mayor`);
} else if(b > a && b > c){
    console.log(`El numero ${b} es el mayor`);
} else {
    console.log(`El numero ${c} es el mayor`);
}

if ( a < b && a < c){
    console.log(`El numero ${a} es el menor`);
} else if(b < a && b < c){
    console.log(`El numero ${b} es el menor`);
} else {
    console.log(`El numero ${c} es el menor`);
}