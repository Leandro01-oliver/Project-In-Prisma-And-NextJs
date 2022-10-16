import axios from "axios"

const updateEventoAll = () =>{

    let title = "Teste de criação do titulo com edição";
    let description = "Teste de ciração da descrição com edição";

    axios.put("api/update/evento/all",{
        title: title,
        description: description
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch(()=>{
        console.log("Não foi possível atualizar o data de evento")
    })
      
}

export { updateEventoAll }