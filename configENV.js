require('dotenv').config(); // Dùng thư viện dotenv để gọi biến môi trường
module.exports = {
    SECRETKEY: process.env.SECRETKEY,
};