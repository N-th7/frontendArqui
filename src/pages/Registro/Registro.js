import React, { useState } from 'react'
import Navbar from '../../shared/components/Navbar'
import  '../../styles/Registro.css'
import axios from 'axios'
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
    
function Registro() {
    const [idUser,setid]=useState(0)
    const location = useLocation();
    const navigation=useNavigate();

    useEffect(() => {
      setid(location.state.id);
    });
      

  const[values,setvalues]= useState({
    idMovimiento:0,
    descripcion:'',
    monto:0,
    fecha:'',
    descuento:0,
    tipo:'tipo',
    idUsuario:0
  })



  const[errors,setErrors]=useState({})

    const handleInput=(event)=>{
    setvalues(prev =>({...prev,[event.target.name]:[event.target.value]}))
  }

  const handleSubmit=async(event)=>{
    console.log(idUser)
    values.idUsuario=idUser
    event.preventDefault();
    //setErrors(Validation(values));
    //if(errors.descripcion === "" && errors.monto === "" && errors.fecha === "" && errors.descuento === ""){
      axios.post('http://localhost:8081/Registro',values)
      .then(res=> {
        navigation('/reporte',{
          state:{ 
           id: idUser,
           nombre:location.state.nombre,
           correo:location.state.correo
         }
         });
         console.log(res)
      })
      .catch(err=>console.log(err))
    //}
  } 


  return (
    <div>
        <Navbar/>
        <div className="form" action="" onSubmit={handleSubmit}>
        <h1 className="titulo">Registro Movimiento</h1>
        <form className="formu" method="post">       

          <label className="labels">Descripcion</label><br></br>
          <input className="mo" id='descripcion' type="text" name='descripcion' onChange={handleInput}/><br></br>

          <label className="labels">Monto</label><br></br>
          <input className="mo" id='monto' type="int" name='monto' onChange={handleInput}/><br></br>

          <label className='labels'>Fecha</label><br></br>
          <input className="mo" id='fecha' type="date" name='fecha' onChange={handleInput}/><br></br>

          <label className='labels'>Descuento</label><br></br>
          <input className="mo" id='descuento' type="text" name='descuento' onChange={handleInput}/><br></br>

        <div className="checks">
          <input type="checkbox" id="cbox2" value="second_checkbox"></input>
          <label>Ingreso</label>
          <input className="cajas" type="checkbox" id="cbox2" value="second_checkbox"></input>
          <label>Gasto</label>
        </div>
          
          <div className="posicionBoton">
          <button className="boton" type="" >Cancelar</button><br></br>
          <button className="boton" type="submit">Registrar</button><br></br>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registro