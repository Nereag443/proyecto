import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

type User = {
    username: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    login: (data: any) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (data: any) => {
        localStorage.setItem("token", data.token);
        const user = { username: data.username, email: data.email };
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}