import { useContext, useEffect } from 'react'
import './AccountComponent.css'
import { GeneralContext } from '../Context/GeneralContext'
import { Box, Button, Stack } from '@mui/material';
import { useParams, useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { Overview } from './OverviewComponent/Overview';
import { ProjectsComponent } from './ProjectsComponent/Projects';
import { Settings } from './SettingsComponent/Settings';
import { Tasks } from './TasksComponent/Tasks';
import { getUser } from '../utils/getUser';
import { NewProject } from './ProjectsComponent/NewProject/NewProject';
import { EditProject } from './ProjectsComponent/EditProject/EditProject';
import { ProjectDetails } from './ProjectsComponent/ProjectDetails/ProjectDetails';

export const AccountComponent = ()=>{
    const{userInfo,handleSetUserInfo}=useContext(GeneralContext)
    const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const base = `/account/${userId}`;
  const routes = [
    { label: 'Overview', path: '' },
    { label: 'Projects', path: 'projects' },
    { label: 'Tasks', path: 'tasks' },
    { label: 'Settings', path: 'settings' },
    
  ];

  useEffect(()=>{
    getUser().then((response)=>{if(!response.id){
      navigate('/')
    } handleSetUserInfo(response)} )
    console.log('getUser')
    
},[])
  const currentPath = location.pathname.replace(base, '') || '';

    return (
        <section className='account'>
      <Box sx={{ display: 'flex', width: '100%', justifyContent:'flex-start'}}>
      <Stack
       
        spacing={1}
        sx={{
            width: 200,
            p: 2,
          
          bgcolor: 'transparent',
          borderRight: '1px solid #ccc'
        }}
      >
        {routes.map((route) => (
          <Button
            key={route.path}
            fullWidth
            variant={
              currentPath === `/${route.path}` || (currentPath === '' && route.path === '')
                ? 'contained'
                : 'outlined'
            }
            onClick={() => navigate(`${base}/${route.path}`)}
          >
            {route.label}
          </Button>
        ))}
      </Stack>

      <Box sx={{  flexGrow: 2, p: 3  }}>
        <Routes>
          <Route path="" element={<div style={{width:'100%'}}><Overview/></div>} />
          <Route path="projects" element={<div style={{width:'100%'}}><ProjectsComponent/></div>} />
          <Route path="tasks" element={<div style={{width:'100%'}}><Tasks/></div>} />
          <Route path="settings" element={<div style={{width:'100%'}}><Settings/></div>} />
          <Route path='projects/new' element={<div style={{width:'100%'}}><NewProject/></div>}/>
          <Route path='projects/:projectId/newTask' element={<div style={{width:'100%'}}><p>add task</p></div>}/>
          <Route path='projects/:projectId/' element={<div style={{width:'100%'}}><ProjectDetails/></div>}/>
          <Route path='projects/:projectId/task/:taskId' element={<div style={{width:'100%'}}><p>Edit task</p></div>}/>
        </Routes>
      </Box>
    </Box>
        </section>


    )
}
