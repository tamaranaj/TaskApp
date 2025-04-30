import { useParams } from 'react-router-dom'
import './EditTask.css'

export const EditTask = ()=>{
    const{projectId,taskId} = useParams()
    return(
        <div>
            <h3>Edit task {taskId}</h3>
        </div>
    )
}