# Restrospectiva

## Qué aprendí

Durante el desarrollo aprendí a estructurar una aplicación React con Typescript de forma organizada, separando responsabilidades en componentes, contextos, hooks y la capa de API. Además de integrar este tipo de aplicaciones con un entorno Express propio.


## Problemas encontrados

### Integración frontend–API
- **Tipos desalineados**: los tipos del frontend no coincidían exactamente con los del backend, causando errores de TypeScript. Se solucionó revisando y alineando las interfaces.

### Despliegue
 - **sqlite3 incompatible con Render**: la librería sqlite3 no era compatible con la versión de Linux de Render. Se migró a `better-sqlite3` que además es síncrona y simplificó el código.
 - **Carpeta data/ no existía en Render**: se solucionó creando la carpeta automáticamente en `db.ts` si no existe.
 - **FOREIGN KEY constraint**: al no tener sistema de usuarios activo, el `user_id` hardcodeado a 1 fallaba porque el usuario no existía. Se solucionó eliminando la restricción de clave foránea.

### TypeScript
 - **Tipos opcionales vs requeridos**: algunos campos como `id` o `date_added` eran opcionales en el frontend pero requeridos en el backend, causando errores. Se solucionó usando `Omit` para excluir campos en las funciones de creación.

## Uso de IA

Durante el desarrollo utilicé IA como asistente para:
 - Errores específicos con el despliegue en Render
 - Resolver dudas específicas de Typescript
 - Consultar dudas sobre librerías como `better-sqlite3` o `chart.js`

## Reflexión final

Este proyecto me ha permitido conectar por primera vez un frontend React con un backend Express propio, entendiendo el flujo completo de una aplicación fullstack. El mayor aprendizaje ha sido la importancia de mantener los tipos alineados entre frontend y backend, y la complejidad que añade el despliegue en producción respecto al desarrollo local.  
Si pudiera repetirlo, empezaría antes con el sistema de usuarios para tenerlo integrado desde el principio, y tener el proyecto más organizado y estructurado sin tener que hacer tantos cambios, algo que he aprendido durante el desarrollo de esta aplicación.