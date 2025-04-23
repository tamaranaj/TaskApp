import { useContext } from 'react'
import './AccountComponent.css'
import { GeneralContext } from '../Context/GeneralContext'
import { Box, Button, Stack } from '@mui/material';
import { useParams, useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { Overview } from './OverviewComponent/Overview';
export const AccountComponent = ()=>{
    const{userInfo}=useContext(GeneralContext)
    const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const base = `/account/${userId}`;
  const routes = [
    { label: 'Overview', path: '' },
    { label: 'Settings', path: 'settings' },
    { label: 'Projects', path: 'projects' }
  ];

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
          <Route path="settings" element={<div>⚙️ Settings Page</div>} />
          <Route path="projects" element={<div>📁 Projects Page</div>} />
        </Routes>
      </Box>
    </Box>
        </section>


    )
}
