import { useParams } from 'react-router-dom'
import './EditProject.css'
import { getProjectById } from '../../../utils/getProjectById'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import { FormData } from '../NewProject/NewProject'
import { editingProject } from '../../../utils/editProject'
import { useEffect, useState } from 'react'
import { Task } from '../../../Types/task.interface'
// import CollapsibleTable from '../TaskTable/TaskTable'

export const EditProject = ()=>{
    const[editProject,setEditProject] = useState({name: '', description:''})
    const [tasks, setTasks] = useState<Task[]>([])
    
        const handleEditProject = (item:string, prop:string)=>{
            setEditProject({
                ...editProject,
                [prop]: item
            })
        }
       
    const {projectId} = useParams()
    const editForm = useForm<FormData>()
    const{register,handleSubmit} = editForm
    useEffect(()=>{
        if(projectId){
            getProjectById(projectId).then((res)=>{
                setEditProject({name:res.name, description: res.description})
                setTasks(res.tasks)
            })
        }
        
    },[])
    const submit=async(data:FormData)=>{
        console.log(data)
        try{
            if(projectId){
                const response = await editingProject(data, projectId)
                console.log('in submit:',response)
                return response
            }
            
        }catch(error){
            console.log(error)
        }
    }
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        handleEditProject(e.target.value,e.target.name)
    }
    return(
        <div>
            <h1>Edit project</h1>


            <div style={{display:'flex',justifyContent:'center', width:'100%', flexDirection:'row',alignItems:'center'}}>
                        <form onSubmit={handleSubmit(submit)} style={{backgroundColor: 'white'}} className='projectForm'>
                            <TextField id="standard-basic" label="Project name" variant="standard" {...register('name')} onChange={(e)=>handleInputChange(e)} value={editProject.name} className='input' />
                            <TextField
                            {...register('description')}
                                id="standard-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                value={editProject.description}
                                variant="standard"
                                onChange={(e)=>handleInputChange(e)}
                                className='input'
                            />
            
                            <div style={{marginTop:'10px'}}><Button variant="contained" type='submit'>Create</Button></div>
                        </form>


                    
            </div>
        </div>
    )
}