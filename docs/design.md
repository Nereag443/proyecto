## Arquitectura de la aplicación

### Diseño de wireframe

 - https://excalidraw.com/#json=yQLVL0Cx32IGr9RII-B-6,rVoG0SFn34JSFIvIoeefFQ

### Componentes principales

 - Auth (login / registro)
 - Dashboard
 - MediaList (lista de medios)
 - MediaForm (editar o crear medios)
 - Stats (estadísticas)

---

### Componentes reautilizables

- Botones
- Inputs
- Modales
- Navbar
- Select
- Media Cards
- RatingStars
- Loader
- Alert / Toast

---

### Gestión del estado de la aplicación

 - Estado local (useState):
 - Estado compartido (Context API)
 - Estado del servidor

---

### Diseño de backend

Base URL: /api/v1

#### Base de datos

La base de datos constará de dos tablas:

users:
 - id
 - fullname
 - username
 - email
 - password

media:
 - id
 - title
 - type (book | videogame | movie | show | music)
 - rating
 - review
 - date_added
 - user_id

#### Rescursos REST: 

 - /api/v1/media
 - /api/v1/users
 - /api/v1/auth

#### Verbos HTTP y contratos:

Usuario:
 - POST /api/v1/auth/register
 ```json
{
  "fullname": "",
  "username": "",
  "email": "",
  "password": ""
}
```
 - POST /api/v1/auth/login
 ```json
 {
  "email": "",
  "password": ""
}

Respuesta:
{
  "token": "",
  "user": {
    "id": "",
    "username": ""
  }
}
```
 - PATCH /api/v1/users/:id
```json
{
    "username": "newUsername"
}

Respuesta:
{
    "id": "",
    "fullname": "",
    "username": "",
    "email": ""
}
```

De medios:
 - GET /api/v1/media
 ```json
 [
  {
    "id": "",
    "title": "",
    "type": "",
    "rating": 0,
    "review": ""
  }
]
```
 - GET /api/v1/media/:id
 ```json
{
    "id": "",
    "title": "",
    "type": "",
    "rating": 0,
    "review": ""
}
```
 - POST /api/v1/media

 ```json
{
    "title": "",
    "type": "",
    "rating": 0,
    "review": ""
}

Respuesta:

{
    "id": "",
    "title": "",
    "type": "",
    "rating": 0,
    "review": ""
}
```

 - PUT /api/v1/media/:id
 ```json
 {
  "title": "",
  "type": "",
  "rating": 0,
  "review": ""
}
```
 - DELETE /api/v1/media/:id
```json
{
    "message":"Media deleted succesfully"
}
```



### Datos persistidos
#### En el servidor

Se guardaran los datos de:
 - Usuarios
 - Registros de medios
 - Autentificación

#### En el cliente

 - Estados de ui (modales, temas, avatares)

 ---

### Diagrama de flujo de datos

Frontend  
  &darr;
Client API  
  &darr;
API REST  
  &darr;
Backend   
  &darr;
Base de datos  
  &darr;
Respuesta
  &darr;
Actualización  