# Context y estado global

## ¿Cuándo es útil usar Context API?
Context API es útil cuando varios componentes necesitan acceder al mismo estado sin tener que pasarlo como props por cada nivel del árbol de componentes. Es útil para estado global como la sesión del usuario, el tema de la aplicación, el idioma, etc.

## AuthContext
Gestiona el estado de autentificación del usuario en toda la plicación.

### Estado

| Campo | Tipo | Descripción |
|-------|------|-------------|
| user | User \| null | Datos del usuario logado (username y email) |

### Métodos

| Método | Descripción |
|--------|-------------|
| login(data) | Guarda el token y los datos del usuario en localStorage y actualiza el estado |
| logout() | Elimina el token y los datos del usuario de localStorage y limpia el estado |

### Uso

```tsx
const { user, login, logout } = useAuth();
```

### Componentes que lo consumen

 - `Home` - llama a `login` tras autenticarse correctamente
 - `Profile` — muestra los datos del usuario y llama a `logout`

## ThemeContext
Gestiona el tema visual (claro/oscuro) de la aplicación.

### Estado
| Campo | Tipo | Descripción |
|-------|------|-------------|
| darkMode | boolean | Indica si el modo oscuro está activado |

### Métodos
| Método | Descripción |
|--------|-------------|
| toggleTheme() | Alterna entre modo claro y oscuro y lo persiste en localStorage |

### Uso
```tsx
const { darkMode, toggleTheme } = useContext(ThemeContext);
```

### Componentes que lo consumen
- Cualquier componente que necesite saber el tema actual o cambiarlo