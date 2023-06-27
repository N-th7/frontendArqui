import React from 'react'
import Navbar from '../../shared/components/Navbar'
import '../../styles/Reporte.css'
import { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Reporte() {
    const [dat,setData]=useState([]);
    const navigation=useNavigate();
    const location = useLocation();
    const [id,setid]=useState(0);
    const [nombre,setnombre]=useState("")
    const [correo,setCorreo]=useState("")

    const [values,setValues]=useState({
        idUsuario:0
    })

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
        setCorreo(location.state.correo);
        setValues({idUsuario:[id]})
        //}
        var rd=[]

        async function getMovimientos() {
            setid(location.state.id);
            axios.post('http://localhost:8081/reporte',values)
            .then(res=> {
             console.log(res.data.Res)
             setData(res.data.Res)
              })
              .catch(err=>console.log(err))
        }

        getMovimientos();
        console.log(dat)
       
        }, []);


  return (
    <div>
        <Navbar></Navbar>
            <div>
                <h2 className="tituloInicio">Reporte total</h2>
                <div className="listaInEg">
                    <ul className="ul">
                    {
                                            
                    dat.map((da) =>( 

                        <li className="" key={da.idMovimiento}><p>{da.descripcion}</p> <p className="">{da.monto} Bs</p> <p className="">{da.fecha}</p></li>
                    ))
                }
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