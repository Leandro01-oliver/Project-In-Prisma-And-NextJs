import { prismaCliente } from "../../../../../../config/prismaCliente";


const handlerUpdateEventoId = async (req, res) => {

    const {
        method
    } = req

    const {
        id
    } = req.query

    const idParse = parseInt(id);

    const {
        title,
        description
    } = req.body

    if (method === "PUT") {

        const evento = await prismaCliente.evento.update({
            where: {
                id: idParse
            },
            data: {
                title,
                description
            }
        });

        res.status(200).json({
                evento
        })
    }

}

export default handlerUpdateEventoId;