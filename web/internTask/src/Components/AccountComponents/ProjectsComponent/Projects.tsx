import Button from "@mui/material/Button"
import { Projects } from "../../Types/projects.interface"
import { OutlinedCard } from "./ProjectCard/Card"
import AddIcon from '@mui/icons-material/Add';
import './Projects.css'
import { useNavigate } from "react-router-dom";

interface ProjectsProps{
    projects: Projects[]
}

export const ProjectsComponent = ({projects}: ProjectsProps)=>{
    const navigate = useNavigate()
    const handleNewProject = ()=>{
        navigate('new')
    }
    return(
        <div className="projectsContainer">
            <div>
            <h1>📁 Projects Page</h1>
            </div>
            <div>
            <Button size="small" onClick={handleNewProject}><AddIcon/>New project</Button>
            </div>
           
            <section className="projectSection">
                {projects.map((i)=>(
                    <OutlinedCard key={i.id} id={i.id} name={i.name} description={i.description}/>
                ))}
            </section>
        </div>
        
    )
}