import axios from "axios"

const getEventoAll = () =>{

    axios.get("api/get/evento/all/")
    .then((res)=>{
        console.log(res.data)
    })
    .catch(()=>{
        console.log("Não foi possível chamar o data de evento")
    })
      
}

export { getEventoAll }