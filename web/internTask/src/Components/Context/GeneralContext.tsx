import { createContext, ReactNode, useState } from "react"
import { User } from "../Types/user.interface"

interface ContextDefault{
    showLoginForm: boolean 
    loggedIn: boolean
    userInfo: User | undefined
    handleSetUserInfo: (user:User)=>void
    handleSetShowLoginForm: (value: boolean) => void
    handleSetLoggedIn: (value: boolean) => void
}

const contextDefaultValues : ContextDefault = {
    showLoginForm: true,
    loggedIn: false,
    userInfo: undefined,
    handleSetUserInfo: ()=>{},
    handleSetShowLoginForm : ()=> {},
    handleSetLoggedIn :  ()=> {}
}

export const GeneralContext  = createContext(contextDefaultValues)

interface GeneralContextProviderProps{
    children: ReactNode
}

export const GeneralContextProvider = ({children}: GeneralContextProviderProps)=>{
    const[showLoginForm,setShowLoginForm] = useState(contextDefaultValues.showLoginForm)
    const[loggedIn, setLoggedIn] = useState(contextDefaultValues.loggedIn)
    const [userInfo,setUserInfo] = useState(contextDefaultValues.userInfo)

    const handleSetShowLoginForm = (value: boolean)=>{
        setShowLoginForm(value)
    }

    const handleSetUserInfo = (user: User|undefined)=>{
        setUserInfo(user)
    }
    
    const handleSetLoggedIn = (value: boolean)=>{
        setLoggedIn(value)
    }

    return(
        <GeneralContext.Provider
        value={{showLoginForm, loggedIn,userInfo, handleSetUserInfo, handleSetShowLoginForm, handleSetLoggedIn}}>
            {children}
        </GeneralContext.Provider>
    )
}
