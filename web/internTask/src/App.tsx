
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Components/HomeComponent/Home'

// import { Task } from './Components/TaskComponent/Task'
import { AccountComponent } from './Components/AccountComponents/AccountComponent'
import { useContext } from 'react'
import { GeneralContext } from './Components/Context/GeneralContext'



function App() {
  const{userInfo}=useContext(GeneralContext)
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path="/" element={<Navigate to={`/account/${userInfo.id}`} replace />} />
        <Route path="/account/:userId/*" element={<AccountComponent />} />
        {/* <Route path='account/tasks' element={<Task/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
