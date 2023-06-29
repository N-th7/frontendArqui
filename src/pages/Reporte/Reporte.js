import React from 'react'
import Navbar from '../../shared/components/Navbar'
import '../../styles/Reporte.css'
import { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios';

function Reporte() {
    const [dat,setData]=useState([]);
=======
import axios from 'axios'
import logo from '../../imagenes/imagen.png'
import basurero from '../../imagenes/eliminar.png'
import editar from '../../imagenes/editar.png'

function Reporte(props) {
>>>>>>> Karis
    const navigation=useNavigate();
    const location = useLocation();
    const [id,setid]=useState(location.state.id);
    const [nombre,setnombre]=useState(location.state.nombre)
    const [correo,setCorreo]=useState(location.state.correo)
    const [dat,setData]=useState([]);
    const [saldo,setSaldo]=useState(0);
    var saldito=0

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
<<<<<<< HEAD
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


=======

      const [values,setValues]=useState({
        idUsuario:id
    })

    const [value,setValue]=useState({
      idMovimiento:0
  })

      const onPrint = () => {
        window.print()
      }
      function DeleteItems(idF){
        if(idF!=undefined){
          var miId=dat[idF].idMovimiento;
          axios.post('http://localhost:8081/reporte/borrarMov',{
            idMovimiento: miId,
          })
          .then(res=> {
          if(res.data.Res!=undefined){

          setData(res.data.Res)
        }
          })
          .catch(err=>console.log(err))


        }
       }


    useEffect(() => {
        console.log(saldito)
        axios.post('http://localhost:8081/reporte',values)
        .then(res=> {
        if(res.data.Res!=undefined){

          setData(res.data.Res)
        }
          })
          .catch(err=>console.log(err))

      });
    
>>>>>>> Karis
  return (
    <div>
        <Navbar></Navbar>
            <div  className='bg-dark vh-100'>
                <div className="tituloInicio">
                    <h1 >Reporte de Gastos</h1>
                </div>
                <div className="listaInEg">
<<<<<<< HEAD
                    <ul className="ul">
                    {
                                            
                    dat.map((da) =>( 

                        <li className="" key={da.idMovimiento}><p>{da.descripcion}</p> <p className="">{da.monto} Bs</p> <p className="">{da.fecha}</p></li>
                    ))
                }
                    </ul>
=======
                <table className="table table-bordered table-hover mt-3">
            <thead >
              <tr>
                <th scope="col">Tipo</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Monto</th>
                <th scope="col">Porcentaje</th>
                <th scope="col">Descuento</th>
                <th scope="col">Fecha</th>
                <th scope="col" className='no-print'>Opciones</th>
                
              </tr>
              {
                dat &&  dat.map((da,index)=>(
                  <tr id={da.idMovimiento}>
                    <td scope="col">{da.tipo}</td>
                    <td scope="col">{da.descripcion}</td>
                    <td scope="col" >{da.monto} Bs</td>
                    <td scope="col" >{da.descuento} %</td>
                    <td scope="col" >{da.monto-(da.monto*da.descuento/100)} Bs</td>
                    <td scope="col">{da.fecha}</td>
                    <td  className='no-print' id={da.idMovimiento} ><button className='editBorrar' key={da.idMovimiento} id={da.idMovimiento} onClick={() => DeleteItems(index)}><img src={basurero} width={30} ></img></button>
                    </td>
                    </tr>)
                    )
            }
            </thead>  

          </table>
>>>>>>> Karis
                </div>
                <div className="ladoDerecho no-print">
                    <div className="usuarioInfoCont">
                        
                        <div className="usuarioInfo">
                        <img src={logo} alt='' height={250}></img>
                        <p className="info">{nombre}</p>
                        <p className="info">{correo}</p>
                        </div>
                    </div>

                    <div className="saldoBoton">
                      <p className='invisible'> {
                            dat.map(function(da){
                              if(da.tipo === "Gasto"){
                                  saldito=saldito-da.monto
                              }else{
                                saldito=saldito+da.monto
                              }    
                          })
                        } </p>
                        <p className="saldo">Saldo:  {saldito} Bs</p>
                        <button className="registrarMovimiento" onClick={navigateRegister}><strong>Registrar movimiento</strong></button>
                        <button className="registrarMovimiento" onClick={onPrint}><strong>Imprimir</strong></button>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default Reporte