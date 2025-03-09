import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../utils/register"

interface Register{
    name:string, 
    email:string,
    password:string
}
export const Register=()=>{
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm<Register>()
    const [error, setError] = useState('')
    const submitForm = async (data:Register)=>{
        console.log(data)
        setError('')
        const response = await registerUser(data.name, data.email,data.password)
            if(response.statusCode =='400'){
                setError(response.message)
            }else{
                navigate('/')
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
                <TextField id="outlined-basica" label="Name" variant="outlined" {...register('name')} />
                <TextField id="outlined-basicb" label="Enter email" variant="outlined" {...register('email')}/>
                <TextField id="outlined-basicc" label="Password" variant="outlined" {...register('password')}/>
            
            </Box>
            <Button variant="contained">Register</Button>

            <h3>{error}</h3>
            </form>
        
    )
}
