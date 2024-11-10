// src/swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Opciones de configuración para Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Compuestos Químicos',
            version: '1.0.0',
            description: 'Documentación de la API para la gestión de compuestos químicos y elementos',
        },
        servers: [
            {
                url: `http://localhost:${process.env.APP_PORT || 3000}`,
                description: 'Servidor local',
            },
        ],
        components: {
            schemas: {
                Elemento: {
                    type: 'object',
                    required: ['nombre', 'simbolo', 'numeroAtomico', 'configuracionElectronica'],
                    properties: {
                        nombre: {
                            type: 'string',
                            description: 'Nombre del elemento químico',
                            example: 'Hidrógeno',
                        },
                        simbolo: {
                            type: 'string',
                            description: 'Símbolo del elemento químico',
                            example: 'H',
                        },
                        numeroAtomico: {
                            type: 'integer',
                            description: 'Número atómico del elemento',
                            example: 1,
                        },
                        configuracionElectronica: {
                            type: 'string',
                            description: 'Configuración electrónica del elemento',
                            example: '1s1',
                        },
                    },
                },
                Compuesto: {
                    type: 'object',
                    required: ['nombre', 'formulaQuimica', 'masaMolar', 'estadoAgregacion', 'elementos'],
                    properties: {
                        nombre: {
                            type: 'string',
                            description: 'Nombre del compuesto químico',
                            example: 'Agua',
                        },
                        formulaQuimica: {
                            type: 'string',
                            description: 'Fórmula química del compuesto',
                            example: 'H2O',
                        },
                        masaMolar: {
                            type: 'number',
                            description: 'Masa molar del compuesto en g/mol',
                            example: 18.015,
                        },
                        estadoAgregacion: {
                            type: 'string',
                            description: 'Estado de agregación del compuesto (Sólido, Líquido, Gas)',
                            example: 'Líquido',
                        },
                        elementos: {
                            type: 'array',
                            description: 'Lista de elementos que conforman el compuesto',
                            items: {
                                type: 'object',
                                properties: {
                                    elementoId: {
                                        type: 'string',
                                        description: 'ID del elemento asociado al compuesto',
                                        example: '60d5ec49c45d1f4a3c8c6f9b',
                                    },
                                    cantidadAtomos: {
                                        type: 'integer',
                                        description: 'Cantidad de átomos de este elemento en el compuesto',
                                        example: 2,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.js'], // Ruta de los archivos de rutas para Swagger
};

// Generar la documentación Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
