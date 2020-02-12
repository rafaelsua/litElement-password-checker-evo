# Password Checker - Lit Element

La finalidad de este ejercicio es la de migrar un Web Component (vanilla), que implementa Lit HTML como librería de render, en un componente Lit Element. 

Además, extenderemos la funcionalidad del mismo y aplicaremos algunas técnicas que permitirán parametrizar su configuración, así como la UI resultante.

Recuerda aplicar todo lo que has aprendido sobre Lit HTML!

## Elementos

### src/app.js

Fichero principal, que define un componente de primer nivel (next-app, invocado en index.html), que nos servira para poder interactuar con los distintos casos de uso/configuración de nuestro componente (password-checker).

### src/lit-html-web-component.js

Fichero que contiene el resultado final del componente (vanilla + Lit HTML) - para ser usado como referencia.

### src/password-checker.js

Scaffold de la estructura de componente Lit Element.

## TAREAS!

- Migrar el Web Component "a lá" Lit Element.

- Usando slots donde veas conveniente, permitir la personalización del contenido/UI en base a los distintos niveles de seguridad (empty, strong, weak) - en caso de no indicar, mostrar contenido por defecto.

- Parametrización del pattern de validación.

- Emisión de un evento tras realizar una validación de password correcta.

- Incluir un input (de tipo password), conectado con nuestro componente, que muestre en tiempo real el nivel de seguridad de la contraseña que se está introduciendo.  

- Invocar al componente, mostrando las diferentes posibilidades de configuración definidas previamente.
