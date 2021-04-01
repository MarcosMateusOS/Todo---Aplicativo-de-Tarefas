import React,{ useState, useEffect }from 'react';
import  * as S from './styles'



function RegisterCard() {

  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[firstPassword,setFirst] = useState();
  const[secondPassword,setSecond] = useState();
  const[date,setDate] = useState();

  function validatePassword(){

    if(firstPassword == secondPassword)
    {
      return true;
    }else
      return false;
  }

  function register()
  {
    if(validatePassword())
    {
      alert('CADASTRO FEITO COM SUCESSo')
    }else
    alert('SENHA DIFERENTES')

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
            type="date" 
            placeholder="Data de Nascimento"
            onChange={e => setDate(e.target.value)}
            value={date} 
      />
      <input 
            type="password" 
            placeholder="Senha"
            onChange={e => setFirst(e.target.value)}
            value={firstPassword} 

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