import { Router } from "express";
import { getMedicos } from "../controllers/medico.controller";
import { postMedico } from "../controllers/medico.controller";
import { putMedico } from "../controllers/medico.controller";
import { deleteMedico } from "../controllers/medico.controller";

import { verifyToken } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/", /* verifyToken, */ getMedicos
        /* #swagger.tags = ['MEDICOS']
    #swagger.summary = 'VER LA LISTA DE LOS MEDICOS'
    */
);
router.post("/", /* verifyToken, authorize("GERENCIA"), */ postMedico
        /* #swagger.tags = ['MEDICOS']
    #swagger.summary = 'CREAR UN MEDICO'
    */
);
router.put("/:id", /* verifyToken, authorize("GERENCIA"), */ putMedico
        /* #swagger.tags = ['MEDICOS']
    #swagger.summary = 'ACTUALIZAR UN MEDICO'
    */
);
router.delete("/:id", /* verifyToken, authorize("GERENCIA"), */ deleteMedico
        /* #swagger.tags = ['MEDICOS']
    #swagger.summary = 'ELIMINAR UN MEDICO'
    */
);



export default router;