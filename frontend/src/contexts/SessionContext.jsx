import { createContext, useState } from "react";

export const SessionContext = createContext();

export function SessinProvider({children}) {

    const [user, setUser] = useState(null)

    function login (userData){
        setUser(userData)
    }

    function logout (){
        setUser(null)
    }

  return (
    <SessionContext.Provider value={{user, login, logout}}>
        {children}
    </SessionContext.Provider>
  ) 
}
