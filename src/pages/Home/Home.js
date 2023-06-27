import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import Navbar from '../../shared/components/Navbar'
import '../../styles/Home.css'

function Home(props) {
  const idUsuario=props.idUsuario
  const[name,setName]=useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:8081')
    .then(res =>{
      console.log(res)
      if(res.data.valid){
         setName(res.data.idUsuario)
      }else{
        navigate('/login') 
      }
    })
    .catch(err=> console.log(err))
  })
  return (
    <Navbar>
    <div>
        <h1>welcome {name}</h1>
    </div>
    </Navbar>
  )
}

export default Home