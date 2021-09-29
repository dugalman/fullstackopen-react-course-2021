# Part0

## 0.1: HTML
Revise los conceptos básicos de HTML leyendo este tutorial de Mozilla: [tutorial HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics).

## 0.2: CSS
Revise los conceptos básicos de CSS leyendo este tutorial de Mozilla: [tutorial CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics).

## 0.3: Formularios HTML
Aprende sobre los conceptos básicos de los formularios HTML leyendo el tutorial de Mozilla [Tu primer formulario](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form).

## 0.4: nueva nota
En el capítulo Cargando una página que contiene JavaScript - revisada la cadena de eventos causada al abrir la página https://studies.cs.helsinki.fi/exampleapp/notes se representa como un diagrama de secuencia.

```plantuml
@startuml
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->browser: HTML-code
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->browser: main.css
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->browser: main.js

    note over browser:
    browser starts executing js-code
    that requests JSON data from server 
    end note

    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

    note over browser:
    browser executes the event handler
    that renders notes to display
    end note
@enduml
```

Crear un diagrama similar que describa la situación en la que el usuario crea una nueva nota en la página https://studies.cs.helsinki.fi/exampleapp/notes escribiendo algo en el campo de texto y haciendo clic en el botón submit.

Si es necesario, muestre las operaciones en el navegador o en el servidor como comentarios en el diagrama.

El diagrama no tiene por qué ser un diagrama de secuencia. Cualquier forma sensata de presentar los eventos está bien.

Toda la información necesaria para hacer esto, y los dos ejercicios siguientes, se pueden encontrar en el texto de esta parte. La idea de estos ejercicios es leer el texto una vez más y pensar en lo que está sucediendo allí. No es necesario leer el código de la aplicación pero, por supuesto, es posible.

## 0.5: Aplicación de una sola página
Cree un diagrama que describa la situación en la que el usuario accede a la versión de aplicación de una sola página de la aplicación de notas en https://studies.cs.helsinki.fi/exampleapp/spa.

## 0.6: Nueva nota
Cree un diagrama que represente la situación en la que el usuario crea una nueva nota utilizando la versión de una sola página de la aplicación.

Este fue el último ejercicio, y es hora de enviar sus respuestas a GitHub y marcar los ejercicios como hechos en la solicitud de envío.

