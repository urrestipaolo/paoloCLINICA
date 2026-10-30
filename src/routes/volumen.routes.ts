import { Router } from "express";
import { getVolumen } from "../controllers/volumen.controller";

import { verifyToken } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/", /* verifyToken, authorize("GERENCIA"), */ getVolumen
            /* #swagger.tags = ['VOLUMEN TOTAL']
    #swagger.summary = 'VER TODAS LAS CITAS QUE SE COMPLETARON Y CANCELARON'
    */
);

export default router;
