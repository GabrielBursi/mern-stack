import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ApiDataUser, Children } from "@/types";

interface ContextData {
    user: ApiDataUser | null, 
    setUser: (u: ApiDataUser | null) => void
}

export const UserContext = createContext({} as ContextData);

export function UserContextProvider({children}: Children) {

    const [user, setUser] = useState<ApiDataUser | null>(null);
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem('user');
        if(!user){
            setUser(null);
            router.push('/login?isSignUp=false')
            return
        }

        setUser(JSON.parse(user))
    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
