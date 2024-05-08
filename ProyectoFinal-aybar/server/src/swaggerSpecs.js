import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Express API ecommerce",
            description: "Ecommerce"
        }
    },
    apis: ['./docs/**/*.yaml']
}

export const swaggerSpecs = swaggerJsdoc(options);