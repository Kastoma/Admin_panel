import React, {useState} from "react"


const Login = () =>{
    const {username, setUserName} = useState('')
    const {password, setPassword} = useState('')
   
    
    return(
        <div>
            <p>Username</p>
            <input name="username" onChange={setUserName}/>
            <p>Password</p>
            <input name="password" onChange={setPassword}/>
            <button >Login</button>
        </div>
    )
 }
export default Login