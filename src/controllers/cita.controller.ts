import type { Response, Request } from "express";
import { citaModel } from "../models/cita.model";

//LECTURA DE LISTA DE LOS PACIENTES
export const getCita = async ( req: Request, res: Response): Promise<void> => {
    try {
        const citax = await citaModel.findAllwhitFilters()
        res.json({ totalCitas: citax.length, data: citax});
    } catch (error) {
        console.error("ERROR AL CONSULTAR LOS DATOS SQL: ");
        res.status(500).json({
            message: "ERROR AL CONECTAR A LA BASE DE DATOS"
        })
    }
};



//LECTURA DEL TOTAL DE LAS CITAS POR FECHA
export const getCitasFechas = async ( req: Request, res: Response) => {
    try {
// 1. Extraer la fecha desde los Query Parameters de la URL (ej: /citas?fecha=2026-09-04)
    const { fecha } = req.query;

    // 2. Validar que la fecha haya sido enviada
    if (!fecha) {
      return res.status(400).json({ 
        message: "El parámetro 'fecha' es requerido. Ejemplo: /citas?fecha=2026-09-04" 
      });
    }

    // 3. Llamar al método del modelo
    const citas = await citaModel.findByEstadoFecha(String(fecha));

    // 4. Retornar la respuesta al cliente
    return res.status(200).json(citas);
    } catch (error) {
        console.error("ERROR AL CONSULTAR LOS DATOS SQL:");
        res.status(500).json({
            message: "La fecha se debe ingresar de la siguiente manera: 0000-00-00 año-mes-dia "
        })
    }
};


//CREACION DE CITAS
export const postCita = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { pacienteId, fecha, estado, medicoId } = req.body;
    /*
    const userId = req.user!.id;
    const email = req.user!.email;
    const rol = req.user!.role;
    console.log(userId);
    console.log(email);
    console.log(rol);
    */
    if (!pacienteId || !fecha || !estado || !medicoId) {
      res.status(400).json({ err: "Se debe ingresar la información completa" });
      return;
    }
    const newCita = await citaModel.create(pacienteId, fecha, estado, medicoId);
    res
      .status(201)
      .json({ message: "Cita creada con exito", data: newCita });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};


//ACTUALIZAR UNA CITA
export const putCita = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "El ID debe ser un numero valido" });
      return;
    }
    const { pacienteId, fecha, estado, medicoId } = req.body;
    const updateCita = await citaModel.update(id, { pacienteId, fecha, estado, medicoId });
    res.status(200).json({
      message: "Cita actualizada con exito",
      data: updateCita,
    });
  } catch (error) {
    res.status(500).json({ message: "error del servidor" });
  }
};


//ELIMINAR CITAS
export const deleteCita = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "El ID debe ser un numero valido" });
      return;
    }
    await citaModel.delete(id);
    res.status(200).json({ message: "Cita eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "error en el servidor" });
  }
};