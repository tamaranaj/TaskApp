import { Projects } from "../Types/projects.interface";

import { getAccessToken } from "./auth"

export const getProjects =async ()=>{

   const response = await fetch('http://localhost:3000/project', {
    headers: {
        Authorization: `Bearer ${getAccessToken()}`
    }
   })
   const data: Projects[] = await response.json();
   return data
}
