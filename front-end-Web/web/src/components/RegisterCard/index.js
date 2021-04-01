import React from 'react';
import  * as S from './styles'



function RegisterCard() {
  return (

    <S.Container>

      
      <input type="text" placeholder="Nome"/>
      <input type="text" placeholder="E-mail"/>
      <input type="date" placeholder="Data de Nascimento"/>
      <input type="password" placeholder="Senha"/>
      <input type="password" placeholder="Confirmar Senha"/>

      <S.buttonsArea>
        <button type='button'>CADASTRAR</button>
      </S.buttonsArea>
        
    </S.Container>

  )
   
}

export default RegisterCard;