parar:
do{
    var num1 = parseInt(prompt('Ingrese un numero: '));
    var num2 = parseInt(prompt('Ingrese otro numero: '));
    if(num1 !== num2){
        console.log(comparacion(num1, num2));
        break parar;
    }
} while (true)

function comparacion(num1, num2){
    if(num1 > num2){
        return `${num1} es mayor que ${num2}`;
    } else {
        return `${num2} es mayir que ${num1}`;
    }
}