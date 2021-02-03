let numero = [];

parar:
do{
    let n = parseInt(prompt('Ingrese numero:'));
    numero.push(n);
    let opc = parseInt(prompt('Desea ingrear otro numero \n 1. si \n no'));
    switch (opc) {
        case 1:
            continue parar;
            break;
        case 2:
            console.log(`Cantidad de numeros ingresados ${numero.length}`);
            console.log(`${numero}`);
            break parar
        default:
            alert('Dato erroneo')
            break;
    }

} while(true)
