import React from 'react'
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './pages/SignUp/Signup'
import Home from './pages/Home/Home'
import Reporte from './pages/Reporte/Reporte'
import Registro from './pages/Registro/Registro'

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Login/>}></Route> 
       <Route path='/signup' element={<Signup/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/reporte' element={<Reporte/>}></Route>
       <Route path='/registro' element={<Registro/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App