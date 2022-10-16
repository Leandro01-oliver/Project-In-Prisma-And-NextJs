import { prismaCliente } from "../../../../../../config/prismaCliente";


const handlerDeleteEventoId = async (req, res) =>{

    const {
        method
    } = req

    const {
        id
    } = req.query

    const idParse = parseInt(id);

    if(method === "DELETE"){

       const evento = await prismaCliente.evento.delete({
        where: {
            id: idParse
        }
       });

       res.status(200).json({
            evento
       })
    }

}

export default handlerDeleteEventoId;