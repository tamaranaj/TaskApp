import { User } from "../Types/user.interface";
import { getAccessToken } from "./auth"

export const getUser =async ()=>{

   const response = await fetch('http://localhost:3000/auth/getme', {
    headers: {
        Authorization: `Bearer ${getAccessToken()}`
    }
   })
   const data: User = await response.json();
   return data
}
