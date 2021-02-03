// 6.	Realizar un programa que lea N números, calcule y escriba la suma de los pares 
// y el producto de los impares.
let numero = [], pares = [], impares = [];
let suma = 0;
let producto = 1;
parar:
do{
    let n = parseInt(prompt("Ingrese un numero"));
    numero.push(n);
    let opc = parseInt(prompt("Deseas ingresar otro numero.\n 1. Si. \n 2. No"));
    switch (opc) {
        case 1:
            continue parar;
        case 2:
            console.log(`Cantidada de numeros ingresados ${numero.length}`);
            console.log(`Numeros ${numero}`);
            for(data of numero){
                if(data%2==0){
                    suma = suma + data;
                    pares.push(data);
                }else{
                    producto = producto * data;
                    impares.push(data);
                }
            }
            console.log(`Suma de los pares: ${suma} lista`,pares);
            console.log(`Producto de los impares: ${producto    } lista`,impares);
            break parar;
        default:
            alert("Que gracioso");
            break;
    }
}while(true)
