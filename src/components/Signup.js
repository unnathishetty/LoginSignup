import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'


const Signup =() =>{
    const history= useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            const response =  await axios.post("http://localhost:8000/signup", {
                email, password
            })
            console.log(response);
                if(response.status==200){
                    history("/home",{state:{id:email}})
                }
        }
        catch(e){
            console.log(e);
            alert("user already exists")
        }

    }

  return (
    <div className='signup d-flex vh-100 bg-light justify-content-center align-items-center'>
        <div className='login w-25  container text-center p-5'>
        <h1 className='heading'>SignUp</h1>
        <form action="POST">
            
            <input className='mt-3 mb-3' type='email' onChange={(e) => { setEmail(e.target.value)}} placeholder="Email" name="" id="" value={email}></input>
            <br/><input  className='mb-3' type='password' onChange={(e) => { setPassword(e.target.value)}} placeholder="password" name="" id="" value={password}></input>
            <br/><input className='btn btn-secondary mb-2' type="submit" onClick={submit}></input>
            <br />
            <Link to="/" className='link'>Login</Link>
        </form>
    </div>
    </div>
    
  )
}

export default Signup
