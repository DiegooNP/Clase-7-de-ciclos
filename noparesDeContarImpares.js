function noParesDeContarImparesHasta(numerox) {
    let contar =0;
    
    for (let index = 0; index <= numerox; index++) {
        
        if ((index%2) !== 0) {
            contar = contar +1;
        }
    }
    return contar;
}
console.log(noParesDeContarImparesHasta(10));