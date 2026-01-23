import { useEffect, useState } from 'react'
import './ProjectDetails.css'
import { Projects } from '../../../Types/projects.interface'
import { useNavigate, useParams } from 'react-router-dom'
import { getProjectById } from '../../../utils/getProjectById'
import CollapsibleTable from '../../TasksComponent/TaskTable/TaskTable'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { editingProject } from '../../../utils/editProject'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TaskForm } from '../../TasksComponent/TaskForm/TaskForm'
export const ProjectDetails = () => {

    const [project, setProject] = useState<Projects>({
        id: '',
        name: '',
        description: '',
        userID: '',
        tasks: []
    })
    const[newTask,setNewTask] = useState(false)
    const[newTaskAdded,setNewTaskAdded] = useState(false)
    const [seeTasks, setSeeTasks] = useState(false)
    const [editProject, setEditProject] = useState({ name: '', description: '' })
    const [edit, setEdit] = useState(false)
    const [isEdited, setIsEdited] = useState(false)
    const { projectId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (projectId) {
            getProjectById(projectId).then((res) => {
                setProject(res)
                console.log('response', res)
            })
        }
    }, [isEdited,newTaskAdded])

    const handleNewTaskAdded = (value:boolean)=>{
        setNewTaskAdded(value)
    }

    const handleSeeTasks = () => {
        setNewTask(false)
        setSeeTasks(true)
    }
    const handleSave = async () => {
        if (editProject.name == project.name && editProject.description == project.description) return
        if (editProject.name == '' && editProject.description == '') return
        try {
            if (projectId) {
                const response = await editingProject(editProject, projectId)
                console.log('in submit:', response)

                if (response.statusCode) {
                    console.log(response)
                    setIsEdited(false)
                } else {
                    setIsEdited(true)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
    const handleEdit = () => {
        setEditProject({ name: project.name, description: project.description })
        setEdit(true)
    }
    const handleClose = () => {
        setEditProject({ name: '', description: '' })
        setEdit(false)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditProject({
            ...editProject,
            [e.target.name]: e.target.value
        })

    }
    const handleBack = () => {
        navigate(`/account/${project.userID}/projects`)
    }

    const handleNewTask = ()=>{
        setSeeTasks(false)
        setNewTask(true)
    }

    return (
        <div className='detailsContainer'>
            <div className='projectNameContainer'>
                <IconButton aria-label="back" size="large" onClick={handleBack}>
                    <ArrowBackIcon fontSize="inherit" color='primary' />
                </IconButton>
                <div className="row">
                    <h2>Project name: {project.name}</h2>
                    <div>
                        {!edit && (<Button onClick={handleEdit}><EditIcon fontSize='medium' /></Button>)}
                        {edit && (<Button onClick={handleSave}><SaveIcon fontSize='medium' /></Button>)}
                        {edit && (<Button onClick={handleClose}><CloseIcon fontSize='medium' /></Button>)}
                    </div>

                </div>
                {edit && (
                    <TextField sx={{ backgroundColor: 'white' }} id="standard-basic" label="Project name" variant="standard" name='name' onChange={(e) => handleInputChange(e)} value={editProject.name} className='input' />
                )}

                <div className="row">
                    <h4>Project description: {project.description}</h4>
                </div>
                {edit && (
                    <TextField
                        name='description'
                        id="standard-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        value={editProject.description}
                        variant="standard"
                        onChange={(e) => handleInputChange(e)}
                        className='input'
                    />
                )}
            </div>



            <div style={{margin:'20px',display:'flex',justifyContent:'center',gap:'5px'}}>
                <Button
                    variant={
                        !seeTasks
                            ? 'contained'
                            : 'outlined'
                    }
                    onClick={handleSeeTasks}
                >
                    See Tasks
                </Button>
                <Button
                    variant={
                        !newTask
                            ? 'contained'
                            : 'outlined'
                    }
                    onClick={handleNewTask}
                >
                    New Task
                </Button>
                
            </div>
            {seeTasks && project.tasks && (<div className='tableContainer'>
                <CollapsibleTable tasks={project.tasks} />

            
            </div>)}
            {newTask && <div className='newTaskContainer'><TaskForm handleNewTaskAdded={handleNewTaskAdded}/></div>}
        </div>
    )
}