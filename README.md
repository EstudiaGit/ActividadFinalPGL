# Nombre de la Aplicación

**"Mi PlayList Personal"**

## Descripción

Esta aplicación web permite a los usuarios crear y mantener listas personalizadas de canciones. Ofrece una interfaz simple y amigable para agregar nuevas canciones a la lista, así como para visualizar las canciones existentes.

## Funcionalidades

- **Landing Page:** Página principal que muestra el título de la aplicación y una breve descripción de sus funcionalidades.
<img src="https://github.com/EstudiaGit/ActividadFinalPGL/assets/93317704/1ddd8138-3c2a-4b1f-9e36-aab4acfba539" alt="captura landing" width="200">

  ---
  

- **Página de Inicio:** Muestra la lista de canciones almacenadas en la base
 de datos (Firestore) hasta el momento. Incluye un menú desplegable con opciones, como agregar una nueva canción a la lista actual.
<img src="https://github.com/EstudiaGit/ActividadFinalPGL/assets/93317704/377430a0-5002-40c6-9917-60fc2ae72da3" alt="captura inicio" width="200">
<br>
<img src="https://github.com/EstudiaGit/ActividadFinalPGL/assets/93317704/7b41ed85-af6a-47fc-9514-f09b251e1925" alt="menu desplegable" width="200">

---  

- **Página de Añadir:** Página que contiene un formulario para agregar los datos principales de una nueva canción. Una vez completado, al presionar "Añadir canción", la canción se carga en la base de datos.


<img src="https://github.com/EstudiaGit/ActividadFinalPGL/assets/93317704/c226d215-cd50-4cd1-a170-00a20897cb94" alt="formulario añadir" width="200">  

---  

- **Página detalle canción:** Página que muestra los detalles de la cancion al seleccionarla en la pagina de 'Inicio' donde esta la lista de las cacniones.

<img src="https://github.com/EstudiaGit/ActividadFinalPGL/assets/93317704/6b47817f-5b96-46da-8aee-3fca8969062b" alt="formulario añadir" width="200">

---  

## Tecnologías Utilizadas

- Ionic: Para el desarrollo de la interfaz de usuario y funcionalidades móviles.
- Angular: Para la estructura y el flujo de la aplicación.
- Firebase y Firestore: Para la base de datos y el almacenamiento de las canciones.
- HTML, CSS, y SCSS.

## Ejecutar la Aplicación Localmente

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/EstudiaGit/ActividadFinalPGL.git

2. **Instalar Dependencias:**
   ```bash
   npm install

3. **Iniciar la Aplicación:**
   ```bash
   ionic serve

