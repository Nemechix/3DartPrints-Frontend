import { createContext, useState } from "react";

const loginContext = createContext(true)

function LoginContextProvider({ children }) {
  const [reload, setReload] = useState(false)

  return (
    <loginContext.Provider value={{ reload, setReload }}>
      { children }
    </loginContext.Provider>
  )
}



export {
  loginContext,
  LoginContextProvider
}