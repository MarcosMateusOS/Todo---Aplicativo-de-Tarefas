import React from 'react';
import  * as S from './styles'



function LoginCard() {
  return (

    <S.Container>

      
      <input type="text" placeholder="E-mail"/>
      <input type="password" placeholder="Senha"/>

      <S.buttonsArea>
        <button type='button'>CADASTRAR</button>
        <button>LOGAR</button>
      </S.buttonsArea>
        
    </S.Container>

  )
   
}

export default LoginCard;