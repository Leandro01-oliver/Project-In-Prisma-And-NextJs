import { prismaCliente } from "../../../../../../config/prismaCliente";


const handlerDeleteEventoAll = async (req, res) =>{

    const {
        method
    } = req

    if(method === "DELETE"){

       const evento = await prismaCliente.evento.deleteMany();

       res.status(200).json({
            evento
       })
    }

}

export default handlerDeleteEventoAll;