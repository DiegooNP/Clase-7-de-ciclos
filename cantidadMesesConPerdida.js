function cantidadDeMesesConPerdida(unPeriodo) {

    cantidad = 0;
  
      for (let i = 0; i < unPeriodo.length;i++) {
        if (unPeriodo[i] < 0) {
            cantidad ++
              }
        }
        return cantidad;
    }