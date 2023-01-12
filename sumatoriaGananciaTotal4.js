function gananciaTotal4(unPeriodo) {
    let sumatoria = 0;
    
    sumatoria = sumatoria + unPeriodo[0];
    sumatoria = sumatoria + unPeriodo[1];
    sumatoria = sumatoria + unPeriodo[2];
    sumatoria = sumatoria + unPeriodo[3];


    return sumatoria;
}

console.log(gananciaTotal4 ([2, 3, 4, 5]));
console.log(gananciaTotal4 ([2, 3, 4, 0]));
console.log(gananciaTotal4 ([2, 6, 4, 1]));
console.log(gananciaTotal4 ([2, 6, 4, 7]));



