import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import './RegisterComponent.css'
import { registerUser } from "../utils/register"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface RegisterComponentProps{
    handleLogin: ()=>void
}

interface Register{
    name:string, 
    email:string,
    password:string
}
export const RegisterComponent=({handleLogin}: RegisterComponentProps)=>{
   
    const {register, handleSubmit} = useForm<Register>()
    const [error, setError] = useState('')
    const [showPassword, setShowPassword]=useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    
      const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      }
    const submitForm = async (data:Register)=>{
        setError('')
        const response = await registerUser(data.name, data.email,data.password)
            if(response.statusCode =='400'){
                setError(response.message)
            }else{
               handleLogin()
            }
     
        }
    return (
            <form onSubmit={handleSubmit(submitForm)} className="registerForm">
                
                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                <TextField id="outlined-basica" label="Name" variant="outlined" {...register('name')} className="input" />
                </FormControl>
                

                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                <TextField id="outlined-basicba" label="Email" variant="outlined" {...register('email')} className="input"/>
                </FormControl>
               
                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-passwordd">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-passwordd"
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
            

            <Button variant="contained" type="submit" sx={{backgroundColor:'#00020F'}}>Register</Button>

            {error && <span className="errorMessage">{error}</span>}
            </form>
        
    )
}
