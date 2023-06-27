import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'

function Signup() {

  const[values,setvalues]= useState({
    name:'',
    email:'',
    password:''
  })
  const navigate =useNavigate();
  const[errors,setErrors]=useState({})

  const handleInput=(event)=>{
    setvalues(prev =>({...prev,[event.target.name]:[event.target.value]}))
  }

  const handleSubmit=async(event)=>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/signup',values)
      .then(res=> {
        navigate('/');
         //console.log(values)
      })
      .catch(err=>console.log(err))
    }
  } 

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h1>Sign-Up</h1>
            <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                 <label htmlFor='name'><strong>Name</strong></label>
                 <input type="text" placeholder='Enter Email' name='name' onChange={handleInput}
                 className='form-control rounded-0'/>
                 {errors.name && <span className='text-danger'>{errors.name}</span>}
               </div>
               <div>
                 <label htmlFor='email'><strong>Email</strong></label>
                 <input type="email" placeholder='Enter Email' name='email' onChange={handleInput}
                 className='form-control rounded-0'/>
                 {errors.email && <span className='text-danger'>{errors.email}</span>}
               </div>
               <div>
                 <label htmlFor='password'><strong>Password</strong></label>
                 <input type="password" placeholder='Enter Password' name='password' onChange={handleInput}
                  className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
               </div>
               <br></br>
               <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
               <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup