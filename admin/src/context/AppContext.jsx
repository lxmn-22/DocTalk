import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [aToken, setAToken] = useState('')

    const value = {
        aToken, setAToken
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider