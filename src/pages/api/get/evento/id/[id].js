import { prismaCliente } from "../../../../../../config/prismaCliente";


const handlerGetEventoId = async (req, res) =>{

    const {
        method
    } = req

    const {
        id
    } = req.query

    const idParse = parseInt(id);

    if(method === "GET"){

       const evento = await prismaCliente.evento.findUnique({
        where: {
          id: idParse
        }
       });

       res.status(200).json({
            evento
       })
    }

}

export default handlerGetEventoId;