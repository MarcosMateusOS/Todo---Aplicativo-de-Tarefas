import React,{ useState, useEffect,alert} from 'react';
import { Alert } from 'reactstrap';
import  * as S from './styles';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import axios from 'axios';



function LoginCard() {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  
  const[alert,setAlert] = useState(false);

  const login = () =>{ 
    axios({
      method:'post',
      data:{
        useremail:email,
        password:password
      },
      withCredentials :true,
      url:"http://localhost:8080/user/authenticate"

    }).then((res) => console.log(res));
  }
  
  async function signIn() {
   
  }

  return (

    <S.Container>
     
      <input 
            type="text" 
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
            value={email}      
            
      />
      <input 
            type="password" 
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
            value={password}
            
        
      />

      {
        alert != false? (
          <Alert 
            color='Alert'
         >LOGIN INVALIDO</Alert>
        ):''
      }

      <S.buttonsArea>
        <button type='button'>
          <Link to='/register'>

            CADASTRAR

          </Link>
        </button>

        <button onClick={login}>
          <Link>

            LOGAR
            
          </Link>
        </button>
      </S.buttonsArea>

      
        
    </S.Container>




  )
   
}

export default LoginCard;