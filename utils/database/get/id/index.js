import axios from "axios"

const getEventoId = (id) =>{

    axios.get(`api/get/evento/id/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch(()=>{
        console.log("Não foi possível chamar o data de evento")
    })
      
}

export { getEventoId }