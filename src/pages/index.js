import { deleteEventoAll } from '../../utils/database/delete/all'
import { deleteEventoId } from '../../utils/database/delete/id'
import { postEvento } from '../../utils/database/post'
import { updateEventoAll } from '../../utils/database/update/all'
import { updateEventoId } from '../../utils/database/update/id'

const Home = () =>{
  return (
    <>
      <button
      onClick={()=>{
        postEvento();
      }}
      >
        Criar evento
      </button>
      <button
      onClick={()=>{
        deleteEventoId(3);
      }}
      >
        Deletar por id de evento
      </button>
      <button
      onClick={()=>{
        deleteEventoAll();
      }}
      >
        Deletar todos os evento
      </button>
      <button
      onClick={()=>{
        updateEventoId(4);
      }}
      >
        update por id de evento
      </button>
      <button
      onClick={()=>{
        updateEventoAll();
      }}
      >
        update de todos os evento
      </button>
    </>
  )
}

export default Home
