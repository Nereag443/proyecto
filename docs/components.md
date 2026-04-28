# Componentes reutilizables
Para el desarrollo de la app se han creado varios componentes reutilizables para la creación de una aplicación más limpia, sin necesidad de crear los mismos componentes una y otra vez.

## Button
Componente reutilizable para el uso de botones en la aplicación, este permite mostrar texto o contenido personalizado y ejecuta acciones al hacer click.

### Props
| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| text | string | No | Texto del botón |
| onClick | () => void | Sí | Función al hacer clic |
| className | string | No | Clases CSS adicionales |
| children | ReactNode | No | Contenido del botón |

## Input 
Componente para el uso de campos de entrada en la aplicación, permite capturar datos del usuario, manejar cambios de estado y mostrar mensajes de error de forma controlada.

### Props
| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| value | string | Sí | Valor del input |
| onChange | (value: string) => void | Sí | Función al cambiar el valor |
| placeholder | string | No | Texto de placeholder |
| type | string | No | Tipo del input (text, email, password) |
| className | string | No | Clases CSS adicionales |
| error | string | No | Mensaje de error |


## Modal
Componente para mostrar contenido en una ventana modal superpuesta que permite mostrar contenido personalizado mediante children y controlar su visibilidad a través de isOpen.

### Props
| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| isOpen | boolean | Sí | Función para abrir el modal |
| onClose | () => void | Sí | Función para cerrar el modal |
| title | string | Sí | Título del modal |
| children | ReactNode | Sí | Contenido del modal |
| className | string | No | Clases CSS adicionales |


## Navbar
Componente que para la navegación principal de la aplicación que permite moverse entre las distintas páginas de la aplicación mediante React Router e incluye control de tema (oscuro/claro) usando contexto global.

### Props
Sin props.


## Select
Componente para la selección de opciones mediante un desplegable personalizado. Permite seleccionar un valor de una lista y mostrar errores de validación.

### Props
| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| options | string[] | Sí | Opciones del select |
| value | string | Sí | Valor seleccionado |
| onChange | (value: string) => void | Sí | Función para cambiar la opción |
| className | string | No | Clases CSS adicionales |
| error | string | No | Mensaje de error |


## Media Card
Componente para mostrar información de un elemento multimedia (libro, película, serie, etc) añadido por el usuario con funcionalidades de edición y eliminación

### Props
| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| id | number | No | ID del medio |
| title | string | Sí | Título del medio |
| type | string | Sí | Tipo de medio (Libro, Película, Serie, etc.) |
| review | string | No | Reseña del medio |
| rating | number | Sí | Valoración del medio (0-5) |
| date_added | string | No | Fecha de añadido |
| user_id | number | No | ID del usuario propietario |
| onEdit | (updatedMedia: Media) => void | No | Función al editar el medio |
| onDelete | () => void | No | Función al eliminar el medio |


## Rating
Componente para mostrar y seleccionar una puntuación mediante estrellas que permite al usuario establecer un valor de rating al hacer click sobre las estrellas.

### Props
| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| rating | number | Sí | Valoración actual (0-5) |
| onChange | (rating: number) => void | Sí | Función al cambiar la valoración |


## Spinner
Componente visual que indica carga.

### Props
Sin props.