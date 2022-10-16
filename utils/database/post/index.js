import axios from "axios";


const postEvento = () => {

    let title = "Teste de criação do titulo";
    let description = "Teste de ciração da descrição";

    axios.post("api/post/evento/",{
      title: title,
      description: description
    })

}


export { postEvento }