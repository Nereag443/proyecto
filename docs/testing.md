# Testing

## Pruebas manuales

### Funcionalidades probadas

#### Medios

| Acción | Resultadoo |
|--------|-------------------|
| Añadir medio con todos los campos | Medio aparece en la lista |
| Añadir medio sin título | Muestra error de validación |
| Añadir medio sin tipo | Muestra error de validación |
| Editar un medio | Medio se actualiza en la lista |
| Eliminar un medio | Medio desaparece de la lista |
| Filtrar por tipo | Solo se muestran los medios del tipo seleccionado |
| Filtrar por "Todos" | Se muestran todos los medios |

#### Estadísticas

| Acción | Resultado |
|--------|-------------------|
| Entrar sin medios | Muestra mensaje de no disponible |
| Entrar con medios | Muestra gráfica y estadísticas |
| Total medios | Muestra el número correcto |
| Media de valoración | Muestra la media correcta |
| Más consumido | Muestra el tipo correcto |
| Mejor valorado | Muestra el medio correcto |

#### Navegación

| Acción | Resultado |
|--------|-------------------|
| Navegar a Mi espacio | Carga la página correctamente |
| Navegar a Estadísticas | Carga la página correctamente |
| Ruta inexistente | Muestra página 404 |

#### UI

| Acción | Resultado |
|--------|-------------------|
| Cambiar a modo oscuro | Toda la app cambia de tema |
| Ver en móvil | Layout responsive correcto |
| Ver en tablet | Layout responsive correcto |
| Lista vacía | Muestra mensaje de lista vacía |
| Error de red | Muestra mensaje de error con botón reintentar |

## Errores encontrados y corregidos

 - **Modal anidado en botón**: el modal de editar estaba dentro del div del botón causando que no se pudiera guardar. Solucionado moviendo los modales fuera del div de botones.
- **Validación de login invertida**: la condición para mostrar errores estaba invertida. Solucionado corrigiendo la condición.
 - **FOREIGN KEY constraint**: al desplegar en Render fallaba al crear medios por la restricción de clave foránea. Solucionado eliminando la restricción de la tabla.
 - **sqlite3 incompatible con Render**: la librería sqlite3 no era compatible con la versión de Linux de Render. Solucionado migrando a better-sqlite3.

## Responsive

La aplicación ha sido probada en los siguientes tamaños de pantalla:

 - **Móvil** (< 768px): navbar con menú hamburguesa, cards en columna, filtros en fila
 - **Tablet** (768px - 1024px): layout intermedio
 - **Escritorio** (> 1024px): layout completo con gráfica y stats en fila