var express = require('express');
var router = express.Router();
var customerModel = require('../model/customer');

// router đăng ký
// Cấu hình api lên swagger
/**
 * @swagger
 * /customer/addCustomer:
 *      post:
 *          summary: 'Đăng ký thêm người dùng'
 *          responses:
 *              200:
 *                  description: 'Thêm thành công'
 *              400:
 *                  description: 'Thêm thất bại'
 */

router.post('/addCustomer', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const objectCustomer = { name, email, password };
        await customerModel.create(objectCustomer);
        res.status(200).json({ status: true, message: 'Thêm người dùng thành công' });
    } catch (e) {
        res.status(404).json({ status: false, message: 'Thêm người dùng thất bại' });
    }
});

// router đăng nhập
// Cấu hình API lên swagger

router.post('/loginCustomer', async (req, res) => {
    try{
        const {email, password} = req.body;
        var checkUser = await customerModel.findOne({
            email: email,
            password: password
        });

        if(checkUser){
            res.status(400).json({status: true, message: 'Thành Công'});
        }else{
            res.status(400).json({status: false, message: 'Không tìm thấy'});
        }
    }catch(e){
        res.status(400).json({status: false, message: 'Thất bại'});
    }
})

module.exports = router