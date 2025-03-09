import { useContext, useEffect } from 'react'
import './Project.css'
import { getUser } from '../utils/getUser'
import { GeneralContext } from '../Context/GeneralContext'
export const Project = ()=>{
    const{userInfo, handleSetUserInfo}=useContext(GeneralContext)
    useEffect(()=>{
        getUser().then((response)=> handleSetUserInfo(response) )
        
    },[])
    return (
        <div>
            <h1>Project</h1>
        </div>
    )
}
