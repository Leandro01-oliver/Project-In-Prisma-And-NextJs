import axios from "axios"

const deleteEventoId = (id) =>{

    axios.delete(`api/delete/evento/id/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch(()=>{
        console.log("Não foi possível deletar o data de evento")
    })
      
}

export { deleteEventoId }