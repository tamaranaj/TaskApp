import { getAccessToken } from "./auth"

export const createNewProject = async(creation:{name:string, description:string})=>{

    const response = await fetch("http://localhost:3000/project",{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
              'Authorization': `Bearer ${getAccessToken()}`
        },
        body: JSON.stringify({...creation})
    })

    const data= await response.json()
    console.log(data)
    return data

}