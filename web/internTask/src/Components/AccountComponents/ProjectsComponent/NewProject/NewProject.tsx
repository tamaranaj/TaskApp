import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom'
import './NewProject.css'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { createNewProject } from '../../../utils/newProject'
import { useContext, useState } from 'react'
import { GeneralContext } from '../../../Context/GeneralContext'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button';

export type FormData = {
    name: string, description: string 
}
export const NewProject = () => {
    const{newProject,handleSetNewProject, resetNewProject} = useContext(GeneralContext)
    const [created,setCreated]= useState(false)
    const newProjectForm = useForm<FormData>()
    const { register, handleSubmit } = newProjectForm
    const { userId } = useParams()
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(`/account/${userId}/projects`)
    }
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setCreated(false)
        handleSetNewProject(e.target.value,e.target.name)
    }
    const submit=async (data:FormData)=>{
        console.log('data',data)
        createNewProject(data).then((res)=>{
           
            if(!res.statusCode){
                setCreated(true)
                resetNewProject()
            }
        })
        console.log(data)
    }
    return (
        <div className='newProjectContainer'>
            <div className='header'>
                <div className="back">
                <IconButton aria-label="back" size="large" onClick={handleBack}>
                    <ArrowBackIcon fontSize="inherit" color='primary' />
                </IconButton>
                </div>
                <div className="heading"><h1>New Project</h1>
                </div>

            </div>


            <div style={{display:'flex',justifyContent:'center', width:'100%', flexDirection:'column',alignItems:'center'}}>
            <form onSubmit={handleSubmit(submit)} style={{backgroundColor: 'white'}} className='projectForm'>
                <TextField id="standard-basic" label="Project name" variant="standard" {...register('name')} onChange={(e)=>handleInputChange(e)} value={newProject.name} className='input' />
                <TextField
                {...register('description')}
                    id="standard-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    value={newProject.description}
                    variant="standard"
                    onChange={(e)=>handleInputChange(e)}
                    className='input'
                />

                <div style={{marginTop:'10px'}}><Button variant="contained" type='submit'>Create</Button></div>
            </form>

            {created && <p>Project is successfully created.</p>}
            </div>
            
        </div>
    )
}