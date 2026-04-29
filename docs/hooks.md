# Hooks 

## useFilter
Encapsula la lógica de filtrado de medios por tipo. Recibe array de medios y devuelve el array filtrado junto con el seleccionado y la función para cambiarlo.

```tsx
export function useFilter(media: Media[]) {
    const [selectedType, setSelectedType] = useState("");

    const filteredMedia = useMemo(() => {
        if (selectedType === "") return media;
        return media.filter(item => item.type === selectedType);
    }, [media, selectedType]);

    return { filteredMedia, selectedType, setSelectedType };
}
```

## useLoading
Encapsula el estado global de carga, permitiendo mostarr un spinner global desde cualquier componente.

```tsx
export function useLoading() {
    const context = useContext(LoadingContext);
    if (!context) throw new Error("useLoading must be used within LoadingProvider");
    return context;
}
```

## useAuth
Encapsula el acceso al contexto de autentificación, proporcionando los datos del usuario y las funciones de login y logout.

```tsx
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
}
```