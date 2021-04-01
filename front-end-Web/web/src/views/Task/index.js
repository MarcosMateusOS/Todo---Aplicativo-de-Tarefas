import React,{ useState, useEffect }from 'react';
import * as S from './styles';
import api from '../../services/api';
import typeIcons from '../../utils/typeIcons';

//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';


import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png'



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
            <span>Detalhes</span>
            <textarea rows={5} placeholder="Detalhes da Tarefa"/>
        </S.TextArea>

        <S.Input>
            <span>Data</span>
            <input type="date" placeholder="Título da Tarefa"></input>
            
        </S.Input>

        <S.Input>
            <span>Hora</span>
            <input type="time" placeholder="Título da Tarefa"></input>
           
        </S.Input>

        <S.Options>

            <div>
              <input type="checkbox"/>
              <span>CONCLUÍDO</span>
            </div>

            <button type="button">EXCLUIR</button>

        </S.Options>


      </S.Form>

      <S.Save>
            <button type="button">SALVAR </button>
      </S.Save>


      <Footer/>
    </S.Container>
    
  
  )
   
}

export default Task;
