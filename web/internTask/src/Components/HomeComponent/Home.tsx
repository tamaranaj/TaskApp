import './Home.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/login';

interface Login{
    email:string,
    password:string
}

export const Home = ()=>{
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm<Login>()
    const [error, setError] = useState('')

    const submitForm = async (data:Login)=>{
        setError('')
       const response = await login(data.email, data.password)
       if(response.token){
          localStorage.setItem("accessToken", response.token);
          navigate('projects')
       }else{
        setError(response.message)
       }
     
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >   
            
            <TextField id="outlined-basic" label="Enter email" variant="outlined" {...register('email')} />
            <TextField id="outlined-basic" label="Password" variant="outlined" {...register('password')} />
        </Box>
        <Button variant="contained" type='submit'>Login</Button>

        <h3>{error}</h3>
        </form>

        
    )
}
