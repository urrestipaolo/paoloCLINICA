import { Router } from "express";
import { getCita, getCitasFechas } from "../controllers/cita.controller";
import { postCita } from "../controllers/cita.controller";
import { putCita } from "../controllers/cita.controller";
import { deleteCita } from "../controllers/cita.controller";

import { verifyToken } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/", getCita
    /* #swagger.tags = ['LISTA DE CITAS']
    #swagger.summary = 'PODER ENCONTRAR UNA CITA'
    */
);
router.get("/total", /* verifyToken, authorize("GERENCIA"), */ getCitasFechas
/* #swagger.tags = ['LISTA DE CITAS']
    #swagger.summary = 'PODER VER TODAS LAS CITAS DE UNA FECHA'
    */
);

router.post("/", /* verifyToken, authorize("GERENCIA", 'MEDICO'), */ postCita
    /* #swagger.tags = ['LISTA DE CITAS']
    #swagger.summary = 'PODER CREAR UNA CITA'
    */
);
router.put("/:id", /* verifyToken, authorize("MEDICO"), authorize("GERENCIA"), */ putCita
/* #swagger.tags = ['LISTA DE CITAS']
    #swagger.summary = 'PODER ACTUALIZAR UNA CITA'
    */
);
router.delete("/:id", /* verifyToken, authorize('GERENCIA'), */ deleteCita
    /* #swagger.tags = ['LISTA DE CITAS']
    #swagger.summary = 'PODER ELIMINAR'
    */
);


export default router;