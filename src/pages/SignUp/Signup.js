import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'
import '../../styles/SignUp.css'



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
         console.log(values)
         console.log(errors)
      })
      .catch(err=>console.log(err))
    }
  } 

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form className="formx" action="" onSubmit={handleSubmit}>
              <h1 className='tit'>Registrarse</h1>
            <div className='formul'>
            <div className='mb-3'>
                 <label className="labels" htmlFor='name'><strong>Nombre</strong></label>
                 <input className="inputs" type="text" placeholder='Ingrese su nombre' name='name' onChange={handleInput}/>
                 {errors.name && <span className='text-danger'>{errors.name}</span>}
               </div>
               <div>
                 <label  className="labels" htmlFor='email'><strong>Correo Electronico</strong></label>
                 <input type="email" placeholder='Ingrese su correo' name='email' onChange={handleInput}
                 className="inputs"/>
                 {errors.email && <span className='text-danger'>{errors.email}</span>}
               </div>
               <div>
                 <label  className="labels" htmlFor='password'><strong>Contraseña</strong></label>
                 <input type="password" placeholder='Ingrese una contraseña' name='password' onChange={handleInput}
                  className="inputs"/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
               </div>
               <br></br>
               <button type='submit' className='boton w-100'><strong>Registrarse</strong></button>
               <Link to="/" className='tam w-100'><strong>Ingresar</strong></Link>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Signup