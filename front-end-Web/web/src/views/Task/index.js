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
  const[id, setId]=useState();
  const[macaddress,setMacaddress] = useState('00:D0:56:F2:B5:12');
  const[done,setDone] = useState(false);
  const[title,setTitle] = useState();
  const[description,setDescription] = useState();
  const[date,setDate] = useState();
  const[hour,setHour] = useState();

  

  async function lateVerify(){

    await api.get(`/task/filter/late/00:D0:56:F2:B5:12`)
    .then(response => {
      setLateCount(response.data.length)
    })

  }

  async function save(){

    await api.post('/task/registerTask',{
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`
    }).then(() =>
      alert('TAREFA CADASTRADA COM SUCESSO')
    )

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
            <input 
                  type="text" 
                  placeholder="Título da Tarefa" 
                  onChange={e => setTitle(e.target.value)}
                  value={title}      
            />
        </S.Input>

        <S.TextArea>
            <span>Detalhes</span>
            <textarea 
                      rows={5} 
                      placeholder="Detalhes da Tarefa..."
                      onChange={e => setDescription(e.target.value)}
                      value={description}   
                      
            />
        </S.TextArea>

        <S.Input>
            <span>Data</span>
            <input 
                  type="date" 
                  placeholder="Título da Tarefa"
                  onChange={e => setDate(e.target.value)}
                  value={date}   

            />
            
        </S.Input>

        <S.Input>
            <span>Hora</span>
            <input 
                  type="time" 
                  placeholder="Título da Tarefa"
                  onChange={e => setHour(e.target.value)}
                  value={hour}   
            
            />
           
        </S.Input>

        <S.Options>

            <div>
              <input 
                    type="checkbox"
                    check={done}
                    onChange={()=>setDone(!done)}
              />
              <span>CONCLUÍDO</span>
            </div>

            <button type="button">EXCLUIR</button>

        </S.Options>


      </S.Form>

      <S.Save>
            <button type="button" onClick={save}>SALVAR </button>
      </S.Save>


      <Footer/>
    </S.Container>
    
  
  )
   
}

export default Task;
