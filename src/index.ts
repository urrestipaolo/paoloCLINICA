import express, { type Request, type Response } from "express"; 
import swaggerRouter from "./routes/swagger.router.js";
import cors from "cors"

//IMPORTACIONES DE LAS TABLAS
import pacienteRouter from "./routes/paciente.routes.js"
import medicoRouter from "./routes/medico.routes.js"
import especialidadRouter from "./routes/especialidad.routes.js"
import citaRouter from "./routes/cita.routes.js"
import volumenRouter from "./routes/volumen.routes.js"
import autenticacionRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes";

const port = process.env.PORT; 



const app = express();

// Middlewares 
app.use(express.json());
app.use(cors())

//TABLAS
app.use("/auth", autenticacionRouter)

app.use("/pacientes", pacienteRouter
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
)
app.use("/medicos", medicoRouter
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
)
app.use("/especialidades", especialidadRouter
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
)
app.use("/citas", citaRouter
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
)
app.use("/volumen", volumenRouter
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
)

app.use("/usuarios", userRouter);


app.use("/api/docs", swaggerRouter) 


app.get("/", (req: Request, res: Response) => {
    /*#swagger.tags = ['Tests']*/
    res.json({
        status: "Server online",
        version: "1.0.0"
    });
});

app.listen(port, () => {
    console.log(`URL: http://localhost:${port}`);
});