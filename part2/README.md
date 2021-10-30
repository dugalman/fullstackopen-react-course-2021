# part2

## Link
- see <https://fullstackopen.com/es/part2>
- [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets)
- [JSON Server : actua como nuestro servidor.](https://github.com/typicode/json-server)

## Abstracto

Continuemos nuestra introducción a React. Primero, veremos cómo representar una colección de datos, como una lista de nombres, en la pantalla. Después de esto, inspeccionaremos cómo un usuario puede enviar datos a una aplicación React utilizando formularios HTML. A continuación, nuestro enfoque se centra en ver cómo el código JavaScript en el navegador puede obtener y manejar los datos almacenados en un servidor backend remoto. Por último, echaremos un vistazo rápido a algunas formas sencillas de agregar estilos CSS a nuestras aplicaciones React.

a. Renderizando una colección, módulos
b. Formularios
c. Obteniendo datos del servidor
d. Alterando datos en el servidor
e. Agregar estilos a la aplicación React

2.1: Información del curso paso6
Terminemos el código para renderizar los contenidos del curso de los ejercicios 1.1 - 1.5. Puede comenzar con el código de las respuestas del modelo. Las respuestas modelo para la parte 1 se pueden encontrar yendo al sistema de presentación, haga clic en my submissions en el arriba, y en la fila correspondiente a la parte 1 debajo de la columna solutions haga clic en show. Para ver la solución al ejercicio de información del curso, haga clic en index.js debajo de kurssitiedot ("kurssitiedot" significa "información del curso").

Tenga en cuenta que si copia un proyecto de un lugar a otro, es posible que deba eliminar el directorio nodemodules e instalar las dependencias nuevamente con el comando _npm install antes de que pueda iniciar la aplicación. Por lo general, no se recomienda que copie todo el contenido de un proyecto y/o agregue el directorio node_modules al sistema de control de versiones.

Cambiemos el componente App así:
```js
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  return <Course course={course} />
}
```

Defina un componente responsable de formatear un solo curso llamado Course.

La estructura de componentes de la aplicación puede ser, por ejemplo, la siguiente:

```js
App
  Course
    Header
    Content
      Part
      Part
      ...
```

Por lo tanto, el componente Course contiene los componentes definidos en la parte anterior, que son responsables de representar el nombre del curso y sus partes.

La página renderizada puede, por ejemplo, tener el siguiente aspecto:

Todavía no necesitas la suma de los ejercicios.

La aplicación debe funcionar independientemente del número de partes que tenga un curso, así que asegúrese de que la aplicación funcione si agrega o quita partes de un curso.

¡Asegúrese de que la consola no muestre errores!

## 2.2: Información del curso paso 7
Muestra también la suma de los ejercicios del curso.


## 2.3*: Información del curso, paso8
Si aún no lo ha hecho, calcule la suma de ejercicios con el método de matriz reduce.

Consejo profesional: cuando su código tiene el siguiente aspecto:

```js 
const total = parts.reduce((s, p) => someMagicHere)
```

y no funciona, vale la pena usar console.log, que requiere que la función de flecha se escriba en su forma más larga:

```js
const total = parts.reduce((s, p) => {
  console.log('what is happening', s, p)
  return someMagicHere
})
```
