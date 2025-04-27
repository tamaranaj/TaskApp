import { createContext, ReactNode, useState } from "react"
import { User } from "../Types/user.interface"
import { Projects } from "../Types/projects.interface"

interface ContextDefault{
    showLoginForm: boolean 
    loggedIn: boolean
    userInfo: User,
    projects: Projects[],
    newProject: {
        name:string,
        description:string
    },
    // editProject:{
    //     name:string,
    //     description:string
    // },
    // handleEditProjectDefault: (data: {
    //     name: string;
    //     description: string;
    // }) => void,
    // handleEditProject: (item: string, prop: string) => void,
    // resetEditProject: ()=>void,
    resetNewProject: () => void,
    handleSetNewProject: (item: string, prop: string) => void
    handleSetProjects: (items: Projects[]) => void,
    handleSetUserInfo: (user:User)=>void
    handleSetShowLoginForm: (value: boolean) => void
    handleSetLoggedIn: (value: boolean) => void
}

const contextDefaultValues : ContextDefault = {
    showLoginForm: true,
    loggedIn: false,
    userInfo: {} as User,
    projects: [],
    newProject: {
        name:'',
        description:''
    },
    // editProject: {
    //     name:'',
    //     description:''
    // },
    // handleEditProjectDefault:()=>{},
    // resetEditProject: () => {},
    // handleEditProject: () => {},
    resetNewProject: () => {},
    handleSetNewProject: () => {},
    handleSetProjects: () => {},
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
    const[projects,setProjects]=useState(contextDefaultValues.projects)
    const [newProject,setNewProject]=useState(contextDefaultValues.newProject)
    // const[editProject,setEditProject] = useState(contextDefaultValues.editProject)

    // const handleEditProject = (item:string, prop:string)=>{
    //     setEditProject({
    //         ...editProject,
    //         [prop]: item
    //     })
    // }
    // const handleEditProjectDefault = (data:{name:string, description:string})=>{
    //     setEditProject(data)
    // }
    // const resetEditProject = ()=>{
    //     setEditProject(contextDefaultValues.editProject)
    // }
    const resetNewProject = ()=>{
        setNewProject(contextDefaultValues.newProject)
    }
    const handleSetNewProject = (item:string, prop:string)=>{
        setNewProject({
            ...newProject,
            [prop]: item
        })
    }
    const handleSetProjects = (items:Projects[])=>{
        setProjects(items)
    }

    const handleSetShowLoginForm = (value: boolean)=>{
        setShowLoginForm(value)
    }

    const handleSetUserInfo = (user: User)=>{
        setUserInfo(user)
    }
    
    const handleSetLoggedIn = (value: boolean)=>{
        setLoggedIn(value)
    }

    return(
        <GeneralContext.Provider
        value={{showLoginForm, loggedIn,userInfo,projects,newProject,resetNewProject,handleSetNewProject,handleSetProjects, handleSetUserInfo, handleSetShowLoginForm, handleSetLoggedIn}}>
            {children}
        </GeneralContext.Provider>
    )
}
