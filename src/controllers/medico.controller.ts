import type { Response, Request } from "express";
import { medicoModel } from "../models/medico.model";

//LECTURA DE LISTA DE LOS MEDICOS
export const getMedicos = async ( req: Request, res: Response): Promise<void> => {
    try {
        const medicox = await medicoModel.findAll()
        res.json({ totalMedicos: medicox.length, data: medicox});
    } catch (error) {
        console.error("ERROR AL CONSULTAR LOS DATOS SQL: ");
        res.status(500).json({
            message: "ERROR AL CONECTAR A LA BASE DE DATOS"
        })
    }
};


//CREACION DE MEDICOS
export const postMedico = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { medico, especialidadId } = req.body;
    /*
    const userId = req.user!.id;
    const email = req.user!.email;
    const rol = req.user!.role;
    console.log(userId);
    console.log(email);
    console.log(rol);
    */
    if (!medico || !especialidadId) {
      res.status(400).json({ err: "Se debe ingresar la información completa" });
      return;
    }
    const newMedico = await medicoModel.create(medico, especialidadId);
    res
      .status(201)
      .json({ message: "Medico creado con exito", data: newMedico });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};


//ACTUALIZAR UN MEDICO
export const putMedico = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "El ID debe ser un numero valido" });
      return;
    }
    const { medico, especialidadId} = req.body;
    const updateMedico = await medicoModel.update(id, { medico, especialidadId });
    res.status(200).json({
      message: "Medico actualizado con exito",
      data: updateMedico,
    });
  } catch (error) {
    res.status(500).json({ message: "erro del servidor" });
  }
};


//ELIMINAR MEDICOS
export const deleteMedico = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "El ID debe ser un numero valido" });
      return;
    }
    await medicoModel.delete(id);
    res.status(200).json({ message: "Medicos eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "error en el servidor" });
  }
};