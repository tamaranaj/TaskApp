import { Projects } from "../Types/projects.interface";
import { getAccessToken } from "./auth";

export const getProjectById = async (id:string)=>{
    const response = await fetch(`http://localhost:3000/project/${id}`, {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`
        }
       })
       const data: Projects = await response.json();
       return data
}