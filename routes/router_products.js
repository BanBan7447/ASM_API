var express = require('express');
var router = express.Router();
var productModel = require('../model/product');

// router thêm sản phẩm
/**
 * @swagger
 * /product/addProduct:
 *   post:
 *      summary: 'Thêm sản phẩm'
 *      requestBody:
 *          required: true,
 *          content:
 *              application/json:
 *                  type: string
 *      responses:
 *        200:
 *          description: 'Thêm sản phẩm thành công'
 *        400:
 *          description: 'Thêm sản phẩm thất bại'
 */

router.post('/addProduct', async (req, res) => {
    try {
        const { Type, Image, Name, BasePrice, Origin, Desription, Rating } = req.body;
        const objectProduct = { Type, Image, Name, BasePrice, Origin, Desription, Rating };
        await productModel.create(objectProduct);
        res.status(200).json({ status: true, message: 'Thêm thành công' });
    } catch (e) {
        res.status(400).json({ status: false, message: 'Thêm thất bại' });
    }
});

// router lấy sản phẩm theo loại
/**
 * @swagger
 * /product/getProductsByType:
 *   get:
 *      summary: 'Lấy sản phẩm theo loại'
 *      parameters:
 *        - in: query
 *          name: TypeId
 *          description: id loại sản phẩm
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: 'Lấy thành công'
 *        400:
 *          description: 'Lấy thất bại'
 */

router.get('/getProductsByType', async (req, res) => {
    try {
        const { TypeId } = req.query;
        const listProductByType = await productModel.find({ Type: TypeId });
        res.status(200).json({ status: true, message: 'Lấy thành công', data: listProductByType });
    } catch (e) {
        res.status(400).json({ status: false, message: 'Lấy thất bại' });
    }
});

// router tìm sản phẩm có giá cao nhất theo loại
/**
 * @swagger
 * /product/getProductMostPrice:
 *   get:
 *      summary: 'Lấy sản phẩm theo loại'
 *      parameters:
 *        - in: query
 *          name: TypeId
 *          description: id loại sản phẩm
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: 'Lấy thành công'
 *        400:
 *          description: 'Lấy thất bại'
 */
router.get('/getProductMostPrice', async (req, res) => {
    try {
        const { TypeId } = req.query;
        const ProductMostPrice = await productModel.find({ Type: TypeId }).sort({ BasePrice: -1 }).limit(1);
        res.status(200).json({ status: true, message: 'Lấy thành công', data: ProductMostPrice });
    } catch (e) {
        res.status(400).json({ status: false, message: 'Lấy thất bại' });
    }
});

module.exports = router;