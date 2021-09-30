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