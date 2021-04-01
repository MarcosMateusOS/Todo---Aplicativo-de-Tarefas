import React from 'react';
import * as S from './styles';
import api from '../../services/api';


//Componentes
import Header from '../../components/HeaderLogin';
import Footer from '../../components/Footer';
import LoginCard from '../../components/LoginCard';


import LoginImage from '../../assets/LOGIN.png';




function Login() {

 
  
  return (
    
    <S.Container>
      <Header />
         
        <S.AreaLogin>
          <img src={LoginImage}/>
          <LoginCard/>
        </S.AreaLogin>
      <Footer/> 
    </S.Container>
    
  
  )
   
}

export default Login;
