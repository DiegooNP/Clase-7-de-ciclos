// Tabla de multiplicar
// Instrucciones
// En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).

// Tabla de multiplicar
// Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde se pueda
// visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes usar algunos de los
// ciclos o bucles aprendidos: for - while o do while,
// Para ayudar al equipo de desarrollo, tu responsabilidad será:
// 1. Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad de
// generar de manera automática la tabla de multiplicar del 1 al 10.
// 2. Lo ideal es que función muestre al usuario algo así:

function tablaDeMultiplicar2 (){

    let tablas = [1,2,3,4,5,6,7,8,9,10] 
    
    tablas.forEach(element => {
        
        console.log("tabla de multiplicar del " , element)
        console.log("----------------------------" + " ")

        for (let index = 1 ; index <= 10; index++){
            
            console.log(element, " * ", index, " = ", (element * index) + " ")
    
        }
        console.log("----------------------------")
    })
}

 tablaDeMultiplicar2()