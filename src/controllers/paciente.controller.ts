import type { Response, Request } from "express";
import { pacienteModel } from "../models/paciente.model";

//LECTURA DE LISTA DE LOS PACIENTES
export const getPaciente = async ( req: Request, res: Response): Promise<void> => {
    try {
        const paciente = await pacienteModel.findAll()
        res.json({ totalPacientes: paciente.length, data: paciente});
    } catch (error) {
        console.error("ERROR AL CONSULTAR LOS DATOS SQL: ");
        res.status(500).json({
            message: "ERROR AL CONECTAR A LA BASE DE DATOS"
        })
    }
}

//CREACION DE PACIENTES
export const postPaciente = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { nombre, apPaterno, apMaterno, telefono, email, fechaNacimiento } = req.body;
    /*
    const userId = req.user!.id;
    const email = req.user!.email;
    const rol = req.user!.role;
    console.log(userId);
    console.log(email);
    console.log(rol);
    */
    if (!nombre || !apPaterno || !apMaterno || !telefono || !email || !fechaNacimiento) {
      res.status(400).json({ err: "Se debe ingresar la información completa" });
      return;
    }
    const newPaciente = await pacienteModel.create(nombre, apPaterno, apMaterno, telefono, email, fechaNacimiento);
    res
      .status(201)
      .json({ message: "paciente creado con exito", data: newPaciente });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};


//ACTUALIZAR PACIENTES
export const putPaciente = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "El ID debe ser un numero valido" });
      return;
    }
    const { nombre, apPaterno, apMaterno, telefono, email, fechaNacimiento} = req.body;
    const updatePaciente = await pacienteModel.update(id, { nombre, apPaterno, apMaterno, telefono, email, fechaNacimiento });
    res.status(200).json({
      message: "Paciente actualizado con exito",
      data: updatePaciente,
    });
  } catch (error) {
    res.status(500).json({ message: "erro del servidor" });
  }
};


//ELIMINAR PACIENTES
export const deletePaciente = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "El ID debe ser un numero valido" });
      return;
    }
    await pacienteModel.delete(id);
    res.status(200).json({ message: "paciente eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "error en el servidor" });
  }
};

