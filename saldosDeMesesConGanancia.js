function saldosDeMesesConGanancia(unPeriodo) {
    
    //cantidad = cantidad [i];
    cantidad = 0;
    //miArray = [];

        for (let i = 0; i < unPeriodo.length ; i++) {
                if (unPeriodo[i] > 0) {
                    cantidad ++
                    //miArray.split(unPeriodo[i])
            }
            return cantidad;
        }
         
       }

    console.log(saldosDeMesesConGanancia([0, 3, -1, 5])); 
    console.log(saldosDeMesesConGanancia());
    console.log(saldosDeMesesConGanancia([10, -10, 2, 100])); 
