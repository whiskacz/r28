import React from 'react';
import { AuthContext } from '../context/context';

export default function Buttons() {

    const auth = React.useContext(AuthContext)


  return (
    <div style={{
        width:"100%",
        height:"50px",
        textAlign:"center",
        marginTop:"70px"
    }}>{auth.status === null ?
        <button onClick={auth.login}>Login</button> : 
        auth.status === true ?
        <button onClick={auth.logout}>Logout</button> :
        <button onClick={auth.login}>Try again</button>
    }
    </div>
  )
}
