const swaggerJSDoc = require('swagger-jsdoc');
const options = {
    definition:{
        openapi: '3.0.0',
        info:{
            title: 'API ASM môn AND103',
            version: '1.0.0',
            description: 'Trọn bộ API của ASM môn AND 103'
        },
    },
    apis: ['./routes/*.js'], // Đường dẫn đến tất cả file .js trong thư mục routes
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;