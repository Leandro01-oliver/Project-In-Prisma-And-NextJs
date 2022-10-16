import { prismaCliente } from "../../../../../config/prismaCliente"


const handlerPostEvento = async (req, res) =>{

    const {
        method
    } = req

    const {
        title,
        description
    } = req.body

    if(method === "POST"){

       const evento = await prismaCliente.evento.create({
           data:{
            title,
            description
           }
       });

       res.status(201).json({
            evento
       })
    }

}

export default handlerPostEvento;