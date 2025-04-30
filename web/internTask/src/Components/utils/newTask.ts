import { getAccessToken } from "./auth";

export interface TaskCreation {
    projectID: string | undefined;
    dueDate: string;
    title: string;
    description: string;
}
export const createNewTask = async(body :TaskCreation)=>{
const response = await fetch("http://localhost:3000/task",{
            method:'POST', 
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