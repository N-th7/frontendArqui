import React from 'react'
import Navbar from '../../shared/components/Navbar'
import '../../styles/Reporte.css'
import { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {IconName} from "react-icons/fa";

function Reporte(props) {
    const navigation=useNavigate();
    const location = useLocation();
    const [id,setid]=useState();
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

      const onPrint = () => {
        window.print()
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
            <div  className='bg-dark vh-100'>
                <div className="tituloInicio">
                    <h1>Reporte de Gastos</h1>
                </div>
                <div className="listaInEg">
                <table className="table table-bordered table-hover mt-3">
            <thead >
              <tr>
                <th scope="col">Tipo</th>
                <th scope="col">Monto</th>
                <th scope="col">Fecha</th>
                <th className="no-print"scope="col">Opciones</th>
              </tr>
            </thead>  
            <tbody>
                <td>fef</td>
                <td>mvring</td>
                <td>mvring</td>
                <td>
                <Link
                  className="btn btn-info">
                  <i class="bi bi-pencil-fill"></i>
                </Link>
                </td>
            </tbody>
          </table>
                </div>
                <div className="ladoDerecho no-print">
                    <div className="usuarioInfoCont">
                        
                        <div className="usuarioInfo">
                        <p className="info">{nombre}</p>
                        <p className="info">{correo}</p>
                        </div>
                    </div>

                    <div className="saldoBoton">
                        <p className="saldo">Saldo: 450 Bs</p>
                        <button className="registrarMovimiento" onClick={navigateRegister}><strong>Registrar movimiento</strong></button>
                        <button className="registrarMovimiento" onClick={onPrint}><strong>Imprimir</strong></button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Reporte