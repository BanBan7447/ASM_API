const express = require('express');
const router = express.Router();
const productModel = require('../model/product');

var JWT = require('jsonwebtoken');
const configENV = require('../configENV');
const { model } = require('mongoose');

// router thêm sản phẩm
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