
import { useNavigate, useParams } from 'react-router-dom'
import './NewProject.css'
export const NewProject = ()=>{
    const{userId} = useParams()
    const navigate = useNavigate()
    const handleBack = ()=>{
        navigate(`/account/${userId}/`)
    }
    return(
        <div>
            <h1>New Project</h1>
            <button onClick={handleBack}>back</button>
        </div>
    )
}