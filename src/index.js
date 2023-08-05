import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContext } from './context/context';
import Buttons from './components/Buttons';

function R28App () {

    const [inputName, setInputName] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [authStatus, setAuthStatus] = useState(null)
    const [shake, setShake] = useState("")


    const login = () => {
        if(inputName === "Pawko" && inputPassword === "password"){
            setAuthStatus(true)
            setInputName("")
            setInputPassword("")
        }
        else {
            setAuthStatus(false)
            setShake("shakeAnim")
            setTimeout(()=>{
                setShake("")
            },2000)
        }
    }

    const logout = () => {
        window.location.reload(true)
    }


    return (
        <AuthContext.Provider value={{status: authStatus, login:login, logout:logout}} >
        <form onSubmit={(e)=>e.preventDefault()} className={shake} style={{
            // position:'absolute',
            // top:'50%',
            // left:'50%',
            //transform:'translate(-50%,-50%)',
            margin:'20px',
            display:"flex",
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'flex-start',
            width:'300px',
            height:'500px',
            boxShadow:' 0px 0px 24px 0px rgba(66, 68, 90, 1)',
            borderRadius:'10px',
        }}>
            <div style={{
                fontSize:'2.5rem',
                fontWeight:'bold',
                alignSelf:'center',
                margin:"10px 10px 50px"
            }}>Authenticate</div>

            <label>UserName</label>
            <input type="text" placeholder='enter your name' style={{
                marginBottom:'20px',
                maxWidth:'100%',
            }} value={inputName} onChange={(e)=> setInputName(e.target.value)} />

            <label>Password</label>
            <input type="password" placeholder='enter password' style={{
            }} value={inputPassword} onChange={(e)=> setInputPassword(e.target.value)} />
            <Buttons />
        </form>

        </AuthContext.Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<R28App />)