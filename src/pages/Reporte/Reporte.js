import React from 'react'
import Navbar from '../../shared/components/Navbar'
import '../../styles/Reporte.css'
import { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
function Reporte(props) {
    const navigation=useNavigate();
    const location = useLocation();
    const [id,setid]=useState(0);
    const [nombre,setnombre]=useState("")
    const [correo,setCorreo]=useState("")

    const navigateRegister=(event)=>{
        navigation('/Registro',{
            state:{ 
             id: id,
             nombre: nombre,
             correo: correo
           }
           });
      }

    useEffect(() => {
        setid(location.state.id);
        setnombre(location.state.nombre)
        setCorreo(location.state.correo)

        console.log(correo)
      });
    
  return (
    <div>
        <Navbar></Navbar>
            <div  className='d-flex justify-content-center align-items-center bg-dark vh-100'>
                <h2 className="tituloInicio">Reporte total</h2>
                <div className="listaInEg">
                    <ul className="ul">
                    </ul>
                </div>
                <div className="ladoDerecho">
                    <div className="usuarioInfoCont">
                        
                        <div className="usuarioInfo">
                        <p className="info">{nombre}</p>
                        <p className="info">{correo}</p>
                        </div>
                    </div>

                    <div className="saldoBoton">
                        <p className="saldo">Saldo: 450 Bs</p>
                        <button className="registrarMovimiento" onClick={navigateRegister}>Registrar movimiento</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Reporte