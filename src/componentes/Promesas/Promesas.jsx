import React from 'react'

//Programación sincronica y asincronica: 

//La programacion sincronica ejecuta una tarea a la vez, en orden secuencial. Cada proceso es bloqueante del siguiente. 

//La programcion asincronica ejecuta varias tareas al mismo tiempo, en orden no secuencial.

//Para practicar podemos usar setTimeout. Recuerden que recibe dos parámetros: una función y un tiempo en milisegundos. 
//Me permite simular el retraso de una peticion a un servidor. 

//Promesas: Un objeto que representa un evento futuro.
//En general este evento futuro es el resultado de alguna petición asíncrona. 

//Las promesas tienen 3 estados: pendiente, cumplida o rechazada. 


const Promesas = () => {

    //Programacion sincronica:

    console.log("Tarea 1");
    console.log("Tarea 2");

    //Programacion asincronica: 

    setTimeout(() => {
        console.log("Tarea A");
    }, 3000);


    setTimeout(() => {
        console.log("Tarea B")
    }, 1500);


    //Promesas: 

    const falsasPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if (estado) {
                resolve("Promesa cumplida, me llego la bici!");
            } else {
                reject("Promesa rechazada, me llego carbon");
            }
        })
    }

    console.log(falsasPromesas(true));

    //THEN y CATCH: 
    //Podemos concatenar dos métodos que me permiten ejecutar una función cuando la promesa se cumple o se rechaza.
    //THEN se ejecuta cuando la promesa se cumple. 
    //CATCH se ejecuta cuando la promesa se rechaza. 
    //FINALLY se ejecuta siempre. 

    falsasPromesas(false)
        .then((respuesta) => {
            console.log("Si si se cumplio!!" + respuesta);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => console.log("Proceso terminado"))





    return (
        <div>Promesas</div>
    )
}

export default Promesas