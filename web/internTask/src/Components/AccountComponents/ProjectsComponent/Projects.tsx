import Button from "@mui/material/Button"
import { OutlinedCard } from "./ProjectCard/Card"
import AddIcon from '@mui/icons-material/Add';
import './Projects.css'
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getProjects } from "../../utils/getProjects";
import { GeneralContext } from "../../Context/GeneralContext";


export const ProjectsComponent = ()=>{
    const navigate = useNavigate()
    const{projects, handleSetProjects}=useContext(GeneralContext)
    const handleNewProject = ()=>{
        navigate('new')
    }
    useEffect(()=>{
        getProjects().then(res=>handleSetProjects(res))
    })
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