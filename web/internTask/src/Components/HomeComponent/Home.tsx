import { useContext } from 'react'
import { GeneralContext } from '../Context/GeneralContext'
import { LoginComponent } from '../LoginComponent/LoginComponent'
import './Home.css'
import { RegisterComponent } from '../RegisterComponent/RegisterComponent'
import SplitText from './SplitText'


export const Home = ()=>{
   
   const {showLoginForm, handleSetShowLoginForm} = useContext(GeneralContext)

   const handleLogin = ()=>{
    handleSetShowLoginForm(true)
   }
   const handleRegister = ()=>{
    handleSetShowLoginForm(false)
   }

    return (
        <section className='home'>
            <div className='userContainer'>

                <SplitText/>
                    {/* <h3 className='welcome'>Welcome to your favorite project management!</h3> */}

            <div className='login'>
                {showLoginForm && (<section className='formWrapper'>
                    <LoginComponent/>
                    <p className='handleForm'>Don't have account? <span onClick={handleRegister}>Register</span></p>
                </section>)}

                {!showLoginForm && (<section className='formWrapper'>
                    <RegisterComponent handleLogin={handleLogin}/>
                    <p className='handleForm'>Already have account? <span onClick={handleLogin}>Login</span></p>
                    
                </section>
                )}
                
            </div>
            

            </div>
        </section>
     

        
    )
}
