# API Client
El cliente de API está centralizado en `src/api/client.ts`. Todas las llamadas al backend se realizan desde este fichero usando `fetch`nativo con tipos de Typescript.

## Base URL 
```ts
const API_URL = 'http://localhost:3001/api/v1';
```

## Tipos utilizados

### Media
```ts
export interface Media {
    id?: number;
    title: string;
    type: string;
    review: string | null;
    rating: number;
    date_added?: string;
    user_id?: number;
}
```

## Funciones

### getMedia
```ts
getMedia(): Promise
```
Obtiene todos los medios del backend.

### createMedia
```ts
createMedia(media: Omit): Promise
```
Crea un nuevo medio y devuelve el objeto creado con su id y fecha.

### updateMedia
```ts
updateMedia(id: number, media: Omit): Promise
```
Actualiza un medio existente por su id.

### deleteMedia
```ts
deleteMedia(id: number): Promise
```
Elimina un medio por su id.

### registerUser
```ts
registerUser(username: string, email: string, password: string): Promise
```
Registra un nuevo usuario en el backend.

### loginUser
```ts
loginUser(username: string, password: string): Promise
```
Inicia sesión y guarda el token JWT en localStorage. Devuelve los datos del usuario.

## Estados de red
Todos los componentes que consumen la API gestionan tres estados:

| Estado | Descripción |
|--------|-------------|
| `loading` | Se muestra un indicador mientras se espera la respuesta |
| `data` | Se muestran los datos cuando la petición es exitosa |
| `error` | Se muestra un mensaje de error con opción de reintentar |

## Fuente de verdad
Los datos que viven en el backend (medios, usuarios) se obtienen siempre desde la API. El único dato que se persiste en localStorage es el token JWT y los datos del usuario autenticado, necesarios para mantener la 
sesión entre recargas.