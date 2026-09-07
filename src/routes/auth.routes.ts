import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register
    /* #swagger.tags = ['REGISTRO Y SESIÓN']
    #swagger.summary = 'REGISTRARSE EN EL SISTEMA'
    */
);
router.post("/login", login
        /* #swagger.tags = ['REGISTRO Y SESIÓN']
    #swagger.summary = 'INICIAR SESION EN EL SISTEMA'
    */
);

export default router;