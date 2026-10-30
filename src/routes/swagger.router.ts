import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const swaggerRouter: Router = Router();

// Obtener el directorio actual compatible con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construir la ruta absoluta hacia el archivo JSON (ajusta los '../' según dónde esté este archivo en tu estructura)
// Por ejemplo, si este archivo está en 'src/routes/', subimos dos niveles para llegar a la raíz del proyecto.
const swaggerDocumentPath = path.resolve(__dirname, '../../swagger-output.json');

// Leer y parsear el JSON de forma segura
const swaggerDoc = JSON.parse(fs.readFileSync(swaggerDocumentPath, 'utf8'));

swaggerRouter.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default swaggerRouter;