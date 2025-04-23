import { useContext } from "react"
import { GeneralContext } from "../../Context/GeneralContext"
import './Overview.css'

export const Overview = ()=>{
    const{userInfo}=useContext(GeneralContext)
    console.log(userInfo)
    return(
        <div className="overViewContainer">
            <h2 className="welcomeMessage">Welcome {userInfo.name}</h2>

            <div  className="info">
                <p>Projects you work on: {userInfo.projects.length}</p>
                <p>Sum of tasks: {userInfo.tasks.length}</p>
            </div>
        </div>
    )
}