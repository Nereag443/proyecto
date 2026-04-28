# Estructura de rutas

## Configuración 
La navegación está implementada con React Router usando `BrowserRouter`, `Routes` y `Route`. El componente Navabar es global y se renderiza en todas las páginas al esatr fuera del bloque `Routes`.

## Estructura de rutas
| Ruta | Componente | Descripción |
|------|-----------|-------------|
| /mySpace | MySpace | Página principal donde el usuario gestiona sus medios |
| /stats | Stats | Página de estadísticas de consumo |
| * | NotFound | Página 404 para rutas no encontradas |

### Rutas comentadas (pendientes de implementación)
| Ruta | Componente | Descripción |
|------|-----------|-------------|
| / | Home | Página de inicio con login y registro |
| /profile | Profile | Página de perfil del usuario |

---

## Navegación
La navegación entre páginas se realiza mediante el componente `Link` de 
React Router en la `Navbar`. Esta incluye un menú responsive que se 
muestra en pantallas grandes y un menú hamburguesa en pantallas pequeñas.

---

## Página 404
Cualquier ruta no definida redirige al componente `NotFound` mediante 
el comodín `path="*"`.