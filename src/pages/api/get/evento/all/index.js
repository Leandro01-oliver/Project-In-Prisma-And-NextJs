import { prismaCliente } from "../../../../../../config/prismaCliente";


const handlerGetEventoAll = async (req, res) =>{

    const {
        method
    } = req

    if(method === "GET"){

       const evento = await prismaCliente.evento.findMany();

       res.status(200).json({
            evento
       })
    }

}

export default handlerGetEventoAll;