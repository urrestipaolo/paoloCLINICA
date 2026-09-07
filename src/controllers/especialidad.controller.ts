import type { Response, Request } from "express";
import { especialidadModel } from "../models/especialidad.model";

//LECTURA DE LISTA DE LOS PACIENTES
export const getEspecialidad = async ( req: Request, res: Response): Promise<void> => {
    try {
        const especialidadx = await especialidadModel.findAll()
        res.json({ totalEspecialidades: especialidadx.length, data: especialidadx});
    } catch (error) {
        console.error("ERROR AL CONSULTAR LOS DATOS SQL: ");
        res.status(500).json({
            message: "ERROR AL CONECTAR A LA BASE DE DATOS"
        })
    }
};


//CREACION DE ESPECIALIDADES
export const postEspecialidad = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { especialidad } = req.body;
    /*
    const userId = req.user!.id;
    const email = req.user!.email;
    const rol = req.user!.role;
    console.log(userId);
    console.log(email);
    console.log(rol);
    */
    if (!especialidad) {
      res.status(400).json({ err: "Se debe ingresar la información completa" });
      return;
    }
    const newEspecialidad = await especialidadModel.create(especialidad);
    res
      .status(201)
      .json({ message: "Especialidad creada con exito", data: newEspecialidad });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};


//ACTUALIZAR UNA ESPECIALIDAD
export const putEspecialidad = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "El ID debe ser un numero valido" });
      return;
    }
    const { especialidad} = req.body;
    const updateEspecialidad = await especialidadModel.update(id, { especialidad });
    res.status(200).json({
      message: "Especialidad actualizada con exito",
      data: updateEspecialidad,
    });
  } catch (error) {
    res.status(500).json({ message: "error del servidor" });
  }
};


//ELIMINAR ESPECIALIDADES
export const deleteEspecialidad = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "El ID debe ser un numero valido" });
      return;
    }
    await especialidadModel.delete(id);
    res.status(200).json({ message: "Especialidad eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "error en el servidor" });
  }
};