import { useConst } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthService } from "../service/auth-service";

const authUserContext = createContext<User | null>(null)


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const auth = useProvideAuthUser()
    return <authUserContext.Provider value={auth} > {children}</authUserContext.Provider>
}


export const useAuthUser = () => {
    return useContext(authUserContext)
}

const useProvideAuthUser = () => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const handleStatusChange = async (user: User | null) => {
            setUser(user)
        }
        const unsubscribe = AuthService.onAuthStateChanged({
            callback: handleStatusChange,
        })
        return () => {
            unsubscribe()
        }
    })
    return user
}