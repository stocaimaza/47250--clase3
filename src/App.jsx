import React from 'react';
import Articulos from './componentes/Articulos/Articulos';
import Contador from './componentes/Contador/Contador';
import Categorias from './componentes/Categorias/Categorias';
import Promesas from './componentes/Promesas/Promesas';
import Map from './componentes/Map/Map';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


/*

COMPONENTES 2: 

Recordemos... ¿Qué es un componente? 
Conjunto de elementos que cumplen una misma función en la interfaz del usuario. 

Tienen 3 caracteristicas: 

1) Van a renderizar un unico elemento. 
2) Pueden pasar props. 

Las props son objetos, con informacion que le pasan los componentes padres a los componentes hijitos.
Importante aclarar que el flujo de informacion es UNIDIRECCIONAL, solamen los padres le pueden pasar info a los hijitos. 

¿Que tipo de datos podemos pasar?

- Datos primitivos (string, number, boolean, null).
- Objetos y arreglos (arrays).
- Funciones

y se suman ahora los CHILDREN. 

Los children es una forma de pasar otros componentes o elementos como props. 

CICLO DE VIDA DE LOS COMPONENTES: es una serie de estados por los cuales pasa todo componente a lo largo de su existencia. 

- Montaje (Ingresa el componente al DOM).
- Actualización (Actualizo el valor del contador).
- Desmontaje (Cuando desaparece el contador y me voy al carrito)



*/

const App = () => {
  return (
    <>

      <ItemListContainer/>

      {/* <Contador/>
      <Categorias/>
      <Promesas/>
      <br /><br /><br />
      <Map/> */}

      {/* <Articulos img="https://placekitten.com/200/287" titulo="Alimentos para gatitos" />

      <Articulos img="https://placekitten.com/200/140" titulo="Vacunas para gatitos" />

      <Articulos img="https://placekitten.com/200/286" titulo="Gatitos en el frio">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti accusantium rerum amet laboriosam exercitationem veniam deserunt voluptatem. Nostrum mollitia veritatis quos rerum voluptate fugit earum enim animi adipisci nihil.</p>
        <strong>Tiempo de lectura: 3 minutos </strong>

      </Articulos> */}
    </>
  )
}

export default App