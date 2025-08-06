# Comandos del proyecto

Comandos empleados para la creación y gestión del proyecto

## Creacion

Crear proyecto de React:

     npm create vite@latest React-Landing

Descargar Tailwind 3:

    npm i -D tailwindcss@3 postcss autoprefixer

Descargar GitHub pages:

    npm i -D gh-pages

Descargar enrutador:

    npm i react-router-dom

Descargar formulario de React:

    npm  i react-hook-form

## Estructura de carpetas

Aqui se describe como se  estructura normalmente un proyecto de React:

    📁nombre-del-proyecto
     ├📁public
     ├📁src
     | ├📁Components
     | ├📁Contexts
     | ├📄App.jsx
     | ├📄index.css
     | └📄main.jsx
     ├📄.gitignore
     ├📁node_modules
     ├📄eslint.config.js
     ├📄index.html
     ├📄package.json
     ├📄postcss.config.js
     ├📄README.md
     ├📄tailwind.config.js
     └📄vite.config.js

## Configuración de entorno

Tailwind:

    npx tailwindcss init -p

## Contenido de archivos importantes 
`vite.config.js`:

     import { defineConfig } from 'vite'
     import react from '@vitejs/plugin-react'

     // https://vite.dev/config/
     export default defineConfig({
       plugins: [react()],
       base:"/React-Landing/"
     })


`tailwind.config.js`:

    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}"
      ],
      theme: {
        extend: {
          screens:{
              md:'780px'
          },
          animation:{
            downgrade:"downgrade 1s ease-in-out",
            upgrade:"downgrade 1s ease-in-out reverse"
          },
          keyframes:{
            downgrade:{
              from:{
                opacity:1,
                transform: "scale(1)"
              },
              to:{
                opacity:0,
                transform: "scale(2)"
              }
            }
    
          }
        },
      },
      plugins: [],
    }

`index.css`:

    /* para resetear los estilos  */
    @tailwind base;
    /*  para utilizar los componentes */
    @tailwind components;
    /* para utilizar las clases de tailwind  */
    @tailwind utilities;


`package.json > scripts`:

     "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy":"npm run build",
    "deploy":"gh-pages -d dist"
  },

 ## Subir proyecto a GitHub

 Crear repositorio local :

    git init


Configurar repositorio :

   git config user.name "Tu-nombre"
   git config user.email "correo de tu cuenta de GitHub"
   git remote add origin https://github.com/enlace-a-tu-repositorio-remoto-git


Guardar cambios:

   git add . 
   git commit -m "Que cambio hiciste"
   git push -u origin master


Guardar cambios despues de `git push -u origin master`

   git add . 
   git commit -m "Que cambio hiciste"
   git push 


## Viajar entre ramas

Crear nueva rama:

   git checkout -b nombre-de-la-nueva-rama

Ir a una rama:

   git checkout  nombre-de-la-nueva-rama

Listar commits realizados :

   git log --online

Volver a un commit, donde el codigo `hash` del commit es `abc123`:

    git checkout abc123


Volver al commit principal (normalmente `master` o `main`):

    git checkout nombre-de-la-rama


Traer cambios realizados por otra persona en el repositorio remoto:

   git pull origin nombre-de-la-rama-actualizar


Combinar cambios de una rama a otra:

    #Traer cambios de la rama `master` a la rama `pablo`

    git checkout pablo
    git merge master

    #Traer cambios de la rama `pablo` a la rama `master`

    git checkout master
    git merge pablo


Dejar mensaje de fusión:

    git merge rama -m "Mensaje para cuando se fusionan ramas"

## Inspiracion🌈

<img src="public/imagenes/sanandres2.webp" alt="Inspiracion" width="400">

Más informacion en:

[Buscar Google](https://chatgpt.com)





 
