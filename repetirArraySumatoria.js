function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria += mes;
    }
    return sumatoria  
}
console.log(gananciaTotal( [] ));
console.log(gananciaTotal( [100] ));
console.log(gananciaTotal( [100, 2] ));
console.log(gananciaTotal( [2, 10, -20] ));
console.log(gananciaTotal( [2, 10, -20, 0, 0, 10, 10] ));



/* gananciaTotal([])
gananciaTotal([100])
gananciaTotal([100, 2])
gananciaTotal([2, 10, -20])
gananciaTotal([2, 10, -20, 0, 0, 10, 10]) */