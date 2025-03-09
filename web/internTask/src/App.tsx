
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Components/HomeComponent/Home'
import { Project } from './Components/ProjectComponent/Project'
import { Task } from './Components/TaskComponent/Task'



function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='projects' element={<Project/>}/>
        <Route path='projects/tasks' element={<Task/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
