import React,{ useState, useEffect }from 'react';
import api from '../../services/api';
import  * as S from './styles'




function RegisterCard() {

  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[password,setFirst] = useState();
  const[secondPassword,setSecond] = useState();
  
  function validatePassword(){

    if(password == secondPassword)
    {
      return true;
    }else
      return false;
  }

  async function register()
  { 
    if(validatePassword())
    {
      await api.post('/user/register',{
        name,
        email,
        password
      }).then(() =>
        alert('Cadastro feito com sucesso')
      )
    
    }else
      alert('SENHAS DIFERENTES')

  }
  return (

    <S.Container>

      
      <input 
            type="text" 
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
            value={name}   
      />
      <input 
            type="text" 
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
            value={email} 
      />
     
      <input 
            type="password" 
            placeholder="Senha"
            onChange={e => setFirst(e.target.value)}
            value={password} 

      />
      <input 
            type="password" 
            placeholder="Confirmar Senha"
            onChange={e => setSecond(e.target.value)}
            value={secondPassword}             
      />

      <S.buttonsArea>
        <button 
                type='button' 
                onClick={()=> register()}
        >
          CADASTRAR
          
        </button>
      </S.buttonsArea>
        
    </S.Container>

  )
   
}

export default RegisterCard;