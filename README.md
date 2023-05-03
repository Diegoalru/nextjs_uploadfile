# Código de carga de archivos en React y Next.js
Este es un ejemplo de código en React y Next.js que permite cargar archivos y obtener detalles sobre el archivo seleccionado, como el nombre, el tipo y el tamaño. También incluye una vista previa de la imagen seleccionada.

## Uso
Para utilizar este código, simplemente clona el repositorio y ejecuta `npm install` para instalar las dependencias. Luego, ejecuta `npm run dev` para iniciar el servidor de desarrollo.

## Estructura del código
El código se divide en dos funciones principales:

- **handleFileUpload**: esta función se ejecuta cuando se selecciona un archivo para cargar. Actualiza el estado del archivo seleccionado utilizando useState.

- **handleSubmit**: esta función se ejecuta cuando se envía el formulario de carga de archivos. Crea un objeto FormData y lo envía a través de una solicitud POST utilizando fetch. También muestra los detalles del archivo seleccionado y una vista previa de la imagen.

## Tecnologías utilizadas
Este código utiliza las siguientes tecnologías:

* Next.js
* TypeScript
* Tailwind CSS

## Agredecimientos
Este codigo se basa en el siguiente tutorial: [fazt/nextjs-uploadfile](https://github.com/fazt/nextjs-uploadfile)