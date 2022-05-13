import { createContext, ReactNode, useContext, useState } from "react"
import { Client } from "../project-types/client"


type ClientContext = {
    isShowLogin: boolean
    setIsShowLogin: (param: boolean) => void
}

const clientContext = createContext<ClientContext | {}>({})

export const ClientProvider = ({ children }: { children: ReactNode }) => {
    const [client, setClient] = useState<Client>({ isShowLogin: false })

    const setIsShowLogin = (value: boolean) => {
        setClient({ ...client, isShowLogin: value })
    }

    const value = { isShowLogin: client.isShowLogin, setIsShowLogin }
    return <clientContext.Provider value={value} >{children} </clientContext.Provider>
}

export const useClient = () => {
    return useContext(clientContext) as ClientContext
}