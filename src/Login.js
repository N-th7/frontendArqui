import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
import '../src/styles/Login.css'

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
            <form className="form" action="" onSubmit={handleSubmit}>
            <h1 className='tit'>Cash Control</h1>
              <div className='formu'>
               <div>
                 <label className="labels" htmlFor='email'><strong>Correo Electronico</strong></label>
                 <input type="email" placeholder=' Ingrese su correo' name='email'
                 onChange={handleInput} className="inputs"/>
                 {errors.email && <span className='text-danger'>{errors.email}</span>}
               </div>
               <div>
                 <label className="labels" htmlFor='password'><strong>Contraseña</strong></label>
                 <input className="inputs" type="password" placeholder='Ingrese su contraseña' name='password'
                 onChange={handleInput} />
                 {errors.password && <span className='text-danger'>{errors.password}</span>}
               </div>
               <br></br>
               <button type='submit'className='boton w-100 '><strong>Ingresar</strong></button>
               <Link to="/signup" className='w-100 tam'><strong>Registrarse</strong></Link>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Login