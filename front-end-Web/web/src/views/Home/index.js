import React,{ useState, useEffect }from 'react';
import * as S from './styles';
import api from '../../services/api';

//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import Task from '../../components/Task';


function Home() {

  const[filterActived, setfilterActived] = useState('all');
  const[tasks,setTasks] = useState([]);
  const[lateCount,setLateCount]=useState();

  async function loadTasks(){
    
    await api.get(`/task/filter/${filterActived}/00:D0:56:F2:B5:12`)
    .then(response => {
      setTasks(response.data)
    })
  }

  async function lateVerify(){

    await api.get(`/task/filter/late/00:D0:56:F2:B5:12`)
    .then(response => {
      setLateCount(response.data.length)
    })

  }


  function Notification(){
    setfilterActived('late');
  }

  useEffect(()=>{
    loadTasks();
    lateVerify();
  },[filterActived])
  
  return (
    
    <S.Container>

      <Header lateCount={lateCount} clickNotification={Notification} />
      
      <S.FilterArea>
 
        <button type='button' onClick={()=>setfilterActived("all")}> 
        <Filter title="Todos"   actived={filterActived == 'all'}/>
        </button>

        <button type='button' onClick={()=>setfilterActived("today")}> 
        <Filter title="Hoje"    actived={filterActived == 'today'} />
        </button>

        <button type='button' onClick={()=>setfilterActived("week")} > 
        <Filter title="Semana"  actived={filterActived == 'week'} />
        </button>

        <button type='button' onClick={()=>setfilterActived("month")}> 
        <Filter title="Mês"     actived={filterActived == 'month'} />
        </button>

        <button type='button' onClick={()=>setfilterActived("year")}> 
        <Filter title="Ano"     actived={filterActived == 'year'} />
        </button>

       
        
        
      </S.FilterArea>

    <S.Title> 
      <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' :'TAREFAS'}</h3>
    </S.Title>
      <S.Content>
        {
          tasks.map(t => (
              <Task type={t.type} title={t.title} when={t.when}/>
          ))
          
        }
       
      </S.Content>
      <Footer/>

    </S.Container>
    
  
  )
   
}

export default Home;
