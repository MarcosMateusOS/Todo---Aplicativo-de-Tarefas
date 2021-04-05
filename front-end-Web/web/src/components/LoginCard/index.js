import React,{ useState, useEffect }from 'react';
import  * as S from './styles';
import api from '../../services/api';
import {Link} from 'react-router-dom';



function LoginCard() {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  async function login(){
    console.log(email,password)
    await api.post('/user/authenticate',{
      email,
      password

    }).then(() =>
      alert('logado com sucesso')
    )

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