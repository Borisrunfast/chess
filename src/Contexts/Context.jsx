import { createContext, useContext } from "react"

export const context = createContext()


export function useAppContext() {
    
    return useContext(context)
}
