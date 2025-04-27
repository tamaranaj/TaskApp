import { FormData } from "../AccountComponents/ProjectsComponent/NewProject/NewProject";
import { getAccessToken } from "./auth";

export const editingProject = async (edited: FormData, id:string)=>{
    const body = {
        ...edited,
        id: id
    }
     const response = await fetch("http://localhost:3000/project",{
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
                  'Authorization': `Bearer ${getAccessToken()}`
            },
            body: JSON.stringify({...body})
        })
    
        const data= await response.json()
        console.log(data)
        return data
}