# part1

## 1.1: información del curso, paso 1
La aplicación en la que comenzaremos a trabajar en este ejercicio se desarrollará más a fondo en algunos de los siguientes ejercicios. En este y otros conjuntos de ejercicios futuros de este curso, es suficiente enviar solo el estado final de la aplicación. Si lo desea, también puede crear un commit para cada ejercicio de la serie, pero esto es completamente opcional.

Use __npx create-react-app__ para inicializar una nueva aplicación. Modifique index.js para que coincida con lo siguiente
y elimine archivos adicionales (App.js, App.css, App.test.js, logo.svg, setupTests.js, reportWebVitals.js).

Desafortunadamente, toda la aplicación está en el mismo componente. Refactorice el código para que conste de tres componentes nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. Header se encarga de representar el nombre del curso, Content representa las partes y su número de ejercicios y Total representa el número total de ejercicios.

El cuerpo del componente App será aproximadamente como sigue:
```js
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

## 1.2: información del curso, paso 2
Refactorice el componente Content para que no represente ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte.

```js
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

Nuestra aplicación pasa información de una manera bastante primitiva en este momento, ya que se basa en variables individuales. Esta situación mejorará pronto.

## 1.3: información del curso, paso 3
Avancemos para usar objetos en nuestra aplicación. Modifique las definiciones de las variables del componente App de la siguiente manera y también refactorice la aplicación para que siga funcionando:

```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {name: 'Fundamentals of React',exercises: 10}
  const part2 = {name: 'Using props to pass data',exercises: 7}
  const part3 = {name: 'State of a component',exercises: 14}

  return (
    <div>
      ...
    </div>
  )
}
```

## 1.4: información del curso paso 4
Y luego coloque los objetos en un array. Modifique las definiciones de variables de App de la siguiente forma y modifique las otras partes de la aplicación en consecuencia:

```js
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React',exercises: 10},
    {name: 'Using props to pass data',exercises: 7},
    {name: 'State of a component',exercises: 14}
  ]

  return (
    <div>
      ...
    </div>
  )
}
```

## 1.5: información del curso paso 5
Llevemos los cambios un paso más allá. Cambie el curso y sus partes en un solo objeto JavaScript. Arregle todo lo que se rompa.

```js
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React',exercises: 10},
      {name: 'Using props to pass data',exercises: 7},
      {name: 'State of a component',exercises: 14}
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}
```

## 1.6: unicafe, paso 1
Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. Su tarea es implementar una aplicación web para recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).

La aplicación debe mostrar el número total de comentarios recopilados para cada categoría. Su aplicación final podría verse así:

Tenga en cuenta que su aplicación debe funcionar solo durante una única sesión del navegador. Una vez que actualice la página, los comentarios recopilados pueden desaparecer.

Puede implementar la aplicación en un solo archivo index.js. Puede utilizar el siguiente código como punto de partida para su aplicación.

```js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
```

## 1.7: unicafe, paso 2
Amplíe su aplicación para que muestre más estadísticas sobre los comentarios recopilados: el número total de comentarios recopilados, la puntuación promedio (buena: 1, neutral: 0, mala: -1) y el porcentaje de comentarios positivos.


## 1.8: unicafe, paso 3
Refactorice su aplicación para que la visualización de las estadísticas se extraiga en su propio componente Statistics. El estado de la aplicación debe permanecer en el componente raíz App.

Recuerde que los componentes no deben definirse dentro de otros componentes

## 1.9: unicafe paso4
Cambie su aplicación para mostrar estadísticas solo una vez que se hayan recopilado los comentarios.

## 1.10: unicafe pas05
Continuemos refactorizando la aplicación. Extraiga los dos componentes siguientes:

- Button para definir los botones utilizados para enviar comentarios
- Statistics para mostrar una única estadística, por ejemplo, la puntuación media.
- 
Para ser claros: el componente "Statistics" siempre muestra una única estadística, lo que significa que la aplicación utiliza varios componentes para representar todas las estadísticas:

```js
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <Statistic text="good" value ={...} />
      <Statistic text="neutral" value ={...} />
      <Statistic text="bad" value ={...} />
      // ...
    </div>
  )
}
```
El estado de la aplicación aún debe mantenerse en el componente raíz App.

## 1.11*: unicafe, paso 6
Muestra las estadísticas en una tabla HTML, de modo que su la aplicación se ve más o menos así:

Recuerde mantener la consola abierta en todo momento. Si ve esta advertencia en su consola:

Luego realice las acciones necesarias para que la advertencia desaparezca. Intente buscar en Google el mensaje de error si se queda atascado.

Una fuente típica de un error **Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.** es la extensión de Chrome. Intente ir a **chrome://extensions/** e intente deshabilitarlos uno por uno y actualizar la página de la aplicación React; el error debería desaparecer eventualmente.

¡Asegúrate de que a partir de ahora no veas ninguna advertencia en tu consola!

## 1.12*: anécdotes, paso 1
El mundo de la ingeniería de software está lleno con anécdotas que destilan verdades atemporales de nuestro campo en breves frases.

Expanda la siguiente aplicación agregando un botón en el que se puede hacer clic para mostrar una anécdota aleatoria del campo de la ingeniería de software:

```js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  return (<div>{props.anecdotes[selected]}</div>  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
```

Google te dirá cómo generar números aleatorios en JavaScript. Recuerde que puede probar la generación de números aleatorios, por ejemplo, directamente en la consola de su navegador.

Su aplicación finalizada podría verse así