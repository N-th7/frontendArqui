function Validation(values){
  let error={}
  const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  if(values.email===""){
    error.email="El nombre no debe estar vacío"
  }
  else if(!email_pattern.test(values.email)){
    error.email="Correo electronico no valido"
  }else{
    error.email=""
  }
  if(values.password===""){
    error.password="La contraseña no debe ser vacío"
  }
  else if(!password_pattern.test(values.password)){
    error.password="Contraseña no valida"
  }else{
    error.password=""
  }
  return error;
}
export default Validation;
 