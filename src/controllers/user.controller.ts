import type { Response, Request } from "express";
import { userModel } from "../models/user.model";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    let usuarios = await userModel.findAll();
    res.json({ data: usuarios });
  } catch (error: any) {
    res.status(500).json({ message: error });
  }
};

export const putUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "El ID debe ser un numero valido" });
      return;
    }
    const { email, password } = req.body;
    const updateProduct = await userModel.update(id, { email, password });
    res.status(200).json({
      message: "Usuario actualizado con exito",
      data: updateProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "erro del servidor" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "El ID debe ser un numero valido" });
      return;
    }
    await userModel.delete(id);
    res.status(200).json({ message: "usuario eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "erro del servidor" });
  }
};
