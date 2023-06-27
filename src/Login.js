//import React from 'react'
import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'

export function Login() {
  var id=0
  var nombre=""
  var correo=""
  const[values,setvalues]= useState({
    email:'',
    password:'',

  })
 const navigation=useNavigate();
  const[errors,setErrors]=useState({})
  const handleInput=(event)=>{
    setvalues(prev =>({...prev,[event.target.name]:[event.target.value]}))
  }
  axios.defaults.withCredentials=true;
  const handleSubmit=async(event)=>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email==="" && errors.password===""){
      axios.post('http://localhost:8081/login',values)
      .then(res=> {
        if(res.data.Login){
          id=res.data.idUsuario
          nombre=res.data.nombre
          correo=res.data.correo
          console.log(correo)
          navigation('/reporte',{
           state:{ 
            id: id,
            nombre:nombre,
            correo:correo
          }
          });
        }else{
          alert("no exist")
        }
      }) 
      .catch(err=>console.log(err))
    }
  }
  
  return  (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sing In</h2>
            <form action="" onSubmit={handleSubmit}>
               <div>
                 <label htmlFor='email'><strong>Email</strong></label>
                 <input type="email" placeholder='Enter Email' name='email'
                 onChange={handleInput} className='form-control rounded-0'/>
                 {errors.email && <span className='text-danger'>{errors.email}</span>}
               </div>
               <div>
                 <label htmlFor='password'><strong>Password</strong></label>
                 <input type="password" placeholder='Enter Password' name='password'
                 onChange={handleInput} className='form-control rounded-0'/>
                 {errors.password && <span className='text-danger'>{errors.password}</span>}
               </div>
               <br></br>
               <button type='submit'className='btn btn-success w-100 rounded-0'><strong>Log In</strong></button>
               <p>You are agree to aour terms</p>
               <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}

export default Login