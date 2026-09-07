import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'API de Estudiantes',
        description: 'Documentación automática generada para el bootcamp',
        version: '1.0.0',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    components: {
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};

const outputFile = 'swagger-output.json';

const endpointsFiles = ['./src/index.ts'];

swaggerAutogen({openapi : '3.0.0'})(outputFile, endpointsFiles, doc).then(async () => {
    await import('../index.js');
});