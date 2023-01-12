
function gananciaTotal(total) {
    let sumatoria = 0;
    for (let i = 0; i < total.length; i++) {
        let mes = total[i];
        sumatoria += mes;
    }
    return sumatoria  
}
console.log(gananciaTotal( [2, 3] ));
console.log(gananciaTotal( [2, 3, 1, 8, 8, -1] ));
console.log(gananciaTotal( [] ));



// for(var i = 0; i <= numeros.length; i++){
//     numero = numeros[i];
//     suma += numero;
// }
//PARTE 4
// function gananciaTotal(unPeriodo) {
//     let sumatoria = 0;
//     for (let i = 0; i < unPeriodo.length; i++) {
//         let mes = unPeriodo[i];
//         sumatoria = sumatoria + mes;
//     }
//     return sumatoria;
// }

