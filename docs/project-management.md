# Organización del proyecto
Para organizar el projecto estoy usando Trello.
El tablero se puede ver en este enlace:
[Ver tablero de Trello](https://trello.com/invite/b/69e07d0134e9fb6f870760f3/ATTI7bc1bdf235c256dd362c6120f7056a8c2BC4DF1B/proyecto-diario)

## Organización del trabajo
El trabajo se divide en tableros dispuestos de esta forma:
 - Backlog: lista de tareas
 - En proceso: tareas que se están realizando actualmente
 - Hecho: tareas terminadas

## Estructura del projecto

 - `diary-project/frontend` - frontend con React
  - `api/` - funciones para llamadas a la API
  - `components/` - componentes reutilizables
  - `context/` - contextos de React
  - `hooks/` - hooks personalizados
  - `pages/` - páginas principales
  - `types/` - tipos e intergaces de Typescript
 - `diary-project/backend` - backend con Node.js, Express y SQLite
  - `config/` - configuración de la base de datos y variables de entorno
  - `controllers/` - lógica de los endpoints
  - `routes/` - definición de rutas
  - `services/` - lógica de negocio y acceso a la base de datos
 - `docs/` - documentación del projecto