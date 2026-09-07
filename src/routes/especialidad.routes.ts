import { Router } from "express";
import { getEspecialidad } from "../controllers/especialidad.controller";
import { postEspecialidad } from "../controllers/especialidad.controller";
import { putEspecialidad } from "../controllers/especialidad.controller";
import { deleteEspecialidad } from "../controllers/especialidad.controller";

import { verifyToken } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/", verifyToken, getEspecialidad
        /* #swagger.tags = ['ESPECIALIDAD MEDICA']
    #swagger.summary = 'VER LAS ESPECIALIDADES MEDICAS'
    */
);
router.post("/", verifyToken, authorize("GERENCIA"), postEspecialidad
    /* #swagger.tags = ['ESPECIALIDAD MEDICA']
    #swagger.summary = 'CREAR UNA ESPECIALIDAD MEDICA'
    */
);
router.put("/:id", verifyToken, putEspecialidad
        /* #swagger.tags = ['ESPECIALIDAD MEDICA']
    #swagger.summary = 'ACTUALIZAR UNA ESPECIALIDAD MEDICA'
    */
);
router.delete("/:id", verifyToken, authorize("GERENCIA"), deleteEspecialidad
    /* #swagger.tags = ['ESPECIALIDAD MEDICA']
    #swagger.summary = 'ELIMINAR UNA ESPECIALIDAD MEDICA'
    */
);


export default router;