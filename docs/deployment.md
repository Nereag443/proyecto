# Dployment

## Vercel
En Vercel se ha desplegado el frontend.  

URL: `https://diary-project-eight.vercel.app/mySpace`  

### PRoceso
 1. Conectar el repositorio de Github a Vercel
 2. Configurar el Root Directory como `diary-project-frontend`
 3. Preset: `Vite`
 4. Vercel detecta el comando build `npm run build`

Para que React Router funcione se uñadió un archivo `vercel.json` en la raíz del frontend.

## Render
En Render se ha desplegado el backend.  

URL: `https://diary-project-5g4b.onrender.com`  

### Proceso 
 1. Crear un nuevo servicio -> Web Service
 2. Conectar el repositorio de Github
 3. Configurar el Root Directory como `diary-project/backend`
 4. Build command: `npm install && npm run build`
 5. Start command: `node dist/index.js`

 ### Problemas encontrados
 - **sqlite3 incompatible con Linux de Render** — se migró a `better-sqlite3`
 - **Carpeta `data/` no existía en Render** — se añadió creación automática de la carpeta en `db.ts`
 - **FOREIGN KEY constraint** — se eliminó la restricción de clave foránea de la tabla `media`

## Variables de entorno 
La URL de la API se configura directamente en `src/api/client.ts`

