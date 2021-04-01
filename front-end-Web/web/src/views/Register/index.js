import React from 'react';
import * as S from './styles';
import api from '../../services/api';


//Componentes
import Header from '../../components/HeaderLogin';
import Footer from '../../components/Footer';
import RegisterCard from '../../components/RegisterCard';


import CadastroImage from '../../assets/cadastro.png';




function Register() {

 
  
  return (
    
    <S.Container>
      <Header />
         
        <S.AreaRegister>
          <img src={CadastroImage}/>
          <RegisterCard/>
        </S.AreaRegister>
      <Footer/> 
    </S.Container>
    
  
  )
   
}

export default Register;
