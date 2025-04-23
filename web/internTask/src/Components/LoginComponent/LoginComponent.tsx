import './LoginComponent.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext, useState,useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../utils/login';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../Context/GeneralContext';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { getUser } from '../utils/getUser';
import { animate } from "motion";

interface Login{
    email:string,
    password:string
}

export const LoginComponent = ()=>{
    const{handleSetLoggedIn,handleSetUserInfo} = useContext(GeneralContext) 
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm<Login>()
    const [error, setError] = useState('')
    const [showPassword, setShowPassword]=useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
      if (formRef.current) {
        animate(
          formRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration:3, ease: "easeOut" },
          
        );
      }
    }, []);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    
      const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      }

    const submitForm = async (data:Login)=>{
        setError('')
       const response = await login(data.email, data.password)
       if(response.token){
          localStorage.setItem("accessToken", response.token);
          handleSetLoggedIn(true)
          getUser().then((v)=>{
            handleSetUserInfo(v)
            navigate(`account/${v.id}`)
          })
       }else{
        setError(response.message)
       }
     
    }
    return (
        <form ref={formRef} onSubmit={handleSubmit(submitForm)} className='loginForm my-form'>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
            <TextField id="outlined-basica" label="Email" variant="outlined" {...register('email')} className='input' />
            </FormControl>
            
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
     
        <Button variant="contained" type='submit' sx={{backgroundColor:'#00020F'}}>Login</Button>
            {error && <span className="errorMessage">{error}</span>}
        </form>

        
    )
}
