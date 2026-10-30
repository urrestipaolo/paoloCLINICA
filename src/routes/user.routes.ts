import { Router } from "express";
import { deleteUser, getUsers, putUser } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/", getUsers
                /* #swagger.tags = ['USUARIOS DEL SISTEMA']
    #swagger.summary = 'VER LA LISTA DE LOS USUARIOS REGISTRADOS EN EL SISTEMA'
    */
);
router.put("/:id", /* verifyToken, authorize("GERENCIA"), */ putUser
            /* #swagger.tags = ['USUARIOS DEL SISTEMA']
    #swagger.summary = 'ACTUALIZAR UN USUARIO DEL SISTEMAN'
    */
);
router.delete("/:id", /* verifyToken, authorize("GERENCIA"), */ deleteUser
            /* #swagger.tags = ['USUARIOS DEL SISTEMA']
    #swagger.summary = 'ELIMINAR UN USUARIO DEL SISTEMA'
    */
);
export default router;