import { Router } from "express";
import { getPaciente } from "../controllers/paciente.controller";
import { postPaciente } from "../controllers/paciente.controller";
import { putPaciente } from "../controllers/paciente.controller";
import { deletePaciente } from "../controllers/paciente.controller";

import { verifyToken } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/", /* verifyToken, */ getPaciente
            /* #swagger.tags = ['PACIENTES']
    #swagger.summary = 'VER LA LISTA DE LOS PACIENTES'
    */
);
router.post("/", /* verifyToken, authorize('MEDICO', 'GERENCIA'), */ postPaciente
                /* #swagger.tags = ['PACIENTES']
    #swagger.summary = 'CREAR UN PACIENTE'
    */
);
router.put("/:id", /* verifyToken, authorize('MEDICO', 'GERENCIA'), */ putPaciente
                /* #swagger.tags = ['PACIENTES']
    #swagger.summary = 'ACTUALIZAR UN PACIENTE'
    */
);
router.delete("/:id", /* verifyToken, authorize('GERENCIA'), */ deletePaciente
                /* #swagger.tags = ['PACIENTES']
    #swagger.summary = 'ELIMINAR UN PACIENTE'
    */
);


export default router;