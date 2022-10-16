import axios from "axios"

const deleteEventoAll = () =>{

    axios.delete("api/delete/evento/all")
    .then((res)=>{
        console.log(res.data)
    })
    .catch(()=>{
        console.log("Não foi possível deletar o data de evento")
    })
      
}

export { deleteEventoAll }