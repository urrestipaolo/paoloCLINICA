import type { Response, Request } from "express";
import { volumenModel } from "../models/volumen.model";

//LECTURA DEL VOLUMEN TOTAL POR ESPECIALIDAD
export const getVolumen = async ( req: Request, res: Response): Promise<void> => {
    try {
        const volumenx = await volumenModel.findAll()
        res.json({ total_De_Citas_Por_Especialidades: volumenx.length, data: volumenx});
    } catch (error) {
        console.error("ERROR AL CONSULTAR LOS DATOS SQL: ");
        res.status(500).json({
            message: "ERROR AL CONECTAR A LA BASE DE DATOS"
        })
    }
}