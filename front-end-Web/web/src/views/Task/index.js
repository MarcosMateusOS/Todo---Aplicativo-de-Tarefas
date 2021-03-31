import React,{ useState, useEffect }from 'react';
import * as S from './styles';
import api from '../../services/api';
import typeIcons from '../../utils/typeIcons';

//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function Task() {

 
  const[lateCount,setLateCount]=useState();
  const[type,setType]=useState();

  

  async function lateVerify(){

    await api.get(`/task/filter/late/00:D0:56:F2:B5:12`)
    .then(response => {
      setLateCount(response.data.length)
    })

  }

  useEffect(()=>{
    lateVerify();
  },[])
  
  return (
    
    <S.Container>
      <Header lateCount={lateCount} />

      <S.Form>

        <S.Icons>

            {
                typeIcons.map((icon,index) =>(
                    index > 0 && 
                    <button type='button' onClick={()=>setType(index)}>

                        <img src={icon} alt='Tipos de tarefas'
                        className={type && type != index && 'inative'}/>

                    </button>
                ))
            }

        </S.Icons>
           
        <S.Input>
            <span>Título</span>
            <input type="text" placeholder="Título da Tarefa"></input>
        </S.Input>

        <S.TextArea>
            <span>Título</span>
            <textarea rows={5} placeholder="Detalhes da tareafa"/>
        </S.TextArea>


      </S.Form>


      <Footer/>
    </S.Container>
    
  
  )
   
}

export default Task;
