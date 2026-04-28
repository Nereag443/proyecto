# Diary Project Server
Este proyecto usa una API REST desarrollada con Node.js, Express y SQLite que gestiona el registro de medios consumidos por el usuario (libros, películas, series, etc.).


## Arquitectura
La estructura del proyecto sigue una organización modular para separar responsabilidades.

Este sigue el siguiente flujo: 
Request -> Route -> Controller -> Service -> Response

```bash
/backend
│ 
├──data
|    └── database.db
|
├── src 
│    │ 
│    ├── config/
│    │   └── db.ts 
│    │   └── env.ts
│    │ 
│    ├── controllers/
│    │    └── media.controller.ts 
│    │    └── users.controller.ts
│    │ 
│    ├── routes/
│    │   └── media.routes.ts 
│    │   └── users.routes.ts
│    │ 
│    ├── services/
│    │    └── media.service.ts
|    |    └── users.service.ts
│    │  
│    └── index.ts 
│ 
├── .env 
├── .gitignore 
├── package.json 
├── package-lock.json
└── tsconfig.json
```

## Descripción de carpetas

**data**  
Contiene la base de datos SQLite

**config**  
Configuración global del servidor.
`db.ts`: canfiguración de la base de datos
`env.ts`: carga las variables de entorno mediante `dotenv`

**controllers**  
Los controladores gestionan las peticiones HTTP.
Responsabilidades:
 - Recibir solicitudes de clientes
 - Validar datos de entrada
 - Invocar la lógica del servicio
 - Enviar respuestas HTTP adecuadas

**services**  
Contiene la lógica de negocio de la aplicación y el acceso a la base de datos
Responsabilidades: 
 - Manipular datos
 - Gestionar medios
 - Lanzar errores cuando ocurre un problema de dominio

**routes**  
Define los endpoints de la API y conecta cada ruta con su controlador correspondiente.

**index.ts**  
Es el punto de entrada del servidor, configura Express y registra las rutas


## Instalación

 1. Instalar dependencias:
```bash
cd diary-project/backend
npm install
```
 2. Ejecutar el servidor
```bash
npm run dev
```

## Endpoints principales

### Base URL
http://localhost:3001/api/v1

### Medios

Crear un medio:  

POST /api/v1/media

```json
{
    "title": "El gran Gatsby",
    "type": "Libro",
    "rating": 5,
    "review": null,
    "user_id": 1,
}
```

Respuesta:

```json
{
    "id": 1,
    "title": "El gran Gatsby",
    "type": "Libro",
    "rating": 5,
    "review": null,
    "user_id": 1,
    "date_added": "2026-04-28T09:01:35.616Z"
}
```

Obtener todos los medios:

GET /api/v1/media  

Respuesta:

```json
[
    {
        "id": 1,
        "title": "El gran Gatsby",
        "type": "Libro",
        "rating": 5,
        "review": null,
        "user_id": 1,
        "date_added": "2026-04-28T09:01:35.616Z"
    }
]
```

Editar un medio:  

PUT /api/v1/media/:id  

```json
{
    "title": "El gran Gatsby",
    "type": "Libro",
    "rating": 4
}
```

Respuesta:

```json
{
    "id": 1,
    "title": "El gran Gatsby",
    "type": "Libro",
    "rating": 4,
    "review": null,
    "user_id": 1,
    "date_added": "2026-04-28T09:01:35.616Z"
}
```

Eliminar un medio:  

DELETE /api/v1/media/:id  

Respuesta: 204 No Content

## Manejo de errores
La API implementa un middleware global de errores que normaliza las respuestas HTTP.

🔴 400 - Bad Request -> Error de validación o datos incorrectos

Ejemplo: Crear un medio sin título

Respuesta:

```json
{
    "error": "Title is required"
}
```

🔴 404 - Not Found -> Recurso inexistente

Ejemplo: Editar o eliminar un medio que no existe

Respuesta:
```json
{
    "error": "Media not found"
}
```


🔴 500 - Internal Server Error -> Error inesperado del servidor

Ejemplo: Error interno del servidor

Respuesta:
```json
{
    "error": "Internal Server Error"
}
```

## Testing con Postman
Se ha utilizado Postman para comprobar todos los endpoints de la API durante el desarrollo.

Se han probado los endpoints con:

 - Crear un medio con todos los campos correctos → `201 Created`
 - Crear un medio sin título → `400 Bad Request`
 - Crear un medio sin tipo → `400 Bad Request`
 - Editar un medio existente → `200 OK`
 - Editar un medio que no existe → `404 Not Found`
 - Eliminar un medio existente → `204 No Content`
 - Eliminar un medio que no existe → `404 Not Found`
 - Registrar un usuario nuevo → `201 Created`
 - Iniciar sesión con credenciales correctas → `200 OK`
 - Iniciar sesión con credenciales incorrectas → `500 Internal Server Error`

## Middleware global de errores

```ts
app.use ((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    if (err.message === 'NOT_FOUND') {
        return res.status(404).json({ error: 'Not Found' });
    }
    res.status(500).json({ error: 'Internal Server Error' });
});
```