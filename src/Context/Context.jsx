import { createContext, useContext } from "react"

const context = createContext()


function useAppContext() {
    
    
    return useContext(context)
}

export default context