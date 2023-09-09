import React, { useState } from 'react'
import axios from "axios"
import './style.css'
import { useNavigate, Link } from 'react-router-dom'


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/login", {
                email,password
            })
            .then(res => {
                if(res.status==200){
                    history("/home",{state:{id:email}})
                }
                else if(res.status==400){
                    alert("user have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }

    }

  return (
 <div className='d-flex signup vh-100 bg-light justify-content-center align-items-center'>
        <div className=' login w-25  container text-center p-5'>
        <h1 className='heading'>Login</h1>
        <form action="POST">
            
            <input className='mt-3 mb-3' type='email' onChange={(e) => { setEmail(e.target.value)}} placeholder="Email" name="" id=""></input>
            <input className='mb-3' type='password' onChange={(e) => { setPassword(e.target.value)}} placeholder="password" name="" id=""></input>
            <input className='btn btn-secondary mb-3' type="submit" onClick={submit}></input>

            <br/>
            <Link to="/signup" className='link'>Signup</Link>
        </form>
    </div>
    </div>
    
  )
}

export default Login;